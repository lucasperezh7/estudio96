// src/components/Home.jsx
import React from "react";
import Header from "../components/Header";
import Introsection from "../components/IntroSection";
import AboutUs from "../components/Aboutus";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contacto from "../components/contact";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <div id="intro">
        <Introsection />
      </div>
      <div id="Aboutus">
        <AboutUs />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contacto />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
