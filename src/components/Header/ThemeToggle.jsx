import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
	const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const syncWithSystem = () => {
			if (!localStorage.getItem('portfolio-theme')) {
				const systemTheme = mediaQuery.matches ? 'dark' : 'light';
				document.documentElement.dataset.theme = systemTheme;
				setTheme(systemTheme);
			}
		};

		mediaQuery.addEventListener('change', syncWithSystem);
		return () => mediaQuery.removeEventListener('change', syncWithSystem);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem('portfolio-theme', nextTheme);
		setTheme(nextTheme);
	};

	return (
		<button
			className="theme-toggle"
			type="button"
			onClick={toggleTheme}
			aria-pressed={theme === 'dark'}
			aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
			title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
		>
			{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
};

export default ThemeToggle;
