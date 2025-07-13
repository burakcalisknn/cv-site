import React from 'react';
import { skills } from '../data/personalInfo';
import './Skills.css';
const Skills: React.FC = () => {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          My technical skills and proficiency levels across different technologies and tools.
        </p>

        <div className="skills-content">
          {skillCategories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Frontend Development</h3>
            <p>Modern web technologies including React, TypeScript, and responsive design principles.</p>
          </div>
          <div className="summary-card">
            <h3>Backend Development</h3>
            <p>Server-side development with Node.js, Python, and various database technologies.</p>
          </div>
          <div className="summary-card">
            <h3>DevOps & Tools</h3>
            <p>Experience with Git, Docker, AWS, and CI/CD pipelines for efficient development workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;