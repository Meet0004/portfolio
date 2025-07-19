import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import './styles/index.css';
import PortfolioShowcase from './components/Project/PortfolioShowcase';
import Project from './components/Project/MobilePortfolioShowcase.jsx';
import { useMediaQuery } from 'react-responsive';
import GsapProjects from './pages/GsapProject';

const Logoo = () => {
  const [animateOnce, setAnimateOnce] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOnce(true);
    }, 500); // delay for load animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animateOnce) {
      const timer = setTimeout(() => {
        setAnimateOnce(false);
        // Start zoom in effect IMMEDIATELY after letter animation
        setZoomIn(true);
      }, 1200); // match animation duration

      return () => clearTimeout(timer);
    }
  }, [animateOnce]);

  return (
    <div
      className="text-4xl tracking-wider font-bold group inline-block cursor-pointer relative text-white"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <style jsx>{`
        .first-e,
        .second-e {
          display: inline-block;
          position: relative;
        }

        /* Hover animation */
        .group:hover .first-e {
          animation: swapFirst 1.2s forwards ease-in-out;
        }

        .group:hover .second-e {
          animation: swapSecond 1.2s forwards ease-in-out;
        }

        /* One-time load animation */
        .animate-once .first-e {
          animation: swapFirst 1.2s forwards ease-in-out;
        }

        .animate-once .second-e {
          animation: swapSecond 1.2s forwards ease-in-out;
        }

        @keyframes swapFirst {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translateY(-1.5rem);
          }
          40% {
            transform: translateY(-1.5rem) translateX(7.5ch);
          }
          60% {
            transform: translateY(1.4ch) translateX(7.5ch);
          }
          80% {
            transform: translateY(1.4ch) translateX(1ch);
          }
          100% {
            transform: translateY(0) translateX(1ch);
          }
        }

        @keyframes swapSecond {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translateY(1.5rem);
          }
          40% {
            transform: translateY(1.5rem) translateX(-4.2ch);
          }
          60% {
            transform: translateY(-1.5rem) translateX(-4ch);
          }
          80% {
            transform: translateY(-1.1ch) translateX(-1ch);
          }
          100% {
            transform: translateY(0) translateX(-1ch);
          }
        }

        .loading-screen {
          opacity: 1;
          transition: opacity 0.8s ease-out;
        }

        .loading-screen.fade-out {
          opacity: 0;
        }

        .zoom-in {
          animation: zoomInEffect 1.5s ease-out forwards;
        }

        @keyframes zoomInEffect {
          0% {
            transform: scale(1.0);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(100);
            opacity: 0;
          }
        }
      `}</style>

      <span
        className={`relative inline-block ${animateOnce ? 'animate-once' : ''} ${zoomIn ? 'zoom-in' : ''}`}
      >
        <span>M</span>
        <span className="first-e">e</span>
        <span className="second-e">e</span>
        <span>t Soni</span>
      </span>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Tailwind 'md' breakpoint

  useEffect(() => {
    // Start fade out after logo animation and zoom in completes
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // 500ms delay + 1200ms animation + 1500ms zoom in + 500ms buffer

    // Remove loading screen completely
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3600); // Additional time for fade out transition

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const particlesContainer = document.getElementById('particles-wp');
      if (!particlesContainer) return;
      
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
    }
  }, [isLoading]);

  // Loading screen component
  if (isLoading) {
    return (
      <div 
        className={`loading-screen fixed inset-0 bg-black flex items-center justify-center z-[9999] ${fadeOut ? 'fade-out' : ''}`}
        style={{
          transition: 'opacity 0.8s ease-out'
        }}
      >
        <Logoo />
      </div>
    );
  }

  // Main portfolio content
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
