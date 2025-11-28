import React, { useState, useEffect } from 'react';
import Logoo from './Logoo';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import HamburgerButton from './HamburgerButton';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`${scrolled ? 'bg-[#0f172a]/70 backdrop-blur-md shadow-lg' : 'bg-[#0f172a]'} z-[1006] text-white px-6 py-4 sticky top-0 transition-all duration-300`}>
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<Logoo />
				<DesktopNav />
				<HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</header>
	);
};

export default Header;
