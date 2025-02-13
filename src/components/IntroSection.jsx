import "../styles/IntroSection.css";
import backgroundVideo from "../assets/Introsection.mp4"; // Correcta importación

export default function IntroSection() {
  return (
    <section className="intro-section">
      {/* Video de fondo */}
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} />
      </video>

      {/* Contenido centrado */}
      <div className="content-container">
        <h1 className="title">ESTUDIO NOVENTA Y SEIS</h1>
        <p className="subtitle">Estudio de diseño y arquitectura de interior</p>
      </div>
    </section>
  );
}
