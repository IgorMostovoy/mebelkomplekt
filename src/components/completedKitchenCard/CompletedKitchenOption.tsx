import React from 'react';
import {
  Box,
  Flex,
  List, ListIcon,
  ListItem,
  Text,

} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";
import uniqid from "uniqid";


type CompletedKitchenOptionProps = {
  title?: string;
  describe?: string | string[];
  titleCost?: string;
  addTitle?: string;
  addDescribe?: string[];
  describeCost?:string;

}
const CompletedKitchenOption = ({
                                  title,
                                  describe,
                                  addTitle,
                                  titleCost,
                                  describeCost,
                                  addDescribe
                                }: CompletedKitchenOptionProps) => {
  return (
    <>
      {describe && (
        <>
          <Flex w='50%' >
            <Flex direction='column' w='100%' pb='20px' pl='15px'>
              <Text fontFamily='Open Sans'
                    mb='5px'
                    w='100%'
                    fontSize='0.8rem'
                    color='rgba(0,0,0,.5)'
                    letterSpacing='-0.5px'
                    pl='0'>{title}:</Text>
              <Text
                w='80%'
                lineHeight='1.3rem'
                fontFamily='SangBleuSunrise-Regular-WebXL'
                fontSize='0.9rem'
                fontWeight='600'
                letterSpacing='-0.2px'
                alignSelf='flex-start'
              >{describe}</Text>
            </Flex>
          </Flex>
        </>
      )}
      {addDescribe &&
          <Box m='15px 0' pl='15px'>
            <Text fontFamily='Open Sans'
                  mb='5px'
                  w='100%'
                  fontSize='1.1rem'
                  color='rgba(0,0,0,.5)'
                  letterSpacing='-0.5px'
                  pl='0'>{addTitle}:</Text>
            {addDescribe?.map(item =>
              <Box key={uniqid()}>
                <List>
                  <ListItem
                    fontFamily='SangBleuSunrise-Regular-WebXL'
                    fontSize='0.9rem'
                    fontWeight='600'
                    display='flex'
                    alignItems='center'
                    mb='5px'>
                    <ListIcon as={MdCheckCircle} color='green.500'/>
                    {item};
                  </ListItem>
                </List>
              </Box>
            )}
          </Box>
      }
      {describeCost && (
        <Box m='15px 0' pl='15px'>
        <Text fontFamily='Open Sans'
        mb='5px'
        w='100%'
        fontSize='1.1rem'
        color='rgba(0,0,0,.5)'
        letterSpacing='-0.5px'
        pl='0'>{titleCost}:</Text>
          <Text  fontFamily='SangBleuSunrise-Regular-WebXL'
                 fontSize='1.5rem'
                 fontWeight='600'
                 display='flex'
                 alignItems='center'
                 mb='5px'>
            {describeCost}
          </Text>
        </Box>
        )}

    </>
  )


};

export default CompletedKitchenOption;