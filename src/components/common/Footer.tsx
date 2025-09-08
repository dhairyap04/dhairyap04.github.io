import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { socialLinks } from '../../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-space-navy via-dark-purple to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-lg flex items-center justify-center">
                  <span className="text-space-navy font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Dhairya Prajapati</span>
              </motion.div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Passionate software developer creating innovative solutions and 
                building the future of technology. Let's connect and create something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center hover:shadow-neon transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 gradient-text">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <HashLink
                      to={link.href}
                      className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center group"
                      smooth
                    >
                      <span className="w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </HashLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 gradient-text">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-electric-blue">📧</span>
                  <a
                    href="mailto:dhairyap04@example.com"
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                  >
                    dhairyap04@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-electric-blue">📍</span>
                  <span className="text-gray-400">Your City, State</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-electric-blue">💼</span>
                  <a
                    href="https://linkedin.com/in/dhairyap04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              © {currentYear} Dhairya Prajapati. All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400 text-sm">Built with</span>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">❤️</span>
                <span className="text-gray-400 text-sm">and</span>
                <span className="text-electric-blue font-semibold">React</span>
              </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-electric-blue hover:text-neon-cyan transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <motion.span
                className="text-lg"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↑
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-navy to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
