import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://github.com/Meet0004',
    label: 'GitHub',
    icon: <FaGithub className="text-xl" />,
  },
  {
    href: 'https://linkedin.com/in/meet-soni-tenacious',
    label: 'LinkedIn',
    icon: <FaLinkedin className="text-xl" />,
  },
  // {
  //   href: 'https://twitter.com/yourusername',
  //   label: 'Twitter',
  //   icon: <FaTwitter className="text-xl" />,
  // },
  {
    href: 'https://discord.gg/QqB8srq',
    label: 'Discord',
    icon: <FaDiscord className="text-xl" />,
  },
];

const SocialLinks = () => (
  <nav className="flex flex-wrap gap-3" aria-label="Social links">
    {socialLinks.map(({ href, label, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition social-link"
      >
        {icon}
      </a>
    ))}
  </nav>
);

export default SocialLinks;
