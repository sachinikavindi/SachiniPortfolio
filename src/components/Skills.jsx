import React from 'react';
import './Skills.css';

const Skills = () => {
  const programmingSkills = [
    "Java",
    "JavaScript", 
    "C",
    "PHP",
    "Python",
  ];

  const frameworks = [
    "HTML", "CSS", "Tailwind CSS", "React","Vite",
    "Node.js", "Express.js", 
  ];

  const databases = [
    "SQL", "MongoDB", "Firebase"
  ];

  

  const tools = [
   "Postman", "Git", "GitHub",
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Sinhala", level: "Native" },
    
  ];

  return (
    <section id="skills" className="skills">
      {/* Skills Bubbles Animation */}
      <div className="skills-bubbles-container">
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
        <div className="skills-bubble"></div>
      </div>
      
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-description">
            Comprehensive skill set spanning full-stack development, and modern development tools
          </p>
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon programming">
                <img src="/about_fullstack.png" alt="Programming" width="24" height="24" />
              </div>
              <div>
                <h3 className="category-title">Programming</h3>
                <p className="category-subtitle">Core Languages</p>
              </div>
            </div>
            <div className="tech-tags">
              {programmingSkills.map((skill, index) => (
                <span key={index} className="tech-tag programming">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon frameworks">
                <img src="/about_fullstack.png" alt="Web & Mobile Development" width="24" height="24" />
              </div>
              <div>
                <h3 className="category-title">Web & Mobile Development</h3>
              </div>
            </div>
            <div className="tech-tags">
              {frameworks.map((framework, index) => (
                <span key={index} className="tech-tag frameworks">{framework}</span>
              ))}
            </div>
          </div>

          {/* Data & AI */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon data">
                <img src="/database.png" alt="Data" width="24" height="24" />
              </div>
              <div>
                <h3 className="category-title">Data </h3>
                <p className="category-subtitle">Databases</p>
              </div>
            </div>
            <div className="data-ai-section">
              <div className="sub-section">
                <h4 className="sub-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Databases
                </h4>
                <div className="tech-tags">
                  {databases.map((db, index) => (
                    <span key={index} className="tech-tag databases">{db}</span>
                  ))}
                </div>
              </div>
             
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="skills-bottom">
          {/* Development Tools */}
          <div className="skill-category tools">
            <div className="category-header">
              <div className="category-icon tools">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
              </div>
              <div>
                <h3 className="category-title">Development Tools</h3>
                <p className="category-subtitle">Testing, Version Control & Project Management</p>
              </div>
            </div>
            <div className="tech-tags">
              {tools.map((tool, index) => (
                <span key={index} className="tech-tag tools">{tool}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skill-category languages">
            <div className="category-header">
              <div className="category-icon languages">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                </svg>
              </div>
              <div>
                <h3 className="category-title">Languages</h3>
                <p className="category-subtitle">Communication Skills</p>
              </div>
            </div>
            <div className="language-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
