import React from 'react';
import {Box, Center, Divider, Heading, HStack, Image, Stack, Text} from '@chakra-ui/react';
import {InfoOutlineIcon} from "@chakra-ui/icons";
import quality from '../../assets/quality.png'
import lightbuy from '../../assets/lightbuy.png'
import checklist from '../../assets/checklist.png'

const QualityBanner = () => {
  return (
    <>

        <Box
          w='45%'
          maxW='700px'
          h='100px'

          >

          <Center h='100%'>
            <HStack ml='15px'>
              <Box display='flex' position='relative' maxW='140px'>
                <Image src={quality} boxSize='50px'/>
                <Text lineHeight='18px' ml='5px'>Лучшее качество</Text>
                <InfoOutlineIcon position='absolute' bottom='0' right='0' cursor='pointer'/>
              </Box>
              <Divider variant='brandPrimary' orientation='vertical' height='70px'/>
              <Box display='flex' position='relative' maxW='140px' ml='10px'>
                <Image src={lightbuy} boxSize='50px'/>
                <Text lineHeight='18px' ml='5px'>Удобный заказ</Text>
                <InfoOutlineIcon position='absolute' bottom='0' right='0' cursor='pointer'/>
              </Box>
              <Divider variant='brandPrimary' orientation='vertical' height='70px'/>
              <Box display='flex' position='relative' maxW='140px' ml='10px'>
                <Image src={checklist} boxSize='50px'/>
                <Text lineHeight='18px' ml='5px'>Личный контроль</Text>
                <InfoOutlineIcon position='absolute' bottom='0' right='0' cursor='pointer'/>
              </Box>
            </HStack>
          </Center>
        </Box>

    </>

  );
};

export default QualityBanner;