import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, setIsOpen }) => {
	if (!isOpen) return null;

	return (
		<div className="sm:hidden flex flex-col gap-4 mt-4 px-2">
			<a href='#about' onClick={() => setIsOpen(false)} className="text-lg">About</a>
			<a href='#skills' onClick={() => setIsOpen(false)} className="text-lg">Skills</a>
			<a href='#projects' onClick={() => setIsOpen(false)} className="text-lg">Projects</a>
			<a href='#certifications'  onClick={() => setIsOpen(false)}>Certifications</a>

			<a href='#contact' onClick={() => setIsOpen(false)} className="text-lg">Contact</a>
		</div>
	);
};

export default MobileMenu;
