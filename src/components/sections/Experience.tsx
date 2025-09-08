import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'project':
        return '🚀';
      default:
        return '📋';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-electric-blue to-neon-cyan';
      case 'education':
        return 'from-vibrant-purple to-hot-pink';
      case 'project':
        return 'from-neon-cyan to-electric-blue';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-fluid-4xl font-bold mb-4">
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto">
              My journey in software development and continuous learning
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-cyan to-vibrant-purple"
              variants={timelineVariants}
              style={{ originY: 0 }}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  variants={index % 2 === 0 ? itemVariants : rightItemVariants}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center text-2xl shadow-neon`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getTypeIcon(item.type)}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 mx-8 ${
                      index % 2 === 0 ? 'ml-8' : 'mr-8'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-morphism rounded-lg p-6 hover:shadow-neon transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold gradient-text mb-1">
                            {item.title}
                          </h3>
                          <h4 className="text-lg font-medium text-electric-blue mb-1">
                            {item.company}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {item.location}
                          </p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 text-electric-blue rounded-full text-sm font-medium">
                            {item.startDate} - {item.endDate}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {item.description.map((desc, descIndex) => (
                            <li key={descIndex} className="flex items-start">
                              <span className="text-electric-blue mr-2 mt-1">•</span>
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-2">
                          Technologies & Skills:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="glass-morphism rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Ready to Start My Next Chapter
              </h3>
              <p className="text-gray-400 mb-6">
                I'm actively seeking internship opportunities where I can contribute to meaningful projects 
                and continue growing as a software developer. Let's connect and discuss how I can add value to your team.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
