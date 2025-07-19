import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Tag, Menu, X } from 'lucide-react';
import PortfolioHeader from './PortfolioHeader';

const MobilePortfolioShowcase = () => {
	const [activeProject, setActiveProject] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);
	const imageRef = useRef(null);

	// Sample project data
	const projects = [
		{
			id: 1,
			title: "Soniverse Collaborative IDE",
			description: "Soniverse is a full-featured collaborative IDE and code editor. Includes offline desktop app and real-time browser version with voice chat, compiler, AI tools, live preview, and whiteboard.",
			image: "./src/assets/soniverse.png",
			tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
			date: "2025",
			category: ["Desktop Application, ", " Web Application"],
			liveUrl: "https://landing-page-olive-iota.vercel.app/",
			githubUrl: "#",
			features: [
				"Offline version with desktop app",
				"Multi user room collaboration",
				"Voice call + chat (text, files, images,docs)",
				"Developer mode with live HTML/CSS/JS preview",
				"Built-in compiler & File system access",
				"AI chatbot + HTML-to-CSS/JS converters",
				"Collaborative whiteboard",
				"Custom key bindings & settings panel",
			]
		},
		{
			id: 2,
			title: " Typing Speed Tester ",
			description: "Java based Application - Developed app where users can test their typing speed and measure in wpm.",
			image: "./src/assets/TSMM.png",
			tech: ["Java", "JavaFX"],
			date: "2025",
			category: "Desktop Application",
			liveUrl: "https://typing-speed-tester-website.vercel.app/",
			githubUrl: "https://github.com/Meet0004/Typing-Speed-Tester",
			features: [
				"Real-time WPM & accuracy tracking",
				"Multiple difficulty levels (Beginner to Expert)",
				"Progress tracking with XP & leveling system",
				"Interactive UI with themes & customization",
				"Test history & leaderboard for performance analysis",
				"Achievements & streaks to keep users motivated "
			]
		},
		{
			id: 3,
			title: "Loan Management System",
			description: "This project provides essential features for managing multiple loans, user authentication, and EMI calculations.",
			image: "./src/assets/LMSS.png",
			tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
			date: "2024",
			category: "Web Application",
			liveUrl: "https://youtu.be/V4cnTS96nLA?si=Uau-VxPpMH-jnUQO",
			githubUrl: "https://github.com/Meet0004/loan-management-system",
			features: [
				"Multiple Loans Feature",
				"User Authentication",
				"EMI Calculation",
				"Loan Repayment Tracking",
				"User Dashboard",
				"Admin Panel for Loan Management"
			]
		},
		{
			id: 4,
			title: "AtmosView - Modern Weather App",
			description: "AtmosView is a sleek, modern weather application that provides accurate forecasts with beautiful visuals. It's designed to be intuitive while offering all the weather details you need at a glance.",
			image: "./src/assets/AtmosviewM.png",
			tech: ["Css", "JavaScript", "Weather API"],
			date: "2025",
			category: "Web Application",
			liveUrl: "https://weather-app-xi-sable-94.vercel.app/",
			githubUrl: "https://github.com/Meet0004/weather-app",
			features: [
				"Real-time weather data for any location worldwide",
				"5-day forecast with daily high/low temperatures",
				"12-hour hourly forecast to plan your day",
				"Detailed weather stats (humidity, wind, pressure, feels-like)",
				"Fully responsive - works on all devices",
			]
		},
		{
			id: 5,
			title: "Encryptify - Secure Data Encryption",
			description: "Encrypttify is a powerful encryption tool that applies multi-layered encryption techniques like AES, DES, Blowfish, and Twofish to secure your keys and data",
			image: "./src/assets/Encryptify.png",
			tech: ["JavaScript", "Node.js", "Crypto API"],
			date: "2024",
			category: "",
			liveUrl: "https://encrypytify.vercel.app/",
			githubUrl: "https://github.com/Meet0004/Encrypytify",
			features: [
				"Multi-Level Encryption Modes",
				"Custom Encryption Workflows",
				"User-Friendly Dark Mode Interface",
				"One-Way Hash Encryption (Hard Mode)",
			]
		},
		{
			id: 6,
			title: "Currency Converter - Real-Time Exchange Rates",
			description: "This Currency Converter allows users to convert between global currencies in real-time using live exchange rate data from an external API.",
			image: "./src/assets/CC.png",
			tech: ["HTML", "CSS", "JavaScript"],
			date: "2024",
			category: "",
			liveUrl: "https://m-currency-converter.vercel.app/",
			githubUrl: "https://github.com/Meet0004/M_currency_converter",
			features: [
				"Real-Time Currency Conversion",
				"Clean and Intuitive Interface",
				"Supports Global Currencies",
				"Error Handling for Invalid Inputs"
			]
		},
		{
			id: 7,
			title: "Random Password Generator",
			description: "This project generates secure 10-character random passwords including uppercase, lowercase, numbers, and symbols, with clipboard support.",
			image: "./src/assets/PG.png",
			tech: ["HTML", "CSS", "JavaScript"],
			date: "2024",
			category: "",
			liveUrl: "https://password-generator-liart-eight.vercel.app/",
			githubUrl: "https://github.com/Meet0004/Password-Generator",
			features: [
				"Generates 10-Character Secure Passwords",
				"Includes Uppercase, Lowercase, Numbers, and Symbols",
				"Ensures One Character from Each Category",
				"Clipboard API Support for Copying Passwords"
			]
		},
 {
			id: 8,
			title: "Portfolio",
			description: "Project that is front of you",
			image: "./src/assets/portfolio.png",
			tech: ["React", "Tailwind CSS", "JavaScript"],
			date: "2025",
			category: "",
			liveUrl: "https://password-generator-liart-eight.vercel.app/",
			githubUrl: "https://github.com/Meet0004/Password-Generator",
			features: [
				"All-in-one portfolio showcasing my projects, skills, and contact information.",
				"Responsive design for optimal viewing on all devices.",
				"Includes sections for projects, skills, contact form, and social links.",
				"Built with React and styled using Tailwind CSS for a modern look."
			]
		}
	];

	// Touch handling for swipe gestures
	const minSwipeDistance = 50;

	const onTouchStart = (e) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			nextProject();
		}
		if (isRightSwipe) {
			prevProject();
		}
	};

	const nextProject = () => {
		setActiveProject(prev => (prev + 1) % projects.length);
	};

	const prevProject = () => {
		setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
	};

	const currentProject = projects[activeProject];

	return (
		<div className="min-h-screen bg-transparent text-white overflow-x-hidden">
			<PortfolioHeader />

			{/* Swipe Indicator */}
			<div className="text-center  text-s text-gray-500 flex justify-center items-center gap-2">
				<ChevronLeft size={16} />
				<span>Swipe to navigate</span>
				<ChevronRight size={16} />
			</div>

			{/* Background Effects */}
			<div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

			{/* Main Content */}
			<div className="relative">
				{/* Project Image */}
				<div
					className="relative h-64 overflow-hidden z-[1005] "
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80"></div>
					<img
						ref={imageRef}
						src={currentProject.image}
						alt={currentProject.title}
						className="w-full h-full object-fit transition-all duration-500 z-[1007] "
					/>

					{/* Navigation Arrows - Now loop continuously */}
					<button
						onClick={prevProject}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm transition-opacity hover:bg-black/70"
					>
						<ChevronLeft size={24} />
					</button>
					<button
						onClick={nextProject}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm transition-opacity hover:bg-black/70"
					>
						<ChevronRight size={24} />
					</button>

					{/* Project Counter */}
					<div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
						{activeProject + 1} / {projects.length}
					</div>
				</div>

				{/* Project Details */}
				<div className="p-6 space-y-6">
					{/* Title & Meta */}
					<div className="space-y-3">
						<h1 className="text-2xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
							{currentProject.title}
						</h1>

						<div className="flex items-center gap-4 text-sm text-gray-400">
							<span className="flex items-center gap-1">
								<Calendar size={14} />
								{currentProject.date}
							</span>
							<span className="flex items-center gap-1">
								<Tag size={14} />
								{currentProject.category}
							</span>
						</div>
					</div>

					{/* Description */}
					<p className="text-gray-300 leading-relaxed">
						{currentProject.description}
					</p>

					{/* Features */}
					<div className="space-y-3">
						<h3 className="text-lg font-semibold text-purple-300">Key Features</h3>
						<div className="space-y-2">
							{currentProject.features.slice(0, 12).map((feature, index) => (
								<div key={index} className="flex items-start gap-3 text-gray-300">
									<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
									<span className="text-sm">{feature}</span>
								</div>
							))}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-3">
						<a
							href={currentProject.liveUrl}
							className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium transition-all duration-300 active:scale-95"
						>
							<ExternalLink size={18} />
							Live Demo
						</a>
						<a
							href={currentProject.githubUrl}
							className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 rounded-lg font-medium transition-all duration-300 active:scale-95"
						>
							<Github size={18} />
							Code
						</a>
					</div>

					{/* Tech Stack */}
					<div className="space-y-3">
						<h3 className="text-lg font-semibold text-purple-300">Technology Stack</h3>
						<div className="flex flex-wrap gap-2">
							{currentProject.tech.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Project Navigation Dots */}
					<div className="flex justify-center gap-2 py-4">
						{projects.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveProject(index)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeProject
										? 'bg-purple-400 w-8'
										: 'bg-gray-600 active:bg-gray-500'
									}`}
							/>
						))}
					</div>
				</div>
			</div>

			
		</div>
	);
};

export default MobilePortfolioShowcase;