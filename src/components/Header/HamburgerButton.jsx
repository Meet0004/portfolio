import { Menu, X } from 'lucide-react';

const HamburgerButton = ({ isOpen, setIsOpen }) => {
	return (
		<button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
			{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
		</button>
	);
};

export default HamburgerButton;
