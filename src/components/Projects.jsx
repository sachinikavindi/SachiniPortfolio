import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Masgolla Tea Estate Management System",
      subtitle: "Web Application",
      description: "Designed and developed a fully functional web-based management system for Masgolla Tea Estate, implementing complete CRUD modules for labor management, transport scheduling, User Management, inventory control customer orders, and sales tracking, along with a report generation module featuring data visualization and PDF export",
      technologies: ["React", "Tailwind CSS", "Node.js", "Firebase", "Github"],
      featured: true,
      githubUrl: "https://github.com/sachinikavindi/Masgollatea",
      status: "Featured"
    },
    {
      title: "LUVEE Online Clothing Store- E-Commerce Website",
      subtitle: "Web Application",
      description: "Designed and developed a fully functional e-commerce platform to digitize Luvee’s manual sales process. Implemented a responsive customer-facing website with product browsing, cart management, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Github"],
      featured: false,
      githubUrl: "https://github.com/sachinikavindi/Luvee",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="projects">
      {/* Projects Bubbles Animation */}
      <div className="projects-bubbles-container">
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
        <div className="projects-bubble"></div>
      </div>
      
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work in full-stack development and web applications
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <div className="featured-badge">
                  <span>{project.status}</span>
                </div>
              )}
              
              <div className="project-type">
                <span className="type-badge">{project.subtitle}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary project-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary project-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="more-projects">
          <h3 className="more-projects-title">Other Notable Projects</h3>
          <div className="project-list">
            <div className="project-item">
              <div className="project-info">
                <h4 className="project-name">Food Order Mobile Application</h4>
                <p className="project-brief">A food ordering app that allows users to browse and order food from their favorite restaurants, with a user-friendly interface and secure payment processing.</p>
              </div>
              <div className="project-tech-simple">
                <span>Android Studio</span>
                <span>Java</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
          
          <div className="github-button-container">
            <a 
              href="https://github.com/sachinikavindi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-github"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View more on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
