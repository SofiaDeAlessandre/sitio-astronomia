
import './App.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Box from '@mui/material/Box'


function App() {


  return (
    <><Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Box sx={{ flexGrow: 1 }}>
      <Header/> 
     <Main/>
    </Box>
    <Footer />
  </Box>
     
    </>
  )
}

export default App
