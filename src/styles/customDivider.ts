import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(0,0,0,0.4)',
});

const quickOrder = defineStyle({
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'rgba(0,0,0,0.3)',
  zIndex: '2',
});

const titleDivider = defineStyle({
  borderWidth: '10px',
  borderStyle: 'solid',
  borderColor: 'white',
  marginLeft: '5px',
});
export const dividerTheme = defineStyleConfig({
  variants: {
    brandPrimary,
    quickOrder,
    titleDivider,
  },
});
