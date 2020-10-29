import Head from 'next/head'
import { Row, Col, ListGroup } from 'react-bootstrap';
import Link from 'next/link'
import Layout from '../../component/Layout.js';

export default function LearnPost({ post, posts }) {
  return (
    <>
      <Head>
        <title>{post.title.rendered} - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={post.yoast.metadesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="" />

        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.yoast.metadesc} />
        <meta property="og:image" content={post.yoast["opengraph-image"]} />

        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f95af47011cdcaa"></script>
      </Head>

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="h1 mb-3" dangerouslySetInnerHTML={{__html: post.title.rendered }}></h1>
          <p className="lead mb-3" dangerouslySetInnerHTML={{__html: post.yoast.metadesc }}></p>
          <div>
            <div className="addthis_inline_share_toolbox"></div>
          </div>
        </section>
        <section className="container mb-3">
          <Row>
            <Col xs={3}>
              <h4>โพสอื่น ๆ</h4>
              <ListGroup defaultActiveKey={`/post/${post.id}`}>
                {posts.map(post => (
                  <Link href={`/post/${post.id}`} passHref>
                    <ListGroup.Item action dangerouslySetInnerHTML={{__html: post.title.rendered }}></ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <div className="mb-3">
                <img src={post.yoast["opengraph-image"]} alt={post.title.rendered} />
              </div>
              <article className="mb-3" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              <div className="container mb-5">
                <div id="disqus_thread"></div>
              </div>
            </Col>
          </Row>
        </section>
      </Layout>
      <script dangerouslySetInnerHTML={{
        __html: `
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://microblog-6.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        `}} />
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  let id = query.slug[0];

  let post = await fetch(`https://manager.microblock.app/wp-json/wp/v2/posts/${id}`);
  post = await post.json();

  let posts = await fetch(`https://manager.microblock.app/wp-json/wp/v2/posts?categories=${post.categories[0]}&_fields[]=id&_fields[]=title`);
  posts = await posts.json();

  return { props: { post: post, posts: posts } }
}