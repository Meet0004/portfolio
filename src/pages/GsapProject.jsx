import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, ExternalLink, Twitter } from 'lucide-react';

const GsapProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Join",
      description: "Group management tool to optimize workflows",
      image: "/api/placeholder/280/200",
      bgColor: "bg-slate-600",
      tags: ["JavaScript", "Backend", "HTML", "CSS"],
      hasLiveView: true,
      hasCode: true,
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Pokedex",
      description: "A collection and description of all 898 Pokémon",
      image: "/api/placeholder/280/200",
      bgColor: "bg-gray-100",
      tags: ["JavaScript", "API", "HTML", "CSS"],
      hasLiveView: true,
      hasCode: true,
      textColor: "text-gray-800"
    },
    {
      id: 3,
      title: "Sharkie",
      description: "JavaScript based jump-and-run game",
      image: "/api/placeholder/280/200",
      bgColor: "bg-blue-500",
      tags: ["JavaScript", "HTML", "CSS"],
      hasLiveView: true,
      hasCode: true,
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Portfolio 2022",
      description: "My portfolio website, you're probably looking at right now.",
      image: "/api/placeholder/280/200",
      bgColor: "bg-amber-100",
      tags: ["WebGL", "JavaScript", "HTML", "CSS"],
      hasLiveView: false,
      hasCode: false,
      hasStayUpToDate: true,
      textColor: "text-gray-800"
    },
    {
      id: 5,
      title: "Jelly Battle",
      description: "Play as Jelly and fight against three other Jellys in a multiplayer free-for-all game",
      image: "/api/placeholder/280/200",
      bgColor: "bg-gray-800",
      tags: ["WebGL", "JavaScript", "Socket.io", "HTML", "CSS"],
      hasLiveView: false,
      hasCode: false,
      hasStayUpToDate: true,
      textColor: "text-white"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, projects.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, projects.length - 2)) % Math.max(1, projects.length - 2));
  };

  const getTagColor = (tag) => {
    const colors = {
      JavaScript: "bg-yellow-400 text-black",
      Backend: "bg-purple-500 text-white",
      HTML: "bg-orange-500 text-white",
      CSS: "bg-blue-500 text-white",
      API: "bg-green-500 text-white",
      WebGL: "bg-indigo-500 text-white",
      "Socket.io": "bg-gray-700 text-white"
    };
    return colors[tag] || "bg-gray-400 text-white";
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Project Cards Container */}
        <div className="flex justify-center gap-6 mb-8 overflow-hidden">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ease-in-out transform w-72 ${
                index === 1 
                  ? 'scale-110 shadow-2xl z-10 opacity-100' 
                  : 'scale-90 opacity-60 hover:opacity-80'
              }`}
              style={{
                transform: `scale(${index === 1 ? 1.1 : 0.9}) translateY(${index === 1 ? '-8px' : '0px'})`
              }}
            >
              {/* Project Image/Preview */}
              <div className={`h-40 ${project.bgColor} flex items-center justify-center relative`}>
                {project.title === "Join" && (
                  <div className={`text-6xl font-bold ${project.textColor} flex items-center`}>
                    <span>j</span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm ml-2">oin</span>
                  </div>
                )}
                {project.title === "Pokedex" && (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <img 
                      src="/api/placeholder/280/200" 
                      alt="Pokedex interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {project.title === "Sharkie" && (
                  <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">🦈</div>
                      <div className="text-xl font-bold">Sharkie</div>
                      <div className="bg-green-500 text-white px-4 py-2 rounded mt-2 text-sm">Play</div>
                    </div>
                  </div>
                )}
                {project.title === "Portfolio 2022" && (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💼</div>
                      <div className="text-lg font-semibold text-gray-800">Portfolio</div>
                      <div className="text-sm text-gray-600">2022</div>
                    </div>
                  </div>
                )}
                {project.title === "Jelly Battle" && (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        JELLY
                      </div>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                        BATTLE
                      </div>
                      <div className="flex justify-center mt-2 space-x-2">
                        <span className="text-blue-400">💎</span>
                        <span className="text-purple-400">⭐</span>
                        <span className="text-green-400">🔷</span>
                        <span className="text-pink-400">💠</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-xs leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.hasCode && (
                    <button className="flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-xs">
                      <Code size={14} />
                    </button>
                  )}
                  {project.hasLiveView && (
                    <button className="flex items-center gap-1 px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-xs font-medium flex-1">
                      <ExternalLink size={14} />
                      Live View
                    </button>
                  )}
                  {project.hasStayUpToDate && (
                    <button className="flex items-center gap-1 px-3 py-1 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors text-xs font-medium flex-1">
                      <Twitter size={14} />
                      Stay up to date
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={prevSlide}
            className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GsapProject;