import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Grid Matrix Animation */}
      <div className="matrix-grid">
        <svg className="matrix-svg" width="100%" height="100%">
          {/* Horizontal Lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${(i + 1) * 12.5}%`}
              x2="100%"
              y2={`${(i + 1) * 12.5}%`}
              className="grid-line horizontal"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          {/* Vertical Lines */}
          {[...Array(12)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i + 1) * 8.33}%`}
              y1="0"
              x2={`${(i + 1) * 8.33}%`}
              y2="100%"
              className="grid-line vertical"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
          {/* Grid Intersection Points */}
          {[...Array(8)].map((_, row) =>
            [...Array(12)].map((_, col) => (
              <circle
                key={`dot-${row}-${col}`}
                cx={`${(col + 1) * 8.33}%`}
                cy={`${(row + 1) * 12.5}%`}
                r="2"
                className="grid-dot"
                style={{ animationDelay: `${(row + col) * 0.1}s` }}
              />
            ))
          )}
          {/* Connection Lines (Network Effect) */}
          {[...Array(6)].map((_, i) => (
            <g key={`connection-${i}`} className="connection-group">
              <line
                x1={`${10 + i * 15}%`}
                y1={`${15 + i * 10}%`}
                x2={`${25 + i * 12}%`}
                y2={`${30 + i * 8}%`}
                className="connection-line"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <line
                x1={`${20 + i * 10}%`}
                y1={`${25 + i * 12}%`}
                x2={`${45 + i * 8}%`}
                y2={`${40 + i * 6}%`}
                className="connection-line"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </g>
          ))}
        </svg>
      </div>
      

      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hello, I'm</div>
            <h1 className="hero-title">
              <span className="name-gradient">Sachini</span>
              <br />
              <span className="name-gradient">Kavindya</span>
            </h1>
            <h2 className="hero-subtitle">SOFTWARE ENGINEERING INTERN</h2>
            <p className="hero-description">
              Self-motivated IT undergraduate passionate about building scalable web
              and AI-driven solutions. Currently contributing to innovative
              projects at Masgolla Tea Estate and   Luvee, with expertise in React,
              Node.js, MongoDB, and Firebase.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.844l9.52 7.173 9.52-7.173h.844c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
                Get In Touch
              </a>
              <a href="/sachini_cv.pdf" download="Sachini_Kavindya_CV.pdf" className="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                Download CV
              </a>
            </div>
            <div className="availability">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span>Available for freelance</span>
              </div>
              <div className="status-indicator">
                <span className="status-dot location"></span>
                <span>Based in Sri Lanka</span>
              </div>
            </div>
          </div>
          

        </div>
        
        <a href="#about" className="scroll-indicator">
          <div className="scroll-text">SCROLL DOWN</div>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
