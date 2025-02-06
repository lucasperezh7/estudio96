import React from "react";
import "../styles/VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <h2>Escucha mi música</h2>
        <p>
          Mira el video más reciente de Egho y déjate envolver por su música.
        </p>
        <div className="video-embed">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W_Y0wLKxtxs" // Aquí se ha agregado el ID del video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
