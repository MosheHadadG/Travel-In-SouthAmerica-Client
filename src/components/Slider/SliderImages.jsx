import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderImages.css"


const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 3000,
};

function SliderImages({ images }) {

  const renderImages = () => {
    const renderedImage = images.map((image, idx) => {
      return <div className="slider-item" key={idx}><img src={image} alt="Image" /></div>
    });
    return renderedImage;
  }

  return (
    <Slider {...settings}>
      {renderImages()}
    </Slider>

  );

}

export default SliderImages;