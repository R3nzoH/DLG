import React from 'react';
import { FaTruck, FaCogs, FaChartLine, FaClipboardCheck } from 'react-icons/fa';
import './SecondSection.css';


const SecondSection: React.FC = () => {
  return (
    <section className="second-section">
      <div className="section-container">
        {/* Sección superior */}

        
        {/* Sección inferior */}
        <div className="features-grid">
          <div className="feature-item">
            <FaClipboardCheck className="feature-icon" />
            <h3>Supervisión de Descarga</h3>
            <p>Permisos, inspecciones, estado de descarga e incidencias.</p>
          </div>
          <div className="feature-item">
            <FaCogs className="feature-icon" />
            <h3>Control Digital</h3>
            <p>Gestión de unidades, tiempos, pesos y documentación operativa.</p>
          </div>
          <div className="feature-item">
            <FaTruck className="feature-icon" />
            <h3>Supervisión en Antepuerto</h3>
            <p>Supervisión de ingreso y cumplimiento de requisitos portuarios.</p>
          </div>
          <div className="feature-item">
            <FaChartLine className="feature-icon" />
            <h3>Visualización, Seguimiento y Respaldo en Tiempo Real</h3>
            <p>Distribución de carga y control estratégico en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;