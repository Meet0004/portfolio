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
			title: "Career Essentials in Generative AI",
			issuer: "Microsoft",
			imageUrl: "/images/mm.jpeg"
		},
		{
			id: 6,
			title: "TypeScript for JavaScript Developers",
			issuer: "LinkedIn Learning",
			imageUrl: "/images/ts.png"
		},
		{
			id: 7,
			title: "FOSS Hackathon 2025",
			issuer: "FOSS United",
			imageUrl: "/images/foss.png"
		},
		{
			id: 8,
			title: "Felicity Hackathon 2025",
			issuer: "IIIT Hyderabad",
			imageUrl: "/images/felicity.png"
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

	// Enhanced scroll animation with proper centering
	useEffect(() => {
		if (carouselRef.current) {
			const container = carouselRef.current;
			const containerWidth = container.clientWidth;
			
			// Responsive certificate width calculation
			const isMobile = window.innerWidth < 768;
			const isSmallMobile = window.innerWidth < 480;
			const certificateWidth = isSmallMobile ? 300 : isMobile ? 320 : 340;
			const gap = isMobile ? 16 : 16; // 1rem = 16px
			
			// Calculate the scroll position to center the current card
			const totalCardWidth = certificateWidth + gap;
			const centerOffset = (containerWidth - certificateWidth) / 2;
			const scrollPosition = (currentIndex * totalCardWidth) - centerOffset;

			container.scrollTo({
				left: Math.max(0, scrollPosition),
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

          /* Custom scrollbar styling */
          .carousel-container::-webkit-scrollbar {
            display: none;
          }
          
          .carousel-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Mobile responsive styles */
          @media (max-width: 767px) {
            .mobile-cert-card {
              width: 320px !important;
            }
            
            .mobile-cert-height {
              height: 220px !important;
            }
            
            .mobile-title {
              font-size: 1rem !important;
              line-height: 1.3 !important;
            }
            
            .mobile-padding {
              padding: 1rem !important;
            }
            
            .mobile-gap {
              gap: 1rem !important;
            }
            
            .mobile-carousel-padding {
              padding: 0 2rem !important;
            }
            
            .mobile-image-scale {
              transform: scale(0.9) !important;
            }
            
            .mobile-image-scale.active {
              transform: scale(0.95) !important;
            }
          }

          @media (max-width: 480px) {
            .mobile-cert-card {
              width: 300px !important;
            }
            
            .mobile-cert-height {
              height: 200px !important;
            }
            
            .mobile-title {
              font-size: 0.9rem !important;
            }
            
            .mobile-padding {
              padding: 0.75rem !important;
            }
            
            .mobile-carousel-padding {
              padding: 0 1.5rem !important;
            }
            
            .mobile-image-scale {
              transform: scale(0.85) !important;
            }
            
            .mobile-image-scale.active {
              transform: scale(0.9) !important;
            }
          }
        `}
			</style>

			<div id='certifications' className="h-fit  w-full max-w-full mx-auto p-4 md:p-8 text-center" style={{
    backgroundImage: `linear-gradient(to bottom right, #010517, #010517, #0B1945, #010517)`
  }}>
				<h2 className="mt-15 md:mt-10 mb-10 md:mb-10  font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent  text-4xl md:text-6xl px-0">
					Certifications Achieved
				</h2>

				<div className="z-[1005] relative overflow-hidden rounded-2xl md:rounded-3xl py-4 md:py-8 backdrop-blur-lg border border-white border-opacity-20 mx-2 md:mx-0"
				     style={{background: 'rgba(255, 255, 255, 0.1)'}}>
					<div
						className="carousel-container flex overflow-x-auto mobile-gap gap-4 md:gap-4 mobile-carousel-padding px-8 md:px-16 cursor-grab select-none transition-all duration-300"
						style={{scrollBehavior: 'smooth', scrollSnapType: 'x mandatory'}}
						ref={carouselRef}
						onMouseLeave={handleMouseLeave}
					>
						{myCertificates.map((cert, index) => {
							const isActive = index === currentIndex;

							return (
								<div
									key={cert.id}
									className={`flex-shrink-0 mobile-cert-card bg-white rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-400 ${
										isActive 
											? 'transform scale-105 -translate-y-1 md:-translate-y-2.5 opacity-100 z-10 shadow-3xl' 
											: 'transform scale-95 opacity-70'
									} ${isActive ? 'shimmer shimmer-active' : 'shimmer'}`}
									style={{
										width: window.innerWidth < 480 ? '300px' : window.innerWidth < 768 ? '320px' : '340px',
										scrollSnapAlign: 'center',
										boxShadow: isActive 
											? '0 15px 30px rgba(0, 0, 0, 0.3)' 
											: '0 8px 20px rgba(0, 0, 0, 0.2)',
										transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
									}}
									onMouseEnter={() => handleMouseEnter(index)}
									onTouchStart={() => handleMouseEnter(index)}
								>
									<div className="mobile-cert-height h-48 md:h-60 overflow-hidden rounded-t-2xl md:rounded-t-3xl relative z-30 flex items-center justify-center" 
									     style={{backgroundColor: '#fff'}}>
										<img
											src={cert.imageUrl}
											alt={cert.title}
											className={`max-w-full max-h-full object-contain transition-all duration-600 z-30 mobile-image-scale ${
												isActive 
													? 'transform scale-105 md:scale-110 brightness-100 active' 
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

									<div className="mobile-padding p-4 md:p-6 text-left relative bg-white">
										<h3 className={`mobile-title m-0 mb-2 text-lg md:text-xl font-bold transition-colors duration-300 leading-tight ${
											isActive ? 'text-[#010517]' : 'text-gray-800'
										}`}>
											{cert.title}
										</h3>
										<p className={`m-0 mb-2 text-sm md:text-base font-medium transition-all duration-300 ${
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

				<div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
					{myCertificates.map((_, index) => (
						<button
							key={index}
							className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-white p-0 relative overflow-hidden transition-all duration-300 ${
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
