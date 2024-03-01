import {cardAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

// define custom styles for funky variant
const variants = {
  funky: definePartsStyle({
    container: {
      borderRadius: '0',
      boxShadow: '0px 0px 9px -3px rgba(34, 60, 80, 0.76)',
      borderColor: "transparent",
      borderWidth: "0.5px",
      width: '420px',
    },
    header: {},
    body: {
      padding: '0',
    },

    footer: {
      paddingTop: '2px',
    },
  })
};

export const cardTheme = defineMultiStyleConfig({variants});