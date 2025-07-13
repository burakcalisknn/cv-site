import React from 'react';
import { personalInfo, education } from '../data/personalInfo';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better and understand my background, education, and what drives me in my work.
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <h3>Who I Am</h3>
              <p>{personalInfo.about}</p>
              <p>
                I'm passionate about creating innovative solutions that make a difference. 
                With a strong foundation in both frontend and backend development, I enjoy 
                tackling complex problems and turning ideas into reality.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{personalInfo.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={personalInfo.avatar} alt={personalInfo.name} />
          </div>
        </div>

        <div className="education-section">
          <h3>Education & Certifications</h3>
          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="education-header">
                  <h4>{edu.institution}</h4>
                  <span className="education-duration">{edu.duration}</span>
                </div>
                <div className="education-degree">
                  {edu.degree} in {edu.field}
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;