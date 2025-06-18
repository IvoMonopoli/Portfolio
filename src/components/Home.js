import React from 'react';
import IvoTarjeta from '../assets/ivo.png'; // Asegurate de haber eliminado el fondo y guardado en PNG
import cv from '../assets/IvoMonopoliCV.pdf';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Home.css';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiElectron, SiMysql, SiMongodb, SiAmazonwebservices } from 'react-icons/si';

function Home() {
  return (
    <section className="home-section">
      {/* Marquee vertical de tecnologías (solo se muestra en desktop) */}
      <div className="tech-marquee-vertical">
        <div className="tech-icons-vertical">
          <FaHtml5 size={30} color="#ffffff" title="HTML5" />
          <FaCss3Alt size={30} color="#ffffff" title="CSS3" />
          <DiJavascript1 size={30} color="#ffffff" title="JavaScript" />
          <FaReact size={30} color="#ffffff" title="React" />
          <SiElectron size={30} color="#ffffff" title="Electron" />
          <FaBootstrap size={30} color="#ffffff" title="Bootstrap" />
          <SiMysql size={30} color="#ffffff" title="MySQL" />
          <FaNodeJs size={30} color="#ffffff" title="Node.js" />
          <SiMongodb size={30} color="#ffffff" title="MongoDB" />
          <SiAmazonwebservices size={30} color="#ffffff" title="AWS" />
          {/* Duplicamos los iconos para lograr un scroll continuo */}
          <FaHtml5 size={30} color="#ffffff" title="HTML5" />
          <FaCss3Alt size={30} color="#ffffff" title="CSS3" />
          <DiJavascript1 size={30} color="#ffffff" title="JavaScript" />
          <FaReact size={30} color="#ffffff" title="React" />
          <SiElectron size={30} color="#ffffff" title="Electron" />
          <FaBootstrap size={30} color="#ffffff" title="Bootstrap" />
          <SiMysql size={30} color="#ffffff" title="MySQL" />
          <FaNodeJs size={30} color="#ffffff" title="Node.js" />
          <SiMongodb size={30} color="#ffffff" title="MongoDB" />
          <SiAmazonwebservices size={30} color="#ffffff" title="AWS" />
        </div>
      </div>

      {/* Contenedor con la imagen posicionada absolutamente */}
      <div className="hero-image-wrapper">
        <img src={IvoTarjeta} alt="Tarjeta de Ivo" className="hero-image" />
      </div>
      
      {/* Contenedor del contenido principal */}
      <div className="container content-wrapper">
        <div className="row align-items-center mt-5 pt-5">
          <div className="col-md-4 text-center">
            {/* Esta columna se puede omitir o ajustar según el diseño */}
          </div>
          <div className="col-md-8 text-center text-md-start">
            <p className="intro">Hola, soy</p>
            <h1 className="name">Ivo Monopoli</h1>
            <h2 className="profession">Desarrollador Full Stack</h2>

            <div className="d-flex align-items-center my-3">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom me-3"
              >
                Ver CV
              </a>

              <div className="iconos d-flex align-items-center">
                <a
                  href="https://www.linkedin.com/in/ivo-gabriel-monopoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icono text-reset me-3"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://www.instagram.com/ivomonopoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icono text-reset me-3"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://github.com/IvoMonopoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icono text-reset"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>

            <p className="descripcion">
              "Soy un desarrollador Full Stack apasionado por transformar ideas en soluciones digitales. Con experiencia en React, Electron.js y Bootstrap, combino diseño, escalabilidad y rendimiento para crear interfaces interactivas y aplicaciones robustas. Mi enfoque se centra en código modular y en optimizar la experiencia del usuario, garantizando soluciones que evolucionan junto con las necesidades del mercado."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
