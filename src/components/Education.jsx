import React from 'react';
import './Education.css';

const Education = () => {
  

  const education = [
    {
      institution: "University of Bedfordshire",
      degree: "BSc(Hons) Software Engineering",
      specialization: "Specialized in software engineering, and web technologies",
      period: "2025 - 2027",
      logo: "UB",
      color: "#667eea"
    },
    {
      institution: "SLIIT CITY UNI",
      degree: "Higher Diploma in Information Technology",
      specialization: "2 Year 1 Semester GPA-3.54",
      period: "2023 - 2025",
      logo: "SLIIT",
      color: "#f093fb"
    },
    {
      institution: "SLIIT CITY UNI",
      degree: "Introduction to Artificial Intelligence",
      specialization: "3 months certificate course",
      period: " 2025",
      logo: "SLIIT",
      color: "#f093fb"
    },
    {
      institution: "DHARMASOKA COLLEGE ,GALLE",
      degree: "G.C.E.(A/L)Examination in Biological Science Stream",
      specialization: "GCE Ordinary Level (2018) 9 A's",
      period: "2016 - 2018",
      logo: "DC",
      color: "#f093fb"
    }
  ];

  return (
    <section id="education" className="education">
      {/* Education Bubbles Animation */}
      <div className="education-bubbles-container">
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
        <div className="education-bubble"></div>
      </div>
      
      <div className="container">
        <div className="education-content">
          

          <div className="education-section">
            <h2 className="section-title">Education & Background</h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="institution-logo" style={{'--logo-color': edu.color}}>
                    {edu.logo}
                  </div>
                  <div className="education-content">
                    <div className="education-info">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <h4 className="degree-name">{edu.degree}</h4>
                      <p className="specialization">{edu.specialization}</p>
                    </div>
                    <div className="education-period">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
