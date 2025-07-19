import React from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { name: 'English' },
  { name: 'Hindi',},
  { name: 'Gujarati', },
  { name: 'Kannada', },
  { name: 'Japanese', }
];

const LanguagesKnown = () => (
  <div className=" p- mt-4 mb-10">
    <h3 className=" p-1 text-4xl font-bold mb-7 text-center bg-gradient-to-r from-purple-800 to-blue-400 bg-clip-text text-transparent  flex justify-center items-center"> <Globe className="" /> Languages Known</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {languages.map((lang, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:scale-105">
          <span className="text-white font-medium">{lang.name}</span>
          <span className="text-indigo-400 text-sm ml-2"></span>
        </div>
      ))}
    </div>
  </div>
);

export default LanguagesKnown;