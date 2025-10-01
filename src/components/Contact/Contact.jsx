import React from "react";
import Map from '../../components/Map/Map';

export default function Contact() {
  return (
    <div id="contact" className="container py-5">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-bold text-center mb-3 contact-us">Contact Us</h2>
      </div>
      <p className="text-muted text-center mb-4">Send us the details of your project and we will get back to you soon.</p>

      <div className="row justify-content-between ">
        <div className="col-md-6">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter subject" />
            </div>

            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Type your message"></textarea>
            </div>

            <div class="text-center">
              <a href="#"
               className="btn-submit  text-decoration-none">
                Send Message
              </a>
            </div>
          </form>

        </div>
        <div className="col-md-6 " style={{marginTop: "2rem"}}>
           <Map/>
        </div>
      </div>
    </div>
  );
}
