import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const purple = definePartsStyle({
  dialog: {
    borderRadius: 'md',
    border:'1px solid #BF2B45'
  },
})

export const modalTheme = defineMultiStyleConfig({
  variants: { purple },
})