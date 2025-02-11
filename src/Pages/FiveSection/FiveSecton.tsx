import { useState } from "react";
import { motion } from "framer-motion";
import "./FiveSecton.css";
import viterra from '../../assets/Isotipo/viterra.png';
import aceros from '../../assets/Isotipo/aceros.png';
import adm from '../../assets/Isotipo/adm.png';
import anitaFood from '../../assets/Isotipo/anita food.png'; // ← Corregido
import avm from '../../assets/Isotipo/avm.png';
import ayg from '../../assets/Isotipo/ayg.png';
import cargill from '../../assets/Isotipo/cargill.png';
import famesa from '../../assets/Isotipo/famesa.png';
import infinia from '../../assets/Isotipo/infinia.png';
import Manuchar from '../../assets/Isotipo/Manuchar.png';
import MolinosTriunfo from '../../assets/Isotipo/MolinosTriunfo.png';
import owens from '../../assets/Isotipo/owens.png';
import Pasoc from '../../assets/Isotipo/Pasoc.png';
import quimpac from '../../assets/Isotipo/quimpac.png';
import sanfernando from '../../assets/Isotipo/sanfernando.png';
import seaboard from '../../assets/Isotipo/seaboard.png';
import segugroupLogo from '../../assets/Isotipo/segugroup_logo.png';
import sharff from '../../assets/Isotipo/sharff.png';


const clients = [
  aceros, adm, anitaFood, avm, ayg, cargill,
  famesa, infinia, Manuchar, MolinosTriunfo, owens, Pasoc,
  quimpac, sanfernando, seaboard, segugroupLogo, sharff, viterra
];

const Carousel = () => {
  const [selected, setSelected] = useState<string | null>(null);

  console.log("Número total de clientes:", clients.length); // 🔍 Verificar si todas las imágenes están cargadas

  return (
    <section className="carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Nuestros Clientes</h2>
        <p className="carousel-description">
          Empresas que confían en nosotros para soluciones logísticas y comerciales.
        </p>
      </div>

      <motion.div 
        className="carousel-wrapper"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="carousel-content"
          animate={{ x: [0, -200, -800, 0] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {clients.map((client, index) => (
            <motion.img 
              key={index}
              src={client} 
              alt={`Logo de cliente ${index + 1}`} // ← Corregido
              className="carousel-image"
              onClick={() => setSelected(client)}
              whileHover={{ scale: 1.1 }}
              animate={selected === client ? { scale: 1.2, rotate: 5 } : { scale: 1 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Carousel;