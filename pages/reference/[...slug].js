import Head from 'next/head'
import { Card } from 'react-bootstrap';
import Link from 'next/link'
import Layout from '../../component/Layout.js';
import AddThis from '../../component/AddThis.js'
import referenceData from '../../docs/reference.js'
import React, { useEffect } from 'react';
import Script from 'react-load-script';
import { Base64 } from 'js-base64';

function blockToXML(block) {
  let xml = "";
  xml += `<xml xmlns="https://developers.google.com/blockly/xml">`;
  if (!block.xml) {
    xml += `<block type="${block.id}">`;
    if (typeof block.args === "object") {
      for (let arg of block.args) {
        if (arg.type === "number" && typeof arg.shadow !== "undefined") {
          xml += `
            <value name="${arg.name}">
              <shadow type="math_number">
                <field name="NUM">${arg.shadow}</field>
              </shadow>
            </value>
          `;
        } else if (arg.type === "text" && typeof arg.shadow !== "undefined") {
          xml += `
            <value name="${arg.name}">
              <shadow type="text">
                <field name="TEXT">${arg.shadow}</field>
              </shadow>
            </value>
          `;
        } else if (arg.type === "make_note") {
          xml += `
            <value name="notes">
                <block type="make_note">
                    <field name="notes">C5</field>
                </block>
            </value>
            <field name="duration">1 / 2</field>
          `;
        }
      }
    }
    xml += `</block>`;
  } else {
    xml += block.xml;
  }
  xml += `</xml>`;

  return xml;
}

function exampleToXML(code) {
  return `<xml xmlns="https://developers.google.com/blockly/xml">${code}</xml>`;
}

export default function LearnPost({ slug, host, url }) {
  let categoryName = slug[0];
  let blockName = slug.length > 1 ? slug[1] : null;
  let block = null;

  let category = referenceData.find(category => category.name === categoryName);

  useEffect(() => {
    if (window.microBlock) {
      window.microBlock.reload();
    }
  }, [ categoryName, blockName ]);

  let pageContent = "";
  if (blockName) {
    block = category.blocks.find(block => block.name === blockName);
    // pageContent = {category.blocks.map(block => (
    pageContent = (
      <article className="border rounded mb-4 p-3">
        <h2 className="mb-3">{block.name}</h2>
        <div className="mb-3 border bg-light p-3">
          <div className="microBlock-embed" data-xml={Base64.encode(blockToXML(block))} style={{ width: "100%", height: 10 }} data-menu="0"></div>
          <hr />
          {block.python.header ? (<div><span style={{ color: "rgb(154 154 154)", marginRight: 30 }}>Header:</span><pre>{block.python.header}</pre></div>) : ""}
          {block.python.function ? (<div><span style={{ color: "rgb(154 154 154)", marginRight: 30 }}>Function:</span><pre>{block.python.function}</pre></div>) : ""}
          <div><span style={{ color: "rgb(154 154 154)", marginRight: 30 }}>Python:</span><pre>{block.python.pattern}</pre></div>
        </div>
        <p className="mb-4">{block.description}</p>
        <h3 className="mb-3">พารามิเตอร์</h3>
        {block.args ? (
          <ul className="mb-4">
            {block.args.map(arg => (
              <li className="mb-2">
                <p><span className="badge badge-primary">{arg.name}</span>{typeof arg.description !== "undefined" ? ` - ${arg.description}` : ""}</p>
                {arg.type === "dropdown" ? (
                  <ul className="mb-4">
                    {arg.value.map(arg => (
                      <li className="mb-2">
                        <p><span className="badge badge-primary">{arg.label}</span>{arg.value ? <><span> &#8594; </span><span className="badge badge-light">{arg.value}</span></> : ""}{typeof arg.description !== "undefined" ? ` - ${arg.description}` : ""}</p>
                      </li>
                    ))}
                  </ul>
                ) : ""}
              </li>
            ))}
          </ul>
        ) : (<p className="mb-4"><i>ไม่มี</i></p>)}
        <h3>ค่าส่งกลับ</h3>
        <p>{block.return ? (<span><span className="badge badge-primary">{block.return.type}</span> {block.return.description}</span>) : (<i>ไม่มี</i>)}</p>
        {block.return ? block.return.value ? (
          <ul className="mb-4">
            {block.return.value.map(value => (
              <li className="mb-2"><span className="badge badge-primary">{value.label}</span>{typeof value.description !== "undefined" ? ` - ${value.description}` : ""}</li>
            ))}
          </ul>
        ) : "" : ""}
        <h3>ตัวอย่างการใช้งาน</h3>
        {block.examples ? block.examples.map(example => (
          <>
            <p>{example.name}</p>
            <div className="microBlock-embed" data-xml={Base64.encode(exampleToXML(example.code.xml))} style={{ width: "100%", height: 10 }}></div>
          </>
        )) : (<i>ไม่มี</i>)}
      </article>
    // ))}
    );
  } else {
    pageContent = (
      <div className="row row-cols-4">
        {category.blocks.map(block => (
          <div className="col-md-3" key={block.name}>
            <Link href={`/reference/${encodeURIComponent(categoryName)}/${encodeURIComponent(block.name)}`} passHref>
              <a className="card-link">
                <Card className="mb-3">
                <div className="microBlock-embed" data-xml={Base64.encode(blockToXML(block))} style={{ width: "100%", height: 10 }} data-menu="0" data-height="100"></div>
                  <Card.Body>
                    <Card.Title className="card-title" dangerouslySetInnerHTML={{ __html: block.name }}></Card.Title>
                    <Card.Text className="card-text"><span dangerouslySetInnerHTML={{ __html: block.description }}></span></Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Code Reference &gt; {category.name}{blockName ? ` > ${blockName}` : ""} - microBlock IDE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={blockName ? block.description : category.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://${host}${url}`} />

        <meta property="og:url" content={`https://${host}${url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Code Reference > ${category.name}${blockName ? ` > ${blockName}` : ""} - microBlock IDE`} />
        <meta property="og:description" content={blockName ? block.description : category.description} />
        <meta property="og:image" content={category.icon} />
      </Head>

      <style jsx>{`
      @media screen and (max-width: 992px) {
        .list-post {
          order: 2;
        }
      }

      .category-list {
        width: 100px;
        border: 1px solid #dee2e6;
        padding: 0;
        margin: 0;
      }

      .category-list > li {
        list-style: none;
      }

      .category-list > li.active {
        background-color: #ECF0F1
      }

      .category-list > li > a {
        text-align: center;
        color: #000;
        text-decoration: none;
      }

      .category-list > li img {
        width: 60%;
      }
      `}</style>

      <Script url="/reference/microBlock-embed.min.js" onLoad={() => window.microBlock.reload()} />

      <Layout>
        <section className="bg-light text-center p-5 mb-5">
          <h1 className="h1 mb-3" dangerouslySetInnerHTML={{__html: `Code Reference &gt; ${category.name}${blockName ? ` &gt; ${blockName}` : ""}` }}></h1>
          <p className="lead mb-3" dangerouslySetInnerHTML={{__html: blockName ? block.description : category.description }}></p>
          <div>
            <AddThis url={`https://${host}${url}`} />
          </div>
        </section>
        <section className="container mb-3 main-container">
          <div className="row">
            <div className="col-sm-auto">
              <ul className="category-list">
                {referenceData.map(category => (
                  <li className={category.name === categoryName ? "active" : ""} key={category.name}>
                    <Link href={`/reference/${encodeURI(category.name)}`} passHref>
                      <a>
                        <div style={{ padding: 6, paddingTop: 10 }}><img src={category.icon} alt="" /></div>
                        <div style={{ padding: 6, paddingBottom: 10, paddingTop: 0 }}>{category.name}</div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              {pageContent}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  return { props: { slug: query.slug, host: req.headers.host, url: req.url } }
}