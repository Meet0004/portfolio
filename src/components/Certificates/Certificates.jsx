import React, { useState, useEffect, useRef } from 'react';

const Certificates = () => {
	// Example usage:
	const myCertificates = [
		{
			id: 1,
			title: "JavaScript Foundations Professional Certificate by Mozilla",
			issuer: "Mozilla",
			imageUrl: "/images/mozilla.png"
		},
		{
			id: 2,
			title: "Building Website Interactivity with JavaScript",
			issuer: "LinkedIn Learning",
			imageUrl: "/images/interactiveJS.png"
		},
		{
			id: 3,
			title: "Become a Blockchain Developer",
			issuer: "LinkedIn Learning",
			imageUrl: "/images/blockchain.png"
		},
		{
			id: 4,
			title: "Career Essentials in GitHub Professional Certificate",
			issuer: "Github",
			imageUrl: "/images/github.png"
		},
		{
			id: 5,
			title: "TypeScript for JavaScript Developers",
			issuer: "LinkedIn Learning",
			imageUrl: "/images/ts.png"
		},
		{
			id: 6,
			title: "Career Essentials in Generative AI",
			issuer: "Microsoft",
			imageUrl: "/images/mm.jpeg"
		}
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const carouselRef = useRef(null);
	const intervalRef = useRef(null);

	// Auto-scroll effect with smooth transitions
	useEffect(() => {
		const startAutoScroll = () => {
			intervalRef.current = setInterval(() => {
				setCurrentIndex(prevIndex =>
					(prevIndex + 1) % myCertificates.length
				);
			}, 1500);
		};

		if (!isHovered) {
			startAutoScroll();
		}

		return () => {
			clearInterval(intervalRef.current);
		};
	}, [myCertificates.length, isHovered]);

	// Enhanced scroll animation
	useEffect(() => {
		if (carouselRef.current) {
			const certificateWidth = 370; // 350px width + 20px gap
			const scrollPosition = currentIndex * certificateWidth;

			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth'
			});
		}
	}, [currentIndex]);

	const handleMouseEnter = (index) => {
		setIsHovered(true);
		setCurrentIndex(index);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleIndicatorClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<>
			<style>
				{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes ripple {
            to {
              width: 20px;
              height: 20px;
              opacity: 0;
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #020618 0%, #040C30 50%, #0B1946 60%, #040D35 90%, #4facfe 100%);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }
          
          .fade-in-down {
            animation: fadeInDown 1s ease-out;
          }
          
          .shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s ease;
            z-index: 1;
          }
          
          .shimmer-active::before {
            left: 100%;
          }
          
          .ripple-active {
            animation: ripple 0.6s ease-out;
          }
        `}
			</style>

			<div id='certifications' className="w-full max-w-full mx-auto p-8 text-center gradient-bg min-h-screen">
				<h2  className="mt-20 mb-20 text-white text-5xl font-bold fade-in-down" 
				    style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
					My Certifications
				</h2>

				<div className="z-[1005] relative overflow-hidden rounded-3xl py-8 backdrop-blur-lg border border-white border-opacity-20"
				     style={{background: 'rgba(255, 255, 255, 0.1)'}}>
					<div
						className="flex overflow-x-hidden gap-8 px-8 cursor-grab select-none transition-all duration-300"
						style={{scrollBehavior: 'smooth'}}
						ref={carouselRef}
						onMouseLeave={handleMouseLeave}
					>
						{myCertificates.map((cert, index) => {
							const isActive = index === currentIndex;

							return (
								<div
									key={cert.id}
									className={`flex-shrink-0 w-350 bg-white rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-400 ${
										isActive 
											? 'transform scale-100 -translate-y-2.5 opacity-100 z-10 shadow-3xl' 
											: 'transform scale-95 opacity-70'
									} ${isActive ? 'shimmer shimmer-active' : 'shimmer'}`}
									style={{
										width: '350px',
										boxShadow: isActive 
											? '0 20px 40px rgba(0, 0, 0, 0.3)' 
											: '0 10px 30px rgba(0, 0, 0, 0.2)',
										transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
									}}
									onMouseEnter={() => handleMouseEnter(index)}
								>
									<div className="h-60 overflow-hidden rounded-t-3xl relative z-30" 
									     style={{backgroundColor: '#fff'}}>
										<img
											src={cert.imageUrl}
											alt={cert.title}
											className={`w-full h-full object-contain transition-all duration-600 z-30 ${
												isActive 
													? 'transform scale-110 brightness-100' 
													: 'brightness-90'
											}`}
											style={{
												transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
												filter: isActive ? 'brightness(1)' : 'brightness(0.9)'
											}}
										/>
										<div 
											className={`absolute bottom-0 left-0 right-0 h-1/2 transition-opacity duration-300 ${
												isActive ? 'opacity-100' : 'opacity-0'
											}`}
											style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.3))'}}
										/>
									</div>

									<div className="p-6 text-left relative bg-white">
										<h3 className={`m-0 mb-2 text-xl font-bold transition-colors duration-300 ${
											isActive ? 'text-[#010517]' : 'text-gray-800'
										}`}>
											{cert.title}
										</h3>
										<p className={`m-0 mb-2 font-medium transition-all duration-300 ${
											isActive 
												? 'text-blue-600 transform translate-x-1' 
												: 'text-gray-500'
										}`}>
											{cert.issuer}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex justify-center gap-3 mt-8">
					{myCertificates.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full border-2 border-white p-0 relative overflow-hidden transition-all duration-300 ${
								index === currentIndex
									? 'bg-white transform scale-125 shadow-lg'
									: 'bg-white bg-opacity-30'
							}`}
							style={{
								boxShadow: index === currentIndex ? '0 0 15px rgba(255, 255, 255, 0.8)' : 'none',
								transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
							}}
							onClick={() => handleIndicatorClick(index)}
							aria-label={`Go to certificate ${index + 1}`}
						>
							{index === currentIndex && (
								<div 
									className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 ripple-active"
									style={{background: 'rgba(255, 255, 255, 0.6)'}}
								/>
							)}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default Certificates;