import React from "react";
import "./Contacts.css";
export default function Contacts() {
  return (
    <>
      <section id="contacts" className="contact py-5 mt-5 text-light">
        <div className="contact-head text-center">
          <h2 className="display-4 fw-bold">CONTACT</h2>
          <div
            className="mx-auto mt-3 rounded-pill fw-bold"
            style={{
              width: "130px",
              height: "4px",
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
            }}
          ></div>
        <p className="text-secondary mt-4 fw-bolder">I’d love to hear from you—reach out for any opportunities or questions!</p>
        </div>
        <div className="container mt-5 text-center ">
          <div className="contact-card w-50 mx-auto">
            <h3 className="text-info">Let 's Talk</h3>

            <div className="contact-inputs mt-3 me-2 ">
              <input className="form-control m-4 custom-input" type="email" placeholder="Your Email"/>
              <input className="form-control m-4 custom-input" type="text" placeholder="Your Name"/>
              <input className="form-control m-4 custom-input" type="text" placeholder="Subject"/>
              <textarea className="form-control custom-input m-4" rows={"5"} placeholder="Your Message"></textarea>
            </div>
          <div className="contact-whats me-2">
            <button 
             className="btn btn-info px-5 py-3 fw-bold m-4 w-100"
             onClick={()=>{
              window.open("https://wa.me/201208320347","_blank")
             }}>
              Send Message
            </button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
