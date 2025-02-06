// src/components/Home.jsx
import React from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <IntroSection />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default Home;
