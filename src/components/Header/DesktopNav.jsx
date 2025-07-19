import { Link } from 'react-router-dom';

const DesktopNav = () => {
	return (
		<nav className="hidden sm:flex gap-x-6">
			<a href='#about' className="text-lg nav-link">About & Education</a>
			<a href='#skills' className="text-lg nav-link">Skills</a>
			<a href='#projects' className="text-lg nav-link">Projects</a>
			<a href='#contact' className="text-lg nav-link">Contact</a>
		</nav>
	);
};

export default DesktopNav;
