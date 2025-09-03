
'use client';

import { motion } from 'framer-motion';

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={`relative overflow-hidden px-6 py-2 text-sm rounded-full font-semibold border transition-all duration-300 backdrop-blur-md
        ${
          isActive
            ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-transparent shadow-lg"
            : "bg-white/70 text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
    >
      {/* Active background animation */}
      {isActive && (
        <motion.div
          layoutId="active-pill"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full"
        />
      )}

      {/* Label */}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
};

export default FilterButton;
