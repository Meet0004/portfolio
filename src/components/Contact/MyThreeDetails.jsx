import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const MyThreeDetails = () => (
  <aside className="contact-details-card" aria-label="Contact details">
    <div className="contact-details-copy">
      <span className="contact-card-eyebrow">LET’S CONNECT</span>
      <h3>Good work starts with a conversation.</h3>
      <p>Have an opportunity, a question, or an idea to explore? I’d be glad to hear from you.</p>
    </div>

    <div className="contact-details-links">
      <a href="mailto:meetgssoni@gmail.com" className="contact-detail-link">
        <span className="contact-detail-icon"><Mail size={18} /></span>
        <span><small>Email</small><strong>growwmeet@gmail.com</strong></span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <a href="tel:+918999999999" className="contact-detail-link">
        <span className="contact-detail-icon"><Phone size={18} /></span>
        <span><small>Call</small><strong>+91 8746995340</strong></span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  </aside>
);

export default MyThreeDetails;
