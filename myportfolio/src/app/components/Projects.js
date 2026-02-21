// "use client";

// import { motion } from "framer-motion";
// import allProjects, { mobileProjects } from "../data/projects";
// import { FiExternalLink, FiGithub, FiStar, FiCalendar } from "react-icons/fi";
// const Projects = ({ filter }) => {
//   const projects =
//     filter === "All"
//       ? allProjects
//       : allProjects.filter((project) => project.status === filter);

//   // Status color mapping
//   const statusColors = {
//     Live: "bg-green-500 text-white",
//     upcoming: "bg-yellow-400 text-gray-900",
//     Development: "bg-blue-500 text-white",
//     Completed: "bg-purple-500 text-white",
//     default: "bg-gray-500 text-white",
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id || index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: Math.min(index * 0.1, 0.4), // Cap the delay to prevent too much staggering
//             }}
//             viewport={{ once: true, amount: 0.2 }}
//             whileHover={{
//               y: -8,
//               transition: {
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 25,
//               },
//             }}
//             className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden"
//           >
//             {/* Project Header with Gradient */}
//             <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 border-b border-gray-700">
//               <div className="flex justify-between items-start gap-4">
//                 <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300 flex-1">
//                   {project.title}
//                 </h2>

//                 {/* Status Badge */}
//                 <motion.span
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                   className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
//                     statusColors[project.status] || statusColors.default
//                   }`}
//                 >
//                   {project.status.toUpperCase()}
//                 </motion.span>
//               </div>

//               {/* Project Meta Info */}
//               {(project.date || project.featured) && (
//                 <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
//                   {project.date && (
//                     <div className="flex items-center gap-1">
//                       <FiCalendar className="w-4 h-4" />
//                       <span>{project.date}</span>
//                     </div>
//                   )}
//                   {project.featured && (
//                     <div className="flex items-center gap-1 text-yellow-400">
//                       <FiStar className="w-4 h-4 fill-current" />
//                       <span>Featured</span>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Project Content */}
//             <div className="p-6">
//               {/* Description */}
//               <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
//                 {project.description}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap gap-3 mb-6">
//                 <motion.a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px] shadow-lg hover:shadow-indigo-500/25"
//                 >
//                   <FiExternalLink className="w-4 h-4" />
//                   Live Demo
//                 </motion.a>

//                 {project.github && (
//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px]"
//                   >
//                     <FiGithub className="w-4 h-4" />
//                     Code
//                   </motion.a>
//                 )}
//               </div>

