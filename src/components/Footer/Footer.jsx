import React from 'react';


export default function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-4">
      <div className="overlay"></div>

      <div className="container footer-content">
        <div className="row ">
          {/* Office Info */}
          <div className="col-md-4 mb-2">
            <h5 className="fw-bold mb-3">Offices</h5>
            <p className="mb-2">
              <span className="fw-bold">Head Office:</span><br />
              Altaif Street, Dhahrat Laban <br />
              Riyadh, Saudi Arabia.
            </p>
            <p>
              <span className="fw-bold">Jeddah Office:</span><br />
              Haramain highway, Alsafa <br />
              Jeddah, Saudi Arabia.
            </p>
          </div>

          {/* Working Hours */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Working Hours</h5>
            <p className="mb-1">Sunday - Thursday</p>
            <p className="mb-0">9:00 AM - 6:00 PM</p>
          </div>

          {/* Contact + Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Customer Services</h5>
            {/* داخل الفوتر */}
            <p className="mb-1">
              <a href="tel:+966552292953" className="text-white text-decoration-none phone">
                <i className="fas fa-phone-alt me-2"></i> 0552292953
              </a>
            </p>

            <p className="mb-1">
              <a href="mailto:sales@inseejam.sa" className="text-white text-decoration-none mail">
                <i className="fas fa-envelope me-2"></i> sales@inseejam.sa
              </a>
            </p>

            <div className="social-icons mt-3">
              <a href="https://www.facebook.com/share/1B4DtzYKkA/" target='_blank' rel="noopener noreferrer" className="me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/insejam/" target='_blank' rel="noopener noreferrer" className="me-2"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/insejam.sa?igsh=MWxidHczZThlejJqNg==" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* hr line */}
        <hr className="border-light" />

        {/* Bottom */}
        <div className="text-center small">
          © {new Date().getFullYear()} Insejam. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
