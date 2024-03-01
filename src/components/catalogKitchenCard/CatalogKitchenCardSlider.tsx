import React, {useState} from "react";
import {Box, Image, useDisclosure} from "@chakra-ui/react";
import uniqid from "uniqid";
import {Navigation, Pagination, Keyboard} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type KitchenCardSliderProps = {
  images: string[],
}


export const CatalogKitchenCardSlider = ({images}: KitchenCardSliderProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [selectImage, setSelectImage] = useState('')

  const handleClick = (image: string) => {
    setSelectImage(image);
    onOpen()
  }

  return (

    <>
      <Box mb='100px'>
        <Swiper

          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={5}
          slidesPerView={2}
          loop={true}
          speed={800}
          navigation={true}
          keyboard={{enabled: true}}

        >
          {
            images.map(image =>
              <SwiperSlide key={uniqid()}>
                <Image onClick={() => handleClick(image)} src={image} cursor={'pointer'}/></SwiperSlide>
            )
          }
        </Swiper>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent   m={'20px'}>
          <ModalCloseButton/>
          <ModalBody p={0} >
            <Image src={selectImage} alt='select image'/>
          </ModalBody>


        </ModalContent>
      </Modal>

    </>


  );
};

