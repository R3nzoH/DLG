import React from 'react';
import {
  FaFileAlt, FaTools, FaClock, FaAnchor, FaBox, FaChartBar, FaWarehouse, FaVial
} from 'react-icons/fa';
import './ThirdSection.css';

const services = [
  { icon: <FaFileAlt />, title: "GESTIÓN DE PERMISOS", description: "Agilizamos la gestión documental desde el inicio." },
  { icon: <FaTools />, title: "INSPECCIÓN DE UNIDADES", description: "Supervisamos limpieza y condiciones de transporte." },
  { icon: <FaClock />, title: "OPERACIONES 24H", description: "Garantizamos operativa continua y eficiente." },
  { icon: <FaAnchor />, title: "CONTROL EN MUELLE", description: "Monitoreamos la carga y las asignaciones en bodega." },
  { icon: <FaBox />, title: "DOCUMENTACIÓN", description: "Emitimos guías de remisión y precintado." },
  { icon: <FaChartBar />, title: "VISUALIZACIÓN EN POWER BI", description: "Monitoreo y análisis en tiempo real." },
  { icon: <FaWarehouse />, title: "VERIFICACIÓN EN ALMACÉN", description: "Validamos pesos, precintos y tiempos de llegada." },
  { icon: <FaVial />, title: "MUESTREO DE PRODUCTOS", description: "Extraemos muestras en bodega para análisis de laboratorio." },
];

const ServiceItem: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="service-item">
    <div className="service-icon" aria-label={title}>{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const ThirdSection: React.FC = () => {
  return (
    <section className="third-section">
      <div className="section-container">
        <h2 className="section-title">¿CÓMO OPTIMIZAMOS LA <span className="highlight">GESTIÓN ADUANERA?</span></h2>
        <p className="section-subtitle">
          En DILOGE, revolucionamos la gestión aduanera con procesos integrales, tecnología avanzada y un equipo comprometido para garantizar la máxima eficiencia.
        </p>

        <div className="service-layout">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;