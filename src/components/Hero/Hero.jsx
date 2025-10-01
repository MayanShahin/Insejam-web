import React from "react";
import {cover} from "../../assets/images/cover.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Video */}
      {/* <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="display-4 fw-bold">
          Welcome to <span className="typing "></span>
        </h1>

       <p className="lead mt-3">
          We provide modern digital solutions: web development, Marketing, and smart IoT systems.
        </p>
        <div className="mt-4">
          <a href="#services" className="btn custom-btn btn-lg me-2" style={{backgroundColor: "#423DCF"}}>
            Our Solutions
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
