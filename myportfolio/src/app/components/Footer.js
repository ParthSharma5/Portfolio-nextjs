

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
