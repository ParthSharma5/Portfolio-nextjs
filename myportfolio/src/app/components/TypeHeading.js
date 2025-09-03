'use client';

import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function TypeHeading() {
  const [showTitle, setShowTitle] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "A Software Developer",
    "A React Native Developer",
    "A React Developer",
  ];

  // Loop through each title after delay
  useEffect(() => {
    if (showTitle) {
      const interval = setInterval(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 3000); // change title every 3 sec

      return () => clearInterval(interval);
    }
  }, [showTitle]);

  return (
    <section className="mt-12 mb-16 px-4 sm:px-8 md:px-16">
      {/* Name Typing */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-4 flex flex-wrap gap-2">
        <span>Hi,</span>
        <span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" I'm Parth Sharma")
                .pauseFor(1000)
                .callFunction(() => {
                  setShowTitle(true);
                })
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 70,
              cursor: "|",
            }}
          />
        </span>
      </h1>

      {showTitle && (
        <p className="text-xl sm:text-2xl text-gray-400 min-h-[48px]">
          <Typewriter
            key={titleIndex} 
            options={{
              strings: [titles[titleIndex]],
              autoStart: true,
              loop: false,
              delay: 60,
              deleteSpeed: 0,
              cursor: "|",
            }}
          />
        </p>
      )}
    </section>
  );
}
