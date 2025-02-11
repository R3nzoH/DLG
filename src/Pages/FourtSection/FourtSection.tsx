import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./ForutSection.css";
import img from "../../assets/Services/serviceConca.png";

const stats = [
  { label: "Servicios Cumplidos", value: 2500, suffix: "+" },
  { label: "Clientes Satisfechos", value: 500, suffix: "+" },
  { label: "Años de Experiencia", value: 8, suffix: " años" },
];
const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const step = Math.ceil(to / 100); // Define el paso del conteo para que sea más fluido
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= to) {
          clearInterval(interval);
          return to;
        }
        return prev + step;
      });
    }, 20); // Velocidad de incremento

    return () => clearInterval(interval);
  }, [to]);

  return <motion.span>{count}</motion.span>;
};

const FourtSection = () => {
  return (
    <section className="fourth-section">
      {/* Imagen de fondo solo en móviles */}
      <div className="fourth-section__background-image"></div>

      <div className="fourth-section__container">
        <div className="fourth-section__image-container">
          {/* Imagen normal solo en pantallas grandes */}
          <img src={img} alt="Nuestro Equipo" className="fourth-section__image-overlay" />
          <div className="fourth-section__overlay"></div>
        </div>

        {/* Contenedor con fondo naranja */}
        <div className="fourth-section__orange-box">
          <h2 className="fourth-section__title">Quiénes Somos</h2>
          <p className="fourth-section__subtext">
            En <strong>Diloge Company</strong>, nuestra prioridad es la <span className="fourth-section__highlight">satisfacción de nuestros clientes</span>.  
            Nos especializamos en brindar <span className="fourth-section__highlight">soluciones aduaneras eficientes y personalizadas</span>,  
            asegurando que cada proceso se realice con <strong>precisión y agilidad</strong>.  
            Nuestra <strong>experiencia y compromiso</strong> nos permiten acompañarte en cada etapa, garantizando  
            un servicio <span className="fourth-section__highlight">confiable y adaptado</span> a tus necesidades.
          </p>


          {/* Sección de métricas animadas */}
          <div className="fourth-section__stats-container">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="fourth-section__stat-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <h3 className="fourth-section__stat-number">
                  <Counter from={0} to={stat.value} />{stat.suffix}
                </h3>
                <p className="fourth-section__stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourtSection;
