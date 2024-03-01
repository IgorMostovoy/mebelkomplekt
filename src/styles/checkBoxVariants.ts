import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: '#BF2B45',
    _checked: {
      bg: '#BF2B45',
      borderColor: '#BF2B45',
    },
  },
  icon: {
    _checked: {
      bg: '#BF2B45',
    },
  },
});
const sizes = {
  xl: definePartsStyle({
    control: defineStyle({
      boxSize: 7,
    }),
    label: defineStyle({
      fontSize: '11px',
      fontFamily: 'Open Sans',
    }),
    icon: defineStyle({
      boxSize: 6,
    }),
  }),

  md: definePartsStyle({
    control: defineStyle({
      boxSize: 5,
    }),
    label: defineStyle({
      fontSize: '11px',
      lineHeight: '14px',
      fontFamily: 'Open Sans',
      width: '100%',
    }),
    icon: defineStyle({
      boxSize: 6,
    }),
    container: defineStyle({
      width: '100%',
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
});
