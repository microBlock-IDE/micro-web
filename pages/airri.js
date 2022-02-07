import React from 'react';
import ReactDOM from 'react-dom';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'


import { longdo, map, LongdoMap } from '../src/LongdoMap';

import airriLogo from '../public/images/Airri_Logo.svg';

import styles from '../sass/airri.module.scss';

export default function AirriPage({ host, url, devices, dataReportCount }) {
    const initMap = () => {
        for (const device in devices) {
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
            ctx.fillText(125, (canvas.width / 2), (canvas.height / 2));

            const localMarker = new longdo.Marker(
                { lon: 99.35, lat: 14.25 },
                {
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
                    title: device?.name || "?",
                    weight: longdo.OverlayWeight.Top,
                    popup: {
                        title: device?.name || "?",
                        detail: "",
                        loadDetail: element => {
                            element.style.display = "flex";
                            element.style["flex-direction"] = "column";
                            // ReactDOM.render(<MakerPopup did={device.id} />, element);
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

export async function getServerSideProps({ req, query }) {
    return { 
        props: { 
            devices: [ 1 ], 
            dataReportCount: 10, 
            host: req.headers.host, 
            url: req.url 
        }
    }
}
  
  
