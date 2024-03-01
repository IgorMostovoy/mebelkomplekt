import React from 'react';
import { Box, Divider, Heading } from '@chakra-ui/react';
import CompletedKitchensList from '../components/completedKitchens/CompletedKitchensList';

const CompletedKitchens = () => {
  return (
    <>
      <Box mb="50px" padding="120px 20px">
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
            Н
          </Box>
          аше портфолио
        </Heading>
        <Divider variant="brandPrimary" w="100%" mb="20px" />
        <CompletedKitchensList />
      </Box>
    </>
  );
};

export default CompletedKitchens;
