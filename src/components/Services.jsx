import React from "react";
import "../styles/Services.css";

import project1 from "../assets/port1.webp";
import project2 from "../assets/port2.webp";
import project3 from "../assets/port3.webp";
import project4 from "../assets/port4.webp";
import project5 from "../assets/port5.webp";

const Services = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Te ofrecemos</h2>
      <div className="content">
        <div className="portfolio-1column">
          {/* Primera fila (3 imágenes) */}
          <div className="portfolio-item">
            <img
              src={project1}
              alt="Proyecto Innovador"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <h3 className="portfolio-name">Proyecto Innovador</h3>
              <p className="portfolio-description">
                Una solución tecnológica de vanguardia para la industria.
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src={project2}
              alt="Diseño Creativo"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <h3 className="portfolio-name">Diseño Creativo</h3>
              <p className="portfolio-description">
                Un enfoque estético y funcional en el diseño de UI/UX.
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src={project3}
              alt="Automatización Inteligente"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <h3 className="portfolio-name">Automatización Inteligente</h3>
              <p className="portfolio-description">
                Optimización de procesos con inteligencia artificial.
              </p>
            </div>
          </div>

          {/* Segunda fila (2 imágenes centradas) */}
          <div className="portfolio-2column">
            <div className="portfolio-item">
              <img
                src={project4}
                alt="Arquitectura Moderna"
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3 className="portfolio-name">Arquitectura Moderna</h3>
                <p className="portfolio-description">
                  Diseño arquitectónico con un enfoque innovador.
                </p>
              </div>
            </div>

            <div className="portfolio-item">
              <img
                src={project5}
                alt="Eficiencia Energética"
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3 className="portfolio-name">Eficiencia Energética</h3>
                <p className="portfolio-description">
                  Soluciones sostenibles para el ahorro energético.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
