import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="section-title">
          <span className="text-secondary">04.</span> What's Next?
        </h2>

        <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
        
        <p className="text-textSecondary mb-8">
          I'm currently looking for internship opportunities for Fall 2025. Whether you have
          a question or just want to say hi, I'll get back to you!
        </p>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="mailto:cmontei@rockets.utoledo.edu"
            className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors"
          >
            <FiMail size={20} />
            <span>Email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/calebmonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors"
          >
            <FiLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/calebmonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors"
          >
            <FiGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="mailto:cmontei@rockets.utoledo.edu"
            className="btn-primary"
          >
            Say Hello
          </a>
        </div>

        <div className="mt-16 text-textSecondary text-sm">  
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 