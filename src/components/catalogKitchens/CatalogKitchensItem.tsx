import React from 'react';
import {Divider, Flex, Image, Text} from "@chakra-ui/react";


type CatalogKitchensItemProps = {
  images: string;
  alt: string;
  title:string;

}
const CatalogKitchensItem = ({images, alt, title}: CatalogKitchensItemProps) => {
  return (
    <>
      <Flex direction='column'>
        <Image
          src={images}
          alt={alt}
          cursor='pointer'
          height='320px'
          w='100%'
          mb='10px'
        />
        <Text fontFamily='SangBleuSunrise-Light-WebXL' fontSize='1.5rem' fontWeight='600' mb='20px'>Кухня {title}</Text>
        <Divider variant='brandPrimary'/>

      </Flex>
    </>
  );
};

export default CatalogKitchensItem;