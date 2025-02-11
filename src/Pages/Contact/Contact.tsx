import React from "react";
import "./Contact.css"; // Archivo de estilos separado
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Esquema de validación con Zod
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  correo: z.string().email("Ingrese un correo válido."),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(500, "El mensaje no debe superar 500 caracteres."),
});

// ✅ Tipado de los valores del formulario
type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  // ✅ Configuración de React Hook Form con Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ✅ Manejo del envío del formulario
  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Enviando datos:", data);
      const response = await fetch("https://formspree.io/f/myzkdwla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mensaje enviado con éxito!");
        reset(); // Resetear formulario tras el envío exitoso
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el mensaje.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contáctenos</h2>
        <p>Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros servicios.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info contact-align-left">
          <h3>Contáctenos</h3>
          <p>Ponte en contacto con nosotros para resolver tus dudas o recibir asesoría personalizada.</p>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={24} className="icon" />
              <div>
                <h4>Dirección</h4>
                <p>Jr. Manco Cápac 720, Callao - Perú</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} className="icon" />
              <div>
                <h4>Teléfono</h4>
                <p>+51 977569484</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} className="icon" />
              <div>
                <h4>Correo Electrónico</h4>
                <p className="email-text">administracioncompany@dlgcorporation.com</p>
              </div>
            </div>
          </div>

          <div className="social-media">
            <p>Síguenos:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61559260582198" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                <FaFacebookSquare size={28} />
              </a>
              <a href="https://www.instagram.com/dilogecompany" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <FaInstagram size={28} />
              </a>
              <a href="https://pe.linkedin.com/in/diloge-company" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-responsive">
          <h3>Envíanos un Mensaje</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre" {...register("nombre")} className={errors.nombre ? "error-input" : ""} />
            {errors.nombre && <p className="error-text">{errors.nombre.message}</p>}

            <input type="email" placeholder="Correo electrónico" {...register("correo")} className={errors.correo ? "error-input" : ""} />
            {errors.correo && <p className="error-text">{errors.correo.message}</p>}

            <textarea placeholder="Mensaje" rows={4} {...register("mensaje")} className={errors.mensaje ? "error-input" : ""} />
            {errors.mensaje && <p className="error-text">{errors.mensaje.message}</p>}

            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"} <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.649190080849!2d-77.13338962403303!3d-12.052331091432104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf3ddba9d03f%3A0x7a3e24d5c7a594b7!2sJr.%20Manco%20Capac%20720%2C%20Callao%2007001%2C%20Peru!5e0!3m2!1ses-419!2sus!4v1706112232134!5m2!1ses-419!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
