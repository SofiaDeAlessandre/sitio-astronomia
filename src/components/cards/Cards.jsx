import { Box, Container, Typography } from "@mui/material";
import images from "../../db/images.js";

const Cards = () => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
        gap: "3em",
        justifyContent: "center",
      }}
    >
      {images.map(({ image, title, id }) => (
        <Box
          key={id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid black",
            textAlign: "center",
            gap: "1em",
            borderRadius: "18px",
            overflow: "hidden",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            width: "300px",
            height: "400px",
            color: "white",
            backgroundColor: "black",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.04)",
              cursor: "pointer",
            },
            boxShadow: "#6f7295 0px 2px 7px 6px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
            }}
          />
          <Typography>{title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
