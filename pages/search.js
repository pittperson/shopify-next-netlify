import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

import algoliasearch from "algoliasearch/lite";

import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";

import { getProductList } from "@api/getProductList";

const searchClient = algoliasearch(
  "O5MF3054LQ",
  "10fe1701dc1aad45b62c2615eb8ad521"
);

function Hit({ hit }) {
  return (
    <div className="product-card">
      <div className="product-card-frame">
        <img className="prodimg" src={hit.image} alt={hit.handle} />
      </div>
      <div className="product-card-text">
        <Link href={`/product/${hit.handle}`}>
          <a>
            <h3 className="product-card-title">{hit.title}</h3>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <>
      <Header />

      <InstantSearch searchClient={searchClient} indexName="shopify_products">
        <div className="search-box">
          <SearchBox />
        </div>
        <div id="hits">
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>

      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </>
  );
}
