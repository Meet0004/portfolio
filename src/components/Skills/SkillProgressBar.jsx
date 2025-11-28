import React from 'react';

const SkillProgressBar = ({ name, level, percent, color, gradient }) => {
	return (
		<div className="skill-item">
			<div className="flex justify-between items-center mb-2">
				<span className="text-white font-medium">{name}</span>
				<span className={`${color} text-sm font-semibold`}>{level}</span>
			</div>
			<div className="w-full bg-gray-700 rounded-full h-2">
				<div
					className={`bg-gradient-to-r ${gradient} h-2 rounded-full`}
					style={{ width: percent }}
				></div>
			</div>
		</div>
	);
};

export default SkillProgressBar;
