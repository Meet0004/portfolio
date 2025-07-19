import React from 'react'
import { Mail, Phone, ExternalLink } from 'lucide-react';
import ContactSection from './ContactSection';
const MyThreeDetails = () => {
	return (
		<div className=" bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 mb-2 border border-purple-500/20 text-gray-300 ">
			<div className="flex flex-wrap justify-center gap-8 px-5 ">
				<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWstwNZvWzkWbBwgJRcDGkxCsnTCLWtKsKvDDMXVvXVmsBmhwGKbBWVRDWDjKfMRnhKqQVVpG" className="z-[1006] flex items-center space-x-3 bg-white/10 rounded-lg px-6 py-3 hover:bg-white/20 transition-all group">
					<Mail className="w-5 h-5 text-purple-400 group-hover:text-pink-400" />
					<span  >meetgssoni@gmail.com</span>
				</a>
				<a href="tel:+918999999999" className="flex items-center space-x-3 bg-white/10 rounded-lg px-6 py-2 hover:bg-white/20 transition-all group">
					<Phone className="w-5 h-5 text-purple-400 group-hover:text-pink-400" />
					<span>+91 8999999999</span>
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer" className="z-[1006] flex items-center space-x-3 bg-white/10 rounded-lg px-6 py-3 hover:bg-white/20 transition-all group">
					<ExternalLink className="w-5 h-5 text-purple-400 group-hover:text-pink-400" />
					<a href='#'>www.me</a>
				</a>
				<ContactSection />
			</div>
		</div>
	)
}

export default MyThreeDetails
