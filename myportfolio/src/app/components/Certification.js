"use client";

import React from "react";
import certifications from "../data/certifications";
import { motion } from "framer-motion";

const Certification = ({ filter }) => {
  const filteredCerts =
    filter === "All"
      ? certifications
      : certifications.filter(
          (cert) => (cert.status || "").toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="px-6 py-10 bg-gray-900 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold text-white mb-10"
      >
        My Certifications
      </motion.h1>

      {filteredCerts.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          No certifications found for &quot;{filter}&quot;
        </p>
      ) : (
        // <p className="text-center text-gray-400 mt-10">
        //   No certifications found for "{filter}"
        // </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-md border border-gray-600 hover:shadow-indigo-500/20 transition"
            >
              <h3 className="text-indigo-400 font-bold text-lg mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-300">
                <strong className="text-white">Issuer:</strong> {cert.issuer}
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Year:</strong> {cert.year}
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Status:</strong>{" "}
                <span
                  className={`font-semibold ml-2 ${
                    cert.status === "Live"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {cert.status}
                </span>
              </p>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  View Certificate
                </a>
              ) : (
                <p className="mt-4 text-sm text-gray-400 italic">
                  Certificate not available
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Certification;
