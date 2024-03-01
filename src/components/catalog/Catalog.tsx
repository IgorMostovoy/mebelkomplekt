import React from 'react';
import {Box, Button, Divider, Flex, Heading, HStack} from "@chakra-ui/react";
import CatalogList from "./CatalogList";
import {Link} from "react-router-dom";


const Catalog = () => {
  return (
    <>
      <Box mb='160px' display='flex' flexDirection='column'>
        <Heading as='h3'
                 pb='10px'
                 fontSize='60px'
                 fontFamily='SangBleuSunrise-Light-WebXL'
                 fontWeight='500'
                 letterSpacing='2px'
                 textTransform='uppercase'>
          <Box as='span' color='#BF2B45'>К</Box>аталог</Heading>
        <Divider variant='brandPrimary'
                 w='100%'
                 mb='50px'/>
        <CatalogList/>
        <Box m='0 auto'>
          <Link to='/catalog'><Button variant='catalogButton'>Смотреть ещё</Button></Link>
        </Box>

      </Box>
    </>
  );
};

export default Catalog;