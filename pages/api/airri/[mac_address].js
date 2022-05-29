import nextConnect from 'next-connect';

import dbClient from '../../../component/DatabaseConnect';
const { InfluxDB, Point } = require('@influxdata/influxdb-client');

const handler = nextConnect();

handler.get(async (req, res) => {
    const { mac_address, start, stop } = req.query;

    const client = new InfluxDB({
        url: process.env.INFLUX_URL, 
        token: process.env.INFLUX_TOKEN, 
    });

    const query = `
from(bucket: "${process.env.INFLUX_BUCKET}")
    ${start ? `|> range(start: ${start}, stop: ${stop})` : "|> range(start: -1h)"}
    |> filter(fn: (r) => r["_measurement"] == "${process.env.INFLUX_MEASUREMENT}")
    |> filter(fn: (r) => r["mac_address"] == "${mac_address}")
    |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
    ${start ? "|> yield(name: \"mean\")" : ""}
    ${!start ? "|> last()" : ""}
`;

console.log(query);

    const queryApi = client.getQueryApi(process.env.INFLUX_ORG);

    const dataRows = await new Promise((resolve, reject) => {
        const dataRows = [];
        queryApi.queryRows(query, {
            next(row, tableMeta) {
                const o = tableMeta.toObject(row)
                // console.log(`${o._time} ${o._measurement}: ${o._field}=${o._value}`)
                const rowIndex = dataRows.findIndex(a => a.timestamp === +new Date(o._time));
                if (rowIndex >= 0) {
                    dataRows[rowIndex][o._field] = o._value;
                } else {
                    dataRows.push({
                        timestamp: +new Date(o._time),
                        [o._field]: o._value
                    });
                }
            },
            error(error) {
                console.error(error)
                // console.log('Finished ERROR');
                reject(error);
            },
            complete() {
                // console.log('Finished SUCCESS');
                
                resolve(dataRows);
            },
        });
    });

    // console.log(lastOnly, dataRows);
    res.status(200).json(dataRows);
});

handler.post(async (req, res) => {
    const { mac_address } = req.query;
    const dataJSON = req.body;
    const name = dataJSON?.name || null;
    const location = dataJSON?.location || null;
    const owner = dataJSON?.email || null;

    let devices = await dbClient.query(
        "SELECT name, location, last_push, owner FROM public.devices WHERE mac_address = $1 LIMIT 1;", 
        [ mac_address ]
    );

    if (devices.rows.length === 0) {
        dbClient.query(
            "INSERT INTO public.devices (name, mac_address, location, last_push, owner) VALUES ($1, $2, $3, NOW(), $4) RETURNING id;",
            [
                name,
                mac_address,
                location,
                owner
            ]
        );
    } else {
        const deviceInfo = devices?.rows?.[0] || { };
        if (deviceInfo?.owner !== owner) {
            return res.status(401).json(`email ${owner} is not owner of ${mac_address}`);
        }

        const fieldUpdate = [];
        if (name && fieldUpdate?.name !== name) {
            fieldUpdate.push({
                field: "name",
                value: name
            })
        }
        if (location && fieldUpdate?.location !== location) {
            fieldUpdate.push({
                field: "location",
                value: location
            })
        }
        dbClient.query(
            `UPDATE public.devices SET ${fieldUpdate.map((item, index) => item.field + " = $" + (index + 1)).join(", ")}, last_push = NOW() WHERE mac_address = $${fieldUpdate.length + 1};`,
            fieldUpdate.map(item => item.value).concat([ mac_address ])
        );
    }

    // Add data to InfluxDB
    const writeApi = new InfluxDB({ 
        url: process.env.INFLUX_URL, 
        token: process.env.INFLUX_TOKEN, 
    }).getWriteApi(process.env.INFLUX_ORG, process.env.INFLUX_BUCKET, 'ns');

    let dataPoint = new Point(process.env.INFLUX_MEASUREMENT).tag("mac_address", mac_address);
    for (const [ field, data ] of Object.entries(dataJSON?.data || { })) {
        dataPoint = dataPoint.floatField(field, +data);
    }
    writeApi.writePoint(dataPoint);

    writeApi.close().then(() => {
        dbClient.query(
            `UPDATE public.system SET counter = counter + 1 WHERE id = 1;`
        );

        return res.status(200).json("OK");
    }).catch(e => {
        console.error("Write to influx FALL:", e);
        return res.status(500).json("Write to influx FALL:" + e.toString());
    });
});

export default handler;
