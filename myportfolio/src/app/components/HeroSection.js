

// "use client";

// import Image from "next/image";
// import TypeHeading from "./TypeHeading";
// import { motion } from "framer-motion";
// import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// // Reusable animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1 },
// };

// // Technologies list – add or remove as needed
// const skills = [
//   "JavaScript",
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Tailwind CSS",
//   "Git & GitHub",
//   "HTML5",
//   "CSS3",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "Figma",
// ];

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center text-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 relative overflow-hidden"
//       aria-label="Hero Section - Frontend Developer Portfolio"
//     >
//       {/* Decorative blurred circles – they add depth on top of the global gradient */}
//       <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto w-full relative z-10">
//         {/* Left column – text & tags */}
//         <motion.div
//           className="lg:w-1/2 w-full"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ staggerChildren: 0.1 }}
//         >
//           {/* Main heading */}
//           <motion.div variants={fadeInUp}>
//             <TypeHeading />
//           </motion.div>

//           {/* Language & technology tags */}
//           <motion.div
//             variants={fadeInUp}
//             className="mb-10"
//             aria-label="Technologies and Languages"
//           >
//             <h3 className="text-xl font-bold text-white mb-6">
//               Languages & Technologies
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {skills.map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     duration: 0.4,
//                     delay: 0.3 + index * 0.05,
//                     ease: "easeOut",
//                   }}
//                   className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-gray-200 rounded-full text-sm sm:text-base font-medium border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>

//           {/* CTA buttons */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center mb-10"
//           >
//             <a
//               href="#projects"
//               className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center focus:outline-none focus:ring-3 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
//               aria-label="View My Projects"
//             >
//               View My Projects
//               <svg
//                 className="w-5 h-5 ml-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </a>
//             <button
//               onClick={() => alert("Resume download will be available soon!")}
//               className="inline-flex items-center justify-center border-2 border-gray-700 text-gray-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center gap-3 focus:outline-none focus:ring-3 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900"
//               aria-label="Download Resume"
//             >
//               <FiDownload className="text-lg" />
//               Download Resume
//             </button>
//           </motion.div>

//           {/* Social links */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex gap-4"
//             aria-label="Social Media Links"
//           >
//             {[
//               {
//                 icon: FiGithub,
//                 href: "https://github.com/ParthSharma5",
//                 label: "GitHub Profile",
//               },
//               {
//                 icon: FiLinkedin,
//                 href: "https://www.linkedin.com/in/parth-sharma-aa5274247/",
//                 label: "LinkedIn Profile",
//               },
//               {
//                 icon: FiMail,
//                 href: "mailto:parth.scse@gmail.com",
//                 label: "Send Email",
//               },
//             ].map((social) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 aria-label={social.label}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3.5 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 rounded-lg transition-all duration-300 transform hover:scale-110 text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
//               >
//                 <social.icon className="text-xl sm:text-2xl" />
//               </a>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Right column – profile image */}
//         <motion.div
//           className="lg:w-1/2 w-full flex justify-center lg:justify-end"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={scaleIn}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="relative group max-w-lg">
//             <div className="relative z-10">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
//                 <Image
//                   src="/my-profile.png"
//                   alt="Parth Sharma - Frontend Developer"
//                   width={500}
//                   height={500}
//                   className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
//                   priority
//                   sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
//               </div>
//             </div>
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 -z-10 blur-xl group-hover:blur-2xl transition-all duration-700"></div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         aria-hidden="true"
//       >
//         <a
//           href="#about"
//           className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:text-cyan-400 group"
//           aria-label="Scroll to About Section"
//         ></a>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import TypeHeading from "./TypeHeading";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Technologies list – add or remove as needed
const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Git & GitHub",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express",
  "MongoDB",
  "Figma",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center dark:text-gray-100 text-gray-900 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 relative overflow-hidden"
      aria-label="Hero Section - Frontend Developer Portfolio"
    >
      {/* Decorative blurred circles – adapt for light/dark */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 dark:bg-purple-500/10 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 dark:bg-cyan-500/10 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 dark:bg-gradient-to-r from-purple-500/5 to-cyan-500/5 bg-gradient-to-r from-purple-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto w-full relative z-10">
        {/* Left column – text & tags */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Main heading */}
          <motion.div variants={fadeInUp}>
            <TypeHeading />
          </motion.div>

          {/* Language & technology tags */}
          <motion.div
            variants={fadeInUp}
            className="mb-10"
            aria-label="Technologies and Languages"
          >
            <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-6">
              Languages & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                    ease: "easeOut",
                  }}
                  className="px-4 py-2 dark:bg-gray-800/80 bg-gray-100/80 backdrop-blur-sm dark:text-gray-200 text-gray-700 rounded-full text-sm sm:text-base font-medium border dark:border-gray-700 border-gray-300 hover:border-purple-500/50 dark:hover:bg-gray-800 hover:bg-gray-200 dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center focus:outline-none focus:ring-3 focus:ring-purple-500/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-offset-white"
              aria-label="View My Projects"
            >
              View My Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <button
              onClick={() => alert("Resume download will be available soon!")}
              className="inline-flex items-center justify-center border-2 dark:border-gray-700 border-gray-300 dark:text-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-semibold dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900 dark:hover:border-gray-600 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center gap-3 focus:outline-none focus:ring-3 focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-offset-white"
              aria-label="Download Resume"
            >
              <FiDownload className="text-lg" />
              Download Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-4"
            aria-label="Social Media Links"
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/ParthSharma5",
                label: "GitHub Profile",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/parth-sharma-aa5274247/",
                label: "LinkedIn Profile",
              },
              {
                icon: FiMail,
                href: "mailto:parth.scse@gmail.com",
                label: "Send Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 dark:bg-gray-800/50 bg-gray-100/80 backdrop-blur-sm dark:hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 rounded-lg transition-all duration-300 transform hover:scale-110 dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 focus:outline-none focus:ring-3 focus:ring-purple-500/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-offset-white"
              >
                <social.icon className="text-xl sm:text-2xl" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column – profile image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleIn}
          transition={{ duration: 0.7 }}
        >
          <div className="relative group max-w-lg">
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:group-hover:shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-500">
                <Image
                  src="/my-profile.png"
                  alt="Parth Sharma - Frontend Developer"
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
                />
                <div className="absolute inset-0 dark:bg-gradient-to-t from-gray-900/50 to-transparent bg-gradient-to-t from-white/50 to-transparent"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl dark:bg-gradient-to-r from-purple-500/10 to-cyan-500/10 bg-gradient-to-r from-purple-200/50 to-cyan-200/50 -z-10 blur-xl group-hover:blur-2xl transition-all duration-700"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <a
          href="#about"
          className="flex flex-col items-center dark:text-gray-400 text-gray-600 dark:hover:text-cyan-400 hover:text-cyan-600 transition-colors duration-300 focus:outline-none focus:text-cyan-400 group"
          aria-label="Scroll to About Section"
        >
          <span className="text-sm mb-3 font-medium tracking-wide">
            EXPLORE MORE
          </span>
          <div className="w-6 h-10 border-2 dark:border-gray-400 border-gray-500 dark:group-hover:border-cyan-400 group-hover:border-cyan-600 rounded-full flex justify-center transition-colors">
            <motion.div
              className="w-1 h-3 dark:bg-gray-400 bg-gray-500 dark:group-hover:bg-cyan-400 group-hover:bg-cyan-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}