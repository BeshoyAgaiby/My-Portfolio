import React from "react";
import './About.css';
import img from '../../assets/me.jpeg'
const stack = ["MongoDB", "Express", "React", "Node.js", "Git"];

export default function About() {
  return (
    <section id='about' className="min-vh-100 d-flex align-items-center py-5 text-light">
      <div className="container">
          <div className=" text-center mb-5">
            <h2 className="fw-bold">About Me</h2>
            <div
              className="mx-auto mt-3 rounded-pill"
              style={{
                width: "120px",
                height: "4px",
                background: "linear-gradient(90deg,#8245ec,#a855f7)",
              }}
            ></div>
            <p className="text-secondary fw-bolder mt-4">
              Computer Science and Artificial Intelligence student focused on
              Software Engineering.
            </p>
          </div>
        <div className="row align-items-center g-5">

          {/* Left - Image */}
          <div className="col-md-5 text-center">
            <img
              src={img}
              alt="Beshoy Agaiby"
              className="about-img img-fluid rounded-4 border border-secondary"
            />
          </div>

          {/* Right - Content */}
          <div className="col-md-7">
            <p className="text-secondary small mb-1">About Me</p>
            <h2 className="fw-bold mb-1">Beshoy Agaiby</h2>
            <p className="text-second mb-3">MERN Stack Developer</p>

            <p className="text-secondary mb-4" style={{ lineHeight: "1.8" }}>
              I'm a Full-Stack Developer with <strong className="text-light">1 year of experience</strong> building
              web applications using the <strong className="text-light">MERN stack</strong>. I enjoy
              creating clean and functional projects from frontend to backend.
            </p>

            <p className="small text-secondary mb-2">Tech Stack</p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="badge border border-secondary text-secondary fw-normal"
                  style={{ fontSize: "0.8rem", padding: "6px 12px" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="d-flex gap-3">
              <a href="#contacts" className="btn btn-outline-light btn-sm px-4">
                Hire Me
              </a>
              <a href="#projects" className="btn btn-link text-secondary text-decoration-none btn-sm">
                My Projects →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}