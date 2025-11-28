import React, { useState, useEffect } from 'react';

const Logoo = () => {
  const [animateOnce, setAnimateOnce] = useState(false);

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
      }, 1200); // match animation duration

      return () => clearTimeout(timer);
    }
  }, [animateOnce]);

  return (
    <a
      href="#" 
      className={`text-4xl tracking-wider font-bold group inline-block cursor-pointer relative` } style={{ fontFamily: 'Poppins, sans-serif' }}
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
      `}</style>

      <span
        className={`relative inline-block ${animateOnce ? 'animate-once' : ''}`}
      >
        <span>M</span>
        <span className="first-e">e</span>
        <span className="second-e">e</span>
        <span>t Soni</span>
      </span>
    </a>
  );
};

export default Logoo;
