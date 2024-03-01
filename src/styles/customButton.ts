import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  fontFamily: 'SangBleuSunrise-Regular-WebXL',
  textTransform: 'uppercase',
  fontSize: '15px',
  padding: '20px',
  color: 'white',
  borderRadius: '0',
  transition: 'transform 0.15s ease-out, background 0.15s ease-out',
  backgroundColor: '#BF2B45',

  _hover: {
    transform: 'scale(1.05)',
  },

  _active: {
    transform: 'scale(1, 1)',
  },
});

const cardButton = defineStyle({
  fontFamily: 'Open Sans',
  fontWeight: '600',

  w: '100%',
  padding: '0',
  borderRadius: '0',
  transition: '0.2s linear',

  _hover: {
    backgroundColor: '#BF2B45',
    color: 'white',
  },
  _active: {
    backgroundColor: '#BF2B45',
    color: 'white',
  },
});

const catalogButton = defineStyle({
  fontFamily: 'SangBleuSunrise-Regular-WebXL',
  textTransform: 'uppercase',
  alignSelf: 'center',
  fontSize: '12px',
  letterSpacing: '1.3px',
  padding: '25px 120px',
  color: '#BF2B45',
  borderRadius: '0',
  transition: 'transform 0.15s ease-out, background 0.15s ease-out',
  border: '1.5px solid #BF2B45',

  _hover: {
    transform: 'scale(1.05)',
  },
  _active: {
    transform: 'scale(1, 1)',
  },
});

const orderButton = defineStyle({
  fontFamily: 'SangBleuSunrise-Regular-WebXL',
  textTransform: 'uppercase',
  alignSelf: 'center',
  fontSize: '12px',
  letterSpacing: '1.3px',
  padding: '25px 120px',
  color: '#BF2B45',
  borderRadius: '0',
  transition: 'transform 0.15s ease-out, background 0.15s ease-out',
  border: '1.5px solid #BF2B45',
  width: '100%',
  _hover: {
    transform: 'scale(1.05)',
    _disabled: {
      transform: 'none',
    },
  },
  _active: {
    transform: 'scale(1, 1)',
  },
});

const completedProjectsButton = defineStyle({
  fontFamily: 'SangBleuSunrise-Regular-WebXL',
  letterSpacing: '1.3px',
  color: 'white',
  w: '100%',
});

export const buttonTheme = defineStyleConfig({
  variants: {
    brandPrimary,
    cardButton,
    catalogButton,
    orderButton,
    completedProjectsButton,
  },
});
