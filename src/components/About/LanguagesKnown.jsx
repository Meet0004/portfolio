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
  <section className="about-languages">
    <div className="about-section-heading about-section-heading-compact">
      <span className="about-section-kicker">BEYOND CODE</span>
      <h2><Globe size={20} /> Languages</h2>
    </div>
    <div className="about-language-list">
      {languages.map((lang, index) => (
        <span key={index} className="about-language-pill">{lang.name}</span>
      ))}
    </div>
  </section>
);

export default LanguagesKnown;
