import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h2>Products Page</h2>
      <ol>
        <li>
          <Link to="/product/1">PRODUCT</Link>
        </li>
        <li>
          <Link to="/product/2">PRODUCT</Link>
        </li>
        <li>
          <Link to="/product/3">PRODUCT</Link>
        </li>
        <li>
          <Link to="/product/4">PRODUCT</Link>
        </li>
        <li>
          <Link to="/product/5">PRODUCT</Link>
        </li>
      </ol>
    </>
  );
}

export default Products;
