// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isOpen]);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Certifications", href: "#certifications" },
//     { name: "Contact", href: "#contact" },
//     {name:"Blogs",href:"https://blog-platform-ten-woad.vercel.app/"}
//   ];

//   const handleLinkClick = () => setIsOpen(false);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
//           : "bg-gray-900/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 sm:h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center"
//           >
//             <a
//               href="#home"
//               className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
//             >
//               Parth Sharma
//             </a>
//           </motion.div>

//           {/* Desktop nav */}
//           <div className="hidden md:flex space-x-6 lg:space-x-8">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group py-2"
//                 onClick={handleLinkClick}
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
//               </motion.a>
//             ))}
//           </div>

//           {/* Hamburger */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="md:hidden"
//           >
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
//               aria-label="Toggle menu"
//               aria-expanded={isOpen}
//               aria-controls="mobile-menu"
//             >
//               <div className="w-6 h-6 relative">
//                 <span
//                   className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
//                     isOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
//                   }`}
//                 ></span>
//                 <span
//                   className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
//                     isOpen ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></span>
//                 <span
//                   className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
//                     isOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-2"
//                   }`}
//                 ></span>
//               </div>
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Mobile menu with backdrop */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Backdrop – solid black, high z-index */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 z-[100] md:hidden"
//               style={{ backgroundColor: 'black' }} // inline style as fallback
//             />

//             {/* Menu panel */}
//             <motion.div
//               id="mobile-menu"
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gray-900 shadow-2xl z-[101] md:hidden"
//             >
//               <div className="flex flex-col h-full pt-20 pb-8 px-6">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-6 right-6 text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
//                   aria-label="Close menu"
//                 >
//                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>

//                 <div className="space-y-2 sm:space-y-4 px-2 sm:px-4">
//                   {navItems.map((item, index) => (
//                     <motion.div
//                       key={item.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="w-full"
//                     >
//                       <motion.a
//                         href={item.href}
//                         onClick={handleLinkClick}
//                         className="flex items-center justify-center text-base sm:text-lg md:text-xl font-medium text-gray-100 hover:text-white transition-all duration-300 py-3 sm:py-4 px-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700/50 hover:border-cyan-500/30 shadow-sm hover:shadow-md w-full max-w-full group relative overflow-hidden"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                         <span className="relative z-10 flex items-center gap-2 sm:gap-3">
//                           <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
//                           <span className="truncate">{item.name}</span>
//                         </span>
//                       </motion.a>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark"); // plain string, no type

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme"); // no type assertion
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Update theme and persist
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
    { name: "Blogs", href: "https://blog-platform-ten-woad.vercel.app/" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-gray-900/95 bg-white/95 backdrop-blur-md shadow-lg border-b dark:border-gray-800 border-gray-200"
          : "dark:bg-gray-900/90 bg-white/90 backdrop-blur-sm"
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

          {/* Desktop nav + theme toggle */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="dark:text-gray-300 text-gray-700 hover:dark:text-cyan-400 hover:text-cyan-600 transition-all duration-300 font-medium relative group py-2"
                onClick={handleLinkClick}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-cyan-400 bg-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            {/* Theme toggle button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Hamburger + theme toggle (mobile) */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile theme toggle (visible only when menu closed) */}
            {!isOpen && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
            )}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="dark:text-gray-300 text-gray-700 hover:dark:text-cyan-400 hover:text-cyan-600 focus:outline-none transition-colors duration-300 p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 dark:bg-current bg-gray-700 transform transition-all duration-300 ${
                      isOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 dark:bg-current bg-gray-700 transform transition-all duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 dark:bg-current bg-gray-700 transform transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-2"
                    }`}
                  ></span>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] md:hidden dark:bg-black bg-gray-900/50 backdrop-blur-sm"
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 dark:bg-gray-900 bg-white shadow-2xl z-[101] md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 dark:text-gray-300 text-gray-700 hover:dark:text-cyan-400 hover:text-cyan-600 transition-colors duration-300 p-2"
                  aria-label="Close menu"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="space-y-2 sm:space-y-4 px-2 sm:px-4 flex-1">
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
                        className="flex items-center justify-center text-base sm:text-lg md:text-xl font-medium dark:text-gray-100 text-gray-800 hover:dark:text-white hover:text-gray-900 transition-all duration-300 py-3 sm:py-4 px-4 rounded-xl dark:bg-gray-800/40 bg-gray-100/80 hover:dark:bg-gray-800/70 hover:bg-gray-200 border dark:border-gray-700/50 border-gray-300/50 hover:border-cyan-500/30 shadow-sm hover:shadow-md w-full max-w-full group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="absolute inset-0 dark:bg-gradient-to-r from-cyan-500/10 to-purple-500/10 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                          <span className="dark:text-cyan-400 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                          <span className="truncate">{item.name}</span>
                        </span>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                {/* Theme toggle inside mobile menu */}
                <div className="mt-8 px-4">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 transition-colors duration-300"
                  >
                    {theme === "dark" ? (
                      <>
                        <FiSun className="w-5 h-5" />
                        <span>Switch to Light Mode</span>
                      </>
                    ) : (
                      <>
                        <FiMoon className="w-5 h-5" />
                        <span>Switch to Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
