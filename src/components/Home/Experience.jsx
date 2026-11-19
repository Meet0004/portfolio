import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="experience-inner">
      <div className="experience-heading">
        <div>
          <span className="experience-eyebrow"><BriefcaseBusiness size={15} /> MAKING SYSTEMS WORK BETTER</span>
          <h2>Professional <span>Experience.</span></h2>
        </div>
      </div>

      <article className="experience-card">
        <div className="experience-card-rail" aria-hidden="true">
          <span className="experience-company-mark">C</span>
          <span className="experience-rail-line" />
        </div>
        <div className="experience-card-content">
          <div className="experience-role-header">
            <div>
              <span className="experience-role-label">ANALYST TRAINEE</span>
              <h3>Cognizant Technology Solutions</h3>
              <p className="experience-location">Bengaluru</p>
            </div>
            <span className="experience-dates">APR 2026 — PRESENT</span>
          </div>
          <div className="experience-impact-grid">
            <div className="experience-impact">
              <span className="experience-impact-number">15%</span>
              <span className="experience-impact-caption">lower API latency</span>
            </div>
            <div className="experience-impact">
              <span className="experience-impact-number">8+</span>
              <span className="experience-impact-caption">defects documented</span>
            </div>
            <p className="experience-summary">
              Resolving production issues across Node.js and Express services,
              with a focus on root-cause analysis and faster, safer releases.
            </p>
          </div>
          <ul className="experience-highlights">
            <li><CheckCircle2 size={17} /><span>Traced production issues through logs and MySQL query analysis; improved slow queries and APIs using indexing and caching, reducing latency by 15%.</span></li>
            <li><CheckCircle2 size={17} /><span>Identified and logged 8+ defects in Jira with clear reproduction steps, logs, and payloads to help developers resolve issues faster.</span></li>
            <li><CheckCircle2 size={17} /><span>Partnered with developers to confirm root causes and retest fixes across Dev, QA, and staging; used Postman for API checks and Git for change tracking.</span></li>
          </ul>
          <div className="experience-tech-row">
            <span>Node.js</span><span>Express.js</span><span>MySQL</span><span>Jira</span><span>Postman</span><span>Git</span>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Experience;
