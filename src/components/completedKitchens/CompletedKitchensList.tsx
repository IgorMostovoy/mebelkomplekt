import React from 'react';
import completedProjects from "../../assets/json/completedProjects.json";
import uniqid from "uniqid";
import {Divider, Flex, HStack,SimpleGrid, Text} from "@chakra-ui/react";
import CompletedKitchensItem from "./CompletedKitchensItem";

const CompletedKitchensList = () => {
  return (
    <>
      <SimpleGrid columns={4} spacing='5px' spacingY='40px' minChildWidth='340px' >
        {
          completedProjects.map((kitchen, i) =>
            <CompletedKitchensItem key={uniqid()}
                         title={kitchen.title}
                         images={kitchen.images[0].url}
                         alt={kitchen.alt}
                         style={kitchen.style}

            >
              <Flex fontFamily='Open Sans' fontSize='13px' color='rgba(0,0,0,.5)' mb='20px'>
                <HStack spacing='10px'>
                  <Text>{kitchen.style}</Text>
                  <Divider variant='brandPrimary' orientation='vertical'/>

                  <Flex>
                    <Text lineHeight='20px' mr='3px'>{kitchen.size}</Text>
                  </Flex>
                </HStack>
              </Flex>
              <Flex justifyContent='space-between' alignItems='center'>
                <Text fontFamily='SangBleuSunrise-Regular-WebXL'
                      fontSize='1.2rem'
                      letterSpacing='-0.2px'>
                  {kitchen.cost} ₽</Text>
                <Text fontFamily='Open Sans'
                      fontSize='15px'
                      color='rgba(0,0,0,.5)'
                      letterSpacing='-0.5px'
                      cursor='pointer'
                      _hover={{color:'#BF2B45'}}>Заказать кухню</Text>
              </Flex>
            </CompletedKitchensItem>
          )
        }
      </SimpleGrid>
    </>
  );
};

export default CompletedKitchensList;