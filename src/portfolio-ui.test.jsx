// Runtime validation coverage for key portfolio screens.
import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import ContactForm from './components/Contact/ContactForm';
import ContactDetails from './components/Contact/MyThreeDetails';
import AboutHero from './components/About/AboutHero';
import EducationTimeline from './components/About/EducationTimeline';
import EditorWindow from './components/Home/EditorWindow';
import Experience from './components/Home/Experience';
import MyData from './components/Home/MyData';
import MobilePortfolioShowcase from './components/Project/MobilePortfolioShowcase';
import PortfolioHeader from './components/Project/PortfolioHeader';
import PortfolioShowcase from './components/Project/PortfolioShowcase';
import PersonalInfo from './components/About/PersonalInfo';
import Skills from './pages/Skills';

describe('portfolio screens', () => {
  it('renders education as a three-item milestone timeline', () => {
    const markup = renderToStaticMarkup(<EducationTimeline />);

    expect([...markup.matchAll(/class="milestone"/g)]).toHaveLength(3);
    expect(markup).toContain('2022 — 2025');
    expect(markup).toContain('CGPA: 8.72');
    expect(markup).toContain('Anand Sai High School');
  });

  it('renders the hero without the removed tech badges or location line', () => {
    const markup = renderToStaticMarkup(<MyData />);

    expect(markup).toContain('Hi, I’m');
    expect(markup).toContain('Meet Soni.');
    expect(markup).not.toContain('FULL-STACK DEVELOPER');
    expect(markup).not.toContain('TypeScript</span>');
  });

  it('keeps the opportunity note removed and restores the location as the first about fact', () => {
    const markup = renderToStaticMarkup(
      <>
        <AboutHero />
        <PersonalInfo />
      </>,
    );

    expect(markup).not.toContain('Open to meaningful opportunities');
    expect(markup).toContain('Bengaluru, Karnataka');
    expect(markup.indexOf('Location')).toBeLessThan(markup.indexOf('Born'));
  });

  it('shows database proficiency levels and SVG logos for tools', () => {
    const markup = renderToStaticMarkup(<Skills />);

    expect(markup).toContain('Redis');
    expect(markup).toContain('PostgreSQL');
    expect(markup).toContain('Beginner');
    expect(markup).toContain('Socket.io');
    expect(markup).toContain('MongoDB');
    expect(markup).toContain('<svg');
  });

  it('highlights built in the projects heading without the old eyebrow or tagline', () => {
    const markup = renderToStaticMarkup(<PortfolioHeader />);

    expect(markup).toContain('A few things I’ve <span>built</span>.');
    expect(markup).not.toContain('SELECTED WORK');
    expect(markup).not.toContain('Projects shaped by curiosity');
  });

  it('renders an editable 3D showcase placeholder instead of the selected-work card', () => {
    const markup = renderToStaticMarkup(<EditorWindow />);

    expect(markup).toContain('3D SHOWCASE');
    expect(markup).toContain('Model in progress');
    expect(markup).not.toContain('Soniverse');
    expect(markup).not.toContain('SELECTED WORK');
  });

  it('uses working project images and replaces AtmosView with the portfolio', async () => {
    const markup = renderToStaticMarkup(<PortfolioShowcase />);
    const mobileMarkup = renderToStaticMarkup(<MobilePortfolioShowcase />);
    const mobileSource = await import('./components/Project/MobilePortfolioShowcase.jsx?raw');
    const sources = [
      ...[...markup.matchAll(/src="([^"]+)"/g)].map(([, src]) => src),
      ...[...mobileSource.default.matchAll(/image:\s*"([^"]+)"/g)].map(([, src]) => src),
      ...[...mobileSource.default.matchAll(/from ['"]\.\.\/\.\.\/assets\/([^'"]+)['"]/g)]
        .map(([, filename]) => `/src/assets/${filename}`),
    ];

    expect(markup).toContain('Project 1 of 5');
    expect(mobileSource.default).toContain('image: collaborativeCodeEditorImage');
    expect(mobileSource.default).toContain('image: oneboxImage');
    expect(markup).toContain('Personal Portfolio');
    expect(markup).not.toContain('AtmosView');
    expect(mobileSource.default).toContain('title: "Personal Portfolio"');
    expect(mobileSource.default).not.toContain('AtmosView');
    expect(sources.length).toBeGreaterThanOrEqual(5);
    for (const src of sources) {
      const exists = src.startsWith('/src/assets/')
        ? existsSync(new URL(`./assets/${src.slice('/src/assets/'.length)}`, import.meta.url))
        : existsSync(new URL(`../public${src}`, import.meta.url));
      expect(exists, src).toBe(true);
    }

    expect(mobileMarkup).toContain('1 / 5');
    expect(mobileMarkup).not.toContain('Encryptify');
    expect(mobileMarkup).not.toContain('Currency Converter');
    expect(mobileMarkup).not.toContain('Random Password Generator');
  });

  it('renders the contact form fields required by the EmailJS template', () => {
    const markup = renderToStaticMarkup(<ContactForm />);

    expect(markup).toContain('name="name"');
    expect(markup).toContain('name="email"');
    expect(markup).toContain('name="message"');
    expect(markup).toContain('Send message');
  });

  it('swaps the experience heading and restores the Cognizant timeline marker', () => {
    const markup = renderToStaticMarkup(<Experience />);

    expect(markup).toContain('MAKING SYSTEMS WORK BETTER');
    expect(markup).toContain('Professional');
    expect(markup).toContain('Experience.');
    expect(markup).toContain('experience-card-rail');
    expect(markup).toContain('experience-company-mark">C');
    expect(markup).toContain('experience-rail-line');
    expect(markup).not.toContain('experience-count');
    expect(markup).toContain('Resolving production issues');
  });

  it('keeps social profiles out of the contact details panel', () => {
    const markup = renderToStaticMarkup(<ContactDetails />);

    expect(markup).toContain('meetgssoni@gmail.com');
    expect(markup).toContain('+91 8999999999');
    expect(markup).not.toContain('LinkedIn');
    expect(markup).not.toContain('LeetCode');
    expect(markup).not.toContain('Instagram');
  });
});
