import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importa los iconos de React Icons
import "../styles/Contact.css";

const Contacto = () => {
  return (
    <section className="contacto">
      {/* Título de la sección */}
      <h2 className="contacto-title">Contacto</h2>

      <div className="info-container">
        {/* Teléfonos */}
        <div className="contact-info">
          <FaPhone size={50} color="#0d457d" />
          <div className="contact-detail">
            <p>603 01 68 29</p>
            <p>687 76 94 21</p>
          </div>
        </div>

        {/* Correo Electrónico */}
        <div className="contact-info">
          <FaEnvelope size={50} color="#0d457d" />
          <p className="contact-detail">contacto@estudionoventayseis.com</p>
        </div>

        {/* Instagram */}
        <div className="contact-info">
          <FaInstagram size={50} color="#0d457d" />
          <p className="contact-detail">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @_estudionoventayseis
            </a>
          </p>
        </div>

        {/* Localización */}
        <div className="contact-info">
          <FaMapMarkerAlt size={50} color="#0d457d" />
          <p className="contact-detail">Alicante / España / Global</p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
