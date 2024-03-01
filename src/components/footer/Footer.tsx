import React from 'react';
import { Box, Divider, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { PhoneIcon, TimeIcon } from '@chakra-ui/icons';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import { SlSocialVkontakte } from 'react-icons/sl';

const Footer = () => {
  return (
    <Box
      background="linear-gradient(90deg, rgba(84,74,65,0.7) 0%, rgba(84,74,65,0.6) 100%)"
      width="100vw"
      h="300px"
      fontFamily="Open Sans"
      fontSize="1.1rem"
    >
      <Flex
        maxW="1440px"
        color="white"
        h="100%"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        maxWidth="1440px"
        m="0 auto"
        p="0 20px"
      >
        <Box w="15%">
          {' '}
          <Link as={RouterLink} to="/">
            <Image src={logo} w="70%" />
          </Link>
        </Box>

        <Flex direction="column" w="20%" justifyContent="space-between" h="40%">
          <Text>Каталог</Text>
          <Text>Реализованные проекты</Text>
          <Text>Сертификаты</Text>
        </Flex>
        <Box h="50%">
          <Divider orientation="vertical" />
        </Box>

        <Flex direction="column" w="20%" justifyContent="space-between" h="40%">
          <Text>Распродажа</Text>
          <Text>Расчет стоимости</Text>
          <Text>Контакты</Text>
        </Flex>
        <Box h="50%">
          <Divider orientation="vertical" />
        </Box>
        <Flex direction="column" w="20%" justifyContent="space-between" h="50%">
          <Box display="flex" alignItems="center">
            <TimeIcon />
            <Text ml="10px">Пн-Вс с 9-00 до 19-00</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon color="#01DC01" />
            <Text ml="10px" fontWeight="bold">
              <Link href="tel:+79996309999">+7 (999) 630-99-99</Link>
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
          >
            <Box display="flex" flexDirection="column">
              <Text fontSize="0.8rem">Пишите, мы онлайн:</Text>
              <Box display="flex" justifyContent="center" fontSize="40px">
                <Link href="https://wa.me/79996309999" isExternal p="5px">
                  <FaWhatsapp
                    style={{
                      color: '#25d366',
                      fill: 'fff',
                    }}
                  />
                </Link>
                <Link href="https://t.me/@example" isExternal p="5px">
                  <FaTelegram style={{ color: '#0088cc' }} />
                </Link>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="0.8rem">Мы в соцсетях:</Text>
              <Box fontSize="40px">
                <Link href="https://vk.com/public220437124" isExternal>
                  <SlSocialVkontakte color="#45668e" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
