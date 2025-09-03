// "use client";

// import { motion } from "framer-motion";
// import allProjects from "../data/projects";

// const Projects = ({ filter }) => {
//   // Filter logic
//   const projects =
//     filter === "All"
//       ? allProjects
//       : allProjects.filter((project) => project.status === filter);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((project, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: index * 0.1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           whileHover={{
//             y: -10,
//             scale: 1.03,
//             transition: {
//               type: "spring",
//               stiffness: 300,
//               damping: 15,
//             },
//           }}
//           className="bg-gray-800 border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition"
//         >
//           <h2 className="text-indigo-400 text-xl font-semibold mb-2">
//             {project.title}
       
//           </h2>
//           <p className="text-white mb-4">{project.description}</p>

//           {/* Status Badge */}
//           <p className="text-sm text-white mb-2 flex items-center gap-2">
//             Status:
//             <motion.span
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 300, damping: 15 }}
//               className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
//                 project.status === "Live"
//                   ? "bg-green-500"
//                   : project.status === "upcoming"
//                   ? "bg-yellow-500"
//                   : "bg-gray-400"
//               }`}
//             >
//               {project.status.toUpperCase()}
//             </motion.span>
//           </p>

//           {/* Link */}
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block bg-indigo-500 text-white text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-3"
//           >
//             View Project
//           </a>

//           {/* Languages */}
//           {project.languagesUsed && (
//             <div className="mt-3">
//               <h3 className="text-white font-medium mb-2">Languages Used:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {project.languagesUsed.map((lang, i) => (
//                   <button
//                     key={i}
//                     className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full shadow-sm hover:bg-gray-200 transition"
//                   >
//                     {lang}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Projects;
"use client";

import { motion } from "framer-motion";
import allProjects from "../data/projects";

const Projects = ({ filter }) => {
  const projects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.status === filter);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
          className="bg-gray-800 border border-gray-600 rounded-xl shadow-md p-5 transition hover:shadow-lg hover:shadow-indigo-500/30"
        >
          {/* Title */}
          <h2 className="text-indigo-400 text-xl font-semibold mb-2 hover:text-indigo-300 transition">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-200 mb-4">{project.description}</p>

          {/* Status Badge */}
          <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
            Status:
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                project.status === "Live"
                  ? "bg-green-500 text-white"
                  : project.status === "upcoming"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-500 text-white"
              }`}
            >
              {project.status.toUpperCase()}
            </motion.span>
          </p>

          {/* View Project Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition mb-3"
          >
            View Project
          </a>

          {/* Languages Used */}
          {project.languagesUsed && (
            <div className="mt-3">
              <h3 className="text-white font-medium mb-2">Languages Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.languagesUsed.map((lang, i) => (
                  <button
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full shadow-sm hover:bg-indigo-200 transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
