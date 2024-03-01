import React, { useEffect, useState } from 'react';
import styles from './completedKitchenCard.module.css';
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

type CompletedModalZoomPhotoProps = {
  images: {
    url: string;
    width: number;
    height: number;
  }[];
};

const CompletedModalZoomPhoto = ({ images }: CompletedModalZoomPhotoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpen = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const handlePrev = () => {
    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1,
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1,
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen) {
        if (event.key === 'ArrowLeft') {
          handlePrev();
        } else if (event.key === 'ArrowRight') {
          handleNext();
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev]);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          750: 2,
          900: 3,
        }}
      >
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <img
              className={styles.imageEffect}
              key={index}
              src={image.url}
              alt={`photo-${index}`}
              onClick={() => handleOpen(index)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Modal
        size={'xl'}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bgColor="rgba(0,0,0, 0.8)" />
        <ModalContent m={'20px'}>
          <ModalCloseButton color="white" />

          <>
            <Button
              position="absolute"
              top="50%"
              left="0"
              transform="translate(-100%, -50%)"
              border="none"
              bgColor="transparent"
              _hover={{ bgColor: 'transparent' }}
            >
              <ArrowLeftIcon
                color="rgba(255,255,255, 0.5)"
                boxSize="10"
                transition="transform 0.3s"
                _hover={{
                  transform: 'scale(1.2)',
                  color: 'white',
                }}
                onClick={handlePrev}
              />
            </Button>
            <Button
              position="absolute"
              bottom="50%"
              right="0"
              transform="translate(100%, 50%)"
              border="none"
              bgColor="transparent"
              _hover={{ bgColor: 'transparent' }}
              onClick={handleNext}
            >
              <ArrowRightIcon
                color="rgba(255,255,255, 0.5)"
                boxSize="10"
                transition="transform 0.3s"
                _hover={{
                  transform: 'scale(1.2)',
                  color: 'white',
                }}
              />
            </Button>
          </>

          <ModalBody p={0}>
            <Image src={images[selectedImageIndex].url} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompletedModalZoomPhoto;
