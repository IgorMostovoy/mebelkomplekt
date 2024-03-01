import React, {Component} from 'react';
import CatalogItem from "./CatalogItem";
import uniqid from 'uniqid';
import Slider, {CustomArrowProps} from "react-slick";
import catalogKitchens from '../../assets/json/catalogKitchens.json'
import {Box} from "@chakra-ui/react";
import styles from '../../styles/arrowsStyles.module.css'



export const NextArrow: React.FC<CustomArrowProps> = ({ onClick } ) =>{

  return (
    <div
      className={styles.next_arrow}
      onClick={onClick}
    />
  );
}

export const PrevArrow: React.FC<CustomArrowProps> =({ onClick })=> {
  return (
    <div
      className={styles.prev_arrow}
      onClick={onClick}
    />
  );
}
function CatalogSlider()  {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Box mb='40px' >
        <Slider {...settings}  >
          {
            catalogKitchens.map((kitchen, i)=>
            <CatalogItem key={uniqid()} title={kitchen.title} images={kitchen.images[0]}  alt={kitchen.alt} style={kitchen.style} />
            )
          }
        </Slider>
      </Box>
    );

}

export default CatalogSlider

