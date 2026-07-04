import React from "react";
import "./Projects.css";

import ecommerceImg from "../../assets/e-commerce.png";
import simpleEcommerce from "../../assets/simpleE-commerce .png";
import ApiImage from "../../assets/ecommerce api.png";
import sarahaApi from "../../assets/sarahaApp.png";
import NlpImage from "../../assets/NLP project.jpg";
import MlImage from "../../assets/ml.jpeg";
import Tailwind from "../../assets/tailwind.png";
import BakeryImg from "../../assets/bakery.png";
import portImage from "../../assets/revision portfoli.png";
import myPortfolio from "../../assets/portfolio.png";
import DOM from "../../assets/DOM.png";
import CRUD from "../../assets/CRUD.png";
import POSIMG from "../../assets/system resturant.png";

const projects = [
  {
    title: "Restaurant POS System",
    image: POSIMG,
    desc: "Restaurant POS system with order management, invoices, multilingual support and AI chatbot.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI"],
    github: "https://github.com/BeshoyAgaiby/restaurant-pos-system.git",
  },

  {
    title: "Full Stack E-Commerce",
    image: ecommerceImg,
    desc: "Complete MERN eCommerce platform with authentication, cart, orders and payments.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/BeshoyAgaiby/Full-stack-e-commerce.git",
  },

  {
    title: "E-Commerce Frontend",
    image: simpleEcommerce,
    desc: "Responsive online store interface with product browsing and shopping cart.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/BeshoyAgaiby/simpleE-commerceApp.git",
  },

  {
    title: "E-Commerce REST API",
    image: ApiImage,
    desc: "RESTful backend for authentication, products, cart, orders and JWT security.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/BeshoyAgaiby/e_commerce-backend.git",
  },

  {
    title: "Saraha REST API",
    image: sarahaApi,
    desc: "Anonymous messaging backend with authentication and secure message handling.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/BeshoyAgaiby/sarahaAPP_Backend.git",
  },

  {
    title: "Text Classification",
    image: NlpImage,
    desc: "NLP project using TF-IDF and Logistic Regression for text classification.",
    tech: ["Python", "NLP", "TF-IDF", "Sklearn"],
    github: "https://github.com/BeshoyAgaiby/NLP-Project.git",
  },

  {
    title: "Machine Learning Toolkit",
    image: MlImage,
    desc: "Compare multiple ML models and select the highest-performing algorithm.",
    tech: ["Python", "ML", "Pandas", "Sklearn"],
    github:
      "https://github.com/BeshoyAgaiby/Machine-Learning-Models-Evaluation-Toolkit.git",
  },

  {
    title: "Tailwind UI",
    image: Tailwind,
    desc: "Responsive landing page built using Tailwind CSS.",
    tech: ["HTML", "Tailwind", "Responsive"],
    github: "https://github.com/BeshoyAgaiby/Tailwind-Ui-Page.git",
  },

  {
    title: "Bakery Website",
    image: BakeryImg,
    desc: "Responsive bakery website showcasing products and services.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/BeshoyAgaiby/simple-Ui-Page.git",
  },

  {
    title: "Singer Portfolio",
    image: portImage,
    desc: "Responsive portfolio website featuring Slick Slider animations.",
    tech: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/BeshoyAgaiby/protofolio-for-rap.git",
  },

  {
    title: "Developer Portfolio",
    image: myPortfolio,
    desc: "Modern responsive portfolio built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "CSS"],
    github: "https://github.com/BeshoyAgaiby/protofolio.git",
  },

  {
    title: "CRUD Management",
    image: CRUD,
    desc: "CRUD application using JavaScript and Local Storage.",
    tech: ["JavaScript", "Bootstrap", "LocalStorage"],
    github:
      "https://github.com/BeshoyAgaiby/CRUD-OperationFrom-LocalStorage.git",
  },

  {
    title: "DOM Practice",
    image: DOM,
    desc: "Interactive JavaScript DOM manipulation project.",
    tech: ["JavaScript", "DOM", "Bootstrap"],
    github: "https://github.com/BeshoyAgaiby/simple-DOM-APP.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 mt-5">
      <div className="container">
        {/* Header */}

        <div className="project-content text-center mb-5">
          <h2 className="fw-bold">Projects</h2>

          <div
            className="mx-auto mt-3 rounded-pill"
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
            }}
          />

          <p className="text-secondary mt-3 project-desc">
            A collection of projects showcasing my experience in Full Stack
            Development, Machine Learning and Frontend Engineering.
          </p>
        </div>

        {/* Cards */}

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12 col-sm-6 col-xl-4" key={index}>
              <div className="card h-100 bg-dark border-secondary shadow project-card">
                <img
                  src={project.image}
                  className="card-img-top imgCard"
                  alt={project.title}
                />

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-white fw-bold">
                    {project.title}
                  </h3>

                  <p className="card-text text-secondary">{project.desc}</p>

                  <div className="row g-2 mt-2">
                    {project.tech.map((item, i) => (
                      <div className="col-4" key={i}>
                        <span className="badge border border-primary tech-badge w-100">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="button mt-auto pt-4">
                    <button
                      className="btn btn-info text-light w-100"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
