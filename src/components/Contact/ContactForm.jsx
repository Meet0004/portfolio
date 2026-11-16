import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import ContactSuccess from './ContactSuccess';

const initialFormData = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_nle5oet',
        'template_uxi37n3',
        {
          ...formData,
          time: new Date().toLocaleString(),
          title: 'Portfolio contact',
          reply_to: formData.email,
        },
        'I-lQQqmp14ULuEd2x'
      );
      setFormData(initialFormData);
      setStatus('success');
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form-card">
        <ContactSuccess onReset={() => setStatus('idle')} />
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-heading">
          <span>WRITE A MESSAGE</span>
          <h3>Tell me what’s on your mind.</h3>
        </div>

        <div className="contact-form-fields">
          <label className="contact-field">
            <span>Your name</span>
            <input
              autoComplete="name"
              name="name"
              type="text"
              placeholder="Meet Soni"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-field">
            <span>Your Gmail or email</span>
            <input
              autoComplete="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-field contact-message-field">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Share a little about what you have in mind..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {status === 'error' && (
          <p className="contact-form-error" role="alert">
            Your message couldn’t be sent. Please try again or email me directly at{' '}
            <a href="mailto:meetgssoni@gmail.com">meetgssoni@gmail.com</a>.
          </p>
        )}

        <button className="contact-submit-button" type="submit" disabled={status === 'sending'}>
          <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
          <Send size={17} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
