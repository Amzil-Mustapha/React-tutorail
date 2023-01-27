import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SharedLayout from "./SharedLayout";

const MyApp = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/** this route (index) Match whatever we have in the parent route */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<>404</>} />
        </Route>
        {/* <Route path="dashboard" element={<h1>DASHDOARD</h1>}>
          <Route path="stats" element={<h1>DASHDOARD/STATS</h1>} />
        </Route> */}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default MyApp;
