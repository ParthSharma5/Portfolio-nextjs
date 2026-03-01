// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
// import { MdWork } from "react-icons/md";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Helper to parse date strings like "7 october 2024" or "Present"
// const parseDate = (dateStr) => {
//   if (!dateStr || dateStr.toLowerCase() === "present") {
//     return new Date(); // current date for "Present"
//   }
//   // Expected format: "D month YYYY" (e.g., "7 october 2024")
//   const parts = dateStr.trim().split(" ");
//   if (parts.length === 3) {
//     const day = parseInt(parts[0], 10);
//     const month = parts[1].toLowerCase();
//     const year = parseInt(parts[2], 10);
//     const monthIndex = [
//       "january", "february", "march", "april", "may", "june",
//       "july", "august", "september", "october", "november", "december"
//     ].indexOf(month);
//     if (monthIndex !== -1 && !isNaN(day) && !isNaN(year)) {
//       return new Date(year, monthIndex, day);
//     }
//   }
//   // Fallback: try to parse as generic date
//   return new Date(dateStr);
// };

// // Calculate total experience using startingdate and endindate
// const calculateTotalExperience = (experiences) => {
//   let totalDays = 0;

//   experiences.forEach((exp) => {
//     const start = parseDate(exp.startingdate);
//     const end = parseDate(exp.endindate);
//     if (start && end && start <= end) {
//       const diffMs = end - start; // milliseconds
//       const diffDays = diffMs / (1000 * 60 * 60 * 24);
//       totalDays += diffDays;
//     }
//   });

//   const years = totalDays / 365.25; // approximate (accounts for leap years)
//   return years.toFixed(1) + " years";
// };

// export default function ExperienceSection() {
//   const experiences = [
//     {
//       company: "Idiotic media",
//       role: "Frontend Developer",
//       location: "Gurugram",
//       duration: "2024 - Present", // for display
//       startingdate: "7 october 2024",
//       endindate: "Present",
//       achievements: [
//         "Developed responsive, performant web applications using React, Next.js, and TypeScript, resulting in a 30% improvement in page load speed.",
//         "Collaborated with designers to implement pixel-perfect UIs and ensured cross-browser compatibility across 10+ browsers.",
//         "Optimized application performance, improving Core Web Vitals scores by 25%.",
//         "Mentored two junior developers and conducted regular code reviews, raising team code quality standards.",
//       ],
//       logo: "/idiotic_media_logo.png",
//       technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
//     },
    
//     // Add more experiences here if needed
//   ];

//   const totalExperience = calculateTotalExperience(experiences);

//   return (
//     <section
//       id="experience"
//       className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-16"
//       aria-label="Professional Experience"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading with Total Experience Badge */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={fadeInUp}
//           className="mb-12 flex flex-col items-start"
//         >
//           <div className="flex items-center gap-4 flex-wrap">
//             <h2 className="text-3xl sm:text-4xl font-bold inline-block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//               Work Experience
//             </h2>
//             <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">
//               Total: {totalExperience}
//             </span>
//           </div>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 rounded-full"></div>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="relative">
//           {/* Vertical line (hidden on mobile) */}
//           <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-cyan-500/30 to-transparent"></div>

//           {/* Experience Items */}
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//             className="space-y-12"
//           >
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={exp.company}
//                 variants={fadeInUp}
//                 className="relative flex flex-col md:flex-row gap-6 md:gap-8"
//               >
//                 {/* Left column: date & logo (desktop) */}
//                 <div className="md:w-[120px] flex-shrink-0 flex flex-row md:flex-col items-start md:items-end gap-4 md:gap-2">
//                   {/* Date badge */}
//                   <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50 text-cyan-400 font-semibold text-sm whitespace-nowrap">
//                     <FiCalendar className="inline mr-1" />
//                     {exp.duration}
//                   </div>
//                   {/* Logo */}
//                   <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50 w-14 h-14 flex items-center justify-center">
//                     {exp.logo ? (
//                       <Image
//                         src={exp.logo}
//                         alt={`${exp.company} logo`}
//                         width={40}
//                         height={40}
//                         className="object-contain"
//                       />
//                     ) : (
//                       <span className="text-2xl font-bold text-purple-400">
//                         {exp.company.charAt(0)}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Right column: content card */}
//                 <div className="flex-1 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
//                   {/* Role & Company */}
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
//                     <h3 className="text-2xl font-bold text-white flex items-center gap-2">
//                       <MdWork className="text-purple-400" />
//                       {exp.role}{" "}
//                       <span className="text-purple-400">@ {exp.company}</span>
//                     </h3>
//                     <span className="inline-flex items-center gap-1 text-sm text-gray-400">
//                       <FiMapPin />
//                       {exp.location}
//                     </span>
//                   </div>

