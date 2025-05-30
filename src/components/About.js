import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

const About = () => {
  const skills = [
    'Java',
    'Python',
    'C++',
    'JavaScript',
    'React',
    'HTML & CSS',
    'SQL',
    'MATLAB',
    'AutoCAD',
    'Data Structures',
    'Algorithms',
    'Power Apps'
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title mb-12">
          <span className="text-secondary-light dark:text-secondary-dark">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-textSecondary-light dark:text-textSecondary-dark">
            <p>
              Hello! I'm Caleb, a Computer Science and Engineering student at the University of Toledo,
              where I'm part of the Jesup Scott Honors program maintaining a 3.5 GPA. My journey in
              technology is driven by a passion for creating innovative solutions that make a real impact.
            </p>

            <p>
              Previously, I was working as a Module Engineering Intern at First Solar, where I had the
              opportunity to implement tablet-based checklists using Power Apps and develop JMP scripts
              for real-time tracking. I also automated Excel yield tracking with SQL integration,
              significantly reducing manual errors.
            </p>

            <p>
              When I'm not coding, I'm actively involved in campus organizations like RocketHacks,
              where I serve as President, and participate in professional organizations like ACM
              and IEEE.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center space-x-2">
                  <span className="text-secondary-light dark:text-secondary-dark">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group p-1">
            <div className="relative rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-[1.10]">
              <ImageWithFallback
                src="/images/profile.jpg"
                alt="Caleb Monteiro"
                className="w-full h-full object-cover transition-all duration-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 