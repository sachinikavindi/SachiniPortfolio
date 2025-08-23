import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: (
        <img src="/about_fullstack.png" alt="Full-Stack Development" width="40" height="40" />
      ),
      title: "Full-Stack Development",
      description: "Experience in React, Node.js, PHP, Firebase, and MongoDB for end-to-end web applications.",
      color: "#667eea"
    },
    {
      icon: (
        <img src="/about_ai.png" alt="Artificial Intelligence" width="40" height="40" />
      ),
      title: "Artificial Intelligence",
      description: "Strong interest in AI applications; currently learning Python to explore real-world solutions.",
      color: "#f093fb"
    },
    {
      icon: (
        <img src="/about_solution.png" alt="Scalable Solutions" width="40" height="40" />
      ),
      title: "Scalable Solutions",
      description: "Built robust, multi-user systems with payment gateways, reporting, and data management.",
      color: "#a8edea"
    },
    {
      icon: (
        <img src="/about_team.png" alt="Team Collaboration" width="40" height="40" />
      ),
      title: "Team Collaboration",
      description: "Worked in Agile teams, contributing to mobile and web projects with Git-based workflows.",
      color: "#ffecd2"
    }
  ];

  return (
    <section id="about" className="about">
      {/* About Bubbles Animation */}
      <div className="about-bubbles-container">
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
        <div className="about-bubble"></div>
      </div>
      
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
          Enthusiastic IT undergraduate passionate about software engineering, web development, and AI. I thrive on tackling challenges and creating innovative solutions while applying strong time management and teamwork skills. With a collaborative mindset and eagerness to learn, I am driven to contribute to impactful projects and grow into a versatile software engineer
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{'--accent-color': feature.color}}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
