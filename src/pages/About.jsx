import React from 'react';
import AboutHero from '../components/About/AboutHero';
import PersonalInfo from '../components/About/PersonalInfo';
import LanguagesKnown from '../components/About/LanguagesKnown';
import ContactSection from '../components/About/ContactSection';
import EducationTimeline from '../components/About/EducationTimeline';

const About = () => {
  return (
    <div id="about" className="about-page relative overflow-hidden">
      <div className="about-page-glow about-page-glow-one" aria-hidden="true" />
      <div className="about-page-glow about-page-glow-two" aria-hidden="true" />
      <div className="about-page-content container mx-auto px-6 py-16 md:py-24 relative z-10">
        <AboutHero />
        <PersonalInfo />
        <div className="about-details-grid">
          <EducationTimeline />
          <div className="about-connect-column">
            <LanguagesKnown />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;