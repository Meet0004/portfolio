import React from 'react';
import WindowControls from './WindowControls';
import FileTabs from './FileTabs';
import CodePanel from './CodePanel';

const EditorWindow = () => {
	return (
		<div
			className="relative h-[350px] md:h-[400px] lg:h-[500px] w-full max-w-2xl"
			style={{ animation: 'float 6s ease-in-out infinite' }}
		>
			<div
				className="w-full h-full rounded-xl p-3 md:p-6 lg:p-8 relative overflow-hidden"
				style={{
					backgroundColor: 'var(--card-bg)',
					boxShadow:
						'0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 60px rgba(16, 185, 129, 0.3)',
				}}
			>
				<WindowControls />
				<FileTabs />
				<CodePanel />
			</div>
		</div>
	);
};

export default EditorWindow;
