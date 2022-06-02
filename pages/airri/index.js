import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import { longdo, map, LongdoMap } from '../../src/LongdoMap';
import TimePassed from '../../src/TimePassed';

import airriLogo from '../../public/images/Airri_Logo.svg';

import questionIcon from '../../public/images/question.svg';
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


const dataToAQI = data => {
    const mapValue = (value, min1, max1, min2, max2) => min2 + ((value - min1) / (max1 - min1) * (max2 - min2));

    if (typeof data.pm025 !== "undefined") {
        const dataValue = +data.pm025;
        if (dataValue <= 25) {
            return {
                aqi: dataValue.toFixed(0),
                level: 1
            }
        }
        if (dataValue <= 37) {
            return {
                aqi: mapValue(dataValue, 26, 37, 26, 50).toFixed(0),
                level: 2
            }
        }
        if (dataValue <= 50) {
            return {
                aqi: mapValue(dataValue, 38, 50, 51, 100).toFixed(0),
                level: 3
            }
        }
        if (dataValue <= 90) {
            return {
                aqi: mapValue(dataValue, 51, 90, 101, 200).toFixed(0),
                level: 4
            }
        }
        return {
            aqi: mapValue(dataValue, 51, 90, 101, 200).toFixed(0),
            level: 5
        }
    }

    if (typeof data.pm100 !== "undefined") {
        const dataValue = +data.pm100;
        if (dataValue <= 50) {
            return {
                aqi: mapValue(dataValue, 0, 50, 0, 25).toFixed(0),
                level: 1
            }
        }
        if (dataValue <= 80) {
            return {
                aqi: mapValue(dataValue, 51, 80, 26, 37).toFixed(0),
                level: 2
            }
        }
        if (dataValue <= 50) {
            return {
                aqi: mapValue(dataValue, 81, 120, 51, 100).toFixed(0),
                level: 3
            }
        }
        if (dataValue <= 90) {
            return {
                aqi: mapValue(dataValue, 121, 180, 101, 200).toFixed(0),
                level: 4
            }
        }
        return {
            aqi: mapValue(dataValue, 121, 180, 101, 200).toFixed(0),
            level: 5
        }
    }

    // console.log("data", data);

    if (typeof data.temp !== "undefined") {
        return {
            aqi: (+data.temp).toFixed(0) + " °C",
            level: 2,
            isTemp: true
        }
    }

    return {
        aqi: "?",
        level: 0
    }
};

const aqiLevelTo = [
    {
        label: "ไม่มีข้อมูล",
        icon: questionIcon,
        color: "213, 216, 220"
    },
    {
        label: "อากาศดีมาก",
        icon: smilingIcon,
        color: "52, 152, 219"
    },
    {
        label: "อากาศดี",
        icon: smileIcon,
        color: "46, 204, 113"
    },
    {
        label: "ปานกลาง",
        icon: neutralIcon,
        color: "241, 196, 15"
    },
    {
        label: "เริ่มมีผลต่อสุขภาพ",
        icon: sadIcon,
        color: "243, 156, 18"
    },
    {
        label: "มีผลต่อสุขภาพ",
        icon: cryingIcon,
        color: "231, 76, 60"
    },
];

const MakerPopup = ({ DeviceInfo }) => {
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

    const aqiInfo = dataToAQI(dataLast || { });
    const color = `rgb(${aqiLevelTo[aqiInfo?.level || 0]?.color})`;

    return (
        <div className={styles.MakerPopupContainer}>
            <div className={styles.MakerPopupOverviewBox} style={{ borderColor: color }}>
                <div>
                    <Image src={aqiLevelTo[aqiInfo?.level || 0]?.icon || ""} alt="Feel Icon" />
                </div>
                <div>
                    <h1 style={{ backgroundColor: color }}>{aqiLevelTo[aqiInfo?.level || 0]?.label || "ไม่มีข้อมูล"}</h1>
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

export default function AirriPage({ host, url }) {
    const [ devices, setDevices ] = React.useState([ ]);
    const [ dataReportCount, setDataReportCount ] = React.useState("LOADING");
    const [ longdoMap, setLongdoMap ] = React.useState(null);

    React.useEffect(async () => {
        let callAPI = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/devices`, {
            method: "GET"
        });

        if (callAPI.status === 200) {
            const data = await callAPI.json();
            setDevices(data?.devices || []);
            setDataReportCount(data?.dataReportCount || "?");
        } else {
            console.error("Get data error code", callAPI.status);
        }
    }, [ ]);

    React.useEffect(() => {
        const map = longdoMap;
        if (!map) {
            return;
        }

        map.Overlays.clear();

        for (const deviceInfo of devices) {
            const location = ((deviceInfo?.location || "").split(",") || []).map(a => a.trim());
            const aqiInfo = dataToAQI(deviceInfo?.last_data || { });
            const color = aqiLevelTo[aqiInfo.level]?.color;
            
            const canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${color}, 0.3)`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${color}, 1)`;
            ctx.fill();
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = "#FFFFFF";
            ctx.font = (aqiInfo.isTemp ? "24px" : "34px") + " sans-serif";
            ctx.fillText(aqiInfo.aqi, (canvas.width / 2), (canvas.height / 2));

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
                    title: deviceInfo?.device_name || "?",
                    weight: longdo.OverlayWeight.Top,
                    popup: {
                        title: deviceInfo?.device_name || "?",
                        detail: "",
                        loadDetail: element => {
                            ReactDOM.render(<MakerPopup DeviceInfo={deviceInfo} />, element);
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
    }, [ longdoMap, devices ]);

    const initMap = () => {
        map.Ui.Crosshair.visible(false);

        setLongdoMap(map);
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
                                <li><a href="https://airri.microblock.app/" target="_blank">ระบบจัดการอุปกรณ์แอร์ริ</a></li>
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

export async function getServerSideProps({ req }) {
    return { 
        props: { 
            host: req.headers.host, 
            url: req.url
        }
    }
}