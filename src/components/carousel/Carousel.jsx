import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

import img1 from '../../assets-img/universe-1.webp'
import img2 from '../../assets-img/universe-2.webp'
import img3 from '../../assets-img/universe-3.webp'

const images = [
  img1,
  img2,
  img3
];

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} component="img" src={src} alt={`Slide ${index + 1}`} sx={{ width: "100%", borderRadius: 2 }} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carrousel;