// import React from 'react';
// import ClientHome from '../components/ClientHome';

// const certifications = () =>{
//     return <ClientHome />;
// }

// export default certifications;
export const metadata = {
  title: "Certifications | Parth Sharma Portfolio",
  description: "Browse Parth Sharma’s frontend development certifications.",
};

import CertificationSection from "@/app/components/CertificationSection";

export default function CertificationPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen px-4 py-8">
      <CertificationSection filter="All" />
    </main>
  );
}
