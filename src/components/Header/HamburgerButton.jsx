import { Menu, X } from 'lucide-react';

const HamburgerButton = ({ isOpen, setIsOpen }) => {
	return (
		<button
			className="site-menu-toggle"
			type="button"
			onClick={() => setIsOpen(!isOpen)}
			aria-expanded={isOpen}
			aria-controls="mobile-navigation"
			aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
		>
			{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
		</button>
	);
};

export default HamburgerButton;
