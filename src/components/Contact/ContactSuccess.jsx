import { CheckCircle } from 'lucide-react';

const ContactSuccess = ({ onReset }) => (
  <div className="contact-success" role="status">
    <div className="contact-success-icon">
      <CheckCircle size={30} aria-hidden="true" />
    </div>
    <h3>Message sent.</h3>
    <p>Thanks for reaching out. I’ll get back to you soon.</p>
    <button type="button" onClick={onReset}>Send another message</button>
  </div>
);

export default ContactSuccess;
