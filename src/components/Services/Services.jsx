import React from "react";
import thoughts from '../../assets/images/thoughts.jpg';

export default function Services() {
  const services = [
    {icon: "fa-brands fa-pagelines",
      title: "Palm", desc: "Unified IoT management for smart facilities", par: "Palm consolidates energy, HVAC, lighting, security and more into a single real-time automation hub. Achieves up to 40% energy savings and scales effortlessly." },
    {icon: "fa-solid fa-screwdriver-wrench",
       title: "eMaintain", desc: "Holistic maintenance platform for max uptime", par: "eMaintain centralizes assets, work orders and preventive & predictive servicing in the cloud. Live technician tracking and analytics significantly reduce downtime." },
    {icon: "fa-solid fa-brain",
       title: "AlKhwarizmi", desc: "Conversational AI for enterprise", par: "AlKhwarizmi provides a drag-and-drop builder to design and deploy chatbots across web, mobile and messaging. Combines ML, NLP and knowledge graphs to deliver 24/7 context-aware conversations. " },
  ];

  return (
    <>
    <section id="services">
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-3 ">Our Solutions</h2>
      <p className="text-center h4 text-dark mb-4">Innovating Smart Building Solutions</p>
      <p className="text-center h5 text-white mx-5 mb-5">Digital Platforms unite IoT, maintenance management, and AI into one ecosystem—automating operations, delivering real-time insights, and boosting efficiency.</p>
      <div className="row">
        {services.map((s, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100 text-center p-3 rounded-5 service-card">
              <div className="d-flex justify-content-center align-items-center mb-3">
              <h3><i className={`${s.icon} custom-icon me-1 fs-2 h3`}></i></h3>

             <p className="mb-0 fw-bold h3">{s.title}</p> 
              
                </div> 
              <p className="text-muted h5">{s.desc}</p>
              <p className="text-muted">{s.par}</p>
            </div>
          </div>
        ))}
         {/* <div className="col-md-3">
          <div className="">
             <img src={thoughts} alt="Thoughts" className=' py-0' style={{ height: "100%", width: "100%" }} />
          </div>
        </div> */}
      </div>


       </div>
    </section>
    
    </>
  );
}
