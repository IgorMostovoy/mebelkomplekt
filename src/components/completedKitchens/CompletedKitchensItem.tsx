import React from 'react';
import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type CompletedKitchensItemProps = {
  images: any;
  alt: string;
  title?: string;
  style: string;
  karkas?: string;
  fasade?: string;
  children?: React.ReactNode;
};
const CompletedKitchensItem = ({
  images,
  alt,
  title,
  children,
}: CompletedKitchensItemProps) => {
  return (
    <>
      <>
        <Flex direction="column" w="100%" padding="7px" maxW="350px" m="0 auto">
          <Link to={`/completed/${title}`}>
            <Image
              src={images}
              alt={alt}
              cursor="pointer"
              minH="350px"
              maxH="350px"
              w="100%"
              mb="10px"
            />
          </Link>

          <Text
            fontFamily="SangBleuSunrise-Light-WebXL"
            fontSize="1.5rem"
            fontWeight="600"
            mb="10px"
          >
            Кухня {title}
          </Text>
          {children}
          <Divider variant="brandPrimary" />
        </Flex>
      </>
    </>
  );
};

export default CompletedKitchensItem;
