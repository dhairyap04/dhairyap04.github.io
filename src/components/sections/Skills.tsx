import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-400',
    backend: 'from-green-500 to-emerald-400',
    tools: 'from-purple-500 to-violet-400',
    concepts: 'from-orange-500 to-yellow-400',
  };

  const categoryIcons = {
    frontend: '🎨',
    backend: '⚙️',
    tools: '🛠️',
    concepts: '🧠',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-fluid-4xl font-bold mb-4">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-fluid-lg text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Tag Cloud */}
          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                    <h3 className="text-2xl font-bold capitalize text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent ml-6"></div>
                </div>

                {/* Skills Tags */}
                <motion.div
                  className="flex flex-wrap gap-4 justify-center"
                  variants={containerVariants}
                >
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="group"
                    >
                      <motion.div
                        className={`
                          px-6 py-3 rounded-full 
                          bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}
                          text-white font-medium text-sm
                          shadow-lg hover:shadow-xl
                          transition-all duration-300
                          cursor-pointer
                          flex items-center space-x-2
                          backdrop-blur-sm
                          border border-white/20
                        `}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          y: {
                            duration: 3 + index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Skill Icon */}
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        
                        {/* Skill Name */}
                        <span className="group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <motion.div
                  key={category}
                  className="p-6 glass-morphism rounded-lg hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white capitalize">
                    {category} Development
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {categorySkills.length} technologies
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {categorySkills.slice(0, 3).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2 py-1 bg-white/10 text-xs rounded-full text-gray-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                    {categorySkills.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-xs rounded-full text-gray-400">
                        +{categorySkills.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
