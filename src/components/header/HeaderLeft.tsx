import React from 'react';
import {Box, Divider, Flex, Heading} from "@chakra-ui/react";
import CalculatePrice from "./CalculatePrice";

const HeaderLeft = () => {
  return (
    <>
      <Box w='100%'>
        <Flex w='100%'
              h='100%'
              direction='column'
              justify='space-between'>
          <Divider variant='brandPrimary'
                   w='100%'/>
          <Heading as='h1'
                   lineHeight='56px'
                   fontSize='39px'
                   textAlign='center'
                   padding='20px'
                   mr='20%'
                   fontFamily='SangBleuSunrise-Light-WebXL'
                   letterSpacing='2px'
                   textTransform='uppercase'>
            <Box as='span'
                 color='#BF2B45'>Кухни</Box> на заказ<br/> в Краснодаре <br/>от производителя</Heading>
          <CalculatePrice/>
          <Divider variant='brandPrimary'
                   w='100%'/>
        </Flex>
      </Box>

    </>

  );
};

export default HeaderLeft;