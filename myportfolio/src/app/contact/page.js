
import React from 'react';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-10">
        {/* <ContactSection /> */}
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>You can email me at: 
        <a 
          href="mailto:your@email.com" 
          className="text-blue-400 underline ml-2"
        >
          parth.scse@gmail.com
        </a>
      </p>
    </main>
  );
}
