import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const DownloadResume = ({ className = '' }) => {
  return (
    <a
      href=".Meet G Soni-resume.pdf"
      download="Meet G Soni-resume.pdf"
      className={`
        flex items-center 
        bg-blue-600 hover:bg-blue-700 
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