//               {/* Languages Used */}
//               {project.languagesUsed && (
//                 <div className="mt-4 pt-4 border-t border-gray-700">
//                   <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400">
//                     <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//                     Technologies
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {project.languagesUsed.map((lang, i) => (
//                       <motion.span
//                         key={i}
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: i * 0.05 }}
//                         className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/50 backdrop-blur-sm"
//                       >
//                         {lang}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Additional Features */}
//               {(project.duration || project.team) && (
//                 <div className="mt-4 pt-4 border-t border-gray-700">
//                   <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
//                     {project.duration && (
//                       <div>
//                         <div className="font-semibold text-gray-500">
//                           Duration
//                         </div>
//                         <div>{project.duration}</div>
//                       </div>
//                     )}
//                     {project.team && (
//                       <div>
//                         <div className="font-semibold text-gray-500">Team</div>
//                         <div>{project.team}</div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Hover Gradient Effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
//           </motion.div>
//         ))}
//       </div>
//       <div>
//         Mobiles Projects
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {mobileProjects.map((project, index) => (
//             <motion.div
//               key={project.id || index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: Math.min(index * 0.1, 0.4), // Cap the delay to prevent too much staggering
//               }}
//               viewport={{ once: true, amount: 0.2 }}
//               whileHover={{
//                 y: -8,
//                 transition: {
//                   type: "spring",
//                   stiffness: 400,
//                   damping: 25,
//                 },
//               }}
//               className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden"
//             >
//               {/* Project Header with Gradient */}
//               <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 border-b border-gray-700">
//                 <div className="flex justify-between items-start gap-4">
//                   <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300 flex-1">
//                     {project.title}
//                   </h2>

//                   {/* Status Badge */}
//                   <motion.span
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 15 }}
//                     className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
//                       statusColors[project.status] || statusColors.default
//                     }`}
//                   >
//                     {project.status.toUpperCase()}
//                   </motion.span>
//                 </div>

//                 {/* Project Meta Info */}
//                 {(project.date || project.featured) && (
//                   <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
//                     {project.date && (
//                       <div className="flex items-center gap-1">
//                         <FiCalendar className="w-4 h-4" />
//                         <span>{project.date}</span>
//                       </div>
//                     )}
//                     {project.featured && (
//                       <div className="flex items-center gap-1 text-yellow-400">
//                         <FiStar className="w-4 h-4 fill-current" />
//                         <span>Featured</span>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 {/* Description */}
//                 <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
//                   {project.description}
//                 </p>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap gap-3 mb-6">
//                   <motion.a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px] shadow-lg hover:shadow-indigo-500/25"
//                   >
//                     <FiExternalLink className="w-4 h-4" />
//                     Live Demo
//                   </motion.a>

//                   {project.github && (
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px]"
//                     >
//                       <FiGithub className="w-4 h-4" />
//                       Code
//                     </motion.a>
//                   )}
//                 </div>

//                 {/* Languages Used */}
//                 {project.languagesUsed && (
//                   <div className="mt-4 pt-4 border-t border-gray-700">
//                     <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400">
//                       <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//                       Technologies
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {project.languagesUsed.map((lang, i) => (
//                         <motion.span
//                           key={i}
//                           initial={{ scale: 0.8, opacity: 0 }}
//                           animate={{ scale: 1, opacity: 1 }}
//                           transition={{ delay: i * 0.05 }}
//                           className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/50 backdrop-blur-sm"
//                         >
//                           {lang}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Additional Features */}
//                 {(project.duration || project.team) && (
//                   <div className="mt-4 pt-4 border-t border-gray-700">
//                     <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
//                       {project.duration && (
//                         <div>
//                           <div className="font-semibold text-gray-500">
//                             Duration
//                           </div>
//                           <div>{project.duration}</div>
//                         </div>
//                       )}
//                       {project.team && (
//                         <div>
//                           <div className="font-semibold text-gray-500">
//                             Team
//                           </div>
//                           <div>{project.team}</div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Hover Gradient Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

"use client";

import { motion } from "framer-motion";
import allProjects, { mobileProjects } from "../data/projects";
import { FiExternalLink, FiGithub, FiStar, FiCalendar } from "react-icons/fi";

const Projects = ({ filter }) => {
  // Filter main projects by status
  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.status === filter);

  // Also filter mobile projects by the same status filter
  const filteredMobileProjects =
    filter === "All"
      ? mobileProjects
      : mobileProjects.filter((project) => project.status === filter);

  // Status color mapping
  const statusColors = {
    Live: "bg-green-500 text-white",
    upcoming: "bg-yellow-400 text-gray-900",
    Development: "bg-blue-500 text-white",
    Completed: "bg-purple-500 text-white",
    default: "bg-gray-500 text-white",
  };

  return (
    <>
      <div className="mt-16">
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            React & Nextjs Projects
          </h2>
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: Math.min(index * 0.1, 0.4),
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -8,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
              },
            }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden"
          >
            {/* Project Header with Gradient */}
            <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 border-b border-gray-700">
              <div className="flex justify-between items-start gap-4">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300 flex-1">
                  {project.title}
                </h2>

                {/* Status Badge */}
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    statusColors[project.status] || statusColors.default
                  }`}
                >
                  {project.status.toUpperCase()}
                </motion.span>
              </div>

              {/* Project Meta Info */}
              {(project.date || project.featured) && (
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                  {project.date && (
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FiStar className="w-4 h-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px] shadow-lg hover:shadow-indigo-500/25"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px]"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
              </div>

              {/* Languages Used */}
              {project.languagesUsed && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.languagesUsed.map((lang, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/50 backdrop-blur-sm"
                      >
                        {lang}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Features */}
              {(project.duration || project.team) && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                    {project.duration && (
                      <div>
                        <div className="font-semibold text-gray-500">
                          Duration
                        </div>
                        <div>{project.duration}</div>
                      </div>
                    )}
                    {project.team && (
                      <div>
                        <div className="font-semibold text-gray-500">Team</div>
                        <div>{project.team}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

      {filteredMobileProjects.length > 0 && (
        <div className="mt-16">
          <div className="relative mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mobile Projects
            </h2>
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredMobileProjects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.1, 0.4),
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden"
              >
                <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 border-b border-gray-700">
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300 flex-1">
                      {project.title}
                    </h2>
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        statusColors[project.status] || statusColors.default
                      }`}
                    >
                      {project.status.toUpperCase()}
                    </motion.span>
                  </div>

                  {(project.date || project.featured) && (
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                      {project.date && (
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      )}
                      {project.featured && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <FiStar className="w-4 h-4 fill-current" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px] shadow-lg hover:shadow-indigo-500/25"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none text-center min-w-[120px]"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>

                  {project.languagesUsed && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.languagesUsed.map((lang, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/50 backdrop-blur-sm"
                          >
                            {lang}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {(project.duration || project.team) && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                        {project.duration && (
                          <div>
                            <div className="font-semibold text-gray-500">
                              Duration
                            </div>
                            <div>{project.duration}</div>
                          </div>
                        )}
                        {project.team && (
                          <div>
                            <div className="font-semibold text-gray-500">
                              Team
                            </div>
                            <div>{project.team}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
