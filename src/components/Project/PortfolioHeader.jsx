const PortfolioHeader = () => {
	return (
		<div id='projects' className="relative text-center pt-18 pb-3 px-5 overflow-hidden h-fit">

			<div className="text-4xl md:text-6xl sm:3xl font-extrabold ">
				<span className="font-extrabold bg-gradient-to-r from-[#0243f7] to-[#dd0c0c] bg-clip-text text-transparent leading-tight">Some</span> 
				💡 
				<span className="font-extrabold bg-gradient-to-r from-[#df3b09] via-red-600 to-[#e0a503] bg-clip-text text-transparent leading-tight">cooked into</span>
				💻
				<span className="text-red-400 animate-pulse">....</span>
			</div>
		</div>
	);
};

export default PortfolioHeader;
