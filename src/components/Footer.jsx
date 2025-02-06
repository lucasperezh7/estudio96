import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importar los iconos de Font Awesome
import "../styles/Footer.css"; // Importar el archivo CSS del Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Reyes Santos 2025</p>
      </div>
      <div className="social-icons">
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-spotify"></i>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
