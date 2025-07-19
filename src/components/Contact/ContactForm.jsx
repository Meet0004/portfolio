import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import ContactSuccess from './ContactSuccess';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_s0kf3qn',
        'template_i3gqcex',
        formData,
        'I-lQQqmp14ULuEd2x'
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 3000);
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  if (isSubmitted) return <ContactSuccess />;

  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl' >
<form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputWithIcon
          Icon={User}
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputWithIcon
          Icon={Mail}
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputWithIcon
          Icon={Phone}
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputWithIcon
          Icon={MessageSquare}
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-4 top-6 text-gray-400" size={20} />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={5}
          required
          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/15 hover:border-white/30 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 flex items-center justify-center space-x-2 shadow-lg"
      >
        <span>Send Message</span>
        <Send size={20} />
      </button>
    </form>
    </div>
  );
};

const InputWithIcon = ({ Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    <input
      {...props}
      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/15 hover:border-white/30"
    />
  </div>
);

export default ContactForm;
