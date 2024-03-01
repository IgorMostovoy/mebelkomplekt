import React, { Component } from 'react';
import Slider from 'react-slick';
import slider1 from '../../assets/sliderImg/slider1.jpeg';
import slider2 from '../../assets/sliderImg/slider2.jpeg';
import slider3 from '../../assets/sliderImg/slider3.jpeg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src={slider1}
              style={{
                height: '450px',
                width: '100%',
              }}
            />
          </div>
          <div>
            <img
              src={slider2}
              style={{
                height: '450px',
                width: '100%',
              }}
            />
          </div>
          <div>
            <img
              src={slider3}
              style={{
                height: '450px',
                width: '100%',
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
