import React from 'react';
import { Mail, Linkedin, Github, Code, Instagram } from 'lucide-react';

const ContactSection = () => (
  <div className="z-[500]">
    <div className="">
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-300">Follow Me</h3>
      <div className="grid grid-cols-2 gap-4 justify-center md:flex md:flex-wrap md:justify-center">
        <a
          href="https://www.linkedin.com/in/meet-soni-tenacious/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-500/20 rounded-lg px-4 py-2 hover:bg-blue-500/30 transition-all group border border-blue-500/30"
        >
          <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Meet0004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-gray-500/20 rounded-lg px-4 py-2 hover:bg-gray-500/30 transition-all group border border-gray-500/30"
        >
          <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://leetcode.com/u/meet-soni/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-orange-500/20 rounded-lg px-4 py-2 hover:bg-orange-500/30 transition-all group border border-orange-500/30"
        >
          <Code className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
          <span className="text-sm">LeetCode</span>
        </a>
        <a
          href="https://instagram.com/mr_sonx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-pink-500/20 rounded-lg px-4 py-2 hover:bg-pink-500/30 transition-all group border border-pink-500/30"
        >
          <Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
          <span className="text-sm">Instagram</span>
        </a>
      </div>
    </div>
  </div>
);

export default ContactSection;
