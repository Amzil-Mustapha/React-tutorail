import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">HOME</Link> <br />
      <Link to="/about" >ABOUT</Link> <br />
      <Link to="/products">PRODUCTS</Link>
    </>
  );
}

export default Navbar;
