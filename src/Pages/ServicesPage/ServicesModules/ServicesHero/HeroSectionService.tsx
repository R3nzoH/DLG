import React from 'react';
import styles from "./HeroServices.module.css";
import AnimatedNumber from "../ServicesHero/AnimetedNumber";
import { useNavigate } from "react-router-dom";
const stats = [
  { value: 2300, label: "Operaciones Cumplidas" },
  { value: 10000, label: "Naves Operadas" },
  { value: 30, label: "Clientes" },
  { value: 5200, label: "Reportes Culminados" },
];

const HeroServices: React.FC = () => {
    const navigate = useNavigate();
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Excelencia en Logística Aduanera y Operaciones Portuarias
        </h1>
        <p className={styles.heroDescription}>
          En Diloge Company, optimizamos la gestión aduanera con un enfoque integral, combinando eficiencia operativa, supervisión durante todo el operativo de la nave y tecnología avanzada. Con años de experiencia, garantizamos procesos optimizados, cumplimiento normativo y total trazabilidad, desde la recepción de mercancía hasta su destino final.
        </p>
        <div className={styles.heroButtons}>
          <button
            className={`${styles.btnPrimary} ${styles.responsiveButton}`}
            aria-label="Contáctanos" onClick={() => navigate("/contacto")}
          >
            Contáctanos
          </button>
        </div>
      </div>

      <div className={styles.heroStats}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statItem} ${styles.animatedStat}`}>
            <AnimatedNumber value={stat.value.toString()} />
            <p>{stat.label}</p>
        
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroServices;
