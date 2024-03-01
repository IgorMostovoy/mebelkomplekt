import React from 'react';
import slider1 from '../../assets/logoSliderImg/1.png';
import slider2 from '../../assets/logoSliderImg/2.png';
import slider3 from '../../assets/logoSliderImg/3.png';
import slider4 from '../../assets/logoSliderImg/4.png';
import slider5 from '../../assets/logoSliderImg/5.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './logoCarousel.module.css';
import { Box, Image } from '@chakra-ui/react';

const LogoCarousel = () => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className={styles.slider_wrapper}>
      <Box>
        <Image
          src={slider1}
          alt="Image 1"
          mt="45px"
          className={styles.carousel_image}
        />
      </Box>
      <Box>
        <Image
          src={slider2}
          alt="Image 2"
          mt="25px"
          className={styles.carousel_image}
        />
      </Box>
      <Box>
        <Image
          src={slider3}
          alt="Image 3"
          mt="20px"
          className={styles.carousel_image}
        />
      </Box>
      <Box>
        <Image
          src={slider4}
          alt="Image 3"
          mt="10px"
          className={styles.carousel_image}
        />
      </Box>
      <Box>
        <Image
          src={slider5}
          alt="Image 3"
          mt="35px"
          className={styles.carousel_image}
        />
      </Box>
    </Slider>
  );
};

export default LogoCarousel;
