import React from 'react';
import TopBar from './header/topBar/TopBar';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
