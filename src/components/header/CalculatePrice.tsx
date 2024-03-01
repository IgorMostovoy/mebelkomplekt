import React from 'react';
import {Box, Center, Container, Heading, Image} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons";
import row from '../../assets/row.svg'
import buttonRow from '../../assets/buttonRow.svg'

const CalculatePrice = () => {
  return (

    <Box
      borderTop='1px solid rgba(0,0,0,0.4)'
      borderBottom='1px solid rgba(0,0,0,0.4)'
      padding='20px 30px 25px 55px'
      w='70%'>
      <Heading as='h4'
               position='relative'
               fontSize='22px'
               fontWeight='500'
               fontFamily='SangBleuSunrise-Regular-WebXL'
               lineHeight='32px'
               letterSpacing='1.1px'
               ml='10px'
               mb='10px'>
        <Image src={row}
               alt="row"
               transform='rotate(-40deg)'
               position='absolute'
               left='-45px'
               top='30px'/>
        Пройдите опрос и узнайте цену <Box as='span' color='#BF2B45' fontWeight='600'>Вашей кухни</Box>
      </Heading>
      <Button variant="brandPrimary"
              ml='10px'>
        Расчитать цену
        <Image src={buttonRow} alt="buttonRow" ml='10px'/>
      </Button>
    </Box>

  );
};
export default CalculatePrice;