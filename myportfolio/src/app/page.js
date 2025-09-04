
// ✅ DO NOT use 'use client' here

export const metadata = {
  title: "Parth Sharma | Frontend Developer Portfolio",
  description: "Explore Parth Sharma's projects, certifications, and skills.",
  keywords: ["Parth Sharma", "Frontend Developer", "React Developer","Nextjs Developer"],
};

import ClientHome from "./components/ClientHome";

export default function Home() {
  return <ClientHome />;
}
