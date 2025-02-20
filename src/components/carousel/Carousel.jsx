import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets-img/luna.webp";
import img2 from "../../assets-img/cometa.webp";
import img3 from "../../assets-img/sol.webp";

const Carousel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Centrado vertical
        height: "100vh", // Toma toda la altura de la pantalla
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "400",
          textAlign: "center",
          color: "rgb(246, 188, 207)",
          marginTop: "60px",
        }}
      >
        "Quien ama la naturaleza encontrará belleza en todas partes"
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ width: "80%", maxWidth: "400px" }} // Ajusta el tamaño del carrusel
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Slide 2"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
