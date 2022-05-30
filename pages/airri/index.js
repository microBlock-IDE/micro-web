import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import { longdo, map, LongdoMap } from '../../src/LongdoMap';
import TimePassed from '../../src/TimePassed';

import airriLogo from '../../public/images/Airri_Logo.svg';

import smileIcon from '../../public/images/smile.svg';
import smilingIcon from '../../public/images/smiling.svg';
import neutralIcon from '../../public/images/neutral.svg';
import sadIcon from '../../public/images/sad.svg';
import cryingIcon from '../../public/images/crying.svg';
import thermometerIcon from '../../public/images/thermometer.svg';
import humidityIcon from '../../public/images/humidity.svg';
import pressureIcon from '../../public/images/pressure.svg';
import dust2_5Icon from '../../public/images/dust2.5.svg';
import dust1_0Icon from '../../public/images/dust1.0.svg';
import dust10Icon from '../../public/images/dust10.svg';
import windSpeedIcon from '../../public/images/anemometer.svg';
import windDirectionIcon from '../../public/images/wind-rose.svg';
import lightIcon from '../../public/images/sun.svg';
import uvIcon from '../../public/images/uv.svg';
import rainIcon from '../../public/images/raining.svg';
import co2Icon from '../../public/images/co2.svg';

import styles from '../../sass/airri.module.scss';

