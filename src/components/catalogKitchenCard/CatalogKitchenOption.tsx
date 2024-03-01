import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type KitchenOptionProps = {
  title?: string;
  describe?: string;
};
const CatalogKitchenOption = ({ title, describe }: KitchenOptionProps) => {
  return (
    <>
      {title && (
        <Box>
          <Divider />
          <Flex justify="space-between" padding="15px 15px 15px 0">
            <Text
              fontFamily="Open Sans"
              fontSize="0.9rem"
              color="rgba(0,0,0,.5)"
              letterSpacing="-0.5px"
              pl="0"
            >
              {title}
            </Text>
            <Text
              textAlign="right"
              fontFamily="SangBleuSunrise-Regular-WebXL"
              fontSize="1rem"
              letterSpacing="-0.2px"
              maxW="80%"
            >
              {describe}
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default CatalogKitchenOption;
