import React from 'react';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

const MyData = () => {
  return (
    <div className="hero-copy">
      <h1 className="hero-title">
        Hi, I’m <span>Meet Soni.</span>
      </h1>

      <p className="hero-overview">
        I love building web applications with TypeScript and Node.js, managing
        databases, and deploying applications. With 6+ months of professional
        experience at a MNC, I’m interested in secure, scalable systems,
        application performance, and how software works at scale. Currently
        strengthening my problem-solving skills through competitive programming.
      </p>

      <div className="hero-actions">
        <a className="hero-primary-action" href="#experience">
          <BriefcaseBusiness size={17} />
          Explore my experience
          <ArrowUpRight size={16} />
        </a>
        <a className="hero-secondary-action" href="#projects">
          View selected work <ArrowDown size={16} />
        </a>
      </div>

    </div>
  );
};

export default MyData;
