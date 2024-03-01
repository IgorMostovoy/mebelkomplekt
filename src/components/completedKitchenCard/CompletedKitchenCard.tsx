import React, { useRef } from 'react';
import completedKitchens from '../../assets/json/completedProjects.json';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import uniqid from 'uniqid';
import CompletedKitchenOption from './CompletedKitchenOption';
import { MinusIcon } from '@chakra-ui/icons';

import CompletedModalZoomPhoto from './CompletedModalZoomPhoto';

// const breakpointColumnsObj = {
//   default: 3,
//   1100: 2,
//   700: 1,
// };

const CompletedKitchenCard = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const { title } = useParams();

  return (
    <Box bgColor="white" mb="100px" pt="120px">
      {completedKitchens
        .filter((completedKitchen) => title === completedKitchen.title)
        .map((completedKitchen) => (
          <Flex key={uniqid()}>
            <Box w="60%" ref={photoRef}>
              <CompletedModalZoomPhoto images={completedKitchen.images} />
            </Box>
            <Flex
              w="40%"
              position="relative"
              direction="column"
              minW="300px"
              ml="10px"
              ref={descriptionRef}
            >
              <Box
                pos="absolute"
                top="0"
                left="-10px"
                bottom="0"
                w="10px"
                bgGradient="linear(to-r, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1))"
              />
              <Divider />
              <Text
                m="20px 0"
                fontSize="1.1rem"
                ml="15px"
                color="rgba(0,0,0,.6)"
                letterSpacing="0.5px"
                fontFamily="Open Sans"
              >
                {completedKitchen.place}
              </Text>
              <Divider mb="30px" />
              <Flex maxW="100%" flexWrap="wrap" justifyContent="space-between">
                <CompletedKitchenOption
                  title={'Стиль'}
                  describe={completedKitchen.style}
                />
                <CompletedKitchenOption
                  title={'Размер кухни'}
                  describe={completedKitchen.size}
                />
                <CompletedKitchenOption
                  title={'Материал фасадов'}
                  describe={completedKitchen.material}
                />
                <CompletedKitchenOption
                  title={'Цвет фасадов'}
                  describe={completedKitchen.fasadeColor}
                />
                <CompletedKitchenOption
                  title={'Цвет каркаса'}
                  describe={completedKitchen.karkasColor}
                />
                <CompletedKitchenOption
                  title={'Фрезеровка фасадов'}
                  describe={completedKitchen.milling}
                />
                <CompletedKitchenOption
                  title={'Столешница'}
                  describe={completedKitchen.table}
                />
                <CompletedKitchenOption
                  title={'Ручки'}
                  describe={completedKitchen.handles}
                />
                <CompletedKitchenOption
                  title={'Установка'}
                  describe={completedKitchen.installation}
                />
                <CompletedKitchenOption
                  title={'Фурнитура'}
                  describe={completedKitchen.furniture}
                />
              </Flex>
              <Divider />
              <Box>
                <CompletedKitchenOption
                  addTitle={'Дополнительные опции'}
                  addDescribe={completedKitchen.additionalDescription}
                />
              </Box>
              <Divider />
              <Box m="15px 0" pl="15px">
                <Text
                  fontFamily="Open Sans"
                  mb="5px"
                  w="100%"
                  fontSize="1.1rem"
                  color="rgba(0,0,0,.5)"
                  letterSpacing="-0.5px"
                  pl="0"
                >
                  Доставка:
                </Text>
                {completedKitchen.deliveryDescription.map((item) => (
                  <Box key={uniqid()}>
                    <List>
                      <ListItem
                        fontFamily="SangBleuSunrise-Regular-WebXL"
                        fontSize="0.9rem"
                        fontWeight="600"
                        display="flex"
                        alignItems="center"
                        mb="5px"
                        letterSpacing="-0.2px"
                      >
                        <ListIcon as={MinusIcon} />
                        {item};
                      </ListItem>
                    </List>
                  </Box>
                ))}
              </Box>
              <Divider />
              <CompletedKitchenOption
                titleCost={'Фактическая стоимость'}
                describeCost={completedKitchen.cost}
              />
              <Divider mb="30px" />
              <Button variant="catalogButton" marginLeft="15px" maxW="100%">
                Хочу такой же проект
              </Button>
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};

export default CompletedKitchenCard;
