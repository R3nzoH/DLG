import { useState } from "react";
import styles from "./SurveySection.module.css";
import SurveyTab from "./SurveyTab";
import carga from "../../../../assets/Services/inspecionCarga.jpg"
import verifa from "../../../../assets/Services/dis.jpg"
import img0 from "../../../../assets/Services/Facilidad.jpg"
const surveyData = [
  {
    id: 1,
    title: "Inspección de Carga",
    description:
      "Garantizamos que la carga cumpla con los estándares de calidad y seguridad antes de su despacho.",
    image: carga,
  },
  {
    id: 2,
    title: "Supervisión de Descarga",
    description:
      "Monitoreamos la descarga de la mercancía para garantizar que llegue en condiciones óptimas.",
    image: verifa,
  },
  {
    id: 3,
    title: "Verificacion de Salida",
    description:
      "Monitoreamos la salida de unidades con la mercancía para garantizar que llegue en condiciones óptimas.",
    image: img0,
  },
];

const SurveySection = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className={styles.surveySection}>
      <div className={styles.tabs}>
        {surveyData.map((item) => (
          <SurveyTab
            key={item.id}
            id={item.id}
            title={item.title}
            isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{surveyData.find((item) => item.id === activeTab)?.title}</h2>
          <p>{surveyData.find((item) => item.id === activeTab)?.description}</p>
        </div>
        <div className={styles.image}>
          <img
            src={surveyData.find((item) => item.id === activeTab)?.image}
            alt="Survey Service"
          />
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
