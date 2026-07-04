import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-center navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container mx-auto text-center">
          <a className="navbar-brand ms-4 fw-bold text-primary" href="/">
           <div className="gap-1">
               <span className="fw-bolder font-xl text-second ">{"</"}</span>
                 {"Beshoy"}
                  <span className="fw-bolder text-second ">{"Dev>"}</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse mt-1 ms-5 navbar-collapse" id="navbarNav">
            {/* Left Side Links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Eduction
                </a>
              </li>
            </ul>

            {/* Right Side (Social Icons) */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item d-flex align-items-center">
                <a
                  href="https://www.facebook.com/share/1JBkTqwT1s/"
                  target="_blank"
                  className="nav-link text-light" rel="noreferrer"
                >
                  <i className="fab fa-facebook mx-2"></i>
                </a>
                <a
                  href="https://github.com/BeshoyAgaiby"
                  target="_blank"
                  className="nav-link text-light" rel="noreferrer"
                >
                  <i className="fab fa-github mx-2"></i>
                </a>
                <a
                  href="https://www.instagram.com/bmofied/"
                  target="_blank"
                  className="nav-link text-light" rel="noreferrer"
                >
                  <i className="fab fa-instagram mx-2"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/beshoy-agaiby"
                  target="_blank"
                  className="nav-link text-light" rel="noreferrer"
                >
                  <i className="fab fa-linkedin mx-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
