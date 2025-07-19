import React from 'react';
import SkillProgressBar from './SkillProgressBar';

const SkillCategory = ({ icon, title, textColor, skills }) => {
	return (
		<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
			<h3 className={`text-2xl font-bold mb-6 flex items-center ${textColor}`}>
				{icon}
				{title}
			</h3>
			<div className="space-y-4">
				{skills.map((skill, idx) => (
					<SkillProgressBar key={idx} {...skill} />
				))}
			</div>
		</div>
	);
};

export default SkillCategory;
