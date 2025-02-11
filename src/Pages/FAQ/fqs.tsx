import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./style.css"; // Importamos el archivo de estilos

const faqs = [
  {
    question: "¿Qué hace Diloge Company y por qué somos la mejor opción?",
    answer:
      "Diloge Company es el socio estratégico en gestión aduanera para carga a granel en el Puerto del Callao. Nuestro proceso cubre desde la creación del permiso hasta la entrega segura de la mercancía en su destino, garantizando eficiencia 24/7, monitoreo en tiempo real y transparencia absoluta en cada paso.",
  },
  {
    question: "¿Cómo garantizamos la seguridad y trazabilidad de la carga?",
    answer:
      "Implementamos controles rigurosos en cada etapa: inspección de unidades, registro en base de datos con Power BI, precintos de seguridad y comparación automatizada de pesos con el ticket del puerto.",
  },
  {
    question: "¿Cómo aseguramos rapidez en la gestión de permisos?",
    answer:
      "Nuestro equipo trabaja 24/7, agilizando la emisión de permisos en tiempo real sin interrupciones ni tiempos muertos.",
  },
  {
    question: "¿Puedo monitorear el estado de mis operaciones en tiempo real?",
    answer:
      "Sí, gracias a nuestro dashboard en Power BI, los clientes pueden visualizar en tiempo real el estado de descarga, ubicación de unidades, horarios de carguío y emisión de guías de transporte.",
  },
  {
    question: "¿Por qué Diloge Company es ideal para carga a granel?",
    answer:
      "Porque trabajamos con los principales clientes de carga a granel en Perú, asegurando mínima espera, máxima eficiencia y procesos aduaneros optimizados.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="faq-icon" />
              ) : (
                <FaChevronDown className="faq-icon" />
              )}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="faq-answer-container"
            >
              <p className="faq-answer">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
