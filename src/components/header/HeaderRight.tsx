import React from 'react';
import {Box} from "@chakra-ui/react";
import SimpleSlider from "./SliderSlick";

const HeaderRight = () => {
  return (
    <>
      <Box w='100%' pl='20px'>
<Box w='100%' h='100%' background='#922841' float='right' position='relative' >
  <Box position='absolute' bottom='11%' left='-21%' width='110%'  >
    <SimpleSlider />
  </Box>

</Box>
      </Box>
    </>


  );
};

export default HeaderRight;