import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const DownloadResume = ({ className = '' }) => {
  return (
    <a
      href="https://drive.google.com/drive/folders/1Q3XOuMxitFrGsomImSBVH1mwT19R0cmT?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center 
        bg-orange-600 hover:bg-orange-700
        text-white px-4 py-2 
        rounded-md 
        transition-all duration-1200
        animate-heartbeat
        hover:animate-none hover:scale-105
        ${className}
      `}
    >
      <FaFilePdf className="mr-2" />
      Download Resume
    </a>
  );
};

export default DownloadResume;
