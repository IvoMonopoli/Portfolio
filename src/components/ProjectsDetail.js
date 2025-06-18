import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProjectsDetail.css';
import proyecto1 from '../assets/proyecto1.jpg';

// Importamos los iconos de las tecnologías
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiElectron } from "react-icons/si";

function ProjectDetail() {
  const { projectId } = useParams();

  // Datos de ejemplo (agrega más proyectos según necesites)
  const projectsDetails = {
    proyecto1: {
      title: 'Base de datos para clientes',
      detail: 'Detalles completos y explicación detallada del Proyecto 1. Información técnica, imágenes, etc.',
      images: [proyecto1, proyecto1, proyecto1],
    },
    proyecto2: {
      title: 'Proyecto 2',
      detail: 'Detalles completos y explicación detallada del Proyecto 2. Información sobre tecnologías, procesos, etc.',
      images: [proyecto1, proyecto1],
    },
  };

  const project = projectsDetails[projectId];
  if (!project) return <p>Proyecto no encontrado.</p>;

  // Configuración para el carrusel principal
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="project-detail-section">
      <div className="project-detail-wrapper">
        <h1>{project.title}</h1>
        <div className="project-detail-container">
          {/* Carrusel principal */}
          <div className="project-carousel">
            <Slider {...settings}>
              {project.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Imagen ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Descripción */}
          <div className="project-description">
            <p>{project.detail}</p>
          </div>
        </div>

        {/* Tecnologías (Iconos animados) */}
        <div className="project-technologies">
          <div className="tech-icon-container">
            <FaHtml5 size={40} color="#2c3231" opacity="0.9" />
            <span>HTML</span>
          </div>
          <div className="tech-icon-container">
            <FaCss3Alt size={40} color="#2c3231" opacity="0.9" />
            <span>CSS</span>
          </div>
          <div className="tech-icon-container">
            <SiJavascript size={40} color="#2c3231" opacity="0.9" />
            <span>JS</span>
          </div>
          <div className="tech-icon-container">
            <SiElectron size={40} color="#2c3231" opacity="0.9" />
            <span>Electron</span>
          </div>
        </div>

        {/* Botón "Volver atrás" */}
        <div className="back-button-container">
          <Link to="/#projects" className="btn btn-primary">
            Volver atrás
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
