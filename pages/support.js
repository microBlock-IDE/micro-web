import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap';
import Layout from '../component/Layout.js';

export default function Support({ host, url }) {
  return (
    <>
      <Head>
        <title>สมัครใจสนับสนุนเรา - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="โครงการ microBlock IDE อยู่ได้ด้วยแรงสนับสนุนจากทุกท่าน" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="สมัครใจสนับสนุนเรา" />
        <meta property="og:description" content="โครงการ microBlock IDE อยู่ได้ด้วยแรงสนับสนุนจากทุกท่าน" />
        <meta property="og:image" content={`https://${host}/images/we-needs-you-support.png`} />
      </Head>

      <Layout>
        <section className="bg-light text-center mb-5 p-5">
          <h1 className="h1 mb-3">สมัครใจสนับสนุนเรา</h1>
          <p className="lead mb-3">โครงการ microBlock IDE อยู่ได้ด้วยแรงสนับสนุนจากทุกท่าน</p>
        </section>
        <section className="container mb-5 text-center">
          <h2 className="mb-2"><i>การสนับสนุนที่ไม่ใช่ตัวเงิน</i></h2>  
          <p className="lead mb-4">ท่านสามารถช่วยเหลือเราได้ดังนี้</p>
          <Row>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">1) แชร์เรื่องราวความประทับใจต่อ microBlock IDE ลงในโซเชียลมีเดียช่องทางต่าง ๆ</div>
            </Col>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">2) จัดทำ เผยแพร่ คลิปวิดีโอ บทความ สอนการใช้งาน microBlock IDE ในช่องทางต่าง ๆ</div>
            </Col>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">3) ชักชวนผู้มีกำลังในด้านต่าง ๆ เช่น ด้านการประชาสัมพันธ์ ด้านการศึกษา ให้ช่วยสนับสนุน microBlock IDE</div>
            </Col>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">4) <u>หากท่านเป็นผู้ผลิตฮาร์ดแวร์</u> โปรดจัดทำ Extension ให้ฮาร์ดแวร์ของท่านใช้งานกับ microBlock IDE ได้</div>
            </Col>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">5) <u>หากท่านเป็นนักพัฒนา</u> โปรดกด Star Fork และให้คำแนะนำในการพัฒนาโครงการบน <a href="https://github.com/microBlock-IDE/microBlock-IDE">GitHub</a></div>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">6) <u>หากท่านเป็น Maker</u> โปรดสร้างสรรค์ผลงานด้วย microBlock IDE</div>
            </Col>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">7) <u>หากท่านเป็นครู/อาจารย์</u> โปรดให้คำแนะนำเราในการพัฒนา microBlock IDE และการนำไปใช้จริงในห้องเรียน</div>
            </Col>
            <Col className="mb-3" sm={true}>
              <div className="bg-light rounded p-3">8) <u>หากท่านผู้พัฒนา KidBright หลัก</u> โปรดแนะนำโปรแกรม microBlock IDE เป็นทางเลือกเมื่อมีโอกาศ</div>
            </Col>
          </Row>
        </section>
        <section className="container mb-5">
          <h2 className="mb-2 text-center"><i>บริจาคเงินให้ทีมพัฒนา</i></h2>  
          <p className="lead mb-4 text-center">เมื่อท่านบริจาค เรามีของขวัญเล็ก ๆ น้อย ๆ เป็นการตอบแทน</p>
          <Row className="bg-light rounded p-4 mb-3">
            <Col sm="auto"><span style={{ fontSize: "4em" }}>฿100</span></Col>
            <Col>
              <p>ได้รับของตอบแทนดังนี้</p>
              <ol>
                <li>สติ๊กเกอร์โลโก้โครงการ microBlock จำนวน 1 ใบ</li>
              </ol>
            </Col>
          </Row>
          <Row className="bg-light rounded p-4 mb-3">
            <Col sm="auto"><span style={{ fontSize: "4em" }}>฿300</span></Col>
            <Col>
              <p>ได้รับของตอบแทนดังนี้</p>
              <ol>
                <li>สติ๊กเกอร์โลโก้โครงการ microBlock จำนวน 4 ใบ</li>
              </ol>
            </Col>
          </Row>
          <Row className="bg-light rounded p-4 mb-3">
            <Col sm="auto"><span style={{ fontSize: "4em" }}>฿500</span></Col>
            <Col>
              <p>ได้รับของตอบแทนดังนี้</p>
              <ol>
                <li>สติ๊กเกอร์โลโก้โครงการ microBlock จำนวน 1 ใบ</li>
                <li>เสื้อยืดสกรีนโลโก้โครงการ microBlock จำนวน 1 ตัว (โปรดแจ้งไซส์เสื้อที่ต้องการ)</li>
              </ol>
            </Col>
          </Row>
          <Row className="bg-light rounded p-4 mb-3">
            <Col sm="auto"><span style={{ fontSize: "4em" }}>฿2,000</span></Col>
            <Col>
              <p>ได้รับของตอบแทนดังนี้</p>
              <ol>
                <li>สติ๊กเกอร์โลโก้โครงการ microBlock จำนวน 1 ใบ</li>
                <li>เสื้อยืดสกรีนโลโก้โครงการ microBlock จำนวน 1 ตัว (โปรดแจ้งไซส์เสื้อที่ต้องการ)</li>
                <li>บอร์ด KidBright32 จำนวน 1 บอร์ด (โปรดแจ้งเวอร์ชั่นที่ต้องการ)</li>
              </ol>
            </Col>
          </Row>
          <p>โปรดอ่านรายละเอียดการบริจาคและลงนามบริจาคได้ที่ <a href="https://forms.gle/z37Cdm4HvXdgaVWi6" target="_blank">แบบฟอร์มบริจาคเงินโครงการ microBlock</a></p>
        </section>
        <section className="container mb-5">
          <h2 className="mb-2 text-center"><i>รายชื่อผู้บริจาค</i></h2>  
          <p className="lead mb-4 text-center">ทีมพัฒนาขอขอบคุณที่ท่านให้การช่วยเหลือและสนับสนุนโครงการ microBlock</p>
          <div>
            <iframe style={{
              width: "100%",
              height: "800px"
            }} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRP8mw8rPLSSJyOcRe0_PEU1_C_aG1AIdeLoITQKfelfLHT3oc9myFr_Upg7pRirMBBnUXCHGOgAOFO/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  return { props: { host: req.headers.host, url: req.url } }
}
