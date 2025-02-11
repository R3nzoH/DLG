import styles from "./Services.module.css";
import ServicesGrid from "../ServicesPage/ServicesModules/ServiceSecond/ServicesGrid";
import HeroServices from "../ServicesPage/ServicesModules/ServicesHero/HeroSectionService";
import SurveySectionService from "./ServicesModules/ServiceThree/SurveySection"
import ServicesSection from "./ServicesModules/ServicesModule/ServicesSection";
const Services = () => {
  return (
    <section className={styles.servicesContainer}>
      {/* Hero Section */}
      <HeroServices />

      {/* Grid de Servicios */}
      <ServicesGrid />
      <SurveySectionService/> 
      <ServicesSection/>
    </section>
  );
};

export default Services;
