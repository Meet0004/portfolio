import React from 'react';
import { ArrowUpRight, Github, Linkedin, Code, Instagram } from 'lucide-react';

const ContactSection = () => (
  <section className="about-socials">
    <div className="about-section-heading about-section-heading-compact">
      <span className="about-section-kicker">FIND ME ONLINE</span>
      <h2>Let’s connect</h2>
    </div>
    <div className="about-social-list">
      <a href="https://www.linkedin.com/in/meetsoni04/" target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} /><span>LinkedIn</span><ArrowUpRight size={16} />
      </a>
      <a href="https://github.com/Meet0004" target="_blank" rel="noopener noreferrer">
        <Github size={20} /><span>GitHub</span><ArrowUpRight size={16} />
      </a>
      <a href="https://leetcode.com/meetgsoni" target="_blank" rel="noopener noreferrer">
        <Code size={20} /><span>LeetCode</span><ArrowUpRight size={16} />
      </a>
      <a href="https://instagram.com/mr_sonx" target="_blank" rel="noopener noreferrer">
        <Instagram size={20} /><span>Instagram</span><ArrowUpRight size={16} />
      </a>
    </div>
  </section>
);

export default ContactSection;