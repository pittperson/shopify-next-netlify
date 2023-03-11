// Index page which lists all items with getStaticProps
// 1. getProductList called within getStaticProps
// 2. products prop is used to create the product grid

import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";

// pre-render at build time
export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Cheese and Meat Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

// Gather all products
export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
