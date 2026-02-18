"use client";

import Image from "next/image";
import TypeHeading from "./TypeHeading";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// Reusable animation variants for DRY code
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Skills data - realistic proficiency levels
const skills = [
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
  { name: "React", level: 80, color: "from-cyan-400 to-blue-600" },
  { name: "Next.js", level: 75, color: "from-gray-200 to-gray-900" },
  { name: "TypeScript", level: 70, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-cyan-600" },
  { name: "Git & GitHub", level: 80, color: "from-orange-400 to-red-600" },
];

// Progress bar component with animation
const SkillProgressBar = ({ skill, index }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-gray-200 font-medium text-sm sm:text-base">
          {skill.name}
        </span>
        <span className="text-gray-400 font-semibold text-sm sm:text-base">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{
            duration: 1.5,
            delay: 0.5 + index * 0.1,
            ease: "easeOut",
          }}
          aria-label={`${skill.name} proficiency: ${skill.level}%`}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 relative overflow-hidden"
        aria-label="Hero Section - Frontend Developer Portfolio"
      >
        {/* Enhanced Background with subtle gradient */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto w-full relative z-10">
          {/* Text Content - Left Column */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* Main Heading */}
            <motion.div variants={fadeInUp}>
              <TypeHeading />
            </motion.div>

            {/* Professional Description */}
            {/* <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg sm:text-xl lg:text-2xl mt-6 mb-8 leading-relaxed"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              scalable, accessible, and performant
            </span>{" "}
            web applications with modern technologies. Focused on creating exceptional user experiences that drive business value.
          </motion.p> */}

            {/* Skills Progress Bars Section */}
            <motion.div
              variants={fadeInUp}
              className="mb-10"
              aria-label="Technical Skills Proficiency"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                {/* <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></span> */}
                Technical Proficiency
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {skills.map((skill, index) => (
                  <SkillProgressBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons Group */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center focus:outline-none focus:ring-3 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
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
                className="inline-flex items-center justify-center border-2 border-gray-700 text-gray-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto text-center gap-3 focus:outline-none focus:ring-3 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Download Resume"
              >
                <FiDownload className="text-lg" />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
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
                  className="p-3.5 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 rounded-lg transition-all duration-300 transform hover:scale-110 text-gray-300 hover:text-white focus:outline-none focus:ring-3 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <social.icon className="text-xl sm:text-2xl" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - Right Column */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group max-w-lg">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
                  <Image
                    src="/my-profile.png"
                    alt="Parth Sharma - Frontend Developer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 -z-10 blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator with improved accessibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:text-cyan-400 group"
            aria-label="Scroll to About Section"
          >
            <span className="text-sm mb-3 font-medium tracking-wide">
              EXPLORE MORE
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-cyan-400 rounded-full flex justify-center transition-colors">
              <motion.div
                className="w-1 h-3 bg-gray-400 group-hover:bg-cyan-400 rounded-full mt-2"
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
    </>
  );
}
