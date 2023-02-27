import { useAppContext } from "state";

import Link from "next/link";

export default function Header() {
  const { cartCount } = useAppContext();

  return (
    <header className="app-header">
      <h1>
        <Link href="/">
          <a>Washaroni</a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="/search">
              <a className="cart cartLink">Search</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart ({cartCount})</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
