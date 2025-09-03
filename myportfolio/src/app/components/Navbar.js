

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#f9fafb] shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="text-xl font-bold text-gray-800">Parth</div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#projects" className="text-gray-600 hover:text-black transition">
//               Projects
//             </a>
//             <a href="#certifications" className="text-gray-600 hover:text-black transition">
//               Certifications
//             </a>
//             <a href="#contact" className="text-gray-600 hover:text-black transition">
//               Contact
//             </a>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-black focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
//           <a href="#projects" className="block text-gray-700 hover:text-black transition">
//             Projects
//           </a>
//           <a href="#certifications" className="block text-gray-700 hover:text-black transition">
//             Certifications
//           </a>
//           <a href="#contact" className="block text-gray-700 hover:text-black transition">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white">Parth</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition">
              Projects
            </a>
            <a href="#certifications" className="text-gray-300 hover:text-indigo-400 transition">
              Certifications
            </a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-indigo-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="#projects" className="block text-gray-300 hover:text-indigo-400 transition">
            Projects
          </a>
          <a href="#certifications" className="block text-gray-300 hover:text-indigo-400 transition">
            Certifications
          </a>
          <a href="#contact" className="block text-gray-300 hover:text-indigo-400 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
