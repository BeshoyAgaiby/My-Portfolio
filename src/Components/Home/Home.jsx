import React from "react";
import "./Home.css";
import myImg from "../../assets/me.jpeg";

export default function Home() {
  return (
    <>
      <section id="home" className="home text-light d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* ================= LEFT ================= */}

            <div className="col-lg-6">
              <h4 className="text-secondary fw-semibold mb-3">
                Hey there 👋, I'm
              </h4>

              <h1 className="display-1 lh-1">
                Beshoy <br />
                Agaiby
              </h1>

              <h3 className="text-info fw-bold mt-2">aka BeshoyDev</h3>

              <div className="d-flex align-items-center gap-2 mt-4">
                <h2 className="fw-semibold m-0">A passionate</h2>

                <div className="roles">
                  <span>Front-end Developer</span>

                  <span>Back-end Developer</span>
                </div>
              </div>

              <p className="fs-5 text-secondary mt-4 ">
                As a dedicated MERN Stack developer, I'm on a journey to craft
                interactive and efficient web applications. I specialize in both
                frontend and backend development, constantly improving through
                hands-on projects using React, Node.js, MongoDB, and Express.
              </p>

              <button className="btn btn-info px-5 py-3 rounded-pill fw-bold fs-5 mt-3 shadow-lg">
                Download CV
              </button>
            </div>

            {/* ================= RIGHT ================= */}

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="image-border">
                <img
                  src={myImg}
                  className="rounded-circle img-fluid hero-img"
                  alt="Beshoy Agaiby"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
