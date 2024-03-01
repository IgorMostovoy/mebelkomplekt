import React from 'react';
import { Box, Divider, Heading } from '@chakra-ui/react';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <>
      <Box id="about" mb="160px" display="flex" flexDirection="column">
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
            О
          </Box>{' '}
          нас
        </Heading>
        <Divider variant="brandPrimary" w="100%" mb="50px" />

        <Box m="0 auto">
          <AboutContent />
        </Box>
      </Box>
    </>
  );
};

export default About;
