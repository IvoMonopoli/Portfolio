// ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Projects.css';

function ProjectDetail() {
  const { projectId } = useParams();

  // Datos de ejemplo; en un caso real pueden venir de una API o de un archivo de datos
  const projectsDetails = {
    proyecto1: {
      title: 'Proyecto 1',
      detail: 'Detalles completos y explicación detallada del Proyecto 1. Aquí se puede incluir información técnica, imágenes, etc.'
    },
    proyecto2: {
      title: 'Proyecto 2',
      detail: 'Detalles completos y explicación detallada del Proyecto 2. Se puede incluir información sobre tecnologías, procesos, etc.'
    },
  };

  const project = projectsDetails[projectId];

  if (!project) {
    return <p>Proyecto no encontrado.</p>;
  }

  return (
    <section className="project-detail-section">
      <div className="container">
        <h1>{project.title}</h1>
        <p>{project.detail}</p>
        {/* Podrías agregar un botón o enlace para volver atrás */}
      </div>
    </section>
  );
}

export default ProjectDetail;
