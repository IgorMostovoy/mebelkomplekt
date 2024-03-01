import React from 'react';
import Header from '../components/header/Header';
import Catalog from '../components/catalog/Catalog';
import QuickOrder from '../components/quickOrder/QuickOrder';
import Completed from '../components/completed/Completed';
import { Box } from '@chakra-ui/react';
import About from '../components/about/About';
import LogoCarousel from '../components/logoСarousel/LogoCarousel';

const Main = () => {
  return (
    <Box maxW="1440px" width="100%" m="0 auto" padding="0 20px" pt="70px">
      <Header />
      <Catalog />
      <Completed />
      <About />
      <LogoCarousel />
      <QuickOrder />
      {/*<Popular/>*/}
    </Box>
  );
};

export default Main;
