import React from 'react';
import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import CatalogKitchensList from '../components/catalogKitchens/CatalogKitchensList';

const CatalogKitchens = () => {
  return (
    <>
      <Box mb="50px" padding="120px 20px">
        <Heading
          as="h3"
          pb="10px"
          fontSize="60px"
          fontFamily="SangBleuSunrise-Light-WebXL"
          fontWeight="500"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          <Box as="span" color="#BF2B45">
            К
          </Box>
          аталог кухонь
        </Heading>
        <Divider variant="brandPrimary" w="100%" mb="20px" />
        <Box maxW="80%" mb="50px">
          <Text
            fontFamily="Open Sans"
            fontSize="14px"
            lineHeight="1.5"
            color="rgba(0,0,0,.6)"
            mb="20px"
          >
            Кухня - это не просто место приготовления пищи, это сердце дома. Это
            место, где мы собираемся вместе с семьёй и друзьями, чтобы
            насладиться вкусной едой и хорошими беседами. Всегда приятно
            обустраивать кухню по своему вкусу и желанию. Уютный островок для
            завтраков вдвоём, возможность уютно расположиться с книгой и чашкой
            ароматного кофе - это всё делает кухню особенным местом, где мы
            чувствуем себя комфортно и свободно.
          </Text>
          <Text
            fontFamily="Open Sans"
            fontSize="14px"
            lineHeight="1.5"
            color="rgba(0,0,0,.6)"
          >
            Мы предлагаем вам широкий выбор кухонь, от классических до
            современных моделей, чтобы каждый мог насладиться жизнью и готовить
            с радостью. Создайте уютное место, где ваши кулинарные мечты станут
            реальностью, и дни будут наполнены теплом и счастьем
          </Text>
        </Box>
        <CatalogKitchensList />
      </Box>
    </>
  );
};

export default CatalogKitchens;
