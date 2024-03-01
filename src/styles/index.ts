import {extendTheme} from "@chakra-ui/react";
import {colors} from "./colorVariants";
import {buttonTheme} from "./customButton";
import {dividerTheme} from "./customDivider";
import {cardTheme} from "./customCard";
import {tooltipTheme} from "./tooltipVariants";
import {checkboxTheme} from "./checkBoxVariants";
import {modalTheme} from "./callBackPopUp";




export const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors,
  components: {
    Modal: modalTheme,
    Checkbox: checkboxTheme,
    Card: cardTheme,
    Divider: dividerTheme,
    Button: buttonTheme,
    Tooltip: tooltipTheme,
  }
})

