import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Services from "./Pages/ServicesPage/Services";
import Faq from "./Pages/FAQ/fqs"
import "./index.css"; // O el archivo donde tengas los estilos globales

const addFontLink = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

function App() {
  useEffect(() => {
    addFontLink();
  }, []);

  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<About />} /> 
        <Route path="/contacto" element={<Contact />} /> 
        <Route path="/servicio" element={<Services />} /> 
        <Route path="/preguntas" element={<Faq/>} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
