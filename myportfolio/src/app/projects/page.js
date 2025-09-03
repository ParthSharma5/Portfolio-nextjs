// import React from 'react';
// import ClientHome from '../components/ClientHome';
// import ProjectsSection from '../components/ProjectsSection';

// const projects = () =>{
//     return <ClientHome />;
// }
// export default projects;
export const metadata = {
  title: "Projects | Parth Sharma Portfolio",
  description:
    "Explore Parth Sharma's frontend projects using React, Next.js and Tailwind CSS.",
};

import ProjectsSection from "@/app/components/ProjectsSection";

export default function ProjectPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen px-4 py-8">
      <ProjectsSection filter="All" />
    </main>
  );
}
