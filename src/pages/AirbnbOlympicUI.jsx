import React, { useState, useEffect } from 'react';

const AirbnbOlympicUI = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [hoveredImage, setHoveredImage] = useState(null);

	const slides = [
		{
			id: 1,
			title: "Olympic Venue",
			image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmNWY1ZjUiLz48cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIyNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZTBlNGU3Ii8+PHJlY3QgeD0iMTI1IiB5PSI3NSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiM5Y2EzYWYiLz48dGV4dCB4PSIxNzUiIHk9IjIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PbHltcGljIFZlbnVlPC90ZXh0Pjwvc3ZnPg=="
		},
		{
			id: 2,
			title: "Athlete Housing",
			image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmMGY4ZmYiLz48cmVjdCB4PSIzMCIgeT0iNDAiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTcwIiBmaWxsPSIjZGRmNGZmIi8+PHJlY3QgeD0iODAiIHk9IjgwIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjE3NSIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF0aGxldGUgSG91c2luZzwvdGV4dD48L3N2Zz4="
		},
		{
			id: 3,
			title: "Host Experience",
			image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmY4ZjAiLz48cmVjdCB4PSI0MCIgeT0iNjAiIHdpZHRoPSIyNzAiIGhlaWdodD0iMTMwIiBmaWxsPSIjZmZmMmU2Ii8+PGNpcmNsZSBjeD0iMTc1IiBjeT0iMTI1IiByPSI0MCIgZmlsbD0iI2ZmNWE1ZiIvPjx0ZXh0IHg9IjE3NSIgeT0iMjEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvc3QgRXhwZXJpZW5jZTwvdGV4dD48L3N2Zz4="
		},
		{
			id: 4,
	    	title: "Olympic Partnership",
	    	image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjM1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmMGZmZjAiLz48cmVjdCB4PSI2MCIgeT0iNTAiIHdpZHRoPSIyMzAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZTZmZmU2Ii8+PHJlY3QgeD0iMTQwIiB5PSIxMDAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzAwODFjOCIvPjx0ZXh0IHg9IjE3NSIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9seW1waWMgUGFydG5lcnNoaXA8L3RleHQ+PC9zdmc+"
		}
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const FloatingElement = ({ className }) => (
		<div className={`absolute bg-white bg-opacity-10 rounded-lg animate-pulse ${className}`} />
	);

	const ImageCard = ({ slide, index, isActive }) => {
		const positions = [
			'top-[10%] left-[10%]',
			'top-[30%] left-[40%]',
			'top-[50%] left-[20%]',
			'top-[70%] left-[50%]'
		];

		return (
			<div
				className={`absolute w-80 h-56 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-110 hover:z-20 ${positions[index]} ${hoveredImage === index ? 'scale-110 z-20' : 'scale-100 z-10'
					}`}
				onMouseEnter={() => setHoveredImage(index)}
				onMouseLeave={() => setHoveredImage(null)}
				style={{
					animationDelay: `${index * -5}s`
				}}
			>
				<img
					src={slide.image}
					alt={slide.title}
					className="w-full h-full object-cover"
				/>
			</div>
		);
	};

	return (
		<div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800">
			{/* Add Custom CSS Animation */}
			<style jsx>{`
        		@keyframes diagonal-scroll {
        		  0% {
        		    transform: translateY(0px);
        		  }
        		  100% {
        		    transform: translateY(-100px);
        		  }
        		}`}</style>
			{/* Header */}
			<header className="absolute top-18 left-20 ">
				<a href='https://robin-noguier.com/'>mmmmmmmm</a>

			</header>

			{/* Main Content */}
			<div className="absolute left-20 top-1/2 transform -translate-y-1/2 max-w-2xl z-20">
				<h1 className="text-9xl font-bold text-yellow-400 leading-none mb-8 drop-shadow-lg">
					Airbnb
				</h1>
				<p className="text-white text-xl leading-relaxed mb-12 max-w-lg">
					Describing the flow of athletes receiving their Airbnb credits for the next Olympic games. Also introducing the flow for creating an interview for each Olympian.
				</p>
				<button className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-teal-700 transition-all duration-300 relative group">
					OPEN CASE STUDY
					<span className="ml-3 group-hover:ml-4 transition-all duration-300">→</span>
				</button>
			</div>

			{/* Images Container */}
			<div className="absolute right-0 top-0 w-3/5 h-full overflow-hidden">
				<div className="absolute w-150 h-200 -top-1/2 -right-1/4 transform rotate-12">
					<div className="relative w-full h-full animate-diagonal-scroll">
						{slides.map((slide, index) => (
							<ImageCard
								key={slide.id}
								slide={slide}
								index={index}
								isActive={activeSlide === index}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Details Panel */}
			<div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-95 backdrop-blur-sm p-10 rounded-3xl w-96 shadow-2xl z-20">
				<h3 className="text-2xl font-bold text-teal-700 mb-6">
					Olympic Housing Program
				</h3>
				<p className="text-gray-600 text-base leading-relaxed mb-4">
					A comprehensive case study exploring the user experience design for Olympic athlete accommodation booking system.
				</p>
				<p className="text-gray-600 text-base leading-relaxed mb-8">
					This project involved creating seamless flows for athlete verification, credit allocation, and interview scheduling processes.
				</p>
				<div className="flex justify-between pt-6">
					<div className="text-center">
						<div className="text-3xl font-bold text-red-500">2,500</div>
						<div className="text-xs text-gray-500 uppercase tracking-wider">Athletes</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-red-500">150</div>
						<div className="text-xs text-gray-500 uppercase tracking-wider">Countries</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-red-500">28</div>
						<div className="text-xs text-gray-500 uppercase tracking-wider">Sports</div>
					</div>
				</div>
			</div>


			{/* Scroll Indicator */}
			<div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-30">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveSlide(index)}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index
							? 'bg-white scale-125'
							: 'bg-white bg-opacity-50 hover:bg-opacity-75'
						}`}
					/>
				))}
			</div>

		</div>
	);
};

export default AirbnbOlympicUI;