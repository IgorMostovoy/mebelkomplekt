import React from 'react';

import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import PopularItem from './PopularItem';
import kitchens from '../../assets/json/kitchens.json';

const Popular = () => {
  return (
    <>
      <Box mb="160px">
        <Heading
          as="h3"
          pb="10px"
          fontSize="60px"
          fontFamily="SangBleuSunrise-Light-WebXL"
          fontWeight="500"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          <Box as="span" color="#BF2B45">
            П
          </Box>
          опулярные модели
        </Heading>
        <Divider variant="brandPrimary" w="100%" mb="50px" />
        <SimpleGrid minChildWidth="400px" spacingX="10px" spacingY="40px">
          {kitchens.map((kitchen) => (
            <PopularItem
              key={kitchen.id}
              image={kitchen.image}
              alt={kitchen.alt}
              length={kitchen.length}
              cost={kitchen.cost}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Popular;