const MakerPopup = ({ DeviceInfo }) => {
    const [ data, setData ] = React.useState(null);

    React.useEffect(async () => {
        if (data) {
            return;
        }

        const { mac_address } = DeviceInfo;

        let callAPI = await fetch(`/api/airri/${mac_address}`, {
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
            unit: "ug/m^2",
            icon: dust1_0Icon
        },
        pm025: {
            label: "ฝุ่น PM2.5",
            unit: "ug/m^2",
            icon: dust2_5Icon
        },
        pm100: {
            label: "ฝุ่น PM10",
            unit: "ug/m^2",
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
            unit: "ug",
            icon: co2Icon
        },
    }

    return (
        <div className={styles.MakerPopupContainer}>
            <div className={styles.MakerPopupOverviewBox}>
                <div>
                    <Image src={smileIcon} alt="Feel Icon" />
                </div>
                <div>
                    <h1>อากาศดี</h1>
                    <div>ดัชนีคุณภาพอากาศ (AQI): {DeviceInfo.aqi}</div>
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
                ข้อมูลเมื่อ {TimePassed(new Date(DeviceInfo?.last_push))} นาทีที่แล้ว
            </div>
        </div>
    )
};

export default function AirriPage({ host, url, devices, dataReportCount, influx }) {
    const initMap = () => {
        map.Ui.Crosshair.visible(false);

        for (const device of devices) {
            const location = device.location.split(",").map(a => a.trim());

            const canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(46, 204, 113, 0.3)";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = "#2ECC71";
            ctx.fill();
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "34px sans-serif";
            ctx.fillText(device?.aqi || "?", (canvas.width / 2), (canvas.height / 2));

            const localMarker = new longdo.Marker(
                { 
                    lat: location?.[0], 
                    lon: location?.[1] 
                }, {
                    icon: {
                        url: canvas.toDataURL(),
                        offset: { 
                            x: 25, 
                            y: 25 
                        },
                        size: {
                            width: 50,
                            height: 50,
                        }
                    },
                    title: device?.device_name || "?",
                    weight: longdo.OverlayWeight.Top,
                    popup: {
                        title: device?.device_name || "?",
                        detail: "",
                        loadDetail: element => {
                            element.style.display = "flex";
                            element.style["flex-direction"] = "column";
                            ReactDOM.render(<MakerPopup DeviceInfo={device} influx={influx} />, element);
                        },
                        size: { 
                            width: 320
                        },
                        autoFocus: true,
                    }
                }
            );
            map.Overlays.add(localMarker);
        }
    };
    
    return (
        <>
            <Head>
                <title>ข้อมูลคุณภาพอากาศและสภาพอากาศประเทศไทย - Airri (แอร์ริ)</title>
                <link rel="icon" href="/favicon-airri.ico" />

                <meta name="description" content="แผนที่แสดงคุณภาพอากาศ (AQI) และสภาพอากาศ ที่รายงานโดยผู้ใช้ microBlock ผ่านระบบแอร์ริ" />
                <meta name="robots" content="index, follow" />

                <meta property="og:url" content={`https://${host}${url}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="ข้อมูลคุณภาพอากาศและสภาพอากาศประเทศไทย - Airri (แอร์ริ)" />
                <meta property="og:description" content="แผนที่แสดงคุณภาพอากาศ (AQI) และสภาพอากาศ ที่รายงานโดยผู้ใช้ microBlock ผ่านระบบแอร์ริ" />
                <meta property="og:image" content={`https://${host}/images/airri-share-image.png`} />
            </Head>

            <main>
                <header className={styles.header}>
                    <div className={[ styles.Container, styles.HeaderContainer ].join(" ")}>
                        <div className={styles.TopLogo}>
                            <Image
                                src={airriLogo}
                                alt="Airir Logo"
                            />
                        </div>
                        <div className={styles.HeaderText}>
                            <h1>ข้อมูลคุณภาพอากาศและสภาพอากาศประเทศไทย</h1>
                            <ul>
                                <li>อุปกรณ์ในระบบ {devices?.length || 0} ชิ้น</li>
                                <li>ข้อมูลรายงานแล้ว {dataReportCount || 0} ครั้ง</li>
                                <li>อัพเดทอัตโนมัติ</li>
                            </ul>
                        </div>
                    </div>
                </header>

                <section className={styles.section}>
                    <div className={[ styles.Container, styles.MapContainer ].join(" ")}>
                        <LongdoMap id="longdo-map" mapKey={"26f2a71e2c2a4575c815236830f7f25a"} callback={initMap} />
                    </div>
                </section>

                <footer className={styles.footer}>
                    <div className={[ styles.Container, styles.FooterContainer ].join(" ")}>
                        <div className={styles.FooterLogo}>
                            <Image
                                src={airriLogo}
                                alt="Airir Logo"
                            />
                        </div>
                        <div>
                            <h2>เกี่ยวกับแอร์ริ</h2>
                            <p>แอร์ริ เป็นระบบฐานข้อมูลที่ใช้เก็บข้อมูลคุณภาพอากาศและสภาพอากาศที่เปิดให้ผู้ใช้งานทั่วไปรายงานสภาพอากาศเข้ามาได้ และเปิดเผยข้อมูลสภาพอากาศรายวันให้นักวิจัย ผู้สนใจทั่วไป สามารถเข้าดูข้อมูล หรือดาวน์โหลดข้อมูลไปวิเคราะห์ต่อได้</p>
                        </div>
                        <div>
                            <h2>ลิ้งข้อมูลแอร์ริ</h2>
                            <ul>
                                <li><a href="" target="_blank">การส่งข้อมูลคุณภาพอากาศขึ้นระบบแอร์ริด้วยบอร์ด KidBright</a></li>
                                <li><a href="https://github.com/microBlock-IDE/Airri-daily-data" target="_blank">ฐานข้อมูลคุณภาพอากาศแบบเปิดข้อมูลจากแอร์ริ อัพเดทรายวัน</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2>ผู้สนับสนุน</h2>
                            
                        </div>
                    </div>
                </footer>
                <div className={styles.FinalFooter}>
                    <div className={styles.Container}>
                        <a href="https://github.com/microBlock-IDE/Airri-daily-data#ลิขสิทธิ์ข้อมูล" target="_blank">ลิขสิทธิ์ข้อมูลและการรับผิดชอบ</a> | <a href='https://www.freepik.com/vectors/city' target="_blank">City vector created by tartila - www.freepik.com</a>
                    </div>
                </div>
            </main>
        </>
    )
}

import dbClient from '../../src/DatabaseConnect';

export async function getServerSideProps({ req, query }) {
    const devices = await dbClient.query('SELECT users.name AS user_name, devices.name AS device_name, mac_address, location, aqi, last_push FROM public.devices LEFT JOIN public.users ON devices.owner = users.email WHERE devices.last_push >= NOW() - INTERVAL \'1 HOURS\'');
    const systemInfo = await dbClient.query('SELECT counter FROM public.system WHERE id = 1');
    
    return { 
        props: { 
            devices: (devices?.rows || []).map(a => Object.assign(a, { last_push: new Date(a.last_push).getTime() })), 
            dataReportCount: systemInfo?.rows?.[0]?.counter || 0, 
            host: req.headers.host, 
            url: req.url
        }
    }
}
  
  
