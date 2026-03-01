// "use client";

// import Typewriter from "typewriter-effect";

// export default function TypeHeading() {
//   return (
//     <>
//       <header
//         className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
//         aria-label="Professional introduction"
//       >
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center gap-3 mb-4 sm:mb-6">
//             <p className="text-gray-400 text-sm sm:text-base font-medium tracking-wide">
//               HELLO, MY NAME IS
//             </p>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
//             <span className="block">Parth Sharma</span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
//               Frontend Developer
//             </span>
//           </h1>

//           <div className="mb-6 sm:mb-8">
//             <h2 className="sr-only">Primary specialization</h2>
//             <div className="inline-block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-l-4 border-cyan-500 pl-4 py-2">
//               <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold">
//                 Specializing in React & Next.js Applications
//               </p>
//             </div>
//           </div>

//           <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl">
//             I build{" "}
//             <span className="text-cyan-300 font-medium">fast responsive</span>,{" "}
//             <span className="text-purple-300 font-medium">
//               and user-friendly web applications{" "}
//             </span>
//             using React and Next.js
//           </p>

//           <div className="mb-8 sm:mb-10" aria-label="Technical specializations">
//             <div className="flex items-center gap-3 mb-3">
//               <p className="text-gray-400 text-base sm:text-lg font-medium">
//                 Expertise in:
//               </p>
//             </div>

//             <div className="text-xl sm:text-2xl md:text-3xl text-gray-100 font-medium min-h-[32px] sm:min-h-[40px] md:min-h-[48px]">
//               <Typewriter
//                 options={{
//                   strings: [
//                     "React & Next.js Development",
//                     "TypeScript & Modern JavaScript",
//                     "Responsive UI/UX Design",
//                     "Performance Optimization",
//                     "Accessible Web Applications",
//                   ],
//                   autoStart: true,
//                   loop: true,
//                   delay: 70,
//                   deleteSpeed: 50,
//                   cursorClassName: "text-cyan-400", // Custom cursor color
//                   wrapperClassName: "font-semibold tracking-tight",
//                 }}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-400">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <span>Available for opportunities</span>
//             </div>
//             <div className="hidden sm:block">•</div>
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-4 h-4 text-yellow-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               <span>Open to remote & onsite roles</span>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

"use client";

import Typewriter from "typewriter-effect";

export default function TypeHeading() {
  return (
    <>
      <header
        className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Professional introduction"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <p className="dark:text-gray-400 text-gray-600 text-sm sm:text-base font-medium tracking-wide">
              HELLO, MY NAME IS
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-gray-900 mb-4 sm:mb-6">
            <span className="block">Parth Sharma</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Frontend Developer
            </span>
          </h1>

          <div className="mb-6 sm:mb-8">
            <h2 className="sr-only">Primary specialization</h2>
            <div className="inline-block dark:bg-gradient-to-r dark:from-purple-500/10 dark:to-cyan-500/10 bg-gradient-to-r from-purple-100 to-cyan-100 border-l-4 border-cyan-500 pl-4 py-2">
              <p className="text-xl sm:text-2xl md:text-3xl dark:text-gray-200 text-gray-700 font-semibold">
                Specializing in React & Next.js Applications
              </p>
            </div>
          </div>

          <p className="dark:text-gray-300 text-gray-700 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl">
            I build{" "}
            <span className="text-cyan-300 font-medium">fast responsive</span>,{" "}
            <span className="text-purple-300 font-medium">
              and user-friendly web applications{" "}
            </span>
            using React and Next.js
          </p>

          <div className="mb-8 sm:mb-10" aria-label="Technical specializations">
            <div className="flex items-center gap-3 mb-3">
              <p className="dark:text-gray-400 text-gray-600 text-base sm:text-lg font-medium">
                Expertise in:
              </p>
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl dark:text-gray-100 text-gray-800 font-medium min-h-[32px] sm:min-h-[40px] md:min-h-[48px]">
              <Typewriter
                options={{
                  strings: [
                    "React & Next.js Development",
                    "TypeScript & Modern JavaScript",
                    "Responsive UI/UX Design",
                    "Performance Optimization",
                    "Accessible Web Applications",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 50,
                  cursorClassName: "text-cyan-400", // Custom cursor color
                  wrapperClassName: "font-semibold tracking-tight",
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base dark:text-gray-400 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Open to remote & onsite roles</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}