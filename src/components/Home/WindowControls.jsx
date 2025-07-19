import React from 'react';

const WindowControls = () => (
	<div className="flex justify-between items-center mb-3 md:mb-5">
		<div className="flex gap-1 md:gap-2">
			<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#f87171]"></div>
			<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#fbbf24]"></div>
			<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#34d399]"></div>
		</div>
		<div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
			main.js
		</div>
	</div>
);

export default WindowControls;
