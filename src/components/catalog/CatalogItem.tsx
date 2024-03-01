import React from 'react';
import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type CatalogItemProps = {
  images: string;
  alt: string;
  title?: string;
  style: string;
  karkas?: string;
  fasade?: string;
  children?: React.ReactNode;
};
const CatalogItem = ({ images, alt, title, children }: CatalogItemProps) => {
  return (
    <>
      <Flex direction="column" w="100%" padding="10px">
        <Link to={`/catalog/${title}`}>
          <Image
            src={images}
            alt={alt}
            cursor="pointer"
            minH="350px"
            mb="10px"
          />
        </Link>

        <Text
          fontFamily="SangBleuSunrise-Light-WebXL"
          fontSize="1.7rem"
          fontWeight="600"
          mb="10px"
        >
          {title}
        </Text>
        {children}
        <Divider variant="brandPrimary" />
      </Flex>
    </>
  );
};

export default CatalogItem;
