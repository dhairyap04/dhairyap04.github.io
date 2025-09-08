import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { personalInfo } from '../../data/portfolio';

const Hero: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-navy via-dark-purple to-deep-blue"></div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-electric-blue/30 rotate-45"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-vibrant-purple/20 to-hot-pink/20 rounded-full"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 border-2 border-neon-cyan/40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            className="mb-6"
            variants={itemVariants}
          >
            <motion.span
              className="text-electric-blue font-fira-code text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hi, my name is
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-fluid-5xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text text-shadow-lg">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title with Typing Effect */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-fluid-3xl font-semibold text-gray-300 mb-2">
              I'm a{' '}
              <span className="gradient-text">
                {personalInfo.title}
              </span>
            </h2>
            <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <HashLink
              to="#projects"
              className="btn-primary text-lg px-8 py-4"
              smooth
            >
              View My Work
            </HashLink>
            <HashLink
              to="#contact"
              className="btn-secondary text-lg px-8 py-4"
              smooth
            >
              Get In Touch
            </HashLink>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-electric-blue/50 shadow-neon bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl sm:text-5xl font-bold gradient-text">
                {personalInfo.name.charAt(0)}
              </span>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center text-electric-blue/70"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-fira-code mb-2">Scroll Down</span>
              <motion.div
                className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-electric-blue rounded-full mt-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-navy to-transparent"></div>
    </section>
  );
};

export default Hero;
