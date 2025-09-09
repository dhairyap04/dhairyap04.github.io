import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    { label: "Projects Completed", value: "7+", icon: "🚀" },
    { label: "Technologies Learned", value: "20+", icon: "💻" },
    { label: "Lines of Code", value: "50K+", icon: "📝" },
    { label: "Coffee Cups", value: "∞", icon: "☕" },
  ];

  const values = [
    {
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and improve my skills",
      icon: "📚",
    },
    {
      title: "Problem Solving",
      description: "Passionate about breaking down complex problems into manageable solutions",
      icon: "🧩",
    },
    {
      title: "Collaboration",
      description: "Believe in the power of teamwork and open communication",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "Constantly exploring new ways to create better user experiences",
      icon: "💡",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-fluid-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-fluid-lg text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
                
                <p className="text-fluid-base text-gray-400 leading-relaxed">
                  I'm passionate about creating innovative solutions that make a difference. 
                  With a strong foundation in computer science fundamentals and hands-on experience 
                  in modern web technologies, I'm ready to contribute to meaningful projects and 
                  grow as a software developer.
                </p>

                <p className="text-fluid-base text-gray-400 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies by working on personal projects that challenge me to learn and grow, hiking up steep trails, or enjoying a competitive game of basketball.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6 mt-12"
                variants={itemVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 glass-morphism rounded-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              {/* Animated Background */}
              <div className="relative w-full h-96 glass-morphism rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10"></div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-electric-blue/30 to-neon-cyan/30 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-16 right-12 w-12 h-12 border-2 border-vibrant-purple/50 rounded-lg"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -90, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute bottom-12 left-12 w-20 h-20 border border-hot-pink/40 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">💻</span>
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">
                      Passionate Developer
                    </h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            className="mt-20"
            variants={itemVariants}
          >
            <h3 className="text-fluid-2xl font-bold text-center mb-12">
              <span className="gradient-text">My Values</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-6 glass-morphism rounded-lg text-center hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 gradient-text">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
