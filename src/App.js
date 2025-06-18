import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectsDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent({ sections }) {
  const location = useLocation();
  // Ocultamos el Navbar si la ruta empieza con "/projects/" (la página de detalle)
  const hideNavbar = location.pathname.startsWith("/projects/");

  return (
    <>
      { !hideNavbar && <NavigationBar sections={sections} /> }
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
      {/* Se agrega el Footer de manera global */}
      <Footer />
    </>
  );
}

function App() {
  const sections = [
    { id: 'home', title: 'Inicio' },
    { id: 'about', title: 'Sobre mí' },
    { id: 'projects', title: 'Proyectos' },
    { id: 'contact', title: 'Contacto' },
  ];

  return (
    <Router>
      <AppContent sections={sections} />
    </Router>
  );
}

export default App;
