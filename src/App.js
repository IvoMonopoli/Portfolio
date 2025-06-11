import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectsDetail';
import Contact from './components/Contact';

function App() {
  const sections = [
    { id: 'home', title: 'Inicio' },
    { id: 'about', title: 'Sobre mí' },
    { id: 'projects', title: 'Proyectos' },
    { id: 'contact', title: 'Contacto' },
  ];

  return (
    <Router>
      <NavigationBar sections={sections} />

      <Routes>
        {/* Ruta principal con las secciones en la misma página */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </>
          }
        />
        {/* Ruta para el detalle de cada proyecto */}
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
