import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { ChevronUp, ChevronRight} from 'lucide-react';
import PortfolioHeader from './PortfolioHeader';


const PortfolioShowcase = () => {
	const [activeProject, setActiveProject] = useState(0);
	const scrollContainerRef = useRef(null);
	const imageRefs = useRef([]);

	// Sample project data - replace with your actual projects
	const projects = [
		{
			id: 1,
			title: "Soniverse Collaborative IDE",
			description: "Soniverse is a full-featured collaborative IDE and code editor. Includes offline desktop app and real-time browser version with voice chat, compiler, AI tools, live preview, and whiteboard.",
			image: '/assets/soniverse.png',
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
			image: "/assets/TSM.png",
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
			image: "/assets/LMSS.png",
			tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
			date: "2024",
			category: "Web Application",
			liveUrl: "https://tinyurl.com/LoanManagementSys",
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
			image: "/assets/Atmosview.png",
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
			image: "/assets/Encryptify.png",
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
			image: "/assets/CC.png",
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
		}, {
			id: 7,
			title: "Random Password Generator",
			description: "This project generates secure 10-character random passwords including uppercase, lowercase, numbers, and symbols, with clipboard support.",
			image: "/assets/PG.png",
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
			image: "/assets/portfolio.png",
			tech: ["React", "Tailwind CSS", "JavaScript"],
			date: "2025",
			category: "",
			liveUrl: "https://portfolio-fbmicbks6-meet0004s-projects.vercel.app/",
			githubUrl: "https://github.com/Meet0004/portfolio",
			features: [
				"All-in-one portfolio showcasing my projects, skills, and contact information.",
				"Responsive design for optimal viewing on all devices.",
				"Includes sections for projects, skills, contact form, and social links.",

			]
		},

	];

	// Handle scroll events to determine active project
	useEffect(() => {
		const handleScroll = () => {
			if (scrollContainerRef.current && imageRefs.current.length) {
				const container = scrollContainerRef.current;
				const containerTop = container.getBoundingClientRect().top;
				const containerHeight = container.clientHeight;
				const centerY = containerTop + containerHeight / 2;

				let closestIndex = 0;
				let closestDistance = Infinity;

				imageRefs.current.forEach((ref, index) => {
					if (ref) {
						const rect = ref.getBoundingClientRect();
						const imageCenter = rect.top + rect.height / 2;
						const distance = Math.abs(imageCenter - centerY);

						if (distance < closestDistance) {
							closestDistance = distance;
							closestIndex = index;
						}
					}
				});

				setActiveProject(closestIndex);
			}
		};

		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll);
			return () => container.removeEventListener('scroll', handleScroll);
		}
	}, []);

	// Smooth scroll to specific project
	const scrollToProject = (index) => {
		if (imageRefs.current[index] && scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const targetElement = imageRefs.current[index];
			const containerRect = container.getBoundingClientRect();
			const targetRect = targetElement.getBoundingClientRect();

			const scrollTop = container.scrollTop + targetRect.top - containerRect.top - (containerRect.height / 2) + (targetRect.height / 2);

			container.scrollTo({
				top: scrollTop,
				behavior: 'smooth'
			});
		}
	};

	const currentProject = projects[activeProject];

	return (
		<div className="min-h-screen  text-white overflow-hidden">
			{/* Background Effects */}
			<div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
			<div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]"></div>
			<PortfolioHeader />
			<div className="relative flex h-screen">
				{/* Left Panel - Project Details */}

				<div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">

					<div className="max-w-2xl mx-auto w-full">
						
						{/* Header */}
						<div className="mb-0 animate-fade-in">
							<div className="flex items-center gap-4 text-sm text-gray-400">
								<span>Project {activeProject + 1} of {projects.length}</span>
								<div className="flex gap-1">
									{projects.map((_, index) => (
										<button
											key={index}
											onClick={() => scrollToProject(index)}
											className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeProject ? 'bg-purple-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
												}`}
										/>
									))}
								</div>
								{/* Category & Date */}
								<div className="flex items-center gap-2 text-sm">
									<span className="flex items-center gap-2 px-3 py-1">
										<Tag size={14} />
										{currentProject.category}
									</span>
									<span className="flex items-center gap-2 text-gray-400">
										<Calendar size={14} />
										{currentProject.date}
									</span>
								</div>
							</div>

						</div>

						{/* Project Content */}
						<div key={currentProject.id} className="space-y-5 animate-slide-up">


							{/* Title */}
							<h2 className="text-4xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
								{currentProject.title}
							</h2>

							{/* Description */}
							<p className="text-lg text-gray-300 leading-relaxed">
								{currentProject.description}
							</p>

							{/* Features */}
							<div className="space-y-3">
								<h3 className="text-xl font-semibold text-purple-300">Key Features</h3>
								<ul className="space-y-2">
									{currentProject.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-3 text-gray-300">
											<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
											{feature}
										</li>
									))}
								</ul>
							</div>

							{/* Tech Stack */}
							<div className="space-y-3">
								<h3 className="text-xl font-semibold text-purple-300">Technology Stack</h3>
								<div className="flex flex-wrap gap-2">
									{currentProject.tech.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 backdrop-blur-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Actions */}
							<div className="flex gap-4 pt-0">
								<a
									href={currentProject.liveUrl}
									className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 font-medium"
								>
									<ExternalLink size={18} />
									Live Demo
								</a>
								<a
									href={currentProject.githubUrl}
									className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800/50 transition-all duration-300 font-medium"
								>
									<Github size={18} />
									Source Code
								</a>
							</div>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
						<ChevronDown size={24} className="text-gray-400" />
					</div>
				</div>

				{/* Right Panel - Image Gallery */}
				<div className="w-1/2 relative z-[1005]">
					<div
						ref={scrollContainerRef}
						className="h-full overflow-y-auto scrollbar-hide snap-y snap-mandatory"
						style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
					>
						<div className="py-32">
							{/* Swipe Indicator */}
			<div className="text-center  text-s text-gray-500 flex justify-center items-center gap-2">
				<ChevronUp size={16} />
				<span>Scroll to navigate</span>
				<ChevronDown size={16} />
			</div>
							{projects.map((project, index) => (
								<div
									key={project.id}
									ref={el => imageRefs.current[index] = el}
									className="mb-16 px-8 snap-center"
								>
									
									<div className={`relative group transition-all duration-700 ${index === activeProject ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
										}`}>
											
										<div className="relative overflow-hidden rounded-2xl shadow-2xl">
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-96 object-fit: contain object-position: center; transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

											{/* Hover Overlay */}
											<div className="absolute inset-0 opacity-0  transition-opacity duration-300 flex items-center justify-center">
												<button
													onClick={() => scrollToProject(index)}
													className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
												>
													View Details
												</button>
											</div>
										</div>

										{/* Project Number */}
										<div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
											{String(index + 1).padStart(2, '0')}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Gradient Overlays */}
					<div className="absolute top-0 left-0 right-0 h-32 "></div>
					<div className="absolute bottom-0 left-0 right-0 h-32"></div>
				</div>
			</div>

			<style jsx>{`
        .scrollbar-hide {
          -webkit-scrollbar: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
		</div>
	);
};

export default PortfolioShowcase;
