import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap';
import Layout from '../component/Layout.js';
import TopicBox from '../component/TopicBox.js';

export default function Blog({ posts, host, url }) {
  return (
    <>
      <Head>
        <title>บล็อก - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="ข่าวสารเกี่ยวกับ microBlock IDE" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="บล็อก - microBlock IDE" />
        <meta property="og:description" content="ข่าวสารเกี่ยวกับ microBlock IDE" />
        <meta property="og:image" content={`https://${host}/images/facebook-share-image.png`} />
      </Head>

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="h1 mb-3">บล็อก</h1>
          <p className="lead mb-3">ข่าวสารเกี่ยวกับ microBlock IDE</p>
        </section>
        <section className="mb-5">
          <div className="container mb-5">
            <Row className="row-cols-4">
              {posts.map(post => (
                <Col>
                  <TopicBox key={post.id} id={post.id} title={post.title.rendered} text={post.yoast.metadesc} cover={post.yoast["opengraph-image"]} />
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  const res = await fetch("https://manager.microblock.app/wp-json/wp/v2/posts?categories=2&_fields[]=id&_fields[]=modified&_fields[]=title&_fields[]=categories&_fields[]=yoast.metadesc&_fields[]=yoast.opengraph-image");
  const data = await res.json();

  return { props: { posts: data, host: req.headers.host, url: req.url } }
}


