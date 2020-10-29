import Head from 'next/head'
import { Button, Navbar, Nav } from 'react-bootstrap';
import Layout from '../component/Layout.js';

function Category(props) {
  return (
    <>
      <Head>
        <title>Topic - microBlock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="bg-light text-center" style={{ padding: "3rem" }}>
          <h1 className="h1" style={{ marginBottom: "1rem" }}>Learning</h1>
          <p className="lead" style={{ marginBottom: "1rem" }}>Learning about microBlock</p>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  console.log("Req", req);

  /*
  const protocol = req.headers['x-forwarded-proto']
  const host = req.headers['x-forwarded-host']
  const page = query.page || 1
  const limit = query.limit || 9

  const res = await fetch(
    `${protocol}://${host}/api/profiles?page=${page}&limit=${limit}`
  )
  const data = await res.json()
    */
  return { props: { aaa: "Hello !" } }
}

export default Category;
