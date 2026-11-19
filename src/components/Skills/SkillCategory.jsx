import React from 'react';
import SkillProgressBar from './SkillProgressBar';

const SkillCategory = ({ icon, title, textColor, skills, displayAsTags = false, displayAsIcons = false }) => {
	return (
		<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
			<h3 className={`text-2xl font-bold mb-6 flex items-center ${textColor}`}>
				{icon}
				{title}
			</h3>
			{displayAsIcons ? (
				<div className="flex flex-wrap gap-4">
					{skills.map(({ name, Icon }) => (
						<span
							key={name}
							className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform hover:scale-110"
							title={name}
							role="img"
							aria-label={name}
						>
							{React.createElement(Icon, { size: 32, color: '#f97316', 'aria-hidden': true })}
						</span>
					))}
				</div>
			) : displayAsTags ? (
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
