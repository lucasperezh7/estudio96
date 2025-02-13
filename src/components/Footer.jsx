import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2025 Mi Empresa. Todos los derechos reservados.
        </p>
        <p className="footer-contact">
          <a href="mailto:miemail@example.com" className="footer-link">
            Contacto
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
