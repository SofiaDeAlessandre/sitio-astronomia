import { Box, Container } from '@mui/material';
import { IoRocketSharp } from 'react-icons/io5';
import './CardsContainer.css'

const CardsContainer = () => {
  return (
    <Container>
         <IoRocketSharp
        style={{
          color: '#d07224',
          fontSize: '30px',
          animation: 'move 5s infinite',
        }}
      />
        <Box></Box>
    </Container>
  )
}

export default CardsContainer