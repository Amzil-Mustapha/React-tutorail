import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      {/**This Outlet Component display All nested pages in the Home page */}
      <Footer />
    </>
  );
}

export default Home;
