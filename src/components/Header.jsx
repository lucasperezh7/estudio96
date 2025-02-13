import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Para enlaces internos
import logoImage from "../assets/logo.webp";
import "../styles/Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <ScrollLink to="intro" smooth={true} duration={500}>
            <img
              src={logoImage}
              alt="Logo Saya Consulting"
              className="logo-image"
            />
          </ScrollLink>
        </div>

        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <ScrollLink to="intro" smooth={true} duration={1500}>
                Inicio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Aboutus" smooth={true} duration={1500}>
                Sobre nosotros
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Services" smooth={true} duration={1500}>
                Ofrecemos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Portfolio" smooth={true} duration={1500}>
                Nuestros proyectos
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="cta">
          <ScrollLink
            to="Contact"
            smooth={true}
            duration={1500}
            className="cta-but"
          >
            Contacto
          </ScrollLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
