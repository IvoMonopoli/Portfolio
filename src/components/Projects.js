import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import proyecto1Img from '../assets/projects/proyecto1.jpg'
import proyecto2Img from '../assets/projects/casamonopoli1.png'


// Lista de proyectos con información básica
const projectList = [
  {
    id: 'proyecto1',
    title: 'Base de datos para clientes',
    description: 'Realizada en electron con su base de datos en RDS.',
    image: proyecto1Img, // Reemplaza con la URL de tu imagen
    github: 'https://github.com/IvoMonopoli' // Reemplaza con tu enlace real
  },
  {
    id: 'proyecto2',
    title: 'Casa Monopoli',
    description: 'Realizada con React , web diseñada para una pyme encargada de venta y alquiler de insumos medicos',
    image: proyecto2Img, // Reemplaza con la URL de tu imagen
    github: 'https://github.com/usuario/proyecto2'
  },
  // Agrega más proyectos aquí...
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <h1>Mis Proyectos</h1>
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-buttons">
                  <Link to={`/projects/${project.id}`} className="btn btn-primary">Ver Más</Link>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
