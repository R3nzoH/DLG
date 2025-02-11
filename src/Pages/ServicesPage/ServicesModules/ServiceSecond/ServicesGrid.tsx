import styles from "./ServicesGrid.module.css";
import ServiceItem from "./SecondHero";

import { FaFileAlt, FaTools, FaClock, FaAnchor, FaBox, FaChartBar, FaWarehouse, FaLock, FaEye } from "react-icons/fa";

const services = [
  { icon: <FaFileAlt />, title: "GESTIÓN DE PERMISOS", description: "Agilizamos la gestión documental desde el inicio." },
  { icon: <FaTools />, title: "INSPECCIÓN DE UNIDADES", description: "Supervisamos limpieza y condiciones de transporte." },
  { icon: <FaClock />, title: "DISPONIBILIDAD 24H", description: "Garantizamos operativa continua y eficiente." },
  { icon: <FaAnchor />, title: "CONTROL EN MUELLE", description: "Monitoreamos la carga y las asignaciones en bodega." },
  { icon: <FaBox />, title: "DOCUMENTACIÓN", description: "Emitimos guías de remisión y transportista." },
  { icon: <FaChartBar />, title: "VISUALIZACIÓN EN POWER BI", description: "Monitoreo y análisis en tiempo real." },
  { icon: <FaWarehouse />, title: "VERIFICACIÓN EN ALMACÉN", description: "Validamos pesos, precintos y tiempos de llegada." },
  { icon: <FaLock />, title: "PRECINTADO DE UNIDADES", description: "Aseguramos mercancía con precintos de seguridad." },
  { icon: <FaEye />, title: "MONITOREO AÉREO CON DRON", description: "Supervisión avanzada con drones de última generación." },
];

const ServicesGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h4 className={styles.sectionTitle}>Características de nuestros servicios</h4>
        <p className={styles.sectionDescription}>
          Diloge Company ofrece soluciones especializadas en logística portuaria y aduanera, asegurando un servicio eficiente y confiable.
        </p>
      </div>

      <div className={styles.gridContainer}>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
