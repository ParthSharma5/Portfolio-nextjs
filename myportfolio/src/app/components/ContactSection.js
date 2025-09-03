// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';


// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);

//   const fieldVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const socialLinks = [
//     { icon: <FaEnvelope />, href: 'mailto:parth.scse@gmail.com', label: 'Email' },
//     { icon: <FaGithub />, href: 'https://github.com/ParthSharma5', label: 'GitHub' },
//     { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/parth-sharma-aa5274247/', label: 'LinkedIn' },
//   ];

//    // from .env

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch( process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
//         method: 'POST',
//         body: formData,
//         headers: { 'Accept': 'application/json' },
//       });

//       if (response.ok) {
//         setSubmitted(true);
//       } else {
//         alert('Form submission failed. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <section id="contact" className="px-4 py-20 bg-gray-900 text-white relative">
//       {/* Heading */}
//       <motion.h2
//         className="text-4xl font-bold mb-4 text-cyan-400 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Get in Touch
//       </motion.h2>

//       <motion.p
//         className="text-lg text-gray-400 mb-8 text-center"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         Have a question or want to work together? Send me a message!
//       </motion.p>

//       {/* Form or Animated Success Message */}
//       <AnimatePresence>
//         {submitted ? (
//           <motion.div
//             key="success"
//             className="max-w-xl mx-auto p-8 bg-gray-800 rounded-xl text-center shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5 }}
//           >
//             <p className="text-green-400 text-lg font-semibold mb-2">✅ Thank you!</p>
//             <p className="text-gray-300">I have received your message and will get back to you soon.</p>
//           </motion.div>
//         ) : (
//           <motion.form
//             key="form"
//             onSubmit={handleSubmit}
//             className="max-w-xl mx-auto space-y-4"
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
//               variants={fieldVariants}
//               transition={{ duration: 0.5 }}
//             />
//             <motion.input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
//               variants={fieldVariants}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             />
//             <motion.textarea
//               name="message"
//               placeholder="Your Message"
//               rows={5}
//               required
//               className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
//               variants={fieldVariants}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             ></motion.textarea>
//             <motion.button
//               type="submit"
//               className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-lg font-medium transition shadow-md w-full"
//               variants={fieldVariants}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         )}
//       </AnimatePresence>

//       {/* Social Icons */}
//       <div className="flex justify-center space-x-6 mt-8 text-2xl">
//         {socialLinks.map((link, idx) => (
//           <motion.a
//             key={idx}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={link.label}
//             className="hover:text-cyan-400 transition transform hover:scale-110"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {link.icon}
//           </motion.a>
//         ))}
//       </div>

//       {/* Back to Top Button */}
//       <motion.a
//         href="#top"
//         className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition z-50"
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//         aria-label="Back to Top"
//       >
//         <FaArrowUp />
//       </motion.a>
//     </section>
//   );
// }
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: <FaEnvelope />, href: 'mailto:parth.scse@gmail.com', label: 'Email' },
    { icon: <FaGithub />, href: 'https://github.com/ParthSharma5', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/parth-sharma-aa5274247/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="px-4 py-20 bg-gray-900 text-white relative">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-cyan-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have a question or want to work together? Send me a message!
      </motion.p>

      {/* Form or Animated Success Message */}
      <AnimatePresence>
        {submitted ? (
          <motion.div
            key="success"
            className="max-w-xl mx-auto p-8 bg-gray-800 rounded-xl text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-green-400 text-lg font-semibold mb-2">✅ Thank you!</p>
            <p className="text-gray-300">I have received your message and will get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action="https://formspree.io/f/xwpnpejb" // Your Formspree link
            method="POST"
            className="max-w-xl mx-auto space-y-4"
            initial="hidden"
            animate="visible"
            onSubmit={() => setSubmitted(true)}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
              variants={fieldVariants}
              transition={{ duration: 0.5 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
              variants={fieldVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
              variants={fieldVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-lg font-medium transition shadow-md w-full"
              variants={fieldVariants}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-8 text-2xl">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hover:text-cyan-400 transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Back to Top Button */}
      <motion.a
        href="#top"
        className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition z-50"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </motion.a>
    </section>
  );
}
