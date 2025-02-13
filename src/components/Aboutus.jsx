import React from "react";
import "../styles/Aboutus.css";

// Importación de imágenes al inicio
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp"; // Asegúrate de que la imagen esté en la carpeta correcta

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Título principal de la sección */}
      <h1 className="about-title">¿Quiénes somos?</h1>

      {/* Primera sección: Imagen izquierda, texto derecha */}
      <div className="about-section left-image">
        <img src={image1} alt="Imagen 1" className="about-image" />
        <div className="h2p right-text">
          <h2>Somos Laura y Héctor</h2>
          <p className="about-text">
            Somos 2 chicos jóvenes nacidos en Alicante, amamos nuestra tierra
            natal y el sentimiento mediterráneo que se respira en ella. Amantes
            del mundo del interiorismo, por lo que, hace unos años decidimos
            formarnos en torno a esta profesión. <br /> <br />
            Aun así, dedicamos parte de nuestro tiempo a viajar y aprender de
            otras culturas, estilos e influencias artísticas que acaban haciendo
            eco en una visión más enriquecedora.
          </p>
        </div>
      </div>

      {/* Segunda sección: Texto a la izquierda, imagen completamente a la derecha */}
      <div className="about-section right-image">
        <div className="h2p text-left">
          <h2>Nuestra misión</h2>
          <p className="about-text">
            Nuestra misión es mejorar la vida de las personas a través de la
            tecnología, brindando productos y servicios de alta calidad que se
            adapten a sus necesidades. <br /> <br /> En nuestros diseños,
            priorizamos la innovación, la sostenibilidad y el diseño eficiente.
          </p>
        </div>
        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
