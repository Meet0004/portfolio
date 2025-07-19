import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import './styles/index.css';
import PortfolioShowcase from './components/Project/PortfolioShowcase';
import Project from './components/Project/MobilePortfolioShowcase.jsx';
import { useMediaQuery } from 'react-responsive';import GsapProjects from './pages/GsapProject';
const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Tailwind 'md' breakpoint
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-wp');
    const particleCount = 20;

    function createParticle(container) {
      const particle = document.createElement('div');

      const binaryStrings = [
        '100001', '1111000', '110000', '101010', '111111',
        '000111', '010101', '110011', '001100', '101101',
        '0010', '1001', '1100', '0011', '1010', '0101',
        '011001', '100110', '111000', '000111', '101100',
        '011110', '000000', '111111', '100000', '000001',
        '110110', '001111', '111001', '100111', '011011',
        '010010', '110101', '101011', '111010', '011100',
        '001001', '010110', '001101', '110010', '101001',
        '011111', '111011', '000011', '100101', '011000',
        '101111', '000110', '111100', '001110', '110111',
        '011101', '010100', '111110', '100011', '001000'
      ];

      const randomBinary = binaryStrings[Math.floor(Math.random() * binaryStrings.length)];
      particle.textContent = randomBinary;

      Object.assign(particle.style, {
        position: 'absolute',
        fontSize: Math.random() * 8 + 8 + 'px',
        color: 'rgba(0, 200, 255, ' + (Math.random() * 0.5 + 0.1) + ')',
        fontFamily: 'monospace',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        transform: 'translate(-50%, -50%)',
        textShadow: '0 0 5px rgba(0, 200, 255, 0.8)',
        animation: `particle-animation-${Math.floor(Math.random() * 4) + 1} ${Math.random() * 20 + 15}s linear infinite`,
        pointerEvents: 'none'
      });

      container.appendChild(particle);
    }

    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
      }
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes particle-animation-1 {
        0% { transform: translate(-50%, -50%) translateY(0) translateX(0); opacity: 1; }
        50% { opacity: 0.5; }
        100% { transform: translate(-50%, -50%) translateY(-100vh) translateX(20vw); opacity: 0; }
      }
      @keyframes particle-animation-2 {
        0% { transform: translate(-50%, -50%) translateY(0) translateX(0); opacity: 1; }
        50% { opacity: 0.7; }
        100% { transform: translate(-50%, -50%) translateY(-100vh) translateX(-20vw); opacity: 0; }
      }
      @keyframes particle-animation-3 {
        0% { transform: translate(-50%, -50%) translateY(100vh) translateX(0); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 0.7; }
        100% { transform: translate(-50%, -50%) translateY(-100vh) translateX(30vw); opacity: 0; }
      }
      @keyframes particle-animation-4 {
        0% { transform: translate(-50%, -50%) translateY(100vh) translateX(0); opacity: 0; }
        20% { opacity: 0.5; }
        80% { opacity: 0.3; }
        100% { transform: translate(-50%, -50%) translateY(-100vh) translateX(-30vw); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    initParticles();
  }, []);

  return (
    <>
      <div
        id="particles-wp"
        className="fixed inset-0 z-[1001] pointer-events-none overflow-hidden"
      />

      <Header />
      <Home />
      <About />
      <Skills />
      {isMobile ? <Project /> : <PortfolioShowcase />}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
