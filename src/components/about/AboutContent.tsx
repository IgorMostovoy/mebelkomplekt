import React from 'react';
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import kitchenPhoto from '../../assets/aboutImg/1.webp'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import CallBackForm from "../form/CallBackForm";

const AboutContent = () => {
  return (
    <Box position='relative'>
      <Flex justifyContent='space-between' w='100%' position="relative" mb='150px'>
        <Box position="relative" w='35%'>
          <Box position='absolute' top='15%' left='0' width='160%' h='47%' backgroundColor='#544a41' zIndex='1'
               overflow='hidden'>
            <Box color='white' fontFamily='Open Sans' padding='42px' lineHeight='1.9rem' letterSpacing='0.12rem'>
              <Text fontSize='1.4rem' mb='20px'>Наработки длинной в 26 лет</Text>
              <Text fontSize='1.1rem' ml='30px'>Каждый производитель заявляет, что делает все для своих покупателей, но
                не каждый
                производитель
                способен подтвердить свои заявления многолетней историей </Text>
            </Box>
          </Box>
        </Box>
        <Box w='65%' overflow="hidden" maxH="600px" position="relative" ml='auto'>
          <Image src={kitchenPhoto} w='100%' objectFit="cover"/>
          <Box position='absolute' top='54%' left='0' width='21%' h='15%' backgroundColor='#922841' zIndex='2'/>
        </Box>
      </Flex>

      <Flex w='100%' justifyContent='space-around' fontFamily='SangBleuSunrise-Light-WebXL' letterSpacing='0.1px'
            fontSize='1.1rem' lineHeight='22px'>
        <Box position="relative" w='25%'>
          <Box position='absolute' fontSize='15rem' fontFamily='SangBleuSunrise-Regular-WebXL' top='-1rem'
               left='-3.5rem'
               lineHeight='10rem' fontWeight='700'
               color='rgb(84, 74, 65, 0.1)'>1</Box>
          <Text>МK-Kitchen – бренд качественной и
            доступной мебели для кухни
            рассчитанной на покупателя ценящего домашний уют, современный дизайн и
            высокое качество приобретаемой мебели. <br/>Наши коллекции сочетают в себе
            тенденции в области дизайна, современные материалы и комплектуются
            фурнитурой одного из лучшего европейского производителя – компании
            Hettich, а наше производство оснащено только современным высокоточным
            оборудованием группы компаний Homag.</Text>

        </Box>

        <Box position="relative" w='25%'>
          <Box position='absolute' fontSize='15rem' fontFamily='SangBleuSunrise-Regular-WebXL' top='-1rem'
               left='-3.5rem'
               lineHeight='10rem' fontWeight='700'
               color='rgb(84, 74, 65, 0.1)'>2</Box>
          <Text ml='30px'>Мы ежегодно пополняем наши коллекции новыми кухнями в различной
            стилистике – от уютной классики до моделей в стиле Loft. <br/>Каждая коллекция
            включает в себя не только решение для оформления кухни, но и квартиры
            студии, а разнообразие элементов и возможное комбинирование текстур и
            оттенков дают возможность интерьерного проектирования.</Text>
        </Box>
        <Box w='25%' position='relative'>
          <Box position='absolute' fontSize='15rem' fontFamily='SangBleuSunrise-Regular-WebXL' top='-1rem'
               left='-3.5rem'
               lineHeight='10rem' fontWeight='700'
               color='rgb(84, 74, 65, 0.1)'>3</Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Срок изготовления – от 10 дней
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2} fontFamily='Open Sans' color='rgba(0,0,0, 0.5)' fontSize='0.85rem'
                              letterSpacing='0.5px' lineHeight='18px'>
                Ваша кухня будет изготовлена в течение всего 10 дней, гарантируя быструю и качественную реализацию
                заказа.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Функциональность
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2} fontFamily='Open Sans' color='rgba(0,0,0, 0.5)' fontSize='0.85rem'
                              letterSpacing='0.5px' lineHeight='18px'>
                Каждая деталь кухни разработана с акцентом на удобство и практичность, чтобы сделать вашу повседневную
                жизнь более комфортной.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Актуальные текстуры и оттенки
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2} fontFamily='Open Sans' color='rgba(0,0,0, 0.5)' fontSize='0.85rem'
                              letterSpacing='0.5px' lineHeight='18px'>
                Мы предлагаем широкий выбор современных текстур и оттенков, чтобы вы могли воплотить свои мечты в жизнь.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Современные материалы
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2} fontFamily='Open Sans' color='rgba(0,0,0, 0.5)' fontSize='0.85rem'
                              letterSpacing='0.5px' lineHeight='18px'>
                Наши кухни созданы из современных материалов, которые прослужат вам долгие годы.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Фурнитура от одного из ведущих европейских производителей –
                    Hettich
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2} fontFamily='Open Sans' color='rgba(0,0,0, 0.5)' fontSize='0.85rem'
                              letterSpacing='0.5px' lineHeight='18px'>
                Мы уделяем особое внимание каждой детали, включая фурнитуру, предоставляемую одним из лучших
                производителей в Европе – компанией Hettich.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

        </Box>
      </Flex>
      <Flex justifyContent='space-between' alignItems='center' w='100%' fontFamily='SangBleuSunrise-Light-WebXL'
            color='rgb(84, 74, 65)'>
        <Text fontSize='25px' fontWeight='600'>1998</Text>
        <Text fontSize='144px' color='rgb(84, 74, 65, 0.3)'>26 лет</Text>
        <Text fontSize='25px' fontWeight='600'>2024</Text>
      </Flex>
    </Box>
  );
};

export default AboutContent;