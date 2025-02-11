import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../../assets/logolargopng.png";
import "./Footer.css"; // Importamos los estilos CSS
import { useNavigate } from "react-router-dom";
const Footer: React.FC = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Logo y redes sociales */}
        <div className="footer-section">
          <img src={img} alt="Diloge Company" className="footer-logo" />
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61559260582198"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              <FaFacebookSquare size={28} />
            </a>
            <a
              href="https://www.instagram.com/dilogecompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://pe.linkedin.com/in/diloge-company"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Sección de Soporte */}
        <div className="footer-section">
          <h2 className="footer-title">Soporte</h2>
          <ul className="footer-list">
            <li><a href="/contacto" onClick={() => navigate("/contacto")}>Contáctanos</a></li>
            <li><a href="/preguntas"onClick={() => navigate("/preguntas")}>Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Sección Diloge Company y Newsletter */}
        <div className="footer-section">
          <h2 className="footer-title">Diloge Company</h2>
          <ul className="footer-list">
            <li><a href="/nosotros"onClick={() => navigate("/nosotros")}>Sobre Diloge</a></li>
          </ul>
          <div className="newsletter">
            <label htmlFor="newsletter">Mantente actualizado</label>
            <div className="newsletter-input-container">
              <input
                id="newsletter"
                type="email"
                placeholder="Tu correo electrónico"
                className="newsletter-input"
              />
              <button className="newsletter-button">Suscribirse</button>
            </div>
          </div>
        </div>

      </div>

      {/* Línea divisoria y derechos reservados */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Diloge Company. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
