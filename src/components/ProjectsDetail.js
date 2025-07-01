import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProjectsDetail.css';

// Imágenes
import proyecto1      from '../assets/projects/proyecto1.jpg';
import casamonopoli1  from '../assets/projects/casamonopoli1.png';
import casamonopoli2  from '../assets/projects/casamonopoli2.png';
import casamonopoli3  from '../assets/projects/casamonopoli3.png';
import casamonopoli4  from '../assets/projects/casamonopoli4.png';

import BDD1  from '../assets/projects/BDD1.png';
import BDD2  from '../assets/projects/BDD2.png';
import BDD3  from '../assets/projects/BDD3.png';
import BDD4  from '../assets/projects/BDD4.png';

// Iconos de FontAwesome y Simple Icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiElectron 
} from "react-icons/si";

function ProjectDetail() {
  const { projectId } = useParams();

  // 1) Mapa de iconos por alias
  const techIcons = {
    html:      { icon: <FaHtml5 size={40} />,     label: 'HTML' },
    css:       { icon: <FaCss3Alt size={40} />,   label: 'CSS' },
    js:        { icon: <SiJavascript size={40} />,label: 'JS' },
    electron:  { icon: <SiElectron size={40} />,  label: 'Electron' },
    react:     { icon: <FaReact size={40} />,     label: 'React' },
    node:      { icon: <FaNodeJs size={40} />,    label: 'Node.js' },
    bootstrap: { icon: <FaBootstrap size={40} />, label: 'Bootstrap' },
  };

  // 2) Datos de cada proyecto con su array de tecnologías y opcionalmente `url`
  const projectsDetails = {
    proyecto1: {
      title: 'Base de datos para clientes',
      detail: 'Base de clientes Desktop es una app de escritorio multiplataforma construida con Electron y Node.js que une interfaz moderna y lógica de servidor en un solo binario. El sistema ofrece registro y login con bcrypt y Context Isolation, dos roles (admin/empleado) y un CRUD completo de clientes con validación, normalización y notificaciones vía modales personalizados. Cada acción (INSERT, UPDATE, DELETE) se registra automáticamente en una tabla de auditoría formateada al estilo es-AR, con opciones para limpiar todo el historial o por rango de fechas. El almacenamiento es configurable vía .env: puede ser MySQL2 (RDS) con consultas parametrizadas o archivos JSON locales (clientes.json, usuarios.json). La arquitectura modular (components/auth, users, auditoria) y el uso de HTML5, CSS3 y JS puro aseguran mantenibilidad, seguridad y excelente UX.',
      images: [BDD1 , BDD2 , BDD3, BDD4,],
      technologies: ['html', 'css', 'js','electron'],
      // no tiene URL pública, así que no se mostrará el botón
    },
    proyecto2: {
      title: 'Casa Monopoli',
      detail: 'Este proyecto es un portafolio interactivo desarrollado con React y JavaScript (ES6+), que utiliza CSS3 modular (Flexbox, Media Queries y object-fit) para lograr un diseño limpio y fácilmente mantenible. La sección de galería emplea React-Slick para un carrusel ligero y personalizado, mientras que cada componente carga sus estilos propios desde archivos CSS dedicados, lo que asegura una organización escalable. Gracias a puntos de quiebre en 992 px y 600 px, el sitio adapta su disposición de filas amplias en escritorio a apilamientos verticales en tablet y móvil garantizando una experiencia totalmente responsive en cualquier dispositivo',
      images: [casamonopoli1, casamonopoli2, casamonopoli3, casamonopoli4],
      technologies: ['html','css','js','react','bootstrap'],
      url: 'https://casamonopoli.netlify.app'  // ← botón “Ver Página Web”
    },
    // Ejemplo de un tercer proyecto con URL
  };

  const project = projectsDetails[projectId];
  if (!project) return <p>Proyecto no encontrado.</p>;

  // 3) Configuración del slider
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
          <div className="project-carousel">
            <Slider {...settings}>
              {project.images.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`Slide ${i + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="project-description">
            <p>{project.detail}</p>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="project-technologies">
          {project.technologies.map((tech) => {
            const item = techIcons[tech];
            if (!item) return null;
            return (
              <div key={tech} className="tech-icon-container">
                {item.icon}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Botones de acción */}
        <div className="project-actions">
          <Link to="/#projects" className="btn btn-primary">
            Volver atrás
          </Link>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Ver Página Web
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
