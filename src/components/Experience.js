import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import ImageWithFallback from './ImageWithFallback';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'First Solar',
      title: 'Module Engineering Intern',
      date: 'January 2025 - May 2025',
      location: 'Perrysburg, Ohio',
      companyUrl: 'https://www.firstsolar.com',
      image: '/images/firstsolar.jpg',
      points: [
        'Had an amazing opportunity to work with cutting-edge solar technology and contribute to sustainable energy solutions.',
        'Developed tablet-based checklists that made life easier for over 50 operators - it was incredible seeing how a simple tool could make such a big difference!',
        'Created real-time tracking scripts that helped reduce downtime by 20% - learned so much about automation and its real-world impact.',
        'The highlight was automating Excel tracking for 10,000+ daily modules - it was challenging but super rewarding seeing it work!'
      ]
    },
    {
      company: 'Engineering Computing',
      title: 'IT Help Desk Technician',
      date: 'August 2024 - Present',
      location: 'Toledo, Ohio',
      companyUrl: 'https://www.utoledo.edu/engineering/graduate-studies/currentstudents/academic.html',
      image: '/images/utoledo.jpg',
      points: [
        'Loved being the go-to person for tech support - there\'s something special about helping others solve their tech problems!',
        'Managed our computer labs and kept everything running smoothly - it was like having a second home on campus.',
        'My proudest achievement was upgrading 100+ computers and seeing the immediate improvement in performance. The happy faces of students using the faster machines made it all worth it!'
      ]
    },
    {
      company: 'University of Toledo',
      title: 'Orientation Leader',
      date: 'May 2024 - July 2024',
      location: 'Toledo, Ohio',
      companyUrl: 'https://www.utoledo.edu',
      image: '/images/orientation.jpg',
      points: [
        'One of my most fulfilling experiences - helping new students find their way and feel at home at UToledo.',
        'Led orientation sessions for 200+ students, sharing my own experiences and tips for success.',
        'Working with 22 amazing peers taught me so much about teamwork and leadership - we became like family!'
      ]
    },
    {
      company: 'Compass Group',
      title: 'Student Worker',
      date: 'September 2023 - May 2024',
      location: 'Toledo, Ohio',
      companyUrl: 'https://www.compass-usa.com/',
      image: '/images/dining.jpg',
      points: [
        'My first job on campus - where I learned the value of hard work and attention to detail.',
        'Loved interacting with fellow students and staff, making their dining experience better through friendly service and a clean environment.',
        'Handling transactions and gathering feedback taught me valuable lessons about customer service and continuous improvement.',
        'The experience helped me develop strong time management skills, balancing work with my engineering studies.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title mb-16">
          <span className="text-secondary-light dark:text-secondary-dark">02.</span> My Journey
        </h2>
        
        <p className="text-textSecondary-light dark:text-textSecondary-dark mb-12 max-w-2xl">
          Each role has taught me something unique and helped shape my path in tech.
        </p>

        <div className="space-y-32">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              {/* Experience Image */}
              <div className="w-full md:w-7/12">
                <div className="relative overflow-hidden rounded-lg group/image">
                  <div className="aspect-w-16 aspect-h-9 bg-tertiary-light dark:bg-tertiary-dark rounded-lg">
                    <ImageWithFallback
                      src={experience.image}
                      alt={`${experience.company} experience`}
                      className="object-cover w-full h-full transition-transform duration-500 ease-out rounded-lg transform-gpu group-hover/image:scale-110"
                    />
                    <div className="absolute inset-0 bg-secondary-light/20 dark:bg-secondary-dark/20 transition-all duration-500 ease-out group-hover/image:bg-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Experience Info */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <p className="font-mono text-sm text-secondary-light dark:text-secondary-dark mb-2">
                  Featured Experience
                </p>
                <h3 className="text-2xl font-bold mb-2">
                  {experience.title}
                </h3>
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-bold text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors mb-4"
                >
                  @ {experience.company}
                  <FiExternalLink className="text-base" />
                </a>
                <p className="font-mono text-sm text-textSecondary-light dark:text-textSecondary-dark mb-4">
                  {experience.date} | {experience.location}
                </p>
                <ul className={`space-y-4 ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}>
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start space-x-2 text-textSecondary-light dark:text-textSecondary-dark"
                    >
                      <span className="text-secondary-light dark:text-secondary-dark mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 