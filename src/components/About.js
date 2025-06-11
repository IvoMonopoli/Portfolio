import React from 'react';
import { DiJavascript1 } from 'react-icons/di';
import { FaReact, FaBootstrap, FaNodeJs,  FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiElectron, SiMysql,  SiAmazonwebservices, SiJson } from 'react-icons/si';
import AmazonRDSLogo from '../assets/amazon-rds.png';
import BcryptLogo from '../assets/bcrypt.png';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        {/* Primera fila: Frontend y Backend */}
        <div className="row g-4">
          <div className="col-md-6 text-center about-card">
            <h3>Frontend</h3>
            <div className="icon-group">
              <FaHtml5 size={40} color="#E34F26" title="HTML5" />
              <FaCss3Alt size={40} color="#1572B6" title="CSS3" />
              <DiJavascript1 size={40} color="#F0DB4F" title="JavaScript" />
              <FaReact size={40} color="#61DBFB" title="React" />
              <SiElectron size={40} color="#47848F" title="Electron" />
              <FaBootstrap size={40} color="#563d7c" title="Bootstrap" />
            </div>
            <p>
              Desarrollo de interfaces modernas y responsivas utilizando JavaScript,
              React, Electron y Bootstrap.
            </p>
          </div>
          
          <div className="col-md-6 text-center about-card">
            <h3>Backend</h3>
            <div className="icon-group">
              <SiMysql size={40} color="#4479A1" title="MySQL" />
              <FaNodeJs size={40} color="#68A063" title="Node.js" />
            </div>
            <p>
              Construcción de APIs robustas y sistemas escalables con MySQL, Node.js y MongoDB.
            </p>
          </div>
        </div>
        
        {/* Segunda fila: Machine Learning y Herramientas */}
        <div className="row mt-4 g-4">
          <div className="col-md-6 text-center about-card">
            <h3>Machine Learning</h3>
            <div className="icon-group">
              <SiAmazonwebservices size={40} color="#FF9900" title="AWS Academy" />
              <img
                src={AmazonRDSLogo}
                alt="Amazon RDS"
                title="Amazon RDS"
                style={{ width: '35px', height: '35px', marginLeft: '10px' }}
              />
            </div>
            <p>
              Implementación de modelos de Machine Learning y análisis de datos utilizando tecnologías de AWS Academy.
            </p>
          </div>
          
          <div className="col-md-6 text-center about-card">
            <h3>Herramientas</h3>
            <div className="icon-group">
              <SiJson size={40} color="#F29111" title="JSON" />
              <img
                src={BcryptLogo}
                alt="Bcrypt"
                title="Bcrypt"
                style={{ width: '100px', height: '70px', marginLeft: '-150px', marginTop:'-15px' }}
              />
            </div>
            <p>
              Automatización y despliegue continuo usando herramientas de contenedores y orquestación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
