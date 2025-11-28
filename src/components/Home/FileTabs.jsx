import React from 'react';

const FileTabs = () => (
	<div className="flex gap-1 mb-2 md:mb-4">
		{['main.js', 'style.css', 'index.html'].map((file, idx) => (
			<div
				key={file}
				className="py-1 px-2 md:py-2 md:px-4 rounded-t-md text-xs md:text-sm"
				style={{
					backgroundColor: idx === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
					color: idx === 0 ? 'var(--text)' : 'var(--text-secondary)',
				}}
			>
				{file}
			</div>
		))}
	</div>
);

export default FileTabs;
