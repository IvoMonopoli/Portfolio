import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiBootstrap, SiReact } from "react-icons/si"; // Importamos los íconos de Bootstrap y React JS
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Logo, tagline e íconos sociales */}
        <div className="footer-col">
          <h2 className="footer-logo">Ivo Gabriel Monopoli</h2>
          <p className="footer-tagline">
            Transformando ideas en soluciones digitales.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ivo-gabriel-monopoli/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/ivomonopoli/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/IvoMonopoli" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h3 className="footer-title">NAVEGACION</h3>
          <ul className="footer-nav">
            <li><a href="#home">Sobre mi</a></li>
            <li><a href="#about">Tecnologias</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Sobre esta web */}
        <div className="footer-col">
          <h3 className="footer-title">SOBRE ESTA WEB</h3>
          <div className="footer-created-with">
            <span className="created-with-label">Creado con:</span>
            <div className="tech-items">
              <div className="tech-item">
                <SiBootstrap className="tech-icon" />
                <span className="tech-name">Bootstrap</span>
              </div>
              <div className="tech-item">
                <SiReact className="tech-icon" />
                <span className="tech-name">React JS</span>
              </div>
            </div>
          </div>
          <p className="footer-text">por Ivo Monopoli.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
