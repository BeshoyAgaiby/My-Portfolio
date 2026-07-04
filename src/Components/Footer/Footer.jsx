import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <section className="footer bg-main py-5 my-5 mb-auto">
        <div className=" container text-center">
          <div className="content-name">
            <h2 className="fw-bold text-light gradient-text">Beshoy Agaiby </h2>
          </div>
          <div className="content-links mt-3">
            <div className="row">
              <ul className="list-unstyled d-flex justify-content-center gap-4">
                <li className="nav-item">
                  <a className="nav-link text-light" href="#home">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light " href="#about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#projects">
                    Projects
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#contacts">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-icons mt-3">
            <ul className="list-unstyled d-flex justify-content-center gap-4 text-light ">
              <li>
                <i className="fa-brands fa-facebook fs-4"></i>
              </li>

              <li>
                <i className="fa-brands fa-github fs-4"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter fs-4"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin fs-4"></i>
              </li>

              <li>
                <i className="fa-brands fa-instagram fs-4"></i>
              </li>
            </ul>
          </div>

          <p className="text-secondary mt-3">© 2026 AntonixDev. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
