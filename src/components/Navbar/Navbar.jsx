import React, { useState } from 'react';
import logo from '../../assets/images/Insejam logo.png';

export default function Navbar() {

   const [active, setActive] = useState("home");


   return (
      <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
         <div className="container">
            <a href='#'>
               <img src={logo} alt="Insejam Logo" className=' py-0' style={{ width: "115px" }} />
            </a> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                     <a
                        className={`nav-link ${active === "home" ? "active text-primary fw-bold" : ""}`}
                        href="#home"
                        onClick={() => setActive("home")}
                     >
                        Home
                     </a>
                  </li>
                  <li className="nav-item">
                     <a
                        className={`nav-link ${active === "about" ? "active text-primary fw-bold" : ""}`}
                        href="#about"
                        onClick={() => setActive("about")}
                     >
                        About
                     </a>
                  </li>
                  <li className="nav-item">
                     <a
                        className={`nav-link ${active === "services" ? "active text-primary fw-bold" : ""}`}
                        href="#services"
                        onClick={() => setActive("services")}
                     >
                        Solutions
                     </a>
                  </li>
                  <li className="nav-item">
                     <a
                        className={`nav-link ${active === "contact" ? "active text-primary fw-bold" : ""}`}
                        href="#contact"
                        onClick={() => setActive("contact")}
                     >
                        Contact Us
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
