import { useEffect, useState, useRef } from "react";
import styles from "./ServicesSection.module.css";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    description: string;
    details: string;
    image: string;
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.serviceCard} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.imageContainer}>
        <img src={service.image} alt={service.title} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.highlightTitle}>{service.title}</h2>
        <p className={styles.description}>{service.description}</p>
        <p className={styles.details}>{service.details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
