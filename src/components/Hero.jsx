import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1" style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
          }}></div>
          <div className="shape shape-2" style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px) rotateX(${-mousePosition.y}deg) rotateY(${-mousePosition.x}deg)`
          }}></div>
          <div className="shape shape-3" style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
          }}></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="line">Hi, I'm</span>
            <span className="line gradient-text">Alex Johnson</span>
            <span className="line">Full Stack Developer</span>
          </h1>
          <p className="hero-subtitle">
            Crafting innovative digital solutions with cutting-edge technologies. 
            Passionate about creating seamless user experiences and scalable applications.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;