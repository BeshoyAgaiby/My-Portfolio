import React from "react";
import "./Education.css";
import universityLogo from "../../assets/universityLogo.jpeg";
export default function Education() {
  return (
    <>
      <section id='education' className="education py-5 mt-5 ">
        <div className="container text-light">
          <div className="edu-content text-center mb-5">
            <h2 className="fw-bold">Education</h2>
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

          <div className="col-lg-6 mx-auto">
            <div className="skill-card text-light text-center">
              <img
                src={universityLogo}
                alt="Minya National University"
                className="education-img mb-4 w-100"
              />

              <h3 className="fw-bold">
                Faculty of Computers & Artificial Intelligence
              </h3>

              <h5 className="text-info mt-2">Minya National University</h5>

              <p className="text-secondary mt-3">
                Software Engineering Student
              </p>

              <span className="badge bg-info px-4 py-2 fs-6">
                Expected Graduation 2027
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
