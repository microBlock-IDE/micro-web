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
        <title>ส่วนเสริม - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="เพิ่มบล็อกไลบารี่ในโปรแกรม microBlock IDE" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ส่วนเสริม - microBlock IDE" />
        <meta property="og:description" content="เพิ่มบล็อกไลบารี่ในโปรแกรม microBlock IDE" />
        <meta property="og:image" content={`https://${host}/images/facebook-share-image.png`} />
      </Head>

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="h1 mb-3">ส่วนเสริม</h1>
          <p className="lead mb-3">เพิ่มบล็อกและไลบารี่ในโปรแกรม microBlock IDE</p>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  return { props: { host: req.headers.host, url: req.url } }
}
