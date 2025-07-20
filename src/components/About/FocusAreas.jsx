import React from 'react';
import { Zap, Brain, Target, Code } from 'lucide-react';

const focusAreas = [
	{
		icon: <Zap className="w-6 h-6" />,
		title: "Real-time Applications",
		description: "Building dynamic software that responds instantly to user interactions"
	},
	{
		icon: <Brain className="w-6 h-6" />,
		title: "Learning-Driven Development",
		description: "Creating projects that challenge me and expand my skillset"
	},
	{
		icon: <Target className="w-6 h-6" />,
		title: "Problem Solving",
		description: "Tackling real-world challenges through elegant code solutions"
	},
	{
		icon: <Code className="w-6 h-6" />,
		title: "Purpose-Driven Learning",
		description: "Continuously improving to build better, more impactful applications"
	}
];

const FocusAreas = () => (
	<div className="mb-15">
		<h2 className="text-4xl font-bold text-center mb-12 p-1 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
			My Focus Areas
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{focusAreas.map((area, index) => (
				<div key={index} className="group relative">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>

					<div className="relative overflow-hidden bg-gradient-to-r from-[#020618] to-[#040229] backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">

						<div className="flex items-center space-x-4 mb-4">
							<div className="text-purple-400 group-hover:text-pink-400 transition-colors">
								{area.icon}
							</div>
							<h3 className="text-2xl font-bold text-white">{area.title}</h3>
						</div>

						<p className="text-gray-300 leading-relaxed">{area.description}</p>

						{/* Sliding Gradient Bar */}
						<span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#11AF7E] group-hover:w-full transition-all duration-300 rounded-full" />
					</div>
				</div>

			))}
		</div>
	</div>
);

export default FocusAreas;
