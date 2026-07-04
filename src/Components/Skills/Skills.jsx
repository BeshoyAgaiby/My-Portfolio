import React from "react";
import "./Skills.css";
export default function Skills() {
  return (
    <>
      <section id="skills" className="skills py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-light">Skills</h2>

            <div
              className="mx-auto mt-3 rounded-pill"
              style={{
                width: "120px",
                height: "4px",
                background: "linear-gradient(90deg,#8245ec,#a855f7)",
              }}
            ></div>
            <p className="text-secondary mt-4 fs-5">
              Here are the technologies and tools I use to build modern web
              applications, machine learning projects, and software solutions.
            </p>
          </div>
          <div className="row gap-3 align-items-stretch">
            <div className="col-md-6">
              <div className="skill-card h-100 text-light">
                <h2 className="text-center mb-4">Frontend Skills</h2>
                <div className="row g-3">
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-html5 skill-icon html"></i>
                      <span>Html</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-css3-alt skill-icon css"></i>
                      <span>CSS3</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-js skill-icon js"></i>
                      <span>JavaScript</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-bootstrap skill-icon bootstrap"></i>
                      <span>Bootstrap</span>
                    </div>
                    
                  </div>
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-react skill-icon react"></i>
                      <span>react</span>
                    </div>
                    
                  </div>
        
                  
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="skill-card h-100 text-light">
                <h2 className="text-center mb-4">Backend Skills</h2>

                <div className="row g-3">
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-node skill-icon node"></i>
                      <span>node</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-solid fa-gears skill-icon express"></i>
                      <span>Express</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-mdb skill-icon mongodb"></i>
                      <span>MongooDB</span>
                    </div>
                  </div>
          
                  
                  
                   
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="skill-card h-100 text-light">
                <h2 className="text-center mb-4">Languages</h2>

                <div className="row g-3">
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-js skill-icon js"></i>
                      <span>JS</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-solid fa-code skill-icon cpp"></i>
                      <span>C++</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-c skill-icon c-lang"></i>
                      <span>C</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-python skill-icon python"></i>
                      <span>Python</span>
                    </div>
                  </div>

                   <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-hashtag skill-icon csharp"></i>
                      <span>C#</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-database skill-icon sql"></i>
                      <span>SQL</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-java skill-icon java"></i>
                      <span>JAVA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="skill-card h-100 text-light">
                <h2 className="text-center mb-4"> TOOLS</h2>

                <div className="row g-3">
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-git skill-icon git"></i>
                      <span>git</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-github skill-icon github"></i>
                      <span>gitHub</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-solid fa-paper-plane skill-icon postman"></i>
                      <span>Postman</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-solid fa-code skill-icon vscode"></i>
                      <span>VS Code</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="skill-item">
                      <i className="fa-brands fa-npm skill-icon npm"></i>
                      <span>npm</span>
                    </div>
                  </div>
          
                  
                  
                   
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
