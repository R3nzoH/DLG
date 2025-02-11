import React from 'react';
import './About.css'; // Importa el CSS
import { Globe, Rocket, Scale, CheckCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Componente reutilizable para tarjetas de información
const InfoCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="card">
    <Icon size={40} className="icon" />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);



// Componente reutilizable para servicios
const ServiceCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <Icon size={50} className="icon-service" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Componente reutilizable para el equipo de trabajo
const TeamMember: React.FC<{ name: string; role: string; description?: string }> = ({ name, role, description }) => (
  <div className="team-member">
    <h3>{name}</h3>
    <p className="role">{role}</p>
    {description && <p className="description">{description}</p>}
  </div>
);

const Nosotros: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="nosotros-page">
      {/* Sección 1: Quiénes Somos */}
      <div className="nosotros-container">
        <div className="nosotros-overlay">
          <h1 className="nosotros-title">¿Quiénes Somos?</h1>
          <p className="nosotros-text">
            En <strong>DILOGE</strong>, somos especialistas en <strong>Survey y gestión aduanera</strong>, asegurando la prevención, supervisión y control de mercancías desde la nave hasta su destino final.
          </p>
          <p className="nosotros-text">
            Con años de experiencia en el sector, garantizamos <strong>procesos eficientes y seguros</strong>, optimizando cada operación para que tu carga llegue sin contratiempos.
          </p>
          <p className="nosotros-text">
            <strong>Nuestro compromiso es tu tranquilidad.</strong> Nos enfocamos en brindar un servicio confiable, transparente y alineado con los más altos estándares de la industria.
          </p>
        </div>
      </div>

      {/* Sección 2: Misión, Visión y Filosofía Empresarial */}
      <div className="mission-vision-container">
        <div className="content-container">
          <h2 className="section-title">Nuestra Esencia Empresarial</h2>
          <InfoCard icon={Rocket} title="Misión" description="Agilizamos la gestión aduanera con tecnología, asegurando seguridad, control y trazabilidad en cada operación." />
          <InfoCard icon={Globe} title="Visión" description="Ser líderes en logística y aduanas en América Latina, destacando por innovación y excelencia operativa." />
          <InfoCard icon={Lightbulb} title="Filosofía" description="Innovamos y trabajamos con transparencia, garantizando eficiencia y sostenibilidad en cada proceso." />
        </div>
      </div>

      {/* Nueva Sección 3: Nuestro Equipo de Trabajo */}
      <div className="team-section">
        <h2 className="section-title">Conoce a nuestro equipo</h2>
        <div className="team-grid">
          <TeamMember name="Piera Ramos" role="Gerente General" description="Economista con especialización en Gestión de Proyectos, Mejora de Procesos y Business Analytics." />
          <TeamMember name="Alfonso Herrera" role="Presidente" description="Administrador con especialización en logística portuaria, con experiencia en gestión de operaciones y optimización logística." />
          <TeamMember name="Milagros Ramos" role="Asistente de Calidad" />
          <TeamMember name="Alexsandro Benito" role="Asistente de Operaciones" />
          <TeamMember name="Richard Centurion" role="Asistente de Operaciones" />
          <TeamMember name="Kiara Talavera" role="Asistente de Operaciones" />
          <TeamMember name="Flor Vidal" role="Jefe Contable" />
          <TeamMember name="Renzo Herrera" role="Soporte TI" />
          <TeamMember name="Operaciones" role="Equipo de Operaciones" />
        </div>
      </div>

      {/* Sección 4: Servicios */}
      <div className="services-section">
        <div className="services-content">
          <div className="services-text">
            <h2>Brindamos soluciones en logística y gestión aduanera</h2>
            <p>
              Nuestro equipo está altamente capacitado para ofrecer un servicio integral en el sector aduanero y logístico, asegurando el cumplimiento de normativas y la eficiencia en cada operación.
            </p>
            <button className="btn-more" onClick={() => navigate("/servicio")}>Ver más</button>
          </div>

          <div className="services-grid">
            <ServiceCard icon={Globe} title="Survey" description="Prevención, supervisión y control de mercancías." />
            <ServiceCard icon={Rocket} title="Gestión Aduanera" description="Tramitamos y gestionamos permisos y documentación." />
            <ServiceCard icon={Scale} title="Logística" description="Coordinamos el transporte y almacenamiento eficiente." />
            <ServiceCard icon={CheckCircle} title="Seguridad" description="Garantizamos procesos seguros y confiables." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
