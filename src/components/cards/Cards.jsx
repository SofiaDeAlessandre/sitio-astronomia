// import { Box, Typography } from "@mui/material";
// import img1 from '../../assets-img/universo.jpg'


// const Cards = () => {
//   return (
//     <Box>
//         <img src={img1}></img>
//         <Typography>Universo</Typography>
//     </Box>
//   )
// }

// export default Cards

import { Box, Container, Typography } from "@mui/material";
import images from "../../db/images.js";

const Cards = () => {
  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3em',
      justifyContent: 'center',
      backgroundColor: 'aqua',
    }} >
      {images.map(({ image, title, id }) => (
        <Box key={id} 
        sx = {{
          border: '2px solid',
          borderRadius: '5px'
        }}>
          <img src={image} alt={title} 
          style ={{
            width: '100%'
          }}/>
          <Typography>{title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
