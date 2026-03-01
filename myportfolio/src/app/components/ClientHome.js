// // 'use client';

// // import { useState } from "react";
// // import Navbar from "./Navbar";
// // import HeroSection from "./HeroSection";
// // import ProjectsSection from "./ProjectsSection";
// // import CertificationSection from "./CertificationSection";
// // import ContactSection from "./ContactSection";
// // import Footer from "./Footer";
// // import FilterButton from "./FilterButton";
// // import ExperienceSection from "./ExperienceSection";


// // export default function ClientHome() {
// //   const [filter, setFilter] = useState("All");
// //   const filters = ["All", "Live", "Upcoming"];

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-gray-900 text-gray-100 min-h-screen">
// //         <HeroSection />
// //         <ExperienceSection />

// //         <section className="py-6 flex justify-center gap-3 flex-wrap">
// //           {filters.map((f) => (
// //             <FilterButton
// //               key={f}
// //               label={f}
// //               isActive={filter === f}
// //               onClick={() => setFilter(f)}
// //             />
// //           ))}
// //         </section>

// //         <section id="projects" className="scroll-mt-20">
// //           <ProjectsSection filter={filter} />
// //         </section>

// //         <section id="certifications" className="scroll-mt-20">
// //           <CertificationSection filter={filter} />
// //         </section>

// //         <section id="contact" className="scroll-mt-20">
// //           <ContactSection />
// //         </section>
// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default function ClientHome() {
// //   const [filter, setFilter] = useState("All");
// //   const filters = ["All", "Live", "Upcoming"];

// //   return (
// //     <>
// //       <Navbar />
// //       <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
// //         <HeroSection />               {/* HeroSection will now be transparent */}
// //         <ExperienceSection />
// //         <section className="py-6 flex justify-center gap-3 flex-wrap">
// //           {filters.map((f) => (
// //             <FilterButton key={f} label={f} isActive={filter === f} onClick={() => setFilter(f)} />
// //           ))}
// //         </section>
// //         <section id="projects" className="scroll-mt-20">
// //           <ProjectsSection filter={filter} />
// //         </section>
// //         <section id="certifications" className="scroll-mt-20">
// //           <CertificationSection filter={filter} />
// //         </section>
// //         <section id="contact" className="scroll-mt-20">
// //           <ContactSection />
// //         </section>
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }

// 'use client';

// import { useState } from "react";
// import Navbar from "./Navbar";
// import HeroSection from "./HeroSection";
// import ProjectsSection from "./ProjectsSection";
// import CertificationSection from "./CertificationSection";
// import ContactSection from "./ContactSection";
// import Footer from "./Footer";
// import FilterButton from "./FilterButton";
// import ExperienceSection from "./ExperienceSection";

// export default function ClientHome() {
//   const [filter, setFilter] = useState("All");
//   const filters = ["All", "Live", "Upcoming"];

//   return (
//     <>
//       <Navbar />
//       {/* Gradient background applied here – flows through all sections */}
//       <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
//         <HeroSection />               {/* HeroSection is now transparent */}
//         <ExperienceSection />

//         <section className="py-6 flex justify-center gap-3 flex-wrap">
//           {filters.map((f) => (
//             <FilterButton
//               key={f}
//               label={f}
//               isActive={filter === f}
//               onClick={() => setFilter(f)}
//             />
//           ))}
//         </section>

//         <section id="projects" className="scroll-mt-20">
//           <ProjectsSection filter={filter} />
//         </section>

//         <section id="certifications" className="scroll-mt-20">
//           <CertificationSection filter={filter} />
//         </section>

//         <section id="contact" className="scroll-mt-20">
//           <ContactSection />
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

'use client';

import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import CertificationSection from "./CertificationSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import FilterButton from "./FilterButton";
import ExperienceSection from "./ExperienceSection";

export default function ClientHome() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Live", "Upcoming"];

  return (
    <>
      <Navbar />
      {/* Main container with theme‑aware gradient background */}
      <main className="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-gradient-to-br from-gray-50 to-white dark:text-gray-100 text-gray-900">
        <HeroSection />
        <ExperienceSection />

        <section className="py-6 flex justify-center gap-3 flex-wrap">
          {filters.map((f) => (
            <FilterButton
              key={f}
              label={f}
              isActive={filter === f}
              onClick={() => setFilter(f)}
            />
          ))}
        </section>

        <section id="projects" className="scroll-mt-20">
          <ProjectsSection filter={filter} />
        </section>

        <section id="certifications" className="scroll-mt-20">
          <CertificationSection filter={filter} />
        </section>

        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}