import Head from 'next/head'
import { Row, Col, Button, Card } from 'react-bootstrap';
import Layout from '../component/Layout.js';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'

library.add(fas, fab, far);

let CardBox = (props) => (
  <>
    <style jsx>{`
    .card-future {
      transition: transform 300mS;
      transform: scale(1);
    }

    .card-future:hover {
      transform: scale(1.1);
      z-index: 10;
    }
    `}</style>

    <div style={{ 
      border: "none",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)",
      borderRadius: "10px"
    }} className="card-future card">
      <div style={{ 
        height: "200px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <FontAwesomeIcon icon={props.icon} fixedWidth style={{ width: "120px" }} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </div>
  </>
);

export default function Home({ host, url }) {
  return (
    <>
      <Head>
        <title>microBlock IDE เขียนโปรแกรมบอร์ด KidBright ด้วยบล็อกและไพทอน</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="ดาวน์โหลดโปรแกรม microBlock IDE อ่านบทความ KidBright การใช้งาน microBlock กับ KidBright" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="microBlock IDE เขียนโปรแกรมบอร์ด KidBright ด้วยบล็อกและไพทอน" />
        <meta property="og:description" content="ดาวน์โหลดโปรแกรม microBlock IDE อ่านบทความ KidBright การใช้งาน microBlock กับ KidBright" />
        <meta property="og:image" content={`https://${host}/images/facebook-share-image.png`} />
      </Head>

      <style jsx>{`
      .partner-box a {
        background-color: #FFF;
        display: block;
        box-shadow: 0 3px 6px rgb(0 0 0 / 19%);

        transform: scale(1);
        transition: transform 300mS;
      }

      .partner-box a:hover {
        transform: scale(1.2);
      }

      .partner-box img {
        width: 140px;
      }

      .ber-cut {
        width: 10%;
        height: 3px;
        margin: auto;
        background-color: #007bff;
      }

      .thanks-box img {
        max-height: 80px;
      }
      `}</style>

      <Layout>
        <section className="bg-light text-center">
          <div className="container">
            <Row style={{ alignItems: "center" }}>
              <Col lg={true} className="mt-5">
                <h1 className="h1 mb-3">microBlock IDE</h1>
                <p className="lead mb-3">เขียนโปรแกรมบอร์ด KidBright ด้วยบล็อกและไพทอน</p>
                <div className="mt-3">
                  <Link href="/download" passHref><Button variant="primary" className="mr-2" size="lg" href="#download">ดาวน์โหลด</Button></Link>
                  <Link href="https://ide.microblock.app/" passHref><Button variant="light" size="lg" href="https://ide.microblock.app/">ใช้งานออนไลน์</Button></Link>
                </div>
              </Col>
              <Col lg={7} className="mt-5">
                <img src="/images/banner.png" alt="microBlock IDE" />
              </Col>
            </Row>
          </div>
        </section>
        <div className="bg-light" style={{
          width: "100%",
          height: "140px"
        }}></div>
        <section>
          <div className="container pt-5 pb-5 text-center" style={{
            marginTop: "-140px"
          }}>
            <Row>
              <Col lg={true}>
                <Row>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="เขียนโปรแกรมโดยไม่ต้องพิมพ์" 
                      text="ลากวางบล็อกคล้ายการต่อจิกซอเพื่อเขียนโปรแกรมสั่งงานบอร์ด KidBright" 
                      icon={['fas', 'shapes']} />
                  </Col>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="เขียนโปรแกรมสั่งงานด้วยไพทอน" 
                      text="ทำน้อย ได้มาก ประยุกต์ได้มากกว่าด้วยภาษาไพทอน (MicroPython)" 
                      icon={['fab', 'python']} />
                  </Col>
                </Row>
              </Col>
              <Col lg={true}>
                <Row>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="ให้ความสำคัญกับอัลกอริทึม" 
                      text="เขียนโปรแกรมด้วยบล็อก เน้นการคิดอย่างเป็นระบบมากกว่ารูปแบบภาษา" 
                      icon={['fas', 'braille']} />
                  </Col>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="อัพโหลดโปรแกรมเพียง 2 วินาที" 
                      text="รู้ผลการทำงานของโปรแกรมได้อย่างรวดเร็ว ด้วยเวลาอัพโหลดเพียง 2 วินาที" 
                      icon={['fas', 'fighter-jet']} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={true}>
                <Row>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="ใช้ได้กับ KidBright ทุกเวอร์ชั่น" 
                      text="ไม่ว่าคุณจะมีบอร์ด KidBright32 เวอร์ชั่นใด เรารองรับทุกฟีเจอร์ของทุกบอร์ด" 
                      icon={['fas', 'microchip']} />
                  </Col>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="เพิ่มบล็อกด้วย Extension" 
                      text="ทำลายทุกข้อจำกัดของโปรแกรมด้วย Extension ดาวน์โหลดบล็อกเพิ่มได้ตลอดเวลา" 
                      icon={['fas', 'boxes']} />
                  </Col>
                </Row>
              </Col>
              <Col lg={true}>
                <Row>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="ใช้งานได้ฟรี" 
                      text={<>ใช้งานได้ฟรีไม่มีเงื่อนไข เพราะเราอยู่ได้ด้วยการ<Link href="/support">สมัครใจสนับสนุน</Link></>}
                      icon={['fas', 'hand-holding-usd']} />
                  </Col>
                  <Col sm={true} className="mb-4">
                    <CardBox 
                      title="โอเพนซอร์ซทุกส่วน" 
                      text="เราตระหนักดีถึงความสำคัญของโอเพนซอร์ซ เพราะเราเชื่อว่าโอเพนซอร์ซจะช่วยสร้างซอฟแวร์ที่ดีได้" 
                      icon={['fab', 'osi']} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
        <section>
          <div className="container pt-5 pb-5 text-center">
            <div>
              <h1 className="h1 mb-1">ฮาร์ดแวร์ที่รองรับ</h1>
              <p className="lead mb-5">เราปรับแต่งเฟิร์มแวร์ MicroPython มาเฉพาะเพื่อบอร์ดเหล่านี้ เพื่อให้การเขียนโปรแกรมด้วยบล็อกและไพทอนทำได้ง่ายที่สุด</p>
            </div>
            <div className="ber-cut"></div>
            <Row className="mt-5 mb-3">
              <Col lg={true}>
                <div className="mb-3">
                  <img src="/images/KidBright32-V1.3-1.4.png" alt="KidBright32 V1.3" />
                </div>
                <p className="h5">KidBright32 V1.3 &amp; V1.4</p>
                <p>บอร์ด KidBright32 เวอร์ชั่นถูกผลิตขึ้นมามากกว่า 2 แสนบอร์ด แจกให้กับสถานศึกษาทั่วประเทศ</p>
              </Col>
              <Col lg={true}>
                <div className="mb-3">
                  <img src="/images/KidBright32-V1.5-Rev.3.png" alt="KidBright32 V1.5 Rev.3" />
                </div>
                <p className="h5">KidBright32 V1.5 Rev.3</p>
                <p>บอร์ด KidBright32 รุ่นล่าสุดจากทีมพัฒนาบอร์ด KidBright32</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col lg={true}>
                <div className="mb-3">
                  <img src="/images/KidBright32i.png" alt="KidBright32i" />
                </div>  
                <p className="h5">KidBright32i</p>
                <p>บอร์ด KidBright32 รุ่นเพิ่มเซ็นเซอร์วัดความเร่งและเข็มทิศจาก INEX</p>
              </Col>
              <Col lg={true}>
                <div className="mb-3">
                  <img src="/images/KidBright32-V1.6.png" alt="KidBright32 V1.6 by Gravitech" />
                </div>
                <p className="h5">KidBright32 V1.6 by Gravitech</p>
                <p>บอร์ด KidBright32 รุ่นเพิ่มเซ็นเซอร์วัดความเร่งและแอลอีดี RGB จากกราวิเทคไทย</p>
              </Col>
            </Row>
          </div>
        </section>
        <section className="bg-primary text-white pt-5 mb-4">
          <div className="container pb-5 text-center partner-box">
            <div>
              <h1 className="h1 mb-1" id="partner">พาร์ทเนอร์</h1>
              <p className="lead mb-4">พาร์ทเนอร์ช่วยให้โครงการ microBlock ดำเนินการได้</p>
            </div>
            <div className="ber-cut"></div>
            <Row className="mt-4">
              <Col lg={true}>
                <Row>
                  <Col className="mb-5" xs={true}><Link href="/contactus#INEX" passHref><a><img src="/images/INEX_logo_200x200.png" alt="INEX logo" /></a></Link></Col>
                  <Col className="mb-5" xs={true}><Link href="/contactus#EasyKidsRobotics" passHref><a><img src="/images/EasyKidsRobotics_logo_200x200.png" alt="EasyKids logo" /></a></Link></Col>
                </Row>
              </Col>
              <Col lg={true}>
                <Row>
                  <Col className="mb-5" xs={true}><Link href="/contactus#Senses" passHref><a><img src="/images/Senses_logo_200x200.png" alt="Senses IoT logo" /></a></Link></Col>
                  <Col className="mb-5" xs={true}><Link href="/contactus#PrinceBot" passHref><a><img src="/images/PrinceBot_logo_200x200.png" alt="PrinceBot logo" /></a></Link></Col>
                </Row>
              </Col>
              <Col lg={true}>
                <Row>
                  <Col className="mb-5" xs={true}><Link href="/contactus#LamLoei" passHref><a><img src="/images/LamLoei_logo_200x200.png" alt="LamLoei logo" /></a></Link></Col>
                  <Col className="mb-5" xs={true}><Link href="/contactus#NPS" passHref><a><img src="/images/NPS-logo.png" alt="NPS Robotics Computer logo" /></a></Link></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
        <section>
          <div className="container pt-5 pb-5 text-center thanks-box">
            <div>
              <h1 className="h1 mb-1">ขอบคุณเป็นพิเศษ</h1>
              <p className="lead mb-5">โครงการโอเพนซอร์ซเหล่านี้ทำให้ microBlock IDE ถูกสร้างขึ้นมาได้</p>
            </div>
            <div className="ber-cut"></div>
            <Row className="mb-5 mt-5">
              <Col><img src="/images/logo/blockly-logo.svg" alt="Blockly logo" /></Col>
              <Col><img src="/images/logo/not-found.png" alt="Monaco Editor logo" /></Col>
              <Col><img src="/images/logo/jquery_logo.png" alt="jQuery logo" /></Col>
              <Col><img src="/images/logo/github-logo.png" alt="GitHub logo" /></Col>
              <Col><img src="/images/logo/Notiflix-logo.png" alt="Notiflix logo" /></Col>
            </Row>
            <Row className="mb-5">
              <Col><img src="/images/logo/Tippy.js-logo.svg" alt="Tippy.js logo" /></Col>
              <Col><img src="/images/logo/Bootstrap_logo.svg.png" alt="Bootstrap logo" /></Col>
              <Col><img src="/images/logo/Font-Awesome-logo.png" alt="Font Awesome logo" /></Col>
              <Col><img src="/images/logo/flaticon-logo.png" alt="flaticon logo" /></Col>
              <Col><img src="/images/logo/firebase-logo.png" alt="Firebase logo" /></Col>
            </Row>
            <Row className="mb-5">
              <Col><img src="/images/logo/Xterm.js-logo.png" alt="Xterm.js logo" /></Col>
              <Col><img src="/images/logo/freepik-logo.png" alt="Freepik logo" /></Col>
              <Col><img src="/images/logo/cloudflare-logo.png" alt="Cloudflare logo" /></Col>
              <Col><img src="/images/logo/next-js-logo.png" alt="Next.js logo" /></Col>
            </Row>
          </div>
        </section>
      </Layout>

      
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  return { props: { host: req.headers.host, url: req.url } }
}
