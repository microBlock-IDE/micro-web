import Head from 'next/head'
import { Row, Col, Button, Badge, Alert } from 'react-bootstrap';
import Layout from '../component/Layout.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, fab, far);

export default function Download({ host, url }) {
  return (
    <>
      <Head>
        <title>ดาวน์โหลด microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="ดาวน์โหลดโปรแกรม microBlock IDE เขียนโปรแกรม KidBright ด้วยบล็อกและไพทอน" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ดาวน์โหลด microBlock IDE" />
        <meta property="og:description" content="ดาวน์โหลดโปรแกรม microBlock IDE เขียนโปรแกรม KidBright ด้วยบล็อกและไพทอน" />
        <meta property="og:image" content={`https://${host}/images/facebook-share-image.png`} />
      </Head>

      <style jsx>{`
      .box-link-download {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
        z-index: 10;
        border-radius: 8px;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      @media screen and (min-width: 992px) {
        .box-link-download {
          margin-left: -100px;
          padding-left: 100px;
        }
      }
      `}</style>

      <Layout>
        <section className="bg-light text-center p-5 mb-5" style={{ padding: "3rem" }}>
          <h1 className="h1 mb-3">ดาวน์โหลด</h1>
          <p className="lead mb-3">ดาวน์โหลดโปรแกรม/เครื่องมือต่าง ๆ ที่จัดทำโดย microBlock IDE</p>
        </section>
        <section className="container mb-5">
          <div className="row" style={{
            alignItems: "center"
          }}>
            <div className="col-lg mb-5" style={{
              zIndex: 15
            }}>
              <img src="/images/microBlock-screen.png" alt="microBlock IDE" style={{
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 10px",
              }} />
            </div>
            <div className="col-lg bg-light box-link-download mb-5">
              <h3>microBlock IDE V2.4.0 <Badge variant="success">ล่าสุด</Badge></h3>
              <p>เผยแพร่เมื่อ 6 ธันวาคม 2564 โดย microBlock</p>
              <ul style={{
                marginBottom: 0
              }}>
                <li><a href="https://bit.ly/31vZV0S">ดาวน์โหลดไฟล์ติดตั้งสำหรับ Windows 32 บิต</a></li>
                <li><a href="https://bit.ly/3xXfL0c">ดาวน์โหลดโปรแกรมสำหรับ Windows 32 บิต (ไม่ต้องติดตั้ง)</a></li>
                <li><a href="https://bit.ly/31zoYj6">ดาวน์โหลดไฟล์ติดตั้งโปรแกรมสำหรับ Windows 64 บิต</a></li>
                <li><a href="https://bit.ly/3lD9OAR">ดาวน์โหลดโปรแกรมสำหรับ Windows 64 บิต (ไม่ต้องติดตั้ง)</a></li>
                <li><a href="https://bit.ly/3Etelx3">ดาวน์โหลดโปรแกรมสำหรับ macOS</a></li>
                <li><a href="https://bit.ly/3dpPMVW">ดาวน์โหลดโปรแกรมสำหรับ Ubuntu 64 บิต (ไม่ต้องติดตั้ง)</a></li>
              </ul>
            </div>
          </div>
          <div style={{
            backgroundColor: "#2ECC71",
            color: "#FFF",
            borderRadius: 8,
            padding: 16,
            borderLeft: "#28B463 6px solid"
          }}>
            <Row>
              <Col xs="auto">
                <FontAwesomeIcon icon={[ 'fas', 'search' ]} fixedWidth style={{ width: 60 }} />
              </Col>
              <Col>
                <div className="h4">กำลังตามหา microBlock IDE เวอร์ชั่นเก่า ?</div>
                <div>ดาวน์โหลดโปรแกรม microBlock IDE เวอร์ชั่นเก่าได้ที่ <a href="https://github.com/microBlock-IDE/microBlock-IDE-offline/releases" target="_blank">Release microBlock IDE offline</a></div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="container">
          <Row>
            <Col lg={true} className="mb-5">
              <div className="mb-3">
                <img src="/images/MicroUploader-V2.0.0.jpg" alt="MicroUploader" style={{ maxHeight: 300 }} />
              </div>
              <h4>MicroUploader V2.1.0</h4>
              <p>โปรแกรมอัพโหลดเฟิร์มแวร์ MicroPython สำหรับ ESP32</p>
              <ul>
                <li><a href="https://github.com/microBlock-IDE/MicroUploader/releases/download/V2.1.0/MicroUploader.V2.1.0.windows.x64.zip">ดาวน์โหลดโปรแกรมสำหรับ Windows 64 บิต</a></li>
                <li><a href="https://github.com/microBlock-IDE/MicroUploader/releases/download/V2.1.0/MicroUploader.V2.1.0.macOS.zip">ดาวน์โหลดโปรแกรมสำหรับ macOS</a></li>
                <li><a href="https://github.com/microBlock-IDE/MicroUploader/releases/download/V2.1.0/MicroUploader.V2.1.0.ubuntu.x64.zip">ดาวน์โหลดโปรแกรมสำหรับ Ubuntu 64 บิต</a></li>
              </ul>
              <p>ดูเวอร์ชั่นเก่าทั้งหมดได้ที่ <a href="https://github.com/microBlock-IDE/MicroUploader/releases" target="_blank">Releases · microBlock-IDE/MicroUploader</a></p>
            </Col>
            <Col lg={true} className="mb-5">
              <div className="mb-3">
                <img src="/images/Micropython-logo.svg.png" alt="MicroPython for KidBright" style={{ maxHeight: 300 }} />
              </div>
              <h4>MicroPython for KidBright32 V1.6.0</h4>
              <p>เฟิร์มแวร์ MicroPython สำหรับบอร์ด KidBright รองรับบอร์ด KidBright32 และ OpenKB ทุกเวอร์ชั่น</p>
              <ul>
                <li><a href="https://bit.ly/3aaZ59W">MicroPython.for.KidBright32.V1.6.0.bin</a></li>
              </ul>
              <p>ดูเวอร์ชั่นเก่าทั้งหมดได้ที่ <a href="https://github.com/microBlock-IDE/micropython/releases" target="_blank">Releases · microBlock-IDE/micropython</a></p>
            </Col>
          </Row>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  return { props: { host: req.headers.host, url: req.url } }
}