//                   {/* Achievements */}
//                   <ul className="space-y-3 mb-5">
//                     {exp.achievements.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-gray-300">
//                         <FiAward className="text-cyan-400 flex-shrink-0 mt-1" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-gray-700/50 text-sm text-gray-200 rounded-full border border-gray-600/50 hover:border-purple-500/30 transition-colors"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import { MdWork } from "react-icons/md";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Helper to parse date strings like "7 october 2024" or "Present"
const parseDate = (dateStr) => {
  if (!dateStr || dateStr.toLowerCase() === "present") {
    return new Date(); // current date for "Present"
  }
  const parts = dateStr.trim().split(" ");
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parts[1].toLowerCase();
    const year = parseInt(parts[2], 10);
    const monthIndex = [
      "january", "february", "march", "april", "may", "june",
      "july", "august", "september", "october", "november", "december"
    ].indexOf(month);
    if (monthIndex !== -1 && !isNaN(day) && !isNaN(year)) {
      return new Date(year, monthIndex, day);
    }
  }
  return new Date(dateStr);
};

// Calculate total experience using startingdate and endindate
const calculateTotalExperience = (experiences) => {
  let totalDays = 0;
  experiences.forEach((exp) => {
    const start = parseDate(exp.startingdate);
    const end = parseDate(exp.endindate);
    if (start && end && start <= end) {
      const diffMs = end - start;
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      totalDays += diffDays;
    }
  });
  const years = totalDays / 365.25;
  return years.toFixed(1) + " years";
};

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Idiotic media",
      role: "Frontend Developer",
      location: "Gurugram",
      duration: "2024 - Present",
      startingdate: "7 october 2024",
      endindate: "Present",
      achievements: [
        "Developed responsive, performant web applications using React, Next.js, and TypeScript, resulting in a 30% improvement in page load speed.",
        "Collaborated with designers to implement pixel-perfect UIs and ensured cross-browser compatibility across 10+ browsers.",
        "Optimized application performance, improving Core Web Vitals scores by 25%.",
        "Mentored two junior developers and conducted regular code reviews, raising team code quality standards.",
      ],
      logo: "/idiotic_media_logo.png",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    },
    // Add more experiences here if needed
  ];

  const totalExperience = calculateTotalExperience(experiences);

  return (
    <section
      id="experience"
      className="py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:text-gray-100 text-gray-800 px-4 sm:px-6 md:px-10 lg:px-16"
      aria-label="Professional Experience"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Total Experience Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-12 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-bold inline-block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <span className="dark:bg-purple-600/20 bg-purple-100 dark:text-purple-300 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border dark:border-purple-500/30 border-purple-300">
              Total: {totalExperience}
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) – stays the same (gradient) */}
          <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-cyan-500/30 to-transparent"></div>

          {/* Experience Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className="relative flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Left column: date & logo (desktop) */}
                <div className="md:w-[120px] flex-shrink-0 flex flex-row md:flex-col items-start md:items-end gap-4 md:gap-2">
                  {/* Date badge */}
                  <div className="dark:bg-gray-800/80 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border dark:border-gray-700/50 border-gray-300 dark:text-cyan-400 text-cyan-600 font-semibold text-sm whitespace-nowrap">
                    <FiCalendar className="inline mr-1" />
                    {exp.duration}
                  </div>
                  {/* Logo */}
                  <div className="dark:bg-gray-800/50 bg-white/80 backdrop-blur-sm p-3 rounded-xl border dark:border-gray-700/50 border-gray-300 w-14 h-14 flex items-center justify-center">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-purple-400">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right column: content card */}
                <div className="flex-1 dark:bg-gray-800/30 bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border dark:border-gray-700/50 border-gray-300/70 hover:border-purple-500/30 transition-all duration-300 group">
                  {/* Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold dark:text-white text-gray-800 flex items-center gap-2">
                      <MdWork className="text-purple-400" />
                      {exp.role}{" "}
                      <span className="text-purple-400">@ {exp.company}</span>
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm dark:text-gray-400 text-gray-600">
                      <FiMapPin />
                      {exp.location}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 dark:text-gray-300 text-gray-700">
                        <FiAward className="text-cyan-400 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 dark:bg-gray-700/50 bg-gray-200/80 text-sm dark:text-gray-200 text-gray-700 rounded-full border dark:border-gray-600/50 border-gray-300 hover:border-purple-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}