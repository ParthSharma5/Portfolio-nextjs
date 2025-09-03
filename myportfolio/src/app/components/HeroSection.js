'use client';

import Image from "next/image";
import TypeHeading from "./TypeHeading";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="mb-15 bg-gray-900 text-gray-100 px-6 sm:px-10 md:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text (left) with slide-in animation */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypeHeading />
        </motion.div>

        {/* Image (right) with scale-in animation */}
        <motion.div
          className=" md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/my-profile.png"
            alt="Parth Sharma"
            width={300}
            height={300}
            className="rounded-full mt-15 object-cover shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
