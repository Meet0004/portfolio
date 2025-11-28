import React from 'react';
import { Mail, Linkedin, Github, Code, Instagram } from 'lucide-react';

const ContactSection = () => (
<div className="flex justify-center items-center">
		<div className="flex justify-center items-center w-fit bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 mb-10 border border-purple-500/20">
			<div className="flex justify-center items-center">
				<div className="flex flex-wrap justify-center items-center gap-4">
				<a href="https://www.linkedin.com/in/meet-soni-tenacious/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-500/20 rounded-lg px-4 py-2 hover:bg-blue-500/30 transition-all group border border-blue-500/30">
					<Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
					<span className="text-sm">LinkedIn</span>
				</a>
				<a href="https://github.com/Meet0004" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-500/20 rounded-lg px-4 py-2 hover:bg-gray-500/30 transition-all group border border-gray-500/30">
					<Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
					<span className="text-sm">GitHub</span>
				</a>
				<a href="https://leetcode.com/meetgsoni" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-orange-500/20 rounded-lg px-4 py-2 hover:bg-orange-500/30 transition-all group border border-orange-500/30">
					<Code className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
					<span className="text-sm">LeetCode</span>
				</a>
				<a href="https://instagram.com/mr_sonx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-pink-500/20 rounded-lg px-4 py-2 hover:bg-pink-500/30 transition-all group border border-pink-500/30">
					<Instagram className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
					<span className="text-sm">Instagram</span>
				</a>
				<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWstwNZvWzkWbBwgJRcDGkxCsnTCLWtKsKvDDMXVvXVmsBmhwGKbBWVRDWDjKfMRnhKqQVVpG" className="flex items-center space-x-2 bg-green-500/20 rounded-lg px-4 py-2 hover:bg-green-500/30 transition-all group border border-green-500/30">
					<Mail className="w-5 h-5 text-green-400 group-hover:text-green-300" />
					<span className="text-sm">Business Email</span>
				</a>
			</div>
		</div>
	</div>
</div>
);

export default ContactSection;