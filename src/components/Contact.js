import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import redes from "../assets/redes.png";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("594352705297-23gr5nvi9f2", "template_6kl8gaw", formData, "PQX0gWE_r7eD5wZQR")
      .then(
        (result) => {
          console.log("Mensaje enviado:", result.text);
          setIsSent(true);
          // Reinicia el formulario
          setFormData({ nombre: "", correo: "", mensaje: "" });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-form-container">
          <h2>Contáctame</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Tu Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="correo"
              placeholder="Tu Correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-submit">
              Enviar
            </button>
          </form>
          {isSent && <p className="success-message">¡Mensaje enviado!</p>}
        </div>

        <div className="contact-illustration">
          <div className="location-marker">Argentina, Buenos Aires</div>
          <img src={redes} alt="Ilustración de contacto" />

          <div className="socials">
            <h3>Redes Sociales</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/ivo-gabriel-monopoli/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ivomonopoli/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/IvoMonopoli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
