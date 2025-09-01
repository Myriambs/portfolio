import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillsRef = useRef(null);

  const skills = [
    { 
      name: 'JavaScript', 
      color: '#f7df1e', 
      level: 95,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'React', 
      color: '#61dafb', 
      level: 90,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Node.js', 
      color: '#339933', 
      level: 85,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Python', 
      color: '#3776ab', 
      level: 80,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'TypeScript', 
      color: '#3178c6', 
      level: 88,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'CSS3', 
      color: '#1572b6', 
      level: 92,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'MongoDB', 
      color: '#47a248', 
      level: 75,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'AWS', 
      color: '#ff9900', 
      level: 70,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
    },
    { 
      name: 'Docker', 
      color: '#2496ed', 
      level: 78,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    { 
      name: 'Git', 
      color: '#f05032', 
      level: 85,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }
  ];

  const handleSkillClick = (skill, event) => {
    event.stopPropagation();
    setSelectedSkill(skill);
    setIsPaused(true);
    
    // Resume after 3 seconds
    setTimeout(() => {
      setIsPaused(false);
      setSelectedSkill(null);
    }, 3000);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <div 
            className={`orbital-system ${isPaused ? 'paused' : ''}`}
            ref={skillsRef}
          >
            <div className="center-title">
              <span className="skills-text">Skills</span>
              <div className="pulse-ring"></div>
            </div>
            
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`orbital-skill skill-${index + 1} ${selectedSkill?.name === skill.name ? 'selected' : ''}`}
                style={{
                  '--skill-color': skill.color,
                  '--animation-delay': `${index * 0.5}s`
                }}
                onClick={(e) => handleSkillClick(skill, e)}
              >
                <div className="skill-content">
                  <div className="skill-logo">
                    <img src={skill.logo} alt={skill.name} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div 
                      className="skill-level-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
          
          {selectedSkill && (
            <div className="skill-details">
              <div className="skill-details-logo">
                <img src={selectedSkill.logo} alt={selectedSkill.name} />
              </div>
              <h3>{selectedSkill.name}</h3>
              <p>Proficiency: {selectedSkill.level}%</p>
              <p>Click anywhere to resume orbit</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;