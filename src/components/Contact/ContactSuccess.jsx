import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContactSuccess = () => (
  <div className="text-center py-16">
    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
      <CheckCircle className="text-white" size={40} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
  </div>
);

export default ContactSuccess;
