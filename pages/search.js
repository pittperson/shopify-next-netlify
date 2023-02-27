import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";

import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  DynamicWidgets,
} from "react-instantsearch-hooks-web";

const client = algoliasearch("O5MF3054LQ", "10fe1701dc1aad45b62c2615eb8ad521");

function Hit({ hit }) {
  console.log({ hit });
  return (
    <>
      {/* <Highlight hit={hit} attribute="name" className="Hit-label" /> */}
      <div className="Container">
        <div>
          <span className="Hit-price">{hit.title}</span>
        </div>
      </div>
    </>
  );
}

export default function Search() {
  return (
    <div className="app-header">
      <Header />
      <InstantSearch searchClient={client} indexName="shopify_products">
        <div className="Container">
          <div>
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
      <main>
        <ul className="product-grid"></ul>
      </main>

      <Footer />
    </div>
  );
}
