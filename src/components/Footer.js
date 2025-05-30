import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/calebmonteiro'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/calebmonteiro'
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      url: 'mailto:cmontei@rockets.utoledo.edu'
    }
  ];

  return (
    <footer className="py-6 text-center text-textSecondary">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      
      <p className="text-sm">
        Designed by Caleb Monteiro
      </p>
    </footer>
  );
};

export default Footer; 