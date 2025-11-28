import React from 'react';

const Logo = () => {
  return (
    <a href='' className="text-4xl tracking-wider font-bold group inline-block cursor-pointer relative">
      <style jsx>{`
        .first-e,
        .second-e {
          display: inline-block;
          position: relative;
        }

        .group:hover .first-e {
          animation: swapFirst 0.6s forwards ease-in-out;   {/* time adjust */}
        }

        .group:hover .second-e {
          animation: swapSecond 0.6s forwards ease-in-out;
        }

        @keyframes swapFirst {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translateY(-1.5rem);   {/*Adjust up and down movement (vertical distance):*/}
          }
          66% {
            transform: translateY(-1.5rem) translateX(0.7ch);  {/*Adjust left and right movement (horizontal distance):*/}
          }
          100% {
            transform: translateY(0) translateX(1.0ch); {/*Adjust final position after animation ends:*/}
          }
        }

        @keyframes swapSecond {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translateY(1.5rem);
          }
          66% {
            transform: translateY(1.5rem) translateX(-0.7ch);
          }
          100% {
            transform: translateY(0) translateX(-1.0ch); {/*Adjust final position after animation ends:*/}
          }
        }
      `}</style>

      <span className="relative inline-block">
        <span>M</span>
        <span className="first-e">e</span>
        <span className="second-e">e</span>
        <span>t Soni</span>
      </span>
    </a>
  );
};


export default Logo;