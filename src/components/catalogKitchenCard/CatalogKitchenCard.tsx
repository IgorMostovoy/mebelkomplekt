import React from 'react';
import kitchens from '../../assets/json/catalogKitchens.json'
import {Box, Divider, Flex, Grid, Heading, HStack, Image, SimpleGrid, Text} from "@chakra-ui/react";
import {Link, useParams} from "react-router-dom";
import uniqid from "uniqid";
import {CatalogKitchenCardSlider} from "./CatalogKitchenCardSlider";
import CatalogKitchenOption from "./CatalogKitchenOption";


const CatalogKitchenCard = () => {
  const {title} = useParams()

  return (
    <Box mb='50px' padding='70px 20px'>
      {kitchens.filter(kitchen => title === kitchen.title).map((kitchen) => (
          <Box mt='30px' key={uniqid()}>
            <Heading fontFamily='SangBleuSunrise-Light-WebXL'
                     fontWeight='300'
                     fontSize='3.5rem'>Кухня {kitchen.title}</Heading>
            <Text fontFamily='Open Sans'
                  fontSize='1.2rem'
                  color='rgba(0,0,0,.5)'
                  letterSpacing='-0.5px'
                  mb='20px'
            >{kitchen.style}</Text>
            <Divider variant='brandPrimary' mb='20px'/>
            <Text fontFamily='SangBleuSunrise-Regular-WebXL'
                  fontSize='1.8rem' mb='10px'>{kitchen.cost} ₽</Text>
            <Text fontFamily='Open Sans'
                  fontWeight='600'
                  fontSize='0.8rem'
                  color='#BF2B45'
                  letterSpacing='1.5px'
                  cursor='pointer'
                  mb='50px'
                  textTransform='uppercase'>узнать цену вашей кухни</Text>
            <CatalogKitchenCardSlider images={kitchen.images}/>
            <Flex>
              <Box maxW='19rem'
                   pr='20px'
                   m='0 auto'>
                {kitchen.softtouch && (
                    <Image src={kitchen.softtouch.softtouchImg} mb='40px'/>
                )}
              </Box>
              <Box
                   w='100%'
                   maxW='55%'
                   mb='50px'>
                <CatalogKitchenOption title={kitchen.characteristics.fasadeTitle}
                                      describe={kitchen.characteristics.fasadeDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.fasadeWithGlassTitle}
                                      describe={kitchen.characteristics.fasadeWithGlassDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.coatingTitle}
                                      describe={kitchen.characteristics.coatingDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.drawingTitle}
                                      describe={kitchen.characteristics.drawingDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.enamelTitle}
                                      describe={kitchen.characteristics.enamelDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.colorTitle}
                                      describe={kitchen.characteristics.colorDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.karkasTitle}
                                      describe={kitchen.characteristics.karkasDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.tabletopTitle}
                                      describe={kitchen.characteristics.tabletopDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.furnitureTitle}
                                      describe={kitchen.characteristics.furnitureDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.handleTitle}
                                      describe={kitchen.characteristics.handleDescribe}/>
                <CatalogKitchenOption title={kitchen.characteristics.glassTitle}
                                      describe={kitchen.characteristics.glassDescribe}/>
                {kitchen.characteristics.addition && (
                  <Text maxW='50%'>{kitchen.characteristics.addition}</Text>
                )}
              </Box>
            </Flex>

            <Divider variant='brandPrimary' mb='30px'/>
            <Box maxW='55%' ml='auto' mb='100px'>
              <Heading as='h5' fontFamily='SangBleuSunrise-Light-WebXL'
                       fontSize='1.5rem' mb='30px'>Описание</Heading>
              {kitchen.description.split('\n').map((item) => {
                return <Text
                  key={uniqid()}
                  fontFamily='Open Sans'
                  fontSize='14px'
                  fontWeight='600'
                  lineHeight='1.6rem'
                  color='rgba(0,0,0,.5)'
                  letterSpacing='-0.5px'
                >{item}<br/></Text>
              })}
            </Box>
            <Heading textTransform='uppercase' fontFamily='SangBleuSunrise-Light-WebXL'
                     fontWeight='300'
                     fontSize='4rem'
                     mb='10px'
            >{kitchen.possibleColorsTitle}</Heading>
            <Divider variant='brandPrimary' mb='30px'/>
            <SimpleGrid minChildWidth='120px' spacing='10px' mb='50px'>
              {
                kitchen.possibleColors?.map(item =>
                  <Box key={uniqid()}>
                    <Image src={item.possibleColorsImg} mb='10px'/>
                    <Text textAlign='center' fontFamily='Open Sans'
                          fontSize='1rem'
                          letterSpacing='-0.5px'
                          whiteSpace='wrap'
                    >{item.possibleColorsSubtitle}</Text>
                  </Box>
                )}
            </SimpleGrid>
            {kitchen.additionalColorTitle && (
              <>
                <Heading textTransform='uppercase' fontFamily='SangBleuSunrise-Light-WebXL'
                         fontWeight='300'
                         fontSize='4rem'
                         mb='10px'>{kitchen.additionalColorTitle}</Heading>
                <Divider variant='brandPrimary' mb='30px'/>
                <Flex gap='10px' wrap='wrap'>
                  {kitchen.additionalColor.map(item =>
                    <Box key={uniqid()} maxW='145px'>
                      <Image src={item.additionalImg} mb='10px' maxW='145px'/>
                      <Text textAlign='center'
                            fontFamily='Open Sans'
                            fontSize='1rem'
                            letterSpacing='-0.5px'
                            whiteSpace='wrap'>{item.additionalSubtitile}</Text>
                    </Box>
                  )}
                </Flex>
              </>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default CatalogKitchenCard;

