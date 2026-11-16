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
        <section id="about-education" className="about-education">
            <div className="about-section-heading">
                <span className="about-section-kicker">THE FOUNDATION</span>
                <h2>Education <span>&amp; growth</span></h2>
                <p>A few milestones that shaped the way I think and build.</p>
            </div>
            <div className="about-education-list">
                {educationData.map((education, index) => (
                    <article key={education.level} className="about-education-card">
                        <div className="about-education-topline">
                            <span className="about-education-number">0{index + 1}</span>
                            <span className="about-education-year">{education.year}</span>
                        </div>
                        <span className="about-education-icon">{education.icon}</span>
                        <h3>{education.level}</h3>
                        <p className="about-education-institution">{education.institution}</p>
                        <div className="about-education-meta">
                            <span>{education.course}</span>
                            <span>{education.scoreType}: {education.score}</span>
                        </div>
                        <span className="about-education-status">{education.status}</span>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default EducationTimeline;
