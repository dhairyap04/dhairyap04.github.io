import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Components
import SEO from './components/common/SEO';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ParticleBackground from './components/ui/ParticleBackground';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen bg-space-navy">
          <SEO />
          <ParticleBackground />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
