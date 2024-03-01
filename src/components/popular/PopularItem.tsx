import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import PopularButton from './PopularButton';

type CatalogItemProps = {
  image: string;
  alt: string;
  length: string;
  cost: any;
};

const buttonTitles = [
  {
    title: 'Эконом',
    id: 'econom',
  },
  {
    title: 'Стандарт',
    id: 'standart',
  },
  {
    title: 'Премиум',
    id: 'premium',
  },
];
const PopularItem = ({ image, alt, length, cost }: CatalogItemProps) => {
  const [activeIndex, setActiveIndex] = useState('econom');
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = (id: string) => {
    setActiveIndex(id);
  };

  return (
    <Center>
      <Card variant="funky">
        <CardBody>
          <Box
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              transition="all .3s linear"
              _hover={{
                backgroundColor: 'rgba(0,0,0, 0.5)',
              }}
            >
              {isHovered && (
                <Button
                  position="absolute"
                  bottom="0"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  Характеристики
                </Button>
              )}
            </Box>

            <Image boxSize="sm" src={image} alt={alt} maxH="250px" w="100%" />
          </Box>

          <Stack>
            <ButtonGroup spacing="0" borderBottom="1px solid rgba(0,0,0,0.1)">
              {buttonTitles.map((button) => (
                <PopularButton
                  key={button.id}
                  {...button}
                  handleButtonClick={handleButtonClick}
                  isActive={activeIndex === button.id}
                />
              ))}
            </ButtonGroup>
          </Stack>
        </CardBody>

        <CardFooter p="0">
          <Flex
            display="flex"
            justifyContent="space-between"
            p="5px 20px"
            width="100%"
            fontSize="18px"
            color="rgba(0,0,0,0.4)"
            borderBottom="1px solid rgba(0,0,0,0.1)"
          >
            <Text>Размеры</Text>
            <Text>Стоимость</Text>
          </Flex>
        </CardFooter>
        <CardFooter p="5px" fontFamily="SangBleuSunrise-Light-WebXL">
          <Flex
            display="flex"
            p="3px 15px"
            justifyContent="space-between"
            width="100%"
          >
            <Text
              mt="4px"
              whiteSpace="nowrap"
              color="rgba(0,0,0,0.5)"
              fontWeight="600"
            >
              {length}
            </Text>
            <Text fontWeight="600" fontSize="20px">
              <Box as="span" color="#BF2B45">
                {cost[activeIndex]}
              </Box>{' '}
              руб.
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default PopularItem;
