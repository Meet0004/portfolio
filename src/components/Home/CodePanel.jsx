import React from 'react';
import Line from './Line';

const lines = [
	{ num: 1, code: <><span style={{ color: '#10b981' }}>import</span> &#123; life &#125; <span style={{ color: '#10b981' }}>from</span> <span style={{ color: '#06d6a0' }}>'earth'</span>;</> },
	{ num: 2, code: <></> },
	{ num: 3, code: <span style={{ color: '#64748b' }}>// Routine</span> },
	{ num: 4, code: <><span style={{ color: '#10b981' }}>const</span> <span style={{ color: '#22d3ee' }}>MeetSoni</span> = () =&gt; &#123;</> },
	{ num: 5, code: <pre><span style={{ color: '#10b981' }}>    if</span> (alive) <span style={{ color: '#06d6a0' }}>{`{`}</span></pre> },
	{ num: 6, code: <pre className='text-amber-400'>		eat()</pre> },
	{ num: 7, code: <pre className='text-amber-400'>		code()</pre> },
	{ num: 8, code: <pre className='text-amber-4010'>		sleep()</pre> },
	{ num: 9, code: <pre className='text-amber-400'>		repeat()</pre> },
	{ num: 10, code: <pre><span style={{ color: '#06d6a0' }}>{`    }`}</span></pre> },
	{ num: 11, code: <pre className='text-slate-400'>{`}`}</pre> },
];

const CodePanel = () => (
	<div className="flex h-[calc(100%-60px)] md:h-[calc(100%-80px)]">
		<div
			className="w-[40px] md:w-[60px] rounded-l-lg flex flex-col items-center py-2 md:py-4 gap-3 md:gap-5"
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
		>
			{Array(4).fill(null).map((_, i) => (
				<div
					key={i}
					className="w-3 h-3 md:w-5 md:h-5 rounded"
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
				></div>
			))}
		</div>
		<div
			className="flex-1 rounded-r-lg p-2 md:p-4 font-mono text-xs md:text-sm leading-relaxed overflow-hidden"
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.02)',
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
