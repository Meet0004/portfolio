import { Code, Github, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => (
  <div className="contact-social-section">
    <h4>Let’s connect</h4>
    <nav className="contact-social-links" aria-label="Social profiles">
      <a href="https://www.linkedin.com/in/meetsoni04/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
        <Linkedin size={17} aria-hidden="true" /><span>LinkedIn</span><span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span>
      </a>
      <a href="https://github.com/Meet0004" target="_blank" rel="noopener noreferrer" className="contact-social-link">
        <Github size={17} aria-hidden="true" /><span>GitHub</span><span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span>
      </a>
      <a href="https://leetcode.com/u/meet-soni/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
        <Code size={17} aria-hidden="true" /><span>LeetCode</span><span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span>
      </a>
      <a href="https://instagram.com/mr_sonx" target="_blank" rel="noopener noreferrer" className="contact-social-link">
        <Instagram size={17} aria-hidden="true" /><span>Instagram</span><span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span>
      </a>
    </nav>
  </div>
);

export default ContactSection;
