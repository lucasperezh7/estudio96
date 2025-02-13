import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Portfolio.css";

// Importación de imágenes
import project1 from "../assets/port1.webp";
import project2 from "../assets/port2.webp";
import project3 from "../assets/port3.webp";
import project4 from "../assets/port4.webp";
import project5 from "../assets/port5.webp";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [project1, project2, project3, project4, project5];

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="portfolio-carrusel">
      <h2 className="portfolio-carrusel-title">Nuestro Trabajo</h2>
      <div className="portfolio-carrusel-wrapper">
        <div className="portfolio-carrusel-container">
          <AnimatePresence>
            {/* Imagen anterior (se mueve desde la izquierda hacia el centro) */}
            <motion.img
              key={`prev-${currentIndex}`}
              src={
                projects[(currentIndex - 1 + projects.length) % projects.length]
              }
              alt="Imagen anterior"
              className="portfolio-carrusel-image left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.8, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Imagen principal (en el centro) */}
            <motion.img
              key={`main-${currentIndex}`}
              src={projects[currentIndex]}
              alt={`Proyecto ${currentIndex + 1}`}
              className="portfolio-carrusel-image main-image"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Imagen siguiente (se mueve desde la derecha hacia el centro) */}
            <motion.img
              key={`next-${currentIndex}`}
              src={projects[(currentIndex + 1) % projects.length]}
              alt="Imagen siguiente"
              className="portfolio-carrusel-image right"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.8, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
