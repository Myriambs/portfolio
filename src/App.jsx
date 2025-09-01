import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './styles/App.css';
import './styles/animations.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;