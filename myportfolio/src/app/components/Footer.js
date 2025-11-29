

'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaCoffee } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/ParthSharma5',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/parth-sharma-aa5274247/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaEnvelope />,
      href: 'mailto:parth.scse@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Parth Sharma
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Full Stack Developer passionate about creating digital experiences that make a difference.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-3 bg-gray-700 rounded-xl text-white transition-all duration-300 transform hover:scale-110 ${link.color} backdrop-blur-sm border border-gray-600`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <motion.a
                href="mailto:parth.scse@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-cyan-400 transition-colors duration-300 group text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                parth.scse@gmail.com
              </motion.a>
              <motion.a
                href="https://github.com/ParthSharma5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-400 transition-colors duration-300 group text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                <FaGithub className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/parth-sharma-aa5274247/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-colors duration-300 group text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                <FaLinkedin className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap"
            >
              <span>© {currentYear} Parth Sharma. All rights reserved.</span>
            </motion.p>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-sm sm:text-base text-gray-400"
            >
              <span className="flex items-center gap-2">
                Made with
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="text-red-400" />
                </motion.span>
                and
                <FaCoffee className="text-yellow-400" />
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <FaCode className="text-cyan-400" />
                by Parth Sharma
              </span>
            </motion.div>
          </div>

          {/* Mobile attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center sm:hidden mt-3 pt-3 border-t border-gray-700"
          >
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              <FaCode className="text-cyan-400" />
              Crafted by Parth Sharma
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
    </footer>
  );
}