import React from 'react';

import ReactDOM from 'react-dom/client';

import {ChakraProvider} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/400.css'

import './index.css';

import App from './App';
import {theme} from "./styles";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
  <ChakraProvider theme={theme}>
    <App/>
  </ChakraProvider>
</BrowserRouter>

);

