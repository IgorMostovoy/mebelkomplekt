import React, {useState} from 'react';
import axios from "axios";
import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  FormControl,
  useToast, Checkbox, Box, Flex
} from "@chakra-ui/react";
import styles from "./callBackForm.module.css";
import InputMask from "react-input-mask";
import {CheckIcon} from "@chakra-ui/icons";

const CallBackForm = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [toastLoading, setToastLoading] = useState(false);
  const [phoneCompleted, setPhoneCompleted] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
  const toast = useToast();


  const handlePhoneChange = (value: any) => {
    setPhone(value);
    const enteredCharsCount = value.replace(/[^0-9]/g, '').length; // Считаем только введенные цифры
    setPhoneCompleted(enteredCharsCount === 11); // Проверяем, достаточно ли введено символов для полного номера
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setToastLoading(true);


    if (phone.length !== 18) {
      setError('Пожалуйста, введите полный номер телефона');
      setToastLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5600/send-phone', {phone});

      if (response.status === 200) {
        setToastLoading(false);

        toast({
          title: "Заявка отправлена",
          description: "Мы вам перезвоним",
          status: 'success'
        });
      } else {
        console.error('Ошибка сервера:', response.data);
        setError('Произошла ошибка при отправке номера телефона.');
      }
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      setError('Произошла ошибка при отправке номера телефона.');
    }

    setPhone('');
    onClose();
  };

  const handleModalClose = () => {
    onClose();
    setPhone('');
    setPhoneCompleted(false);
  };

  return (
    <>
      <Button onClick={onOpen}>Обратный звонок</Button>
      <Modal
        variant='purple'
        size='xs'
        isCentered
        isOpen={isOpen}
        onClose={handleModalClose}
        motionPreset='slideInBottom'

      >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='10%'
          backdropBlur='10px'/>
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader textAlign='center' m='0 auto' pt='30px' maxW='80%' fontFamily='SangBleuSunrise-Regular-WebXL'
                         lineHeight='1.5rem' color='rgba(0,0,0,0.5)'>Оставьте свои контактные данные</ModalHeader>
            <Text textAlign='center' fontSize='0.9rem' lineHeight='1rem' mb='1rem' color='rgba(0,0,0,0.7)'
                  fontFamily='SangBleuSunrise-Regular-WebXL'>
              И мы перезвоним Вам для уточнения и согласования деталей заказа
            </Text>
            <ModalCloseButton/>
            <ModalBody display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
              <Flex alignItems='center' w='100%' justifyContent='center' position='relative'>
                <InputMask
                  id='phone'
                  mask="+7 (999) 999-99-99"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="+7 (000) 000-00-00"
                  className={`${styles.input} ${phoneCompleted ? styles.filled : ''}`}
                  maskChar="_"

                />
                {phoneCompleted &&
                    <Box position='absolute' right='0'>
                      <CheckIcon color='#32CD32'/>
                    </Box>
                }
              </Flex>
            </ModalBody>
            <ModalFooter display='flex' flexDirection='column'>
              <Box mb='20px'>
                <Checkbox w='100%' fontSize='10px' defaultChecked isChecked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                          size='md'>Я ознакомлен (а) с Политикой
                  конфиденциальности и согласен(а) на обработку персональных данных</Checkbox>
              </Box>
              <Button m='0 auto' mb='10px' variant='orderButton' type='submit' isLoading={toastLoading}
                      isDisabled={!phoneCompleted || !isChecked}
                      colorScheme='blue' mr={3}>
                Заказать звонок
              </Button>

            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>

    </>
  );
};

export default CallBackForm;