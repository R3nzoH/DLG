import styles from "./ServicesSection.module.css";
import ServiceCard from "./ServiceCard";

import a1 from "../../../../assets/Services/ServiciosPuertos/a1.jpg";
import a2 from "../../../../assets/Services/ServiciosPuertos/a2.jpg";
import a3 from "../../../../assets/Services/ServiciosPuertos/a3.jpg";
import a4 from "../../../../assets/Services/ServiciosPuertos/a4.jpg";
import a5 from "../../../../assets/Services/ServiciosPuertos/a5.jpg";
import a6 from "../../../../assets/Services/ServiciosPuertos/a6.png";
import a7 from "../../../../assets/Services/ServiciosPuertos/a7.png";
import a8 from "../../../../assets/Services/ServiciosPuertos/a8.jpg";
import a9 from "../../../../assets/Services/ServiciosPuertos/a9.png";

const servicesData = [
  { id: "gestion-permisos", title: "Gestión Inteligente de Permisos", description: "Definimos con precisión quién es el cliente, qué mercancía ingresará y bajo qué normativas.", details: "Detalles de Gestión Inteligente de Permisos", image: a1 },
  { id: "inspeccion-unidades", title: "Inspección Rigurosa de Unidades", description: "Recepción de unidades que transportarán la mercancía.", details: "Detalles de Inspección Rigurosa de Unidades", image: a2 },
  { id: "operacion-24h", title: "Operación 24 horas en el Puerto", description: "Entrega continua de permisos a las unidades.", details: "Detalles de Operación 24 horas en el Puerto", image: a3 },
  { id: "supervision-carga", title: "Supervisión de Carga en Muelle", description: "Control preciso de placas de unidades.", details: "Detalles de Supervisión de Carga en Muelle", image: a4 },
  { id: "guias-remitentes", title: "Emisión de Guías Remitentes", description: "Generación automática de guías remitentes.", details: "Detalles de Emisión de Guías Remitentes", image: a5 },
  { id: "monitoreo-powerbi", title: "Monitoreo en Power BI", description: "Todos los procesos son registrados en nuestra base de datos.", details: "Detalles de Monitoreo en Power BI", image: a6 },
  { id: "verificacion-almacen", title: "Verificación Final en Almacén", description: "Validación de precintos y comparación de pesos.", details: "Detalles de Verificación Final en Almacén", image: a7 },
  { id: "gestion-antepuerto", title: "Gestión del Antepuerto y Flujo de Unidades", description: "Control en tiempo real del antepuerto.", details: "Detalles de Gestión del Antepuerto y Flujo de Unidades", image: a8 },
  { id: "drones-panoramica", title: "Visualización Panorámica con Drones", description: "Monitoreo en tiempo real mediante drones.", details: "Detalles de Visualización Panorámica con Drones", image: a9 },
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
        <p className={styles.sectionSubtitle}>
          Optimizamos cada fase del proceso aduanero y logístico para garantizar eficiencia y control total.
        </p>
      </div>

      {servicesData.map((service, index) => (
        <div key={service.id} id={service.id} className={styles.serviceWrapper}>
          <ServiceCard service={service} />
          {index < servicesData.length - 1 && <div className={styles.separator}></div>}
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
