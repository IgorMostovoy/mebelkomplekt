import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define styles for custom variant
const tooltipVariant = defineStyle((props) => {
  return {
    padding: '25px 10px',
    border: '1px solid rgba(0,0,0,.1)',
    width: '100%',
    maxWidth: '260px',
  };
});

// define custom variants
const variants = {
  tooltipVariant,
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ variants });
