import React from 'react';
import EditorWindow from './EditorWindow';

const CodeEditor = () => {
	return (
		<div className='z-[1002] w-full max-w-2xl order-1 lg:order-2'>
			<EditorWindow />
		</div>
	);
};

export default CodeEditor;
