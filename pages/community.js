import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap';
import Layout from '../component/Layout.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, fab, far);

export default function Blog() {
  return (
    <>
      <Head>
        <title>ชุมชน - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="mb-3">ชุมชน</h1>
          <p className="lead mb-3">กลุ่มผู้ใช้งาน microBlock IDE ในช่องทางต่าง ๆ</p>
        </section>
        <section className="container">
          <h2 className="mb-3">ช่องทางหลัก</h2>
          <p className="lead mb-5">ช่องทางการเผยแพร่ข้อมูลข่าวสารจาก microBlock อย่างเป็นทางการ</p>
          <Row className="pl-5 pr-5 mb-5">
            <Col>
              <Row>
                <Col md="auto"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "50px" }} /></Col>
                <Col>
                  <p className="h4">Facebook Page</p>
                  <p><a href="https://www.facebook.com/microblockide" target="_blank">microBlock IDE</a></p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col md="auto"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "50px" }} /></Col>
                <Col>
                  <p className="h4">Facebook Group</p>
                  <p><a href="https://www.facebook.com/groups/microblockcommunity" target="_blank">microBlock Community</a></p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="pl-5 pr-5 mb-5">
            <Col>
              <Row>
                <Col md="auto"><FontAwesomeIcon icon={['fab', 'youtube']} fixedWidth style={{ width: "50px" }} /></Col>
                <Col>
                  <p className="h4">Youtube Channel</p>
                  <p><a href="https://www.youtube.com/channel/UCwiiB_PrEfWwKbnHRF9E9Qg" target="_blank">microBlock</a></p>
                </Col>
              </Row>
            </Col>
            <Col>

            </Col>
          </Row>
        </section>
        <section className="container">
          <h2 className="mb-3">ช่องทางอื่น ๆ</h2>
          <p className="lead mb-5">กลุ่มผู้ใช้งาน microBlock ในช่องทางอื่น ๆ</p>
          <Row className="pl-5 pr-5 mb-5">
            <Col>
              <Row>
                <Col md="auto"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "50px" }} /></Col>
                <Col>
                  <p className="h4"><a href="https://www.facebook.com/groups/377771226065228" target="_blank">KidBright.Club</a></p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col md="auto"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "50px" }} /></Col>
                <Col>
                  <p className="h4"><a href="https://www.facebook.com/groups/KidBrightSpace" target="_blank">KidBright Space Group</a></p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col md="auto"><FontAwesomeIcon icon={['fab', 'facebook-square']} fixedWidth style={{ width: "50px" }} /></Col>
                <Col>
                  <p className="h4"><a href="https://www.facebook.com/kidbrightSTEM/" target="_blank">KidBright</a></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Layout>
    </>
  );
};
