import Head from 'next/head'
import { Row, Col, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import Layout from '../../component/Layout.js';
import DisqusComments from '../../component/DisqusComments.js'
import AddThis from '../../component/AddThis.js'
import React, { useEffect } from 'react';
import Script from 'react-load-script';

export default function LearnPost({ post, posts, host, url }) {
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [ url ]);

  return (
    <>
      <Head>
        <title>{post.title.rendered} - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={post.yoast.metadesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://${host}${url}`} />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.yoast.metadesc} />
        <meta property="og:image" content={post.yoast["opengraph-image"]} />

        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f95af47011cdcaa"></script>
      </Head>

      <style jsx>{`
      @media screen and (max-width: 992px) {
        .list-post {
          order: 2;
        }
      }
      `}</style>

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="h1 mb-3" dangerouslySetInnerHTML={{__html: post.title.rendered }}></h1>
          <p className="lead mb-3" dangerouslySetInnerHTML={{__html: post.yoast.metadesc }}></p>
          <div>
            <AddThis url={`https://${host}${url}`} />
          </div>
        </section>
        <section className="container mb-3 main-container">
          <Row>
            <div className="col-lg-3 list-post">
              <h4>โพสอื่น ๆ</h4>
              <ListGroup defaultActiveKey={`/post/${post.id}/${encodeURI(post.title.rendered)}`}>
                {posts.map(post => (
                  <Link key={post.id} href={`/post/${post.id}/${encodeURI(post.title.rendered)}`} passHref>
                    <ListGroup.Item action dangerouslySetInnerHTML={{ __html: post.title.rendered }}></ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </div>
            <Col style={{ overflow: "hidden" }}>
              <div className="border rounded p-3 mb-3">
                <div className="mb-3">
                  <img src={post.yoast["opengraph-image"]} alt={post.title.rendered} />
                </div>
                <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                <Script
                  url="/prism.js"
                  onLoad={() => window.Prism.highlightAll()} />
              </div>
              <div className="container mb-5">
                <DisqusComments post={{ id: +post.id, title: post.title.rendered }} />
              </div>
            </Col>
          </Row>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  let id = query.slug[0];

  let post = await fetch(`https://manager.microblock.app/wp-json/wp/v2/posts/${id}?per_page=100`);
  post = await post.json();

  let posts = await fetch(`https://manager.microblock.app/wp-json/wp/v2/posts?categories=${post.categories[0]}&_fields[]=id&_fields[]=title`);
  posts = await posts.json();

  return { props: { post: post, posts: posts, host: req.headers.host, url: req.url } }
}