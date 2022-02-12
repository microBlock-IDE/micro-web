import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import { longdo, map, LongdoMap } from '../src/LongdoMap';

import airriLogo from '../public/images/Airri_Logo.svg';

import smilingIcon from '../public/images/smiling.svg';
import smileIcon from '../public/images/smile.svg';
import neutralIcon from '../public/images/neutral.svg';
import sadIcon from '../public/images/sad.svg';
import cryingIcon from '../public/images/crying.svg';
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

import styles from '../sass/airri.module.scss';

const MakerPopup = ({ DeviceInfo }) => {
    return (
        <div className={styles.MakerPopupContainer}>
            <div className={styles.MakerPopupOverviewBox}>
                <div>
                    <Image src={smilingIcon} alt="Feel Icon" />
                </div>
                <div>
                    <h1 title="ไม่มีผลกระทบต่อสุขภาพ">อากาศดี</h1>
                    <div>ดัชนีคุณภาพอากาศ (AQI): {DeviceInfo.aqi}</div>
                </div>
            </div>
            <div className={styles.MakerPopupValueBoxList}>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={thermometerIcon} alt="thermometer icon" />
                    </div>
                    <div>
                        <h2>อุณหภูมิ</h2>
                        <div>123 °C</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={humidityIcon} alt="humidity icon" />
                    </div>
                    <div>
                        <h2>ความชื้น</h2>
                        <div>123 %RH</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={pressureIcon} alt="pressure icon" />
                    </div>
                    <div>
                        <h2 style={{ fontSize: 10 }}>ความกดอากาศ</h2>
                        <div>123 Pa</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={dust2_5Icon} alt="PM2.5 icon" />
                    </div>
                    <div>
                        <h2>ฝุ่น PM2.5</h2>
                        <div>123 ug</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={dust1_0Icon} alt="PM1.0 icon" />
                    </div>
                    <div>
                        <h2>ฝุ่น PM1.0</h2>
                        <div>123 ug</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={dust10Icon} alt="PM10 icon" />
                    </div>
                    <div>
                        <h2>ฝุ่น PM10</h2>
                        <div>123 ug</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={windSpeedIcon} alt="Wind Speed icon" />
                    </div>
                    <div>
                        <h2 style={{ fontSize: 12 }}>ความเร็มลม</h2>
                        <div>123 m/s</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={windDirectionIcon} alt="Wind Direction icon" />
                    </div>
                    <div>
                        <h2>ทิศทางลม</h2>
                        <div>123 °</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={lightIcon} alt="sun icon" />
                    </div>
                    <div>
                        <h2>แสงสว่าง</h2>
                        <div>10 lx</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={uvIcon} alt="UV index icon" />
                    </div>
                    <div>
                        <h2>UV index</h2>
                        <div>123</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={rainIcon} alt="sun icon" />
                    </div>
                    <div>
                        <h2 style={{ fontSize: 12 }}>ปริมาณน้ำฝน</h2>
                        <div>5 mm</div>
                    </div>
                </div>
                <div className={styles.MakerPopupValueBox}>
                    <div>
                        <Image src={co2Icon} alt="UV index icon" />
                    </div>
                    <div>
                        <h2>CO2</h2>
                        <div>500 ppm</div>
                    </div>
                </div>
            </div>
            <div className={styles.MakerPopupEndCredit}>
                รายงานโดย <span>{DeviceInfo?.user_name || "ไม่รู้จัก"}</span> ∘ 
                ข้อมูลเมื่อ 5 นาทีที่แล้ว
            </div>
        </div>
    )
};

export default function AirriPage({ host, url, devices, dataReportCount }) {
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
                            ReactDOM.render(<MakerPopup DeviceInfo={device} />, element);
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

const { Client } = require('pg');

export async function getServerSideProps({ req, query }) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
    });
    client.connect();

    const devices = await client.query('SELECT users.name AS user_name, devices.name AS device_name, mac_address, location, aqi FROM public.devices INNER JOIN public.users ON devices.owner = users.id WHERE devices.last_push >= NOW() - INTERVAL \'1 HOURS\'');
    const systemInfo = await client.query('SELECT counter FROM system WHERE id = 1;');

    client.end();

    return { 
        props: { 
            devices: devices.rows, 
            dataReportCount: systemInfo?.rows?.[0].counter || "?", 
            host: req.headers.host, 
            url: req.url 
        }
    }
}
  
  
