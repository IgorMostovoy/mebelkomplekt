import React, { useState } from 'react';
import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';

type CompletedProjectsItemProps = {
  image: any;
  title: string;
  cost: string;
};
const CompletedList = ({ image, title, cost }: CompletedProjectsItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Flex direction="column" m="0 15px" flexBasis="100%">
        <Box
          boxShadow="-4px 4px 5px -2px rgba(34, 60, 80, 0.7)"
          overflow="hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          width="100%"
          height="100%"
          mb="10px"
          position="relative"
          _hover={{
            '& img': {
              transform: 'scale(1.1)',
              filter: 'brightness(80%)',
            },
            '& button': {
              bottom: isHovered ? '20px' : '-40px',
              opacity: isHovered ? 1 : 0,
            },
          }}
        >
          <Box
            position="absolute"
            zIndex="3"
            top="0"
            left="2"
            w="100%"
            h="60px"
            fontFamily="SangBleuSunrise-Bold-WebXL"
            fontWeight="bold"
            color="black"
          ></Box>
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h={isHovered ? '5px' : 0}
            bg="black"
            transition="height 0.3s"
            zIndex={1}
          />
          <Image
            src={image}
            cursor="pointer"
            transition="0.3s"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            bottom={isHovered ? '0' : '-50px'}
            left={0}
            w="100%"
            h="50px"
            bg="rgba(0, 0, 0)"
            transition="bottom 0.3s"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="completedProjectsButton" mt="35px">
              Смотреть проект
            </Button>
          </Box>
        </Box>
        <Box>
          <Flex justifyContent="space-between">
            <Text
              fontFamily="SangBleuSunrise-Regular-WebXL"
              fontSize="1.1rem"
              fontWeight="500"
              mb="10px"
            >
              Кухня {title}
            </Text>
            <Text
              fontFamily="SangBleuSunrise-Regular-WebXL"
              fontSize="1.1rem"
              fontWeight="600"
              mb="10px"
              color="#BF2B45"
            >
              {cost} ₽
            </Text>
          </Flex>

          <Divider variant="brandPrimary" />
        </Box>
      </Flex>
    </>
  );
};

export default CompletedList;
