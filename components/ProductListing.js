import Link from 'next/link';

export default function ProductListing({ product }) {
  let image = product.images.edges[0].node;
  return (
    <li className="product-card">
      <div className="product-card-frame">
        <img className="prodimg" src={image.src} alt={image.altText} />
      </div>
      <div className="product-card-text">
        <Link href={`/product/${product.handle}`}>
          <a>
            <h3 className="product-card-title">{product.title}</h3>
          </a>
        </Link>
      </div>
    </li>
  );
}
