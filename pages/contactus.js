import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap';
import Layout from '../component/Layout.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, fab, far);

export default function Contactus({ host, url }) {
  return (
    <>
      <Head>
        <title>ติดต่อเรา - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="ติดต่อทีมพัฒนา microBlock และพาร์ทเนอร์" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ติดต่อเรา - microBlock IDE" />
        <meta property="og:description" content="ติดต่อทีมพัฒนา microBlock และพาร์ทเนอร์" />
        <meta property="og:image" content={`https://${host}/images/facebook-share-image.png`} />
      </Head>

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="h1 mb-3">ติดต่อเรา</h1>
          <p className="lead mb-3">ติดต่อทีมพัฒนา microBlock และพาร์ทเนอร์</p>
        </section>
        <section className="container">
          <Row className="mb-5">
            <Col className="border-right" md="auto">
              <img src="/images/ArtronShop_logo_200x200.png" alt="ArtronShop logo" />
            </Col>
            <Col>
              <div className="h3">ArtronShop</div>
              <p>ผู้พัฒนาโครงการ microBlock ด้านการพัฒนาโปรแกรม microBlock IDE , Extension, เฟิร์มแวร์ MicroPython , เว็บไซต์ microBlock IDE และโปรแกรม/เครื่องมือต่าง ๆ ในนาม microBlock</p>
              <p><strong>ช่องทางการติดต่อ</strong></p>
              <ul>
                <li>อีเมล์. contact[แอด]artronshop.co.th</li>
                <li>Facebook. <a href="https://www.facebook.com/ArtronShop" target="_blank">ร้านไอโอเอ็กซ์ฮ๊อบ</a>, <a href="https://fb.me/maxthai" target="_blank">Sonthaya Nongnuch</a></li>
                <li>GitHub. <a href="https://github.com/maxpromer" target="_blank">maxpromer</a></li>
                <li>เว็บไซต์. <a href="https://www.artronshop.co.th/" target="_blank">ArtronShop</a></li>
              </ul>
              <p><strong>ตัวอย่างเคสที่ควรติดต่อ</strong></p>
              <ul>
                <li>พบบัคในโปรแกรมหรือซอฟแวร์ใด ๆ ภายใต้โครงการ microBlock</li>
                <li>ต้องการสนับสนุนโครงการ</li>
                <li>ต้องการสอบถามการใช้งานขั้นสูง เช่น การเพิ่มบอร์ด การสร้าง Extension เป็นต้น</li>
                <li>ต้องการให้คำแนะนำแนวทางการพัฒนาโครงการ</li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-5" id="INEX">
            <Col className="border-right" md="auto">
              <img src="/images/INEX_logo_200x200.png" alt="INEX logo" />
            </Col>
            <Col>
              <div className="h3">INEX</div>
              <p>ผู้ผลิตและจัดจำหน่ายบอร์ด KidBright32i -- มีส่วนร่วมในโครงการ microBlock ด้านเอกสารการใช้งาน การทดสอบโปรแกรม ให้คำแนะนำการพัฒนาโปรแกรม รวมทั้งนำเสนอเข้าสู่ภาครัฐ</p>
              <p><strong>ช่องทางการติดต่อ</strong></p>
              <ul>
                <li>โทรศัพท์. 0-2747-7001 , 0-2747-7002 0-2747-7003 , 0-2747-7004 หรือ 081-920-9477</li>
                <li>โทรสาร. 0-2747-7005</li>
                <li>อีเมล์. tech[แอด]inex.co.th</li>
                <li>Facebook. <a href="https://www.facebook.com/innovativeexperiment" target="_blank">INEX</a></li>
                <li>เว็บไซต์. <a href="https://inex.co.th/" target="_blank">INEX</a></li>
              </ul>
              <p><strong>ตัวอย่างเคสที่ควรติดต่อ</strong></p>
              <ul>
                <li>สอบถามปัญหาการใช้งานทั่วไปเกี่ยวกับ microBlock IDE</li>
                <li>สอบถามปัญหาการใช้งานบอร์ด <strong>KidBright32i</strong></li>
                <li>ต้องการสั่งซื้อบอร์ด <strong>KidBright32i</strong></li>
                <li>ต้องการทีมวิทยากรอบรมเกี่ยวกับ KidBright</li>
                <li>ต้องการเอกสาร หนังสือ เกี่ยวกับ KidBright</li>
                <li>ต้องการอุปกรณ์เสริม KidBright</li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-5" id="EasyKidsRobotics">
            <Col className="border-right" md="auto">
              <img src="/images/EasyKidsRobotics_logo_200x200.png" alt="EasyKids Robotics logo" />
            </Col>
            <Col>
              <div className="h3">EasyKids Robotics</div>
              <p>ศูนย์การเรียนรู้การเขียนโปรแกรมและนวัตกรรมหุ่นยนต์ --- มีส่วนร่วมในโครงการ microBlock ด้านการสนับสนุนอุปกรณ์, ค่าใช้จ่าย, ทดสอบ เพื่อเพิ่มบอร์ด 3in1 EASYKIDS BOARD ให้คำแนะนำการพัฒนาโปรแกรม และอื่น ๆ</p>
              <p><strong>ช่องทางการติดต่อ</strong></p>
              <ul>
                <li>คอร์สเรียน 099 110 0202 , สั่งซื้อสินค้า 093 219 9121</li>
                <li>Facebook. <a href="https://www.facebook.com/Easykidsrobotics/" target="_blank">EasyKidsRobotics</a></li>
                <li>เว็บไซต์. <a href="https://www.easykidsrobotics.com/" target="_blank">EasyKids Robotics ศูนย์การเรียนรู้การเขียนโปรแกรมและนวัตกรรมหุ่นยนต์</a></li>
              </ul>
              <p><strong>ตัวอย่างเคสที่ควรติดต่อ</strong></p>
              <ul>
                <li>สอบถามเกี่ยวกับการอบรม microBlock IDE</li>
                <li>สอบถามเกี่ยวกับการอบรมการสร้างหุ่นยนต์ การเขียนโปรแกรมเบื้องต้น</li>
                <li>สอบถามการใช้งานบอร์ด 3in1 EASYKIDS BOARD</li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-5" id="Gravitech">
            <Col className="border-right" md="auto">
              <img src="/images/Gravitech_logo_200x200.png" alt="Gravitech logo" />
            </Col>
            <Col>
              <div className="h3">กราวิเทคไทย</div>
              <p>ผู้ผลิตและจัดจำหน่ายบอร์ด KidBright32 V1.3 , V1.4 V1.5 Rev.3 และ V1.6 by Gravitech -- มีส่วนร่วมในโครงการ microBlock ด้านการทดสอบโปรแกรม ให้คำแนะนำการพัฒนาโปรแกรม และอื่น ๆ</p>
              <p><strong>ช่องทางการติดต่อ</strong></p>
              <ul>
                <li>โทรศัพท์. 02-564-7664, 090-525-3000</li>
                <li>Facebook. <a href="https://www.facebook.com/GravitechThai" target="_blank">Gravitechthai</a></li>
                <li>เว็บไซต์. <a href="https://www.gravitechthai.com/" target="_blank">GRAVITECH THAI</a></li>
              </ul>
              <p><strong>ตัวอย่างเคสที่ควรติดต่อ</strong></p>
              <ul>
                <li>สอบถามปัญหาการใช้งานทั่วไปเกี่ยวกับ microBlock IDE</li>
                <li>สอบถามปัญหาการใช้งานบอร์ด <strong>KidBright32 V1.5 Rev.3</strong> และ <strong>V1.6 by Gravitech</strong></li>
                <li>ต้องการสั่งซื้อบอร์ด <strong>KidBright32 V1.5 Rev.3</strong> หรือ <strong>V1.6 by Gravitech</strong></li>
                <li>ต้องการอุปกรณ์เสริม KidBright</li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-5" id="NPS">
            <Col className="border-right" md="auto">
              <img src="/images/NPS-logo.png" alt="NPS Robotics Computer logo" />
            </Col>
            <Col>
              <div className="h3">NPS Robotics Computer</div>
              <p>ศูนย์พัฒนาเด็กเพื่อเป็นโปรแกรมเมอร์-วิศวกรคอมพิวเตอร์ จังหวัดระยอง -- มีส่วนร่วมในโครงการ microBlock ด้านการนำโปรแกรม microBlock IDE ไปใช้สอน อบรม ให้กับนักเรียนในจังหวัดระยอง</p>
              <p><strong>ช่องทางการติดต่อ</strong></p>
              <ul>
                <li>โทรศัพท์. 081 865 3479</li>
                <li>Facebook. <a href="https://www.facebook.com/NPSProgrammerRayong" target="_blank">NPS Robotics Computer</a></li>
                <li>เว็บไซต์. <a href="https://www.npsrobot.com/" target="_blank">NPS ROBOTICS COMPUTER</a></li>
              </ul>
              <p><strong>ตัวอย่างเคสที่ควรติดต่อ</strong></p>
              <ul>
                <li>สอบถามเกี่ยวกับการอบรม microBlock IDE ให้กับนักเรียน ม.1 - ม.6</li>
                <li>สอบถามเกี่ยวกับการอบรมการสร้างหุ่นยนต์ การเขียนโปรแกรมเบื้องต้น ให้กับนักเรียน ม.1 - ม.6</li>
              </ul>
            </Col>
          </Row>
          <Row className="text-center">
            <Col id="Senses" sm={true} className="mb-5">
              <img src="/images/Senses_logo_200x200.png" alt="Senses IoT logo" className="mb-3" />
              <div className="h4">Senses IoT</div>
              <p>ให้บริการ IoT Dashboard มีส่วนร่วมในโครงการ microBlock ด้านการทดสอบ ให้คำแนะนำการพัฒนาโปรแกรม และอื่น ๆ</p>
              <p>
                <a href="https://www.facebook.com/SensesIoT/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "16px" }} /> Senses</a>
                <a href="https://www.sensesiot.com/" target="_blank" className="ml-3"><FontAwesomeIcon icon={['fas', 'pager']} fixedWidth style={{ width: "16px" }} /> SENSES</a>
              </p>
            </Col>
            <Col id="PrinceBot" sm={true} className="mb-5">
              <img src="/images/PrinceBot_logo_200x200.png" alt="PrinceBot logo" className="mb-3" />
              <div className="h4">PrinceBot</div>
              <p>ผลิตและจัดจำหน่ายหุ่นยนต์เพื่อการศึกษา มีส่วนร่วมในโครงการ microBlock ด้านการทดสอบ ให้คำแนะนำการพัฒนาโปรแกรม และอื่น ๆ</p>
              <p>
                <a href="https://www.facebook.com/PrinceBot-326418591174060" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "16px" }} /> PrinceBot</a>
              </p>
            </Col>
            <Col id="LamLoei" sm={true} className="mb-5">
              <img src="/images/LamLoei_logo_200x200.png" alt="LamLoei logo" className="mb-3" />
              <div className="h4">LamLoei</div>
              <p>ให้บริการออกแบบแผงวงจรอิเล็กทรอนิกส์ มีส่วนร่วมในโครงการ microBlock ด้านการทดสอบ ให้คำแนะนำการพัฒนาโปรแกรม และอื่น ๆ</p>
              <p>
                <a href="https://www.facebook.com/groups/205041737056369" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "16px" }} /> LamLoei Club (ชมรมแล่มเลย)</a>
              </p>
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

