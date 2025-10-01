import React from "react";
import thoughts from '../../assets/images/thoughts.jpg';
import aboutImg from '../../assets/images/tech.jpg';

export default function About() {
  return (
 <section
      id="about"
      style={{ position: "relative", backgroundColor: "#f8f9fa" }}>
      <div className="container pb-5 pt-4">
      <div className="d-flex justify-content-center align-items-center">
      <h2 className="fw-bold text-center mb-3 about-us">About Us</h2>

      </div>
      <div className="row">
        <div className="col-md-7">
        <p className="text-dark mb-4" style={{fontSize: "17px", fontWeight: "400"}}>
        <span className="h3 insejam-word">Insejam</span> Technology is a frontrunner in the Saudi Arabian technology landscape. We are
        passionate about supporting the Kingdom's Vision 2030, a blueprint for a thriving future. This
              vision emphasizes a dynamic and vibrant work environment, alongside national industry and
              logistics development through the "Made in Saudi Arabia" program.
            </p>
            <p className="text-dark mb-4" style={{ fontSize: "17px", fontWeight: "400" }}>
              <span className="h3 insejam-word">Insejam</span> Technology thrives on innovation. We are dedicated to crafting exceptional products
              and services that push boundaries. We foster strategic partnerships with clients and technology
              providers, fostering a collaborative spirit that allows us to conquer market challenges.
            </p>
            <p className="text-dark mb-4" style={{ fontSize: "17px", fontWeight: "400" }}>
              Our proven track record has fostered a distinguished and highly skilled team. We leverage our
              expertise to develop cutting-edge solutions tailored to our clients' specific needs.
              {/* We are a specialized team that builds complete digital solutions to help businesses grow and transform. */}
            </p>
          </div>


<div className="col-md-5 ">
   <div className="about-img mx-auto ">
    <img src={aboutImg} className="w-100 mx-auto rounded-5" alt="" />
   </div>
</div>

        </div>



        <div className="row mt-4  justify-content-center text-center">

          {/* Values */}
          <div className="col-md-3">
            <i className="fas fa-users fa-2x text-gradient mb-2"></i>
            <h5 className="fw-bold">Values</h5>
            <p className="text-muted mx-2">Innovation, Growth, Responsibility, and Credibility.</p>
          </div>

          {/* علامة + */}
          <div className="col-md-1">
            <h2 className="fw-bold fs-2 text-gradient mt-md-5">+</h2>
          </div>

          {/* Mission */}
          <div className="col-md-3">
            <i className="fas fa-handshake fa-2x text-gradient mb-2"></i>
            <h5 className="fw-bold">Mission</h5>
            <p className="text-muted mx-2">Provide innovative technological solutions that contribute to digital transformation and drive the Saudi industry forward at both the individual and business levels</p>
          </div>

          {/* علامة = */}
          <div className="col-md-1">
            <h2 className="fw-bold text-gradient mt-md-5">=</h2>
          </div>


          {/* Vision */}
          <div className="col-md-3">
            <i className="fas fa-bullseye fa-2x text-gradient mb-2"></i>
            <h5 className="fw-bold">Vision</h5>
            <p className="text-muted mx-2">Contribute to the improvement of Saudi Arabia's quality of life.</p>
          </div>

        </div>




        {/* <div
    style={{
      position: "absolute",
      bottom: "-1px",
      left: "0",
      width: "100%",
      overflow: "hidden",
      lineHeight: "0",
    }}
  >
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{ height: "80px", width: "100%" }}
    >
      <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style={{ stopColor: "#E1675C", stopOpacity: 1 }} />
    <stop offset="100%" style={{ stopColor: "#423DCF", stopOpacity: 1 }} />
  </linearGradient>

      </defs>
      <path
        d="M0.00,49.98 C150.00,150.00 349.80,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{ stroke: "none", fill: "url(#waveGradient)" }}
      ></path>
    </svg>
  </div> */}






      </div>
    </section>


  );
}
