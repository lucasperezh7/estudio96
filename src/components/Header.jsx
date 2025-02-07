import React, { useState } from "react";
import "../styles/Header.css"; // Ruta corregida para el archivo CSS
import logoImage from "../assets/logocopia.png"; // Importación del logo
import { MdMenu } from "react-icons/md"; // Importa el icono de menú

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo del artista" />
      </div>
      {menuOpen && (
        <nav className="menu">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#musica">Música</a>
            </li>
            <li>
              <a href="#videos">Videos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
