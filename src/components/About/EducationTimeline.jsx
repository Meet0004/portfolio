import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const milestones = [
  {
    icon: GraduationCap,
    year: '2022 — 2025',
    title: "Bachelor's Degree",
    place: 'Kuvempu University',
    tags: ['Comp Applications', 'CGPA: 8.72'],
  },
  {
    icon: BookOpen,
    year: '2020 — 2022',
    title: 'PUC (12th)',
    place: 'PES University',
    tags: ['ABES', 'Percentage: 92'],
  },
  {
    icon: Award,
    year: '2019 — 2020',
    title: '10th Grade',
    place: 'Anand Sai High School',
    tags: ['SSLC', 'Percentage: 88'],
  },
];

const EducationTimeline = () => (
  <section id="about-education" className="about-education">
    <div className="about-section-heading">
      <span className="about-section-kicker">THE FOUNDATION</span>
      <h2>Education <span>&amp; growth</span></h2>
      <p>A few milestones that shaped the way I think and build.</p>
    </div>

    <ol className="milestones">
      {milestones.map(({ icon: Icon, year, title, place, tags }, index) => (
        <li className="milestone" key={title}>
          <span className="milestone-node" aria-hidden="true">
            <Icon size={20} />
          </span>

          <div className="milestone-body">
            <div className="milestone-meta">
              <span className="milestone-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="milestone-year">{year}</span>
            </div>

            <h3 className="milestone-title">{title}</h3>
            <p className="milestone-place">{place}</p>

            <ul className="milestone-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default EducationTimeline;
