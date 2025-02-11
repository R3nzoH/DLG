import React, { useEffect, useState } from 'react';
import imag1 from '../../assets/puerto/img1.jpg';
import imag2 from '../../assets/puerto/img2.jpg';
import imag3 from '../../assets/puerto/img3.jpg';
import imag4 from '../../assets/puerto/img4.jpg';
import imag5 from '../../assets/puerto/img5.jpg';
import imag6 from '../../assets/puerto/img6.jpg';
import imag7 from '../../assets/puerto/img7.jpg';
import imag8 from '../../assets/puerto/img8.jpg';
import imag9 from '../../assets/puerto/img9.jpg';
import { FaRegCheckCircle, FaClock, FaClipboardList } from 'react-icons/fa';
import './HeroSection.css';
import { useNavigate } from "react-router-dom";
const images = [imag1, imag2, imag3, imag4, imag5, imag6, imag7, imag8, imag9];

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImage = new Image();
    const nextIndex = (currentImageIndex + 1) % images.length;
    preloadImage.src = images[nextIndex];

    preloadImage.onload = () => {
      setNextImageLoaded(true);
    };

    const interval = setInterval(() => {
      if (nextImageLoaded) {
        setCurrentImageIndex(nextIndex);
        setNextImageLoaded(false);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex, nextImageLoaded]);

  return (
    <section className="hero-section">
    <div className="hero-overlay"></div>

    {/* Contenedor de imágenes con superposición */}
    <div className="image-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Imagen ${index + 1}`}
          className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>

    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          SIMPLIFICAMOS LA GESTIÓN ADUANERA PARA OPERACIONES A GRAN ESCALA
        </h1>
        <button className="cta-button" onClick={() => navigate("/servicio")}>Optimiza tus Operaciones</button>

        {/* Beneficios */}
        <div className="benefits">
          <div className="benefit">
            <FaRegCheckCircle className="icon" /> Eficiencia en Procesos
          </div>
          <div className="benefit">
            <FaClock className="icon" /> Visibilidad 24 horas
          </div>
          <div className="benefit">
            <FaClipboardList className="icon" /> Cumplimiento Garantizado
          </div>
        </div>
      </div>
    </div>

      {/* Secciones inferiores */}
      <div className="bottom-sections hide-on-mobile">
        <div className="bottom-box black">
          <p>Con mas de 100 TM de carga a granel controlada en un mes</p>
        </div>
        <div className="bottom-box orange">
          <p>Con un promedio de 34 servicios culminados mensualmente</p>
        </div>
        <div className="bottom-box black">
          <p>Mas de 18 clientes sastifecho a lo largo de nuestra carrera</p>
        </div>
        <div className="bottom-box orange">
          <p>Procesos seguros y eficientes</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;