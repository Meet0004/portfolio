import React from 'react';
import AboutHero from '../components/About/AboutHero';
import PersonalInfo from '../components/About/PersonalInfo';
import LanguagesKnown from '../components/About/LanguagesKnown';
import ContactSection from '../components/About/ContactSection';
import FocusAreas from '../components/About/FocusAreas';
import Philosophy from '../components/About/Philosophy';
import EducationTimeline from '../components/About/EducationTimeline';

const About = () => {
  return (

    <div
      id="about"
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
      to bottom right,
      #010517,
      #040d35,
      #061138,
      #0b1e42,
      #0C1946
    )`
      }}
    >


      {/* Background Dots and Animated Circles */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-20"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      {/* Actual Content */}
      <div className="container mx-auto px-6 py-15 relative z-10">
        <AboutHero />
        <PersonalInfo />
        <EducationTimeline />
        <LanguagesKnown />
        <ContactSection />
        <FocusAreas />
        <Philosophy />
      </div>
    </div>
  );
};

export default About;