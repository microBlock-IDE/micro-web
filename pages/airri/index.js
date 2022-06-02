import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head';
import Image from 'next/image'

import { longdo, map, LongdoMap } from '../../src/LongdoMap';
import DataToAQI from '../../src/DataToAQI';
import MakerPopup from '../../component/MakerPopup';

import airriLogo from '../../public/images/Airri_Logo.svg';

import styles from '../../sass/airri.module.scss';

export default function AirriPage({ host, url }) {
    const [ devices, setDevices ] = React.useState([ ]);
    const [ dataReportCount, setDataReportCount ] = React.useState("LOADING");
    const [ longdoMap, setLongdoMap ] = React.useState(null);

    const loadData = async () => {
        let callAPI = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/devices`, {
            method: "GET"
        });

        if (callAPI.status === 200) {
            const data = await callAPI.json();
            setDevices(data?.devices || []);
            setDataReportCount(data?.dataReportCount || "?");
        } else {
            alert("Get data error code " + callAPI.status + ": " + (await callAPI.text()));
            console.error("Get data error code", callAPI.status);
        }
    }

    React.useEffect(async () => {
        await loadData();
    }, [ ]);

    React.useEffect(() => {
        const map = longdoMap;
        if (!map) {
            return;
        }

        map.Overlays.clear();

        for (const deviceInfo of devices) {
            const location = ((deviceInfo?.location || "").split(",") || []).map(a => a.trim());
            const aqiInfo = DataToAQI(deviceInfo?.last_data || { });

            const canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${aqiInfo?.color}, 0.3)`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${aqiInfo?.color}, 1)`;
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
                            ReactDOM.render(<MakerPopup key={deviceInfo?.mac_address} DeviceInfo={deviceInfo} />, element);
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
                                <li>อัพเดทอัตโนมัติ <span className={style.autoUpdateSelect}></span></li>
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