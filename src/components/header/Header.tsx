import React from 'react';
import {Flex} from "@chakra-ui/react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";



const Header = () => {
  return (
    <>
      <Flex w='100%' h='75vh' justify='space-between' mb='160px'>
        <HeaderLeft/>
        <HeaderRight/>
      </Flex>
    </>
  );
};

export default Header;