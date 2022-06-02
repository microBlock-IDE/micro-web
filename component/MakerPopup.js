import React from 'react';
import Image from 'next/image'

import TimePassed from '../src/TimePassed';
import DataToAQI from '../src/DataToAQI';

import styles from '../sass/airri.module.scss';

import thermometerIcon from '../public/images/thermometer.svg';
import humidityIcon from '../public/images/humidity.svg';
import pressureIcon from '../public/images/pressure.svg';
import dust2_5Icon from '../public/images/dust2.5.svg';
import dust1_0Icon from '../public/images/dust1.0.svg';
import dust10Icon from '../public/images/dust10.svg';
import windSpeedIcon from '../public/images/anemometer.svg';
import windDirectionIcon from '../public/images/wind-rose.svg';
import lightIcon from '../public/images/sun.svg';
import uvIcon from '../public/images/uv.svg';
import rainIcon from '../public/images/raining.svg';
import co2Icon from '../public/images/co2.svg';

export default function MakerPopup({ DeviceInfo }) {
    const [ data, setData ] = React.useState(null);

    React.useEffect(async () => {
        if (data) {
            return;
        }

        const { mac_address } = DeviceInfo;

        let callAPI = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/devices/${mac_address}/data`, {
            method: "GET"
        });

        if (callAPI.status === 200) {
            const sensorData = await callAPI.json();
            setData(sensorData);
        } else {
            console.error("Get data error code", callAPI.status);
        }
    }, [ data ]);

    const dataLast = data?.at(-1) || { };

    const propertyInfo = {
        temp: {
            label: "อุณหภูมิ",
            unit: "°C",
            icon: thermometerIcon
        },
        humi: {
            label: "ความชื้น",
            unit: "%RH",
            icon: humidityIcon
        },
        pressure: {
            label: "ความกดอากาศ",
            unit: "Pa",
            icon: pressureIcon
        },
        light: {
            label: "แสงสว่าง",
            unit: "lx",
            icon: lightIcon
        },
        uv: {
            label: "UV index",
            unit: "",
            icon: uvIcon
        },
        pm010: {
            label: "ฝุ่น PM1.0",
            unit: <span>µg/m<sup>3</sup></span>,
            icon: dust1_0Icon
        },
        pm025: {
            label: "ฝุ่น PM2.5",
            unit: <span>µg/m<sup>3</sup></span>,
            icon: dust2_5Icon
        },
        pm100: {
            label: "ฝุ่น PM10",
            unit: <span>µg/m<sup>3</sup></span>,
            icon: dust10Icon
        },
        wind_speed: {
            label: "ความเร็มลม",
            unit: "m/s",
            icon: windSpeedIcon
        },
        wind_dir: {
            label: "ทิศทางลม",
            unit: "°",
            icon: windDirectionIcon
        },
        rain: {
            label: "ปริมาณน้ำฝน",
            unit: "mm",
            icon: rainIcon
        },
        co2: {
            label: "CO2",
            unit: "ppm",
            icon: co2Icon
        },
    }

    const aqiInfo = DataToAQI(dataLast || { });
    const color = `rgb(${aqiInfo?.color})`;

    return (
        <div className={styles.MakerPopupContainer}>
            <div className={styles.MakerPopupOverviewBox} style={{ borderColor: color }}>
                <div>
                    <Image src={aqiInfo?.icon || ""} alt="Feel Icon" />
                </div>
                <div>
                    <h1 style={{ backgroundColor: color }}>{aqiInfo?.label || "ไม่มีข้อมูล"}</h1>
                    <div>ดัชนีคุณภาพอากาศ (AQI): {aqiInfo.aqi}</div>
                </div>
            </div>
            <div className={styles.MakerPopupValueBoxList}>
                {Object.entries(propertyInfo).map(([ field, info ]) => dataLast.hasOwnProperty(field) && <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={info.icon} alt="" />
                    </div>
                    <div>
                        <h2>{info.label}</h2>
                        <div>{dataLast[field]} {info.unit}</div>
                    </div>
                </div>)}
            </div>
            <div className={styles.MakerPopupEndCredit}>
                รายงานโดย <span>{DeviceInfo?.user_name || "ไม่รู้จัก"}</span> ∘ 
                ข้อมูลเมื่อ {TimePassed(new Date(DeviceInfo?.last_push))}ที่แล้ว
            </div>
        </div>
    )
};