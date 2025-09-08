import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, Project } from '../../data/portfolio';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-electric-blue to-neon-cyan text-space-navy shadow-neon'
                    : 'glass-morphism text-white hover:shadow-neon'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            key={activeFilter}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  layout
                  className="group"
                >
                  <motion.div
                    className="glass-morphism rounded-lg overflow-hidden hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-50">💻</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-space-navy/80 to-transparent"></div>
                      
                      {/* Overlay on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-electric-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <span className="text-white">🌐</span>
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <span className="text-white">🐙</span>
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 gradient-text">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 text-electric-blue rounded-lg hover:from-electric-blue/30 hover:to-neon-cyan/30 transition-all duration-300 text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn More
                        </motion.button>
                        
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-4 glass-morphism rounded-lg hover:shadow-neon transition-all duration-300 text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/dhairyap04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-morphism rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold gradient-text">
                    {selectedProject.title}
                  </h3>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="h-48 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-50">💻</div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 gradient-text">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
