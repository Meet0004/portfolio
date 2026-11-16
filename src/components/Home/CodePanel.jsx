import React from 'react';
import Line from './Line';

const lines = [
	{ num: 1, code: <><span style={{ color: '#ea580c' }}>import</span> &#123; life &#125; <span style={{ color: '#ea580c' }}>from</span> <span style={{ color: '#c2410c' }}>'earth'</span>;</> },
	{ num: 2, code: <></> },
	{ num: 3, code: <span style={{ color: '#64748b' }}>// Routine</span> },
	{ num: 4, code: <><span style={{ color: '#ea580c' }}>const</span> <span style={{ color: '#9a3412' }}>MeetSoni</span> = () =&gt; &#123;</> },
	{ num: 5, code: <pre><span style={{ color: '#ea580c' }}>    if</span> (alive) <span style={{ color: '#c2410c' }}>{`{`}</span></pre> },
	{ num: 6, code: <pre className='text-amber-700'>		eat()</pre> },
	{ num: 7, code: <pre className='text-amber-700'>		code()</pre> },
	{ num: 8, code: <pre className='text-amber-700'>		sleep()</pre> },
	{ num: 9, code: <pre className='text-amber-700'>		repeat()</pre> },
	{ num: 10, code: <pre><span style={{ color: '#c2410c' }}>{`    }`}</span></pre> },
	{ num: 11, code: <pre className='text-slate-600'>{`}`}</pre> },
];

const CodePanel = () => (
	<div className="flex h-[calc(100%-60px)] md:h-[calc(100%-80px)]">
		<div
			className="w-[40px] md:w-[60px] rounded-l-lg flex flex-col items-center py-2 md:py-4 gap-3 md:gap-5"
			style={{ backgroundColor: 'rgba(124, 76, 33, 0.06)' }}
		>
			{Array(4).fill(null).map((_, i) => (
				<div
					key={i}
					className="w-3 h-3 md:w-5 md:h-5 rounded"
					style={{ backgroundColor: 'rgba(124, 76, 33, 0.18)' }}
				></div>
			))}
		</div>
		<div
			className="flex-1 rounded-r-lg p-2 md:p-4 font-mono text-xs md:text-sm leading-relaxed overflow-hidden"
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.72)',
				color: 'var(--text-secondary)',
			}}
		>
			{lines.map(({ num, code }) => (
				<Line key={num} num={num} code={code} />
			))}
		</div>
	</div>
);

export default CodePanel;
