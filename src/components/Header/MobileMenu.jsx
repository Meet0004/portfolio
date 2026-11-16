const MobileMenu = ({ isOpen, setIsOpen }) => {
	if (!isOpen) return null;

	return (
		<nav id="mobile-navigation" className="site-mobile-nav" aria-label="Mobile navigation">
			<a href='#about' onClick={() => setIsOpen(false)}>About</a>
			<a href='#skills' onClick={() => setIsOpen(false)}>Skills</a>
			<a href='#experience' onClick={() => setIsOpen(false)}>Experience</a>
			<a href='#projects' onClick={() => setIsOpen(false)}>Projects</a>
			<a href='#certifications' onClick={() => setIsOpen(false)}>Certifications</a>
			<a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
		</nav>
	);
};

export default MobileMenu;
