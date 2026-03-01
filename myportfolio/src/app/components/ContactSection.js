// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
//   FaArrowUp,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaCheckCircle,
// } from "react-icons/fa";

// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const fieldVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const socialLinks = [
//     {
//       icon: <FaEnvelope />,
//       href: "mailto:parth.scse@gmail.com",
//       label: "Email",
//       color: "hover:text-red-400",
//     },
//     {
//       icon: <FaGithub />,
//       href: "https://github.com/ParthSharma5",
//       label: "GitHub",
//       color: "hover:text-purple-400",
//     },
//     {
//       icon: <FaLinkedin />,
//       href: "https://www.linkedin.com/in/parth-sharma-aa5274247/",
//       label: "LinkedIn",
//       color: "hover:text-blue-400",
//     },
//   ];

//   const contactInfo = [
//     {
//       icon: <FaEnvelope className="text-xl" />,
//       text: "parth.scse@gmail.com",
//       href: "mailto:parth.scse@gmail.com",
//     },
//     {
//       icon: <FaPhone className="text-xl" />,
//       text: "+91 8979880468", // Replace with your actual number
//       href: "tel:+918979880468",
//     },
//     {
//       icon: <FaMapMarkerAlt className="text-xl" />,
//       text: "Gurugram, India",
//       href: "#",
//     },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch("https://formspree.io/f/xwpnpejb", {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         e.target.reset(); 
//       } else {
//         alert("Form submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-12 sm:mb-16 lg:mb-20"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Get In Touch
//           </motion.h2>

//           <motion.p
//             className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             Have a project in mind or want to collaborate? I&apos;d love to hear
//             from you. Let&apos;s create something amazing together!
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <motion.div
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl">
//               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//                 <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>
//                 Let&apos;s Connect
//               </h3>

//               <div className="space-y-4 mb-8">
//                 {contactInfo.map((info, index) => (
//                   <motion.a
//                     key={index}
//                     href={info.href}
//                     className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
//                       {info.icon}
//                     </div>
//                     <span className="text-gray-300 group-hover:text-white transition-colors">
//                       {info.text}
//                     </span>
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Social Links */}
//               <div>
//                 <h4 className="text-lg font-semibold text-white mb-4">
//                   Follow Me
//                 </h4>
//                 <div className="flex gap-4">
//                   {socialLinks.map((link, idx) => (
//                     <motion.a
//                       key={idx}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={link.label}
//                       className={`p-3 bg-gray-700 rounded-xl text-white text-xl ${link.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
//                       whileHover={{ scale: 1.1, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {link.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             className="lg:col-span-2"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <AnimatePresence mode="wait">
//               {submitted ? (
//                 <motion.div
//                   key="success"
//                   className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-green-500/20 shadow-xl text-center"
//                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.9, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2, type: "spring" }}
//                     className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
//                   >
//                     <FaCheckCircle className="text-green-400 text-4xl" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-green-400 mb-4">
//                     Message Sent!
//                   </h3>
//                   <p className="text-gray-300 text-lg mb-6">
//                     Thank you for reaching out! I&apos;ve received your message
//                     and will get back to you within 24 hours.
//                   </p>
//                   <motion.button
//                     onClick={() => setSubmitted(false)}
//                     className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Send Another Message
//                   </motion.button>
//                 </motion.div>
//               ) : (
//                 <motion.form
//                   key="form"
//                   onSubmit={handleSubmit}
//                   className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl"
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                     <motion.div
//                       variants={fieldVariants}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <label className="block text-gray-300 text-sm font-medium mb-2">
//                         Your Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your name"
//                         required
//                         className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
//                       />
//                     </motion.div>

//                     <motion.div
//                       variants={fieldVariants}
//                       transition={{ duration: 0.5, delay: 0.1 }}
//                     >
//                       <label className="block text-gray-300 text-sm font-medium mb-2">
//                         Your Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="yourmail@example.com"
//                         required
//                         className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
//                       />
//                     </motion.div>
//                   </div>

//                   <motion.div
//                     className="mt-4 sm:mt-6"
//                     variants={fieldVariants}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                   >
//                     <label className="block text-gray-300 text-sm font-medium mb-2">
//                       Your Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       placeholder="Hello Parth, I'd like to discuss..."
//                       rows={6}
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
//                     ></textarea>
//                   </motion.div>

//                   <motion.button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
//                     variants={fieldVariants}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                     whileHover={!isLoading ? { scale: 1.02 } : {}}
//                     whileTap={!isLoading ? { scale: 0.98 } : {}}
//                   >
//                     {isLoading ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <FaPaperPlane className="text-lg" />
//                         Send Message
//                       </>
//                     )}
//                   </motion.button>
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>

//       {/* Back to Top Button */}
//       <motion.a
//         href="#top"
//         className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-50"
//         whileHover={{ scale: 1.1, y: -2 }}
//         whileTap={{ scale: 0.9 }}
//         aria-label="Back to Top"
//       >
//         <FaArrowUp className="text-sm sm:text-base" />
//       </motion.a>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      href: "mailto:parth.scse@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ParthSharma5",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/parth-sharma-aa5274247/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      text: "parth.scse@gmail.com",
      href: "mailto:parth.scse@gmail.com",
    },
    {
      icon: <FaPhone className="text-xl" />,
      text: "+91 8979880468",
      href: "tel:+918979880468",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      text: "Gurugram, India",
      href: "#",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xwpnpejb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        bg-gradient-to-br from-gray-50 to-white
        dark:text-white text-gray-900"
    >
      {/* Background Elements – adapt for light/dark */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 dark:bg-cyan-500/10 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 dark:bg-purple-500/10 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl dark:text-gray-300 text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="dark:bg-gray-800/50 bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border dark:border-gray-700 border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>
                Let&apos;s Connect
              </h3>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg dark:hover:bg-gray-700/50 hover:bg-gray-100 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <span className="dark:text-gray-300 text-gray-600 group-hover:dark:text-white group-hover:text-gray-900 transition-colors">
                      {info.text}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-gray-800 mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`p-3 dark:bg-gray-700 bg-gray-200 rounded-xl dark:text-white text-gray-800 text-xl ${link.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="dark:bg-gray-800/50 bg-white/70 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-green-500/20 shadow-xl text-center"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FaCheckCircle className="text-green-400 text-4xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    Message Sent!
                  </h3>
                  <p className="dark:text-gray-300 text-gray-600 text-lg mb-6">
                    Thank you for reaching out! I&apos;ve received your message
                    and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="dark:bg-gray-800/50 bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border dark:border-gray-700 border-gray-200 shadow-xl"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      variants={fieldVariants}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="block dark:text-gray-300 text-gray-600 text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-xl dark:bg-gray-700/50 bg-gray-100 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      variants={fieldVariants}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block dark:text-gray-300 text-gray-600 text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourmail@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl dark:bg-gray-700/50 bg-gray-100 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-4 sm:mt-6"
                    variants={fieldVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block dark:text-gray-300 text-gray-600 text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Hello Parth, I'd like to discuss..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl dark:bg-gray-700/50 bg-gray-100 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                    variants={fieldVariants}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button – stays gradient, but subtle shadow adapts */}
      <motion.a
        href="#top"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 sm:p-4 rounded-xl shadow-lg dark:hover:shadow-cyan-500/25 hover:shadow-cyan-500/30 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to Top"
      >
        <FaArrowUp className="text-sm sm:text-base" />
      </motion.a>
    </section>
  );
}