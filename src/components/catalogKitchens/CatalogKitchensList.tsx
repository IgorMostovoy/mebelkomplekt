import React from 'react';
import {Box, Button, Divider, Flex, HStack, Icon, SimpleGrid, Text, Tooltip} from "@chakra-ui/react";
import catalogKitchens from "../../assets/json/catalogKitchens.json";
import uniqid from "uniqid";

import CatalogItem from "../catalog/CatalogItem";
import {InfoOutlineIcon} from "@chakra-ui/icons";

const CatalogKitchensList = () => {
  return (
    <Box>
    <SimpleGrid columns={3} spacing='20px' spacingY='80px' minChildWidth='400px'>
      {
        catalogKitchens.map((kitchen, i) =>
          <CatalogItem key={uniqid()}
                       title={kitchen.title}
                       images={kitchen.images[0]}
                       alt={kitchen.alt}
                       style={kitchen.style}

        >
            <Flex fontFamily='Open Sans' fontSize='13px' color='rgba(0,0,0,.5)' mb='20px'>
              <HStack spacing='10px'>
                <Text>{kitchen.style}</Text>
                <Divider variant='brandPrimary' orientation='vertical'/>
                {
                  kitchen.materials.fasade && (
                    <Flex>
                      <Text lineHeight='20px' mr='3px'>{kitchen.materials.fasade}</Text>
                      <Tooltip hasArrow variant='tooltipVariant' arrowShadowColor='rgba(0,0,0,.1)'
                               label='МДФ обладает высокой прочностью, доступен в широком спектре отделок,
                               включая окраску и шпонирование, экологически безопасен,
                               не подвержен деформациям от влаги и изменениям температуры,
                               и обладает возможностью создания сложных дизайнерских решений'
                               bg='white' color='black'>
                        <Icon boxSize={5} _hover={{color: '#BF2B45'}}><InfoOutlineIcon/></Icon>
                      </Tooltip>
                    </Flex>
                  )
                }
                <Flex>
                  <Text lineHeight='20px' mr='3px'>{kitchen.materials.karkas}</Text>
                  <Tooltip hasArrow variant='tooltipVariant'
                           label='ЛДСП имеет преимущества в виде доступности,
                            широкого выбора цветов и текстур, прочности,
                            устойчивости к царапинам и истиранию,
                            а также возможности легкого ухода.'
                           arrowShadowColor='rgba(0,0,0,.1)' bg='white' color='black'>
                    <Icon boxSize={5} _hover={{color: '#BF2B45'}}><InfoOutlineIcon/></Icon>
                  </Tooltip>
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
          </CatalogItem>
        )
      }
    </SimpleGrid>
    </Box>
  );
};

export default CatalogKitchensList;