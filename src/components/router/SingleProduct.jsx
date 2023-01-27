import React from "react";
import { Link, useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  return (
    <>
      <h2>SingleProduct Page</h2>
      <h3>The Product Number {id}</h3>
      <Link to='/products'>Back To All Products</Link>
    </>
  );
}

export default SingleProduct;
