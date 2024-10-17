import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectsData = [
  {
    title: "Data Security for Blood Donors Using Blockchain Technology",
    description:
      "A web application that secures blood donor information using blockchain technology, ensuring privacy and traceability of donation data.",
    technologies: ["Django", "Python", "Blockchain", "Bootstrap"],
    liveDemo: "https://example.com/blood-donors", // Replace with actual link
    sourceCode: "https://github.com/yourusername/blockchain-blood-donors",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce website with features like product listing, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "https://example.com/ecommerce", // Replace with actual link
    sourceCode: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce website with features like product listing, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "https://example.com/ecommerce", // Replace with actual link
    sourceCode: "https://github.com/yourusername/ecommerce-platform",
  },
  // Add more projects here
];

const ProjectCard = ({ project }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100 shadow">
      <div className="card-header">
        <h5 className="card-title">{project.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{project.description}</p>
        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge bg-secondary me-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning btn-sm"
            >
              Live Demo
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ProjectPortfolio = () => {
  return (
    <section className="projects-portfolio p-5" id="projects">
      <div className="container">
        <br color="white" />
        <h2
          className="text-center mb-5 text-warning fw-bolder"
          data-aos="zoom-in"
        >
          PROJECTS{" "}
        </h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
