import React from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import DownloadResume from '../Footer/Resume';

const AboutHero = () => (
  <section className="about-hero">
    <div className="about-hero-copy">
      <div className="about-eyebrow">
        <Sparkles size={15} />
        <span>A LITTLE ABOUT ME</span>
      </div>
      <h1 className="about-hero-title">
        The person
        <br />
        behind the <span>pixels.</span>
      </h1>
      <p className="about-hero-description">
        I’m Meet Soni, a full-stack developer who enjoys turning thoughtful ideas
        into useful, well-crafted software. I care about the details, the people
        using what I build, and the problems worth solving.
      </p>
      <div className="about-hero-actions">
        <DownloadResume className="about-resume-button" />
        <a className="about-scroll-link" href="#about-education">
          Explore my journey <ArrowDownRight size={17} />
        </a>
      </div>
      <div className="about-hero-note">
        <span className="about-note-dot" />
        Open to meaningful opportunities
      </div>
    </div>

    <div className="about-visual" aria-label="Meet Soni monogram artwork">
      <div className="about-visual-orbit about-visual-orbit-outer" />
      <div className="about-visual-orbit about-visual-orbit-inner" />
      <div className="about-monogram-card">
        <span className="about-monogram-label">DEVELOPER / CREATOR</span>
        <span className="about-monogram">MS</span>
        <span className="about-monogram-caption">Meet Soni</span>
      </div>
      <div className="about-float-card about-float-card-top">
        <span className="about-float-icon"><Sparkles size={16} /></span>
        <span>Curiosity, in practice</span>
      </div>
      <a
        className="about-float-card about-float-card-bottom"
        href="https://github.com/Meet0004"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Building in public</span>
        <ArrowUpRight size={16} />
      </a>
      <span className="about-visual-index">01 — 04</span>
    </div>
  </section>
);

export default AboutHero;
