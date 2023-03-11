// Static Site Generation pre-render for all products in /products/*

import Head from "next/head";
import ProductPageContent from "@components/ProductPageContent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";

export default function ProductPage({ product }) {
  return (
    <div className="container">
      <Head>
        <title>Shoperoni | Buy {product.node.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="product-page">
        <article>
          <ProductPageContent product={product.node} />
        </article>
      </div>
      <Footer />
    </div>
  );
}

// Push pre-rendered routes to params array
export async function getStaticPaths() {
  const products = await getProductList();
  let routes = products.map((p) => {
    const params = `/product/${p.node.handle}`;
    return params;
  });

  return { paths: routes, fallback: false };
}

// Hunt down the correct product in params array with products.find
export async function getStaticProps({ params }) {
  let products = await getProductList();

  let product = products.find((p) => {
    return p.node.handle === params.product;
  });

  return {
    props: {
      product,
    },
  };
}
