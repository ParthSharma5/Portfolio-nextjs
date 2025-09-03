'use client'; // ✅ MUST be at top

import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import CertificationSection from "./CertificationSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import FilterButton from "./FilterButton";


export default function ClientHome() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Live", "Upcoming"];

  return (
    <>
      <Navbar />

      <main className="bg-gray-900 text-gray-100 min-h-screen">
        <HeroSection />

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
