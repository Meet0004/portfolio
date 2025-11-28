import React from 'react';
import { MapPin, Calendar, University, Code } from 'lucide-react';

const personalInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Shimoga, Karnataka" },
  { icon: <Calendar className="w-5 h-5" />, label: "Born", value: "December 31, 2004" },
  { icon: <University className="w-5 h-5" />, label: "University", value: "Kuvempu University" },
  { icon: <Code className="w-5 h-5" />, label: "Status", value: "Available for Work" }
];

const PersonalInfo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
    {personalInfo.map((info, index) => (
      <div key={index} className="group relative">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
          <div className="flex items-center space-x-3 mb-3">
            <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
              {info.icon}
            </div>
            <span className="text-gray-400 text-sm font-medium">{info.label}</span>
          </div>
          <p className="text-white font-semibold">{info.value}</p>

          {/* Sliding Bar */}
          <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] group-hover:w-full transition-all duration-300 rounded-full" />
        </div>
      </div>

    ))}
  </div>
);

export default PersonalInfo;