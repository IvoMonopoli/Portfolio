import React, { useState, useEffect } from 'react';
import '../styles/NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function NavigationBar({ sections }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = (id) => {
    // Realiza el scroll a la sección deseada
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Cierra el menú móvil al hacer clic en una sección
    const collapseElement = document.getElementById('navbarSupportedContent');
    const collapseInstance = window.bootstrap?.Collapse.getInstance(collapseElement);
    if (collapseInstance) {
      collapseInstance.hide();
    }
  };

  // Observa los eventos de apertura y cierre del menú (collapse) de Bootstrap
  useEffect(() => {
    const navCollapse = document.getElementById('navbarSupportedContent');
    if (!navCollapse) return;

    const handleShown = () => setIsNavOpen(true);
    const handleHidden = () => setIsNavOpen(false);

    navCollapse.addEventListener('shown.bs.collapse', handleShown);
    navCollapse.addEventListener('hidden.bs.collapse', handleHidden);

    // Limpieza de los eventos al desmontar el componente
    return () => {
      navCollapse.removeEventListener('shown.bs.collapse', handleShown);
      navCollapse.removeEventListener('hidden.bs.collapse', handleHidden);
    };
  }, []);

  // Función para cerrar el menú si se hace clic en el overlay
  const handleOverlayClick = () => {
    const collapseElement = document.getElementById('navbarSupportedContent');
    const collapseInstance = window.bootstrap?.Collapse.getInstance(collapseElement);
    if (collapseInstance) {
      collapseInstance.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            className="collapse navbar-collapse justify-content-center" 
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {sections.map((section) => (
                <li key={section.id} className="nav-item mx-2">
                  <button
                    onClick={() => handleScroll(section.id)}
                    className="nav-link btn"
                    style={{ border: 'none', background: 'none' }}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Overlay oscuro que se muestra cuando el menú está abierto (y sólo en mobile mediante CSS) */}
      {isNavOpen && (
        <div className="nav-overlay" onClick={handleOverlayClick}></div>
      )}
    </>
  );
}

export default NavigationBar;
