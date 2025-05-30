import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={itemVariants}
            className="font-mono text-secondary-light dark:text-secondary-dark mb-5 text-lg"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Caleb Monteiro.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-textSecondary-light dark:text-textSecondary-dark mb-6"
          >
            Building intelligent systems for real-world impact.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-textSecondary-light dark:text-textSecondary-dark mb-12 max-w-xl"
          >
            I'm a Computer Science and Engineering student at the University of Toledo, passionate about creating 
            intelligent systems that make a difference. Currently seeking Fall 2025 internship opportunities.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark rounded hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10 transition-colors font-mono text-base"
            >
              Check out my work!
            </a>
            <a
              href="/CALEB MONTEIRO-RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-light dark:bg-secondary-dark text-primary-light dark:text-primary-dark rounded hover:bg-secondary-light/90 dark:hover:bg-secondary-dark/90 transition-colors font-mono text-base"
            >
              Resume <FiExternalLink className="text-base" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 