import React, {useEffect, useRef, useState} from 'react';
import {Box, Center, Divider, Flex, Image, Link, Text} from "@chakra-ui/react";
import logo from '../../../assets/logo.png'
import styles from './topBar.module.css'
import {TriangleDownIcon} from '@chakra-ui/icons'
import {Link as RouterLink} from "react-router-dom";
import OrderButton from "../../orderButton/OrderButton";
import uniqid from "uniqid";
import {motion} from "framer-motion"
import CallBackForm from "../../form/CallBackForm";

const MotionBox = motion(Box);
const TopBar = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuHover = (index: any) => {
    setIsOpen(index);
  };

  const handleMenuLeave = () => {
    setIsOpen(null);
  };

  const menuItems = [
    {
      label: 'О нас',
      id: 'about',
      subMenu: ['О производстве', 'Сертификаты']
    },
    {
      label: 'Каталог',
      subMenu: ['MK Kitchen']
    },
    {
      label: 'Распродажа',
    },
    {
      label: 'Контакты',
      path: '/contacts'
    },
  ];


  const handleMenuClick = (menuItem: any) => {
    if (menuItem.id) {
      const element = document.getElementById(menuItem.id);
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
      }
      setIsOpen(null);
    } else if (menuItem.label === 'О нас') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      setIsOpen(null);
    }
  };

  return (
    <>
      <Box
          position='relative'
          top='0'
          left='0'
          right='0'
          zIndex='10'
          background='#F9FDFF'
          borderBottom='1.4px solid rgba(0,0,0,.2)'

      >

       <Flex>
         <Flex>
           <CallBackForm/>
           <Divider  orientation='vertical'/>
           <Text ml='10px' fontWeight='bold'><Link href="tel:+79996309999">+7 (999) 630-99-99</Link></Text>
         </Flex>
       </Flex>

      </Box>

      <Flex
        position='fixed'
        top={`${Math.min(41, Math.max(0, 41 - scrollY))}px`}
        insetX='0'
        w='100vw'
        h='70px'
        zIndex='10'
        background='#F9FDFF'
        justifyContent='center'

      >



        <Flex h='100%' maxW='1440px' p='0 20px' m='auto' alignItems='center' justifyContent='space-between'
              width='100%'>
          <Link as={RouterLink} to='/'><Image src={logo} w='65px' h='100%'/></Link>
          <Box as='nav' width='100%'>
            <Flex as='ul' justifyContent='space-around' listStyleType="none" alignItems='center' width='100%'
                  textTransform='uppercase' fontWeight='600' fontSize='14px' fontFamily="Open Sans"
                  letterSpacing='1.82px' padding={0} margin={0}>
              {
                menuItems.map((menuItem, index) =>
                  <Box as='li' key={uniqid()} position="relative" cursor='pointer'
                       onMouseEnter={() => handleMenuHover(index)} onMouseLeave={handleMenuLeave}>
                    <Link
                      as={RouterLink}
                      to={menuItem.path || ''}
                      _hover={{pb: '20px'}}
                      onClick={() => handleMenuClick(menuItem)}
                    >{menuItem.label}
                      {menuItem.subMenu && (
                        <TriangleDownIcon
                          boxSize="12px"
                          ml="5px"
                          mb="3px"
                          color={isOpen === index ? "black" : "gray.300"}
                        />
                      )}
                    </Link>

                    {isOpen === index && menuItem.subMenu && (

                      <ul
                        key={uniqid()}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          opacity: 1,
                          height: 'auto',
                          overflow: 'hidden',
                          border: '2px solid #BF2B45',
                          marginTop: '10px',
                          padding: '10px 0',
                          backgroundColor: '#F9FDFF',
                        }}
                      >
                        {menuItem.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={uniqid()}
                            as={RouterLink}
                            to={'/completed'}
                            onClick={() => setIsOpen(null)}
                            _focus={{outline: 'none'}}
                            display="block"
                            _hover={{textDecoration: 'none'}}
                          >
                            <Text
                              fontSize="sm"
                              color="gray.600"
                              p='3px 20px'
                              transition='0.3s'
                              _hover={{color: 'black', transform: 'scale(1.05)'}}
                              whiteSpace='nowrap'
                            > {subItem}</Text>
                          </Link>
                        ))}
                      </ul>

                    )}
                  </Box>
                )
              }
            </Flex>
          </Box>
          <OrderButton/>
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;




