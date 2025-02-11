import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesSection from "./ServicesSection";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // 🔥 Pequeño retraso para garantizar que la sección existe en el DOM
      }
    }
  }, [location]);

  return (
    <div>
      <h1>Servicios</h1>
      <ServicesSection />
    </div>
  );
};

export default Services;
