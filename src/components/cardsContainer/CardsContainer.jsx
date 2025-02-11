import { Box, Container } from '@mui/material';
import { IoRocketSharp } from 'react-icons/io5';
import './CardsContainer.css'
import Cards from '../cards/Cards';

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
        <Cards/>
    </Container>
  )
}

export default CardsContainer