import React from 'react';
import Main from "./pages/Main";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import CatalogKitchens from "./pages/CatalogKitchens";
import {Box} from "@chakra-ui/react";
import CatalogKitchenCard from "./components/catalogKitchenCard/CatalogKitchenCard";
import CompletedKitchens from "./pages/CompletedKitchens";
import ScrollToTop from "./helpers/scrollToTop";
import CompletedKitchenCard from "./components/completedKitchenCard/CompletedKitchenCard";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <Box bgColor='#F9FDFF'>
      <Box>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='/catalog' element={
              <>
                <ScrollToTop/>
                <CatalogKitchens/>
              </>
            }/>
            <Route path='/completed' element={
              <>
                <ScrollToTop/>
                <CompletedKitchens/>
              </>
            }/>
            <Route path='/contacts' element={
              <>
                <ScrollToTop/>
                <Contacts/>
              </>
            }/>
            <Route path='/catalog/:title' element={
              <>
                <ScrollToTop/>
                <CatalogKitchenCard/>
              </>
            }/>
            <Route path='/completed/:title' element={<CompletedKitchenCard/>}/>

          </Route>
        </Routes>

      </Box>

    </Box>

  )
    ;
}

export default App;
