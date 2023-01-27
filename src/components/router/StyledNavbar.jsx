import React from "react";
import { Link, NavLink } from "react-router-dom";

function StyledNavbar() {
  return (
    <>
      {/** NavLink With Style, for add a inline style to navlink*/}
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        HOME
      </NavLink>
      <br />

      {/** NavLink With ClassName , just for add the class active to the navlink when its active */}
      <NavLink
        to="/about"
        // className={({ isActive }) => {
        //   return isActive ? "yes" : "";
        // }}
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        ABOUT
      </NavLink>
      <br />
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        PRODUCTS
      </NavLink>
    </>
  );
}

export default StyledNavbar;
