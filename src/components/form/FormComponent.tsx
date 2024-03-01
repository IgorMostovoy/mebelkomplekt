import React, {ChangeEvent, useRef, useState} from 'react';
import styles from "../orderButton/orderButton.module.css";
import {Box, Button, Checkbox, Flex, HStack, Input, Text, Textarea, useToast, VStack} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import {AttachmentIcon, DownloadIcon} from "@chakra-ui/icons";


const FormComponent = () => {

  const [inputName, setInputName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [textariaValue, setTextariaValue] = React.useState('')
  const [files, setFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(true)
  const [toastLoading, setToastLoading] = useState(false);
  const toast = useToast();
  const handleBlockClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const sendEmail = async (e: any) => {
    e.preventDefault();
    setToastLoading(true)
    const formData = new FormData();
    formData.append("name", inputName)
    formData.append("phone", phoneNumber)
    formData.append("message", textariaValue)
    //@ts-ignore
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }
    setInputName('');
    setPhoneNumber('');
    setTextariaValue('');
    setFiles([])
    try {
      const response = await fetch("http://localhost:5600/send-email", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setToastLoading(false);
        toast({
          title: "Заявка отправлена",
          description: "Мы вам перезвоним",
          status: 'success'
        });
      } else {
        console.log("Failed to sent email");
      }
    } catch (e: any) {
      toast({
        title: "Ошибка загрузки данных",
        description: e.message,
        status: "error",
      });
    }
  }
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
    const fileList = e.dataTransfer.files;
    const filesArray = Array.from(fileList);
    setFiles([...files, ...filesArray]);
  }


  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    setTextariaValue(inputValue)
  }

  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  return (
    <Box zIndex={5}>
      <form onSubmit={sendEmail}
            encType={"multipart/form-data"}
      >
        <VStack align='stretch' spacing={5}>
          <Box>
            <label className={styles.label} htmlFor="name">Имя</label>
            <Input id='name' placeholder='Ваше имя' value={inputName}
                   onChange={(e) => setInputName(e.target.value)}
                   focusBorderColor='black'
                   variant='flushed'
                   fontFamily='SangBleuSunrise-Light-WebXL'
                   fontSize='25px'
                   fontWeight='600'
            />
          </Box>
          <Box>
            <label className={styles.label} htmlFor="phone">Телефон</label>
            <InputMask
              id='phone'
              mask="+7 (999) 999-99-99"
              value={phoneNumber}
              onChange={handleChangePhone}
              placeholder="+7 (000) 000-00-00"
              className={styles.inputMask}/>
          </Box>
          <Box>
            <Textarea
              h='120px'
              id='message'
              value={textariaValue}
              onChange={handleChangeTextArea}
              placeholder='Укажите размеры и любую дополнительную информацию для предварительного расчета'
              size='sm'
              focusBorderColor='black'
            />
          </Box>
          <Box>
            <Box onDragEnter={handleDrag}
                 onDragOver={handleDrag}
                 onDragLeave={handleLeave}
                 onDrop={handleDrop}
                 padding='5px' bgColor='rgba(0, 0, 0, 0.04)' border='1px solid rgba(0, 0, 0, 0.2)'>
              <Flex direction='column'>
                <Box display='flex' alignItems='center' padding='5px'>
                  <AttachmentIcon/>
                  <Text ml='5px'>файлы:</Text>
                  {files.length > 0 && (
                    <>
                      <Box as='ul' ml='5px' fontWeight='600' fontSize='14px' display='flex'
                           flexDirection='column'>
                        {files.map((file, id) =>
                          <>
                            <Box key={id} as='li' listStyleType='none'>{file.name}</Box>
                          </>
                        )}
                      </Box>
                    </>
                  )}
                </Box>
                <Box onClick={handleBlockClick} border='2px dashed rgba(0, 0, 0, 0)' transition='0.2s linear'
                     cursor='pointer' _hover={{
                  border: '2px dashed rgba(0, 0, 0, 0.4)'
                }} m='10px' minH='120px' display='flex'
                >
                  <label className={styles.label_files}>
                    <Input type='file' ref={fileInputRef} multiple={true} id='photos' name='photos'
                           onChange={handleChangeFiles}
                           m='0'
                           p='0'
                           w='0'
                           h='0'
                           visibility='hidden'/>
                  </label>
                  <DownloadIcon boxSize={20} alignSelf='center' m='0 15px' color='rgba(0, 0, 0, 0.2)'/>
                  <Text fontFamily='Open Sans' fontWeight='600' fontSize='18px' alignSelf='center'
                        color='rgba(0, 0, 0, 0.3)'>Перетащите один
                    или несколько файлов в эту область<Box as='span' color='#BF2B45' display='block'>или
                      выберите файл</Box></Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box>
            <Checkbox defaultChecked isChecked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                      size='xl'>Я ознакомлен (а) с Политикой
              конфиденциальности и согласен(а) на обработку персональных данных</Checkbox>
          </Box>
          <Box>
            <Button variant='orderButton' type='submit' isLoading={toastLoading && true} isDisabled={!isChecked}>Отправить
              заявку</Button>
          </Box>
        </VStack>
      </form>


    </Box>
  );
};

export default FormComponent;