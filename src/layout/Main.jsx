import Home from "../pages/Home"; 
import CardsContainer from "../components/cardsContainer/CardsContainer";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/Fotos" element={<CardsContainer />} />
      <Route path="/sobre-mi" element={<About />} />
      <Route path="/Contacto" element={<Contact />} />
    </Routes>
  );
};

export default Main;