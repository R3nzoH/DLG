import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../assets/imagotipo-opcional-naranja.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Para detectar el cambio de ruta

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Cierra el menú si la pantalla se redimensiona a escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🚀 Desplaza hacia arriba cuando cambia de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // Se ejecuta cada vez que cambia la URL

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Diloge Logo" className="logo-image" />
        </div>

        {/* Botón de menú (modo responsive) */}
        <button className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Menú lateral (modo responsive) */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
  <Link to="/servicio" className="nav-link" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Servicios ▾</Link>
  {isDropdownOpen && (
    <ul className="dropdown-menu">
      <li><Link to="/servicio#inspeccion-unidades" className="dropdown-item" onClick={closeMenu}>Inspección</Link></li>
      <li><Link to="/servicio#gestion-permisos" className="dropdown-item" onClick={closeMenu}>Gestión de Permisos</Link></li>
      <li><Link to="/servicio#supervision-carga" className="dropdown-item" onClick={closeMenu}>Supervisión Mercancía</Link></li>
      <li><Link to="/servicio#monitoreo-powerbi" className="dropdown-item" onClick={closeMenu}>Monitoreo de Unidades</Link></li>
      <li><Link to="/servicio#guias-remitentes" className="dropdown-item" onClick={closeMenu}>Guías Remitentes</Link></li>
      <li><Link to="/servicio#verificacion-almacen" className="dropdown-item" onClick={closeMenu}>Descarga en Almacén</Link></li>
    </ul>
  )}
</li>


            <li className="nav-item">
              <Link to="/nosotros" className="nav-link" onClick={closeMenu}>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
