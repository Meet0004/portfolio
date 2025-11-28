import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const educationData = [
    {
        icon: <GraduationCap className="w-6 h-6" />,
        level: "Bachelor's Degree",
        institution: "Kuvempu University",
        course: "Comp Applications",
        year: "2022 - 2025",
        score: 8.72,
        scoreType: "CGPA",
        status: "Completed"
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        level: "PUC (12th)",
        institution: "PES University",
        course: "ABES",
        year: "2020 - 2022",
        score: 92,
        scoreType: "Percentage",
        status: "Completed"
    },
    {
        icon: <Award className="w-6 h-6" />,
        level: "10th Grade",
        institution: "Anand Sai High School",
        course: "SSLC",
        year: "2019 - 2020",
        score: 88,
        scoreType: "Percentage",
        status: "Completed"
    }
];

const EducationTimeline = () => {
    return (
        <div className=" mb-8">
            <h2 className=" p-1 text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">Education Journey</h2>

            {/* Desktop Layout - Horizontal */}
            <div className="hidden md:flex items-center justify-center gap-6">
                {educationData.map((education, index) => (
                    <div key={index} className="flex items-center">
                        {/* Education Box */}
                        <div className="group relative">
                            <div className="z-[1002] bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 w-80 overflow-hidden">

                                {/* Icon and Level */}
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                                        {education.icon}
                                    </div>
                                    <div className="text-white font-bold text-lg">{education.level}</div>
                                </div>

                                {/* Institution */}
                                <h3 className="text-gray-200 font-semibold mb-2">{education.institution}</h3>

                                {/* Course */}
                                <div className="flex justify-between items-center text-gray-400 text-sm mb-3">
                                    <p>{education.course}</p>
                                    {education.score && (
                                        <span className="text-right">
                                            {education.scoreType}: {education.score}
                                        </span>
                                    )}
                                </div>

                                {/* Year and Status */}
                                <div className="flex justify-between items-center">
                                    <span className="text-purple-300 text-sm font-medium">{education.year}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${education.status === 'Pursuing'
                                            ? 'bg-blue-500/20 text-blue-300'
                                            : 'bg-green-500/20 text-green-300'
                                        }`}>
                                        {education.status}
                                    </span>
                                </div>

                                {/* Sliding Bar inside the box */}
                                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] group-hover:w-full transition-all duration-300 rounded-full" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Mobile Layout - Vertical */}
            <div className="md:hidden flex flex-col items-center gap-6">
                {educationData.map((education, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Education Box */}
                        <div className="group relative w-[90vw]">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">

                                {/* Icon and Level */}
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                                        {education.icon}
                                    </div>
                                    <span className="text-white font-bold text-lg">{education.level}</span>
                                </div>

                                {/* Institution */}
                                <h3 className="text-gray-200 font-semibold mb-2">{education.institution}</h3>

                                {/* Course */}
                                <p className="text-gray-400 text-sm mb-3">
                                    {education.course}
                                    <span className="float-end">{education.scoreType}: {education.score}</span>
                                </p>

                                {/* Year and Status */}
                                <div className="flex justify-between items-center">
                                    <span className="text-purple-300 text-sm font-medium">{education.year}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${education.status === 'Pursuing'
                                            ? 'bg-blue-500/20 text-blue-300'
                                            : 'bg-green-500/20 text-green-300'
                                        }`}>
                                        {education.status}
                                    </span>
                                </div>

                                {/* Sliding Bar */}
                                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] group-hover:w-full transition-all duration-300 rounded-full" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;
