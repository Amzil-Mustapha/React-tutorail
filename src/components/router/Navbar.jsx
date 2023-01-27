import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">HOME</Link> <br />
      <Link to="/about">ABOUT</Link> <br />
      <Link to="/contact">CONTACT US</Link>
    </>
  );
}

export default Navbar;
