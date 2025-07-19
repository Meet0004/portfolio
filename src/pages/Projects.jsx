import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(0);
	const scrollContainerRef = useRef(null);

	// Sample projects data
	const projects = [
		{
			id: 1,
			title: "---------------",
			description: "-------------------------------------------------------------------",
			tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
			liveLink: "https://example.com",
			githubLink: "https://github.com/example",
			status: "Completed"
		},
		{
			id: 2,
			title: "--------------------",
			description: "--------------------------------------------------------------------------------------------",
			tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
			image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
			liveLink: "https://example.com",
			githubLink: "https://github.com/example",
			status: "In Progress"
		},
		{
			id: 3,
			title: "-------------------",
			description: "-----------------------------------------------------------------------------------------------------------------",
			tech: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
			image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
			liveLink: "https://example.com",
			githubLink: "https://github.com/example",
			status: "Completed"
		},
		{
			id: 4,
			title: "---------------------------",
			description: "---------------------------------------------------------------------------------------------------------------",
			tech: ["Vue.js", "D3.js", "Express.js", "PostgreSQL"],
			image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
			liveLink: "https://example.com",
			githubLink: "https://github.com/example",
			status: "Completed"
		},
		{
			id: 5,
			title: "------------------------",
			description: "---------------------------------------------------------------------------------------------------------------------",
			tech: ["React", "OpenAI API", "WebSocket", "Tailwind CSS"],
			image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
			liveLink: "https://example.com",
			githubLink: "https://github.com/example",
			status: "In Progress"
		},
		{
			id: 6,
			title: "-------------------------------------",
			description: "A-----------------------------------------------------------------------------------------------------------------------------",
			tech: ["Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
			image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
			liveLink: "https://example.com",
			githubLink: "https://github.com/example",
			status: "Completed"
		}
	];



	// Handle scroll and update current project
	const handleScroll = () => {
		const container = scrollContainerRef.current;
		if (container) {
			const scrollTop = container.scrollTop;
			const imageHeight = 400 + 24; // image height + gap
			const newCurrentProject = Math.floor(scrollTop / imageHeight);
			setCurrentProject(Math.min(newCurrentProject, projects.length - 1));
		}
	};

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll);
			return () => container.removeEventListener('scroll', handleScroll);
		}
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-white mb-4">
						Featured <span className="text-purple-400">Projects</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						Scroll through my latest work and creative solutions
					</p>
				</div>

				{/* Main Content */}
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Left Side - Project Details */}
					<div className="lg:sticky lg:top-8 space-y-8">
						{/* Project Counter */}
						<div className="flex items-center gap-4">
							<span className="text-purple-400 text-lg font-semibold">
								{String(currentProject + 1).padStart(2, '0')}
							</span>
							<div className="flex-1 h-px bg-gradient-to-r from-purple-600 to-transparent"></div>
							<span className="text-gray-400 text-sm">
								{projects.length} Projects
							</span>
						</div>

						{/* Project Details */}
						<div className="space-y-6 transition-all duration-500">
							{/* Status Badge */}
							<div className="flex items-center gap-3">
								<span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${projects[currentProject].status === 'Completed'
										? 'bg-green-500/20 text-green-400 border border-green-500/30'
										: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
									}`}>
									{projects[currentProject].status}
								</span>
							</div>

							{/* Title */}
							<h3 className="text-4xl font-bold text-white leading-tight transition-all duration-500">
								{projects[currentProject].title}
							</h3>

							{/* Description */}
							<p className="text-gray-300 text-lg leading-relaxed transition-all duration-500">
								{projects[currentProject].description}
							</p>

							{/* Tech Stack */}
							<div>
								<h4 className="text-xl font-semibold text-purple-400 mb-3">
									Tech Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{projects[currentProject].tech.map((tech, index) => (
										<span
											key={index}
											className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-purple-600/50 transition-colors"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex gap-4 pt-4">
								<a
									href={projects[currentProject].liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/25 hover:scale-105"
								>
									<ExternalLink size={20} />
									Live Demo
								</a>
								<a
									href={projects[currentProject].githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
								>
									<Github size={20} />
									Code
								</a>
							</div>
						</div>

						{/* Progress Indicator */}
						<div className="mt-8">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-sm text-gray-400">Progress</span>
								<div className="flex-1 h-px bg-gray-700"></div>
								<span className="text-sm text-purple-400">
									{Math.round(((currentProject + 1) / projects.length) * 100)}%
								</span>
							</div>
							<div className="bg-gray-700 rounded-full h-2 overflow-hidden">
								<div
									className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300"
									style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
								></div>
							</div>
						</div>
					</div>

					{/* Right Side - Scrollable Images */}
					<div className="relative">
						<div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
							<div className="relative">
								{/* Scroll hint */}
								<div className="text-center mb-4">
									<span className="text-gray-400 text-sm">Scroll to explore projects</span>
								</div>

								{/* Scrollable Container */}
								<div
									ref={scrollContainerRef}
									className="h-96 overflow-y-scroll scrollbar-hide scroll-smooth"
									style={{
										scrollbarWidth: 'none',
										msOverflowStyle: 'none',
									}}
								>
									<div className="space-y-6">
										{projects.map((project, index) => (
											<div
												key={project.id}
												className={`relative transition-all duration-300 ${index === currentProject ? 'scale-105' : 'scale-100 opacity-70'
													}`}
											>
												<div className="relative overflow-hidden rounded-2xl group">
													<img
														src={project.image}
														alt={project.title}
														className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
													/>

													{/* Gradient Overlay */}
													<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

													{/* Project Info Overlay */}
													<div className="absolute bottom-0 left-0 right-0 p-6">
														<div className="flex items-center justify-between">
															<div>
																<h4 className="text-white text-xl font-bold mb-1">
																	{project.title}
																</h4>
																<p className="text-gray-300 text-sm">
																	{project.tech.slice(0, 3).join(' • ')}
																</p>
															</div>
															<div className="flex gap-2">
																<span className="w-2 h-2 bg-purple-400 rounded-full"></span>
																<span className="text-white text-sm font-medium">
																	{String(index + 1).padStart(2, '0')}
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Scroll Indicators */}
								<div className="flex justify-center mt-4 space-x-2">
									{projects.map((_, index) => (
										<div
											key={index}
											className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProject
													? 'bg-purple-600 w-6'
													: 'bg-gray-600'
												}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;