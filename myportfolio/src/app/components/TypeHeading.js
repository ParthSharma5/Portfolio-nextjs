


'use client';

import Typewriter from 'typewriter-effect';

export default function TypeHeading() {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 mb-16 px-4">
      <div className="max-w-2xl">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Parth Sharma
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-medium mb-2 min-h-[40px]">
          <Typewriter
            options={{
              strings: [
                'Software Developer',
                'React Native Developer', 
                'Full Stack Developer'
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 50,
            }}
          />
        </div>

        <p className="text-gray-400 text-lg">
          I create web and mobile applications
        </p>

      </div>
    </section>
  );
}