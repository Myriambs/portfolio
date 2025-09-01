import React, { useState } from 'react';
import Modal from './Modal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tech: "React, Node.js, MongoDB",
      description: "Full-featured e-commerce platform with payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      tech: "React, TypeScript, Supabase",
      description: "Collaborative task management with real-time updates",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "AI Chat Application",
      tech: "React, Python, OpenAI API",
      description: "Intelligent chatbot with natural language processing",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      tech: "React, D3.js, Firebase",
      description: "Interactive charts and analytics dashboard",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "Social Media Platform",
      tech: "React, Express, PostgreSQL",
      description: "Social networking app with real-time messaging",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      tech: "React, Node.js, CoinGecko API",
      description: "Real-time crypto price tracking and portfolio management",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>View Project</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="modal-project">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="project-modal-image"
            />
            <div className="project-details">
              <h3>{selectedProject.title}</h3>
              <p><strong>Technologies:</strong> {selectedProject.tech}</p>
              <p><strong>Description:</strong> {selectedProject.description}</p>
              <div className="project-links">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View Code
                </a>
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;