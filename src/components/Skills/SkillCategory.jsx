import React from 'react';
import SkillProgressBar from './SkillProgressBar';

const SkillCategory = ({ icon, title, textColor, skills, displayAsTags = false }) => {
	return (
		<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
			<h3 className={`text-2xl font-bold mb-6 flex items-center ${textColor}`}>
				{icon}
				{title}
			</h3>
			{displayAsTags ? (
				<div className="flex flex-wrap gap-3">
					{skills.map((skill) => (
						<span key={skill} className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-stone-700">
							{skill}
						</span>
					))}
				</div>
			) : (
				<div className="space-y-4">
					{skills.map((skill, idx) => (
						<SkillProgressBar key={idx} {...skill} />
					))}
				</div>
			)}
		</div>
	);
};

export default SkillCategory;
