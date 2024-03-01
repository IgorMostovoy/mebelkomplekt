import React from 'react';
import {Box, Divider, Heading, Link, Text} from "@chakra-ui/react";
import YandexMap from "../components/yandexMap/YandexMap";

const Contacts = () => {
  return (
    <Box backgroundColor='#F9FDFF' maxW='1440px' width='100%' m='0 auto' padding='120px 20px'
         fontFamily='SangBleuSunrise-Regular-WebXL'>
      <Heading as='h3'
               pb='10px'
               fontSize='60px'
               fontFamily='SangBleuSunrise-Light-WebXL'
               fontWeight='500'
               letterSpacing='2px'
               textTransform='uppercase'>
        <Box as='span' color='#BF2B45'>К</Box>онтакты</Heading>
      <Divider variant='brandPrimary'
               w='100%'
               mb='20px'/>
      <Box mb={4}>
        <Heading fontFamily='SangBleuSunrise-Regular-WebXL' fontWeight='600' as="h3" size="md" mb={4}>Контактная
          информация:</Heading>
        <Text mb={2}>Телефон:<Link href="tel:+79996309999"> <Box as='span' color='#BF2B45' ml='5px'>+7
          (999)630-99-99</Box></Link></Text>
        <Text>
          Email: <Link href="mailto:igor-yo@yandex.ru"> <Box as='span' color='#BF2B45' ml='5px'>igor-yo@yandex.ru</Box></Link>
        </Text>
      </Box>
      <Divider my={4}/>
      <Box mb={4}>
        <Heading as="h3" size="md" fontFamily='SangBleuSunrise-Regular-WebXL' mb={2}>Адрес магазина:</Heading>
        <Text> г. Краснодар, ул. Северная 260</Text>
      </Box>
      <Divider my={4}/>
      <Heading as="h3" size="md" fontFamily='SangBleuSunrise-Regular-WebXL' mb={5}>Местоположение:</Heading>
      <Box w='100%' h='100%'>
       <YandexMap/>
      </Box>
    </Box>

  );
};

export default Contacts;