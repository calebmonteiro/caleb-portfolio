import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ImageWithFallback from './ImageWithFallback';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Course Scheduler',
      description: 'My first major project that actually solved a real problem! I was frustrated with how hard it was to plan my courses each semester, so I built this tool. It helps students visualize their degree progress and plan future semesters. The best part was when my friends started using it and giving me feedback to make it even better!',
      tech: ['Python', 'Django', 'React', 'PostgreSQL'],
      //github: 'https://github.com/yourusername/course-scheduler',
      //external: 'https://course-scheduler.demo',
      image: '/images/course-scheduler.png',
      color: 'rgba(100, 255, 218, 0.1)'
    },
    {
      title: 'AI Voice Assistant',
      description: 'This project combines my love for AI and helping others. I created a voice assistant specifically designed for students, helping with everything from homework reminders to quick research queries. What started as a fun experiment turned into something my roommates use daily!',
      tech: ['Python', 'TensorFlow', 'OpenAI API', 'Flask'],
      //github: 'https://github.com/yourusername/ai-voice-assistant',
      //external: 'https://voice-assistant.demo',
      image: '/images/voice-assistant.png',
      color: 'rgba(100, 218, 255, 0.1)'
    },
    {
      title: 'ReviewGenie',
      description: 'Born from countless hours of reading product reviews! I wanted to make it easier for people to make informed decisions. The app uses AI to analyze customer reviews and provide honest, unbiased summaries. It\'s amazing to see how it helps people save time and make better choices.',
      tech: ['React', 'Node.js', 'MongoDB', 'Natural Language Processing'],
      github: 'https://github.com/EvanZimmerman307/review-widget',
      external: 'https://devpost.com/software/reviewgenie',
      image: '/images/review-genie.png',
      color: 'rgba(218, 100, 255, 0.1)'
    },
    {
      title: 'EcoNet.ai',
      description: 'This project is really close to my heart. After my internship at First Solar, I became passionate about sustainable technology. EcoNet.ai helps small businesses track and reduce their carbon footprint. It\'s not just a project - it\'s my way of contributing to a better future!',
      tech: ['Python', 'Machine Learning', 'React', 'AWS'],
      github: 'https://github.com/t-gallup/EcoNet',
      external: 'https://devpost.com/software/econet-ai',
      image: '/images/econet-ai.png',
      color: 'rgba(255, 100, 218, 0.1)'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title mb-12">
          <span className="text-secondary-light dark:text-secondary-dark">03.</span> Things I've Built
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-tertiary-light/10 dark:bg-tertiary-dark/10 rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary-light/90 dark:to-tertiary-dark/90"
                  style={{
                    backgroundColor: hoveredProject === index ? project.color : 'rgba(10, 25, 47, 0.7)'
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="font-mono text-sm text-secondary-light dark:text-secondary-dark mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-4">
                  {project.title}
                </h3>
                <p className="text-textSecondary-light dark:text-textSecondary-dark mb-6">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="font-mono text-sm text-secondary-light dark:text-secondary-dark bg-secondary-light/10 dark:bg-secondary-dark/10 px-3 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary-light dark:text-textPrimary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary-light dark:text-textPrimary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 