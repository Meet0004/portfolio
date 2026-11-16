import React from 'react';
import { MapPin, Calendar, University, Code } from 'lucide-react';

const personalInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Shimoga, Karnataka" },
  { icon: <Calendar className="w-5 h-5" />, label: "Born", value: "December 31, 2004" },
  { icon: <University className="w-5 h-5" />, label: "University", value: "Kuvempu University" },
  { icon: <Code className="w-5 h-5" />, label: "Status", value: "Available for Work" }
];

const PersonalInfo = () => (
  <section className="about-facts" aria-label="Personal details">
    {personalInfo.map((info, index) => (
      <div key={index} className="about-fact-card">
        <span className="about-fact-icon">{info.icon}</span>
        <div>
          <span className="about-fact-label">{info.label}</span>
          <p className="about-fact-value">{info.value}</p>
        </div>
      </div>
    ))}
  </section>
);

export default PersonalInfo;