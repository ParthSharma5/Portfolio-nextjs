"use client";

import React from "react";
import certifications from "../data/certifications";
import { motion } from "framer-motion";
import { FiExternalLink, FiAward, FiCalendar, FiMapPin, FiDownload } from "react-icons/fi";

const Certification = ({ filter }) => {
  const filteredCerts =
    filter === "All"
      ? certifications
      : certifications.filter(
          (cert) => (cert.status || "").toLowerCase() === filter.toLowerCase()
        );

  return (
    <section className="min-h-screen  from-gray-900 to-gray-800 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-0.5 bg-indigo-500"></div>
            <FiAward className="text-indigo-400 text-xl sm:text-2xl" />
            <div className="w-6 h-0.5 bg-indigo-500"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">Certifications</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Professional credentials and achievements that validate my expertise
          </p>
        </motion.div>

        {/* No Results */}
        {filteredCerts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="bg-gray-800/50 rounded-2xl p-8 max-w-md mx-auto border border-gray-700">
              <FiAward className="text-gray-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Certifications Found</h3>
              <p className="text-gray-400">
                No certifications found for <span className="text-indigo-400">&quot;{filter}&quot;</span>
              </p>
            </div>
          </motion.div>
        ) : (
          /* Certifications Grid */
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.1, 0.4),
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Card Header */}
                <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 border-b border-gray-700">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <FiAward className="text-indigo-400 text-2xl flex-shrink-0 mt-1" />
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cert.status === "Live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {cert.status || "Completed"}
                    </motion.span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Issuer */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <FiMapPin className="text-indigo-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Issuer</p>
                      <p className="text-white font-medium">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <FiCalendar className="text-purple-400 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Year</p>
                      <p className="text-white font-medium">{cert.year}</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  {(cert.duration || cert.skills) && (
                    <div className="space-y-3 mb-6 pt-4 border-t border-gray-700">
                      {cert.duration && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Duration</p>
                          <p className="text-white text-sm">{cert.duration}</p>
                        </div>
                      )}
                      {cert.skills && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.slice(0, 3).map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                              >
                                {skill}
                              </span>
                            ))}
                            {cert.skills.length > 3 && (
                              <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                                +{cert.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="flex gap-3">
                    {cert.link ? (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex-1 text-center shadow-lg hover:shadow-indigo-500/25"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        View Certificate
                      </motion.a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 bg-gray-700 text-gray-400 px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex-1 text-center cursor-not-allowed"
                      >
                        <FiAward className="w-4 h-4" />
                        Not Available
                      </button>
                    )}
                    
                    {/* Optional Download Button */}
                    {cert.downloadUrl && (
                      <motion.a
                        href={cert.downloadUrl}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
                      >
                        <FiDownload className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Footer Stats */}
        {filteredCerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 max-w-2xl mx-auto">
              <p className="text-gray-400 text-lg">
                Showing <span className="text-indigo-400 font-semibold">{filteredCerts.length}</span>{" "}
                {filteredCerts.length === 1 ? "certification" : "certifications"}
                {filter !== "All" && (
                  <span>
                    {" "}in <span className="text-purple-400 font-semibold">{filter}</span>
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certification;