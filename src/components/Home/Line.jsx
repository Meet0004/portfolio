import React from 'react';

const Line = ({ num, code }) => (
	<div className="flex mb-1 md:mb-2">
		<div className="w-[20px] md:w-[30px] text-right pr-1 md:pr-2" style={{ color: '#475569' }}>
			{num}
		</div>
		<div className="flex-1">{code}</div>
	</div>
);

export default Line;
