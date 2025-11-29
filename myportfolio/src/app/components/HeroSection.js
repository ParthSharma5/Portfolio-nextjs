// 'use client';

// import Image from "next/image";
// import TypeHeading from "./TypeHeading";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="mb-15 bg-gray-900 text-gray-100 px-6 sm:px-10 md:px-16 py-12">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8">

//         {/* Text (left) with slide-in animation */}
//         <motion.div
//           className="md:w-1/2 w-full"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <TypeHeading />
//         </motion.div>

//         {/* Image (right) with scale-in animation */}
//         <motion.div
//           className=" md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Image
//             src="/my-profile.png"
//             alt="Parth Sharma"
//             width={300}
//             height={300}
//             className="rounded-full mt-15 object-cover shadow-lg"
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// updated code below down

// "use client";

// import Image from "next/image";
// import TypeHeading from "./TypeHeading";
// import { motion } from "framer-motion";
// import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 relative overflow-hidden">
//       {/* Background Animated Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto w-full relative z-10">
//         {/* Text Content */}
//         <motion.div
//           className="lg:w-1/2 w-full text-center lg:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <TypeHeading />

//           {/* Short Bio/Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="text-gray-300 text-lg sm:text-xl lg:text-2xl mt-4 mb-6 leading-relaxed"
//           >
//             I create{" "}
//             <span className="text-purple-400 font-semibold">
//               digital experiences
//             </span>{" "}
//             that blend beautiful design with{" "}
//             <span className="text-pink-400 font-semibold">
//               cutting-edge technology
//             </span>
//           </motion.p>

//           {/* Stats/Highlights */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8"
//           >
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-white">
//                 2+
//               </div>
//               <div className="text-gray-400 text-sm">Years Experience</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-white">
//                 15+
//               </div>
//               <div className="text-gray-400 text-sm">Projects Done</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-white">
//                 5+
//               </div>
//               <div className="text-gray-400 text-sm">Happy Clients</div>
//             </div>
//           </motion.div>

//           {/* CTA Buttons Group */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
//           >
//             <a
//               href="#projects"
//               className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center shadow-lg hover:shadow-purple-500/25"
//             >
//               View My Work
//             </a>
//             <a
//             onClick={()=>alert("Right now it's not availaible")}
//               href="/resume.pdf"
//               download
//               className="inline-flex items-center justify-center border-2 border-purple-500 text-purple-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center gap-2"
//             >
//               <FiDownload className="text-lg" />
//               Download Resume
//             </a>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1 }}
//             viewport={{ once: true }}
//             className="flex justify-center lg:justify-start gap-4"
//           >
//             {[
//               {
//                 icon: FiGithub,
//                 href: "https://github.com/ParthSharma5",
//                 label: "GitHub",
//               },
//               {
//                 icon: FiLinkedin,
//                 href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHMToCkMTSBsAAAAZqJNxXAdlpDnlo2KnQ9QqU3zgBPZAdt5b43Pal1fqUGpebfa-TJ61bPBxwcR9djpA6i5ZPvfVwC4UrzVBFvHgfXnPDmdV6cRaoxXjO3TMbfHJl4iyYEhaU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fparth-sharma-aa5274247%2F",
//                 label: "LinkedIn",
//               },
//               {
//                 icon: FiMail,
//                 href: "mailto:parth.scse@gmail.com",
//                 label: "Email",
//               },
//             ].map((social, index) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 aria-label={social.label}
//                 className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 text-gray-300 hover:text-white"
//               >
//                 <social.icon className="text-xl" />
//               </a>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <div className="relative group">
//             {/* Main Image */}
//             <div className="relative z-10">
//               <Image
//                 src="/my-profile.png"
//                 alt="Parth Sharma - Full Stack Developer"
//                 width={400}
//                 height={400}
//                 className="rounded-full object-cover shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 group-hover:rotate-3"
//                 priority
//                 sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
//               />
//             </div>

//             {/* Floating Tech Icons around image */}
//             <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
//               JS
//             </div>
//             <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce delay-300">
//               TS
//             </div>
//             <div className="absolute top-1/2 -right-6 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
//               React
//             </div>

//             {/* Background gradient effects */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 -z-10 blur-xl scale-110 group-hover:scale-125 transition-all duration-500"></div>
//             <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 -z-5 scale-105 group-hover:border-purple-500/50 transition-all duration-500"></div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
//           <span className="text-sm mb-2">Scroll Down</span>
//           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-3 bg-gray-400 rounded-full mt-2"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import TypeHeading from "./TypeHeading";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 relative overflow-hidden"
    >
      {/* Background Animated Elements - Reduced motion for performance */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto w-full relative z-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <TypeHeading />

          {/* Short Bio/Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg sm:text-xl lg:text-2xl mt-4 mb-6 leading-relaxed"
          >
            I create{" "}
            <span className="text-purple-400 font-semibold">
              digital experiences
            </span>{" "}
            that blend beautiful design with{" "}
            <span className="text-pink-400 font-semibold">
              cutting-edge technology
            </span>
          </motion.p>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Projects Done" },
              { number: "5+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 sm:px-7 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View My Work
            </a>
            <button
              onClick={() => alert("Resume will be available soon!")}
              className="inline-flex items-center justify-center border-2 border-purple-500 text-purple-400 px-5 py-3 sm:px-7 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <FiDownload className="text-lg" />
              Download Resume
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start gap-3"
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/ParthSharma5",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/parth-sharma-aa5274247/",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:parth.scse@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative group">
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="/my-profile.png"
                alt="Parth Sharma - Full Stack Developer"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 group-hover:rotate-2"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
              />
            </div>

            {/* Floating Tech Icons - Reduced animation intensity */}
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
              JS
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce delay-150">
              TS
            </div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              React
            </div>

            {/* Background gradient effects */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 -z-10 blur-xl scale-110 group-hover:scale-120 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:text-purple-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}