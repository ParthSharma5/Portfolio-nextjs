"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a
              href="#home"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Parth Sharma
            </a>
          </motion.div>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group py-2"
                onClick={handleLinkClick}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:hidden"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full bg-gray-900/95 backdrop-blur-md shadow-2xl md:hidden z-50"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="space-y-2 sm:space-y-4 px-2 sm:px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <motion.a
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center
          justify-center
          text-base sm:text-lg md:text-xl
          font-medium
          text-gray-100 hover:text-white
          transition-all duration-300
          py-3 sm:py-4
          px-4
          rounded-xl
          bg-gray-800/40 hover:bg-gray-800/70
          border border-gray-700/50 hover:border-cyan-500/30
          shadow-sm hover:shadow-md
          w-full
          max-w-full
          group
          relative
          overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Background effect on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                        {/* Text with icon indicator */}
                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                          <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                          <span className="truncate">{item.name}</span>
                        </span>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
