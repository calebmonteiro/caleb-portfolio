import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', section: 'about', number: '01' },
    { name: 'Experience', section: 'experience', number: '02' },
    { name: 'Projects', section: 'projects', number: '03' },
    { name: 'Contact', section: 'contact', number: '04' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-md bg-primary-light/90 dark:bg-primary-dark/90 shadow-lg' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="text-2xl font-mono text-secondary-light dark:text-secondary-dark hover:text-secondary-light/80 dark:hover:text-secondary-dark/80 transition-colors cursor-pointer"
          >
            CM
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
                className="nav-link group cursor-pointer"
              >
                <span className="font-mono text-sm text-secondary-light dark:text-secondary-dark">
                  {item.number}.
                </span>
                <span className="ml-1 hover:text-secondary-light dark:hover:text-secondary-dark transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-secondary-dark" />
              ) : (
                <HiMoon className="w-5 h-5 text-secondary-light" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-textPrimary-light dark:bg-textPrimary-dark mb-1.5" />
            <div className="w-6 h-0.5 bg-textPrimary-light dark:bg-textPrimary-dark mb-1.5" />
            <div className="w-6 h-0.5 bg-textPrimary-light dark:bg-textPrimary-dark" />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                className="block py-2 text-center nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-mono text-sm text-secondary-light dark:text-secondary-dark">
                  {item.number}.
                </span>
                <span className="ml-1 hover:text-secondary-light dark:hover:text-secondary-dark transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="w-full py-2 text-center hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="w-5 h-5 text-secondary-dark mx-auto" />
              ) : (
                <HiMoon className="w-5 h-5 text-secondary-light mx-auto" />
              )}
            </button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar; 