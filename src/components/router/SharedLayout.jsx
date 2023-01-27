import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import StyledNavbar from "./StyledNavbar";

// This Component just for share all Layout And display all element chared between the pages Like footer, header and navbar

function SharedLayout() {
  return (
    <>
      <Header />
      <StyledNavbar/>
      {/* <Navbar /> */}
      <Outlet />
      {/**This Outlet Component display All nested pages in the Home page */}
      <Footer />
    </>
  );
}

export default SharedLayout;
