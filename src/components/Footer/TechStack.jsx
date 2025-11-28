import React from 'react';
import { SiTailwindcss, SiReact, SiCss3 } from 'react-icons/si';

const TechStack = () => (
  <div className="mb-4 md:mb-0 text-center md:text-left">
    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
      <span>Built with</span>
      <SiReact className="text-blue-400 text-xl" title="React" />
      {/* <SiCss3 className="text-blue-500 text-xl" title="CSS3" /> */}
      <SiTailwindcss className="text-cyan-400 text-xl" title="Tailwind CSS" />
    </div>
    <p>© 2025 Meet Soni. Made with ❤️</p>
    <p className="text-sm text-gray-400">Last updated: 20-07-2025</p>
  </div>
);

export default TechStack;
