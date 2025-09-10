import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import emailjs from 'emailjs-com';
import { contactInfo, socialLinks } from '../../data/portfolio';
import Icon from '../ui/Icon';
import gitHubIcon from '../../assets/images/new_github_logo.png';
import linkedinIcon from '../../assets/images/new_linkedin_logo.png';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Note: You'll need to set up EmailJS with your own service ID, template ID, and public key
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Icon icon='📧' size={36} />,
      title: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
    },
    // {
    //   icon: <Icon icon='📍' size={36} />,
    //   title: 'Location',
    //   value: contactInfo.location,
    //   link: null,
    // },
    {
      icon: <Icon icon={linkedinIcon} size={36} />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: contactInfo.linkedin,
    },
    {
      icon: <Icon icon={gitHubIcon} size={36} />,
      title: 'GitHub',
      value: 'View my code',
      link: contactInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-morphism rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Send Me a Message!
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-space-navy border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ❌ Something went wrong. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div className="glass-morphism rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Let's Connect!
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl">{method.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{method.title}</h4>
                        {method.link ? (
                          <a
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-electric-blue hover:text-neon-cyan transition-colors duration-300"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{method.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="glass-morphism rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Follow me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon 
                        icon={social.icon}
                        className="text-2xl group-hover:scale-110 transition-transform duration-300"
                        size={32}
                      />
                      <span className="font-medium text-white group-hover:text-electric-blue transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div> */}

              {/* Availability Status */}
              <motion.div
                className="glass-morphism rounded-lg p-8 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-4 h-4 bg-green-700 rounded-full mx-auto mb-3 animate-pulse"></div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Available for opportunities
                </h4>
                <p className="text-gray-400 text-base">
                  I'm always interested in new opportunities, whether it's exciting projects to work on together, hackathons, or new job roles. 
                  Feel free to reach out if you'd like to collaborate, have a coffee chat, or even just say hi!
                  Let's connect and create something amazing together!!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
