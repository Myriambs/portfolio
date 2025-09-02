import  { useState } from 'react';
import Modal from './Modal';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Advanced cloud architecture and deployment strategies",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://aws.amazon.com/certification/"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React patterns and performance optimization",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://developers.facebook.com/docs/react"
    },
    {
      id: 3,
      title: "Node.js Certified Developer",
      issuer: "OpenJS Foundation",
      date: "2022",
      description: "Backend development with Node.js and Express",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://nodejs.org/"
    },
    {
      id: 4,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      description: "Cloud infrastructure and DevOps practices",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://cloud.google.com/certification"
    },
    {
      id: 5,
      title: "MongoDB Developer Path",
      issuer: "MongoDB University",
      date: "2022",
      description: "NoSQL database design and optimization",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://university.mongodb.com/"
    },
    {
      id: 6,
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2021",
      description: "Data structures and algorithm implementation",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.freecodecamp.org/"
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="certificate-card"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="certificate-content">
                <div className="certificate-icon">🏆</div>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
              </div>
              <div className="certificate-overlay">
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedCertificate && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate.title}
        >
          <div className="modal-certificate">
            <img 
              src={selectedCertificate.image} 
              alt={selectedCertificate.title}
              className="certificate-image"
            />
            <div className="certificate-details">
              <h3>{selectedCertificate.title}</h3>
              <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
              <p><strong>Date:</strong> {selectedCertificate.date}</p>
              <p><strong>Description:</strong> {selectedCertificate.description}</p>
              <a 
                href={selectedCertificate.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                More Details
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Certificates;