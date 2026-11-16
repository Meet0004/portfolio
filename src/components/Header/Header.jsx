import React, { useState, useEffect } from 'react';
import Logoo from './Logoo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import HamburgerButton from './HamburgerButton';
import ThemeToggle from './ThemeToggle';

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
	<header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
		<div className="site-header-inner">
				<Logoo />
				<DesktopNav />
			<div className="site-header-actions">
				<ThemeToggle />
				<HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</div>
		<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
	</header>
	);
};

export default Header;
