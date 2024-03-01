import React from 'react';
import TopBar from "./header/topBar/TopBar";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import Footer from "./footer/Footer";
import TopBarTop from "./header/topBar/TopBarTop";

const Layout = () => {
  return (
    <>
      <TopBar/>
        <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;