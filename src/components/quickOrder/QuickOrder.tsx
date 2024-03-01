import React from 'react';
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import FormComponent from '../form/FormComponent';
import uniqid from 'uniqid';

const pointsValue = [
  {
    point: '01.',
    describe: `Отправьте нам свой эскиз с выбранной моделью из каталога.`,
  },
  {
    point: '02.',
    describe: 'Вызвать замерщика на дом.',
  },
  {
    point: '03.',
    describe: 'Оплатить заказ замерщику или в офисе.',
  },
  {
    point: '04.',
    describe: 'Дождаться изготовления мебели.',
  },
  {
    point: '05.',
    describe: 'Согласовать время доставки и сборки.',
  },
];
const QuickOrder = () => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Heading
          as="h3"
          pb="10px"
          fontSize="60px"
          fontFamily="SangBleuSunrise-Light-WebXL"
          fontWeight="500"
          letterSpacing="2px"
          textTransform="uppercase"
          mb="25px"
        >
          <Box as="span" color="#BF2B45">
            Б
          </Box>
          ыстрый заказ
        </Heading>

        <Box
          maxW="1440px"
          bg="url('/catalogKitchens/Neo/imgKitchen/1.webp')"
          position="relative"
          backgroundSize="cover"
          backgroundPosition="center"
          ml="-20px"
          mr="-20px"
          w="100vw"
          boxSizing="border-box"
          overflow="hidden"
          _after={{
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 100%)',
            zIndex: '0',
          }}
        >
          <Flex justifyContent="space-around" maxW="1400px">
            <Flex direction="column" justifyContent="center">
              <Divider variant="quickOrder" mb="50px" />
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  zIndex={1}
                  fontSize="1.5rem"
                  fontFamily="SangBleuSunrise-Regular-WebXL"
                  fontWeight="600"
                  letterSpacing="0.5px"
                >
                  {pointsValue.map((value) => (
                    <Box key={uniqid()} p="20px 0">
                      <Box display="flex">
                        <Text>{value.point}</Text>
                        <Text pl="5px">{value.describe}</Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Flex>

              <Divider variant="quickOrder" mt="50px" />
            </Flex>
            <Box alignSelf="center" p="50px 0">
              <Card maxW="500px">
                <CardBody
                  zIndex={1}
                  boxShadow="2px 2px 8px -3px rgba(34, 60, 80, 0.76)"
                >
                  <FormComponent />
                </CardBody>
              </Card>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default QuickOrder;
