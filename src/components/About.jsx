import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate Full Stack Developer with over 6 years of experience 
                building scalable web applications and digital solutions. My expertise 
                spans modern frontend frameworks, robust backend systems, and cloud architecture.
              </p>
              <p>
                I specialize in React, Node.js, and cloud technologies, with a strong focus 
                on performance optimization and user experience. I love turning complex problems 
                into elegant, simple solutions that make a real impact.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">75+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Certificates</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="rotating-border"></div>
              <img 
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;