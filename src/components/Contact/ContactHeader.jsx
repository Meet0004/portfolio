import React from 'react';

const ContactHeader = () => (
  <div className="text-center mb-12">
    <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent  mb-6 ">
      Contact{' '}
      <span className=" bg-gradient-to-r from-white to-blue-400  bg-clip-text text-transparent">
        Me
      </span>
    </p>
    <p className="text-xl text-gray-300 max-w-fit mx-auto">
      Ready to start your next project? Send me a message and let's create something amazing together.
    </p>
  </div>
);

export default ContactHeader;
