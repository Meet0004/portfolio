import React from 'react';
import DownloadResume from '../Footer/Resume';

const AboutHero = () => (
  <div className="text-center mb-15" >
    <h1 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
      About Me
    </h1>
    <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mb-6">
      <div className="bg-gray-900 rounded-full px-8 py-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
          Coding === Dopamine
        </span>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-200 border border-purple-500/30">Seeking Synergy</span>
      <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-200 border border-pink-500/30">Tenacious</span>
      <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 border border-blue-500/30">Opinionated</span>
    </div>
    <div className="flex justify-center mb-8">
      <DownloadResume />
    </div>
    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
      A passionate developer who believes that great code should solve real problems and create meaningful impact.
    </p>
  </div>
);

export default AboutHero;
