import React, {useState} from 'react';
import {Box, Button, Heading,  Flex,} from "@chakra-ui/react";

import {Link} from "react-router-dom";

import completedProjects from "../../assets/json/completedProjects.json";
import uniqid from "uniqid";
import CompletedList from "./CompletedList";

const Completed = () => {
  const selectedIndex = [1, 4, 5, 13, 12];

  const filteredKitchens = completedProjects.filter((completedProject, index) => {
    return selectedIndex.includes(index)
  })


  return (
    <>
      <Box mb='160px' display='flex' flexDirection='column'
      >
        <Heading as='h3'
                 pb='10px'
                 fontSize='60px'
                 fontFamily='SangBleuSunrise-Light-WebXL'
                 fontWeight='500'
                 letterSpacing='2px'
                 textTransform='uppercase'
                 color='black'
                 zIndex={2}
        >
          <Box as='span'
               position='relative'
               color='white'
               borderBottom='2px solid rgba(255,255,255, 0.7)'
               paddingBottom='5px'
               _before={{
                 zIndex: -3,
                 position: "absolute",
                 content: '""',
                 left: 0,
                 top: '-20px',
                 width: '100%',
                 height: '410px',
                 backgroundColor: '#922841',
               }}>Реализованные проекты</Box>
        </Heading>

        <Flex display='flex' zIndex={2} ml='5%' mt='50px' mb='50px'>
          {filteredKitchens.map((filteredKitchen) => <CompletedList key={uniqid()} image={filteredKitchen.images[0].url}
                                                                    title={filteredKitchen.title} cost={filteredKitchen.cost}
          />)}
        </Flex>

        <Box m='0 auto'>
          <Link to='/completed'><Button variant='catalogButton'>Смотреть портфолио</Button></Link>
        </Box>

      </Box>
    </>
  );
};

export default Completed;