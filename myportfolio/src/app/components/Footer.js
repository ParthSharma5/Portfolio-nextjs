'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 flex flex-col items-center gap-4"
      >
        {/* Text */}

        <p className="text-center text-sm sm:text-base">
          Made with <span className="text-red-400">❤️</span> by{' '}
          <span className="font-semibold text-cyan-400">Parth Sharma</span>
        </p>

        {/* Social Icons */}

        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/ParthSharma5" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/parth-sharma-aa5274247/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:parth.scse@gmail.com" className="hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
