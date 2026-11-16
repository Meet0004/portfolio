import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const DownloadResume = ({ className = '' }) => {
  return (
    <a
      href="/ms.pdf"
      download="ms.pdf"
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
