import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import FormComponent from '../form/FormComponent';

const OrderButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [successfulNotification, setSuccessfulNotification] = useState(false);

  const successfulSubmission = () => {
    setSuccessfulNotification(true);
    setTimeout(() => {
      onClose();
      setSuccessfulNotification(false);
    }, 1500);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        variant="brandPrimary"
        ml="10px"
        fontFamily="Open Sans"
      >
        Заказать кухню
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} size={'md'}>
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent
          maxH="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <DrawerCloseButton />
          {successfulNotification && (
            <Alert status="success" position="absolute" top="0" right="0">
              <AlertIcon />
              Форма заказа отправлена, мы вам скоро перезвоним!
            </Alert>
          )}
          <DrawerHeader
            fontFamily="SangBleuSunrise-Light-WebXL"
            fontWeight="300"
            fontSize="3rem"
          >
            Заявка
          </DrawerHeader>
          <DrawerBody maxH="100vh">
            <FormComponent />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default OrderButton;
