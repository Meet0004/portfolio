import React from 'react';
import ContactHeader from '../components/Contact/ContactHeader';
import ContactForm from '../components/Contact/ContactForm';
import MyThreeDetails from '../components/Contact/MyThreeDetails';
import ContactSection from '../components/Contact/ContactSection';
const Contact = () => {
  return (
<div
  id="contact"
  className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
  style={{
    backgroundImage: `linear-gradient(to bottom right, #010517, #040d35, #040d34, #064e3b)`
  }}
>
      <div className="max-w-7xl w-full">
        <ContactHeader />
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left - 1/3 on desktop, full width on mobile */}
          <div className="w-full md:w-2/6">
            <MyThreeDetails />
            
          </div>

          {/* Right - 2/3 on desktop, full width on mobile */}
          <div className="w-full md:w-4/6">
            <ContactForm />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
