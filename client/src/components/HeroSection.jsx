import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero.png";
import NovImage from "../assets/November.png";


const HeroSection = () => {
  const highlights = [
    "Affordable Tuition Programs",
    "Proven Student Results",
    "Expert & Supportive Tutors",
  ];

  return (
    <section
      className="h-[95vh] flex flex-col items-center justify-center text-center px-6 relative"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-gray-900/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Top Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-base tracking-widest uppercase text-red-400 font-semibold mb-2 mt-24"
        >
          Peak Performance Tutoring
        </motion.h2>
        <p className="text-gray-400 text-xs md:text-sm mb-6">
          Over 300 students mentored • Proven strategies • Trusted by parents
        </p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
        >
          Student <span className="text-red-500">Enrollment</span> & Payments
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-6 text-lg md:text-xl">
          Parents can register their students for tuition programs or make
          secure payments — all in one place.
        </p>

        {/* CTA Button */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300"
        >
          Learn More About Us
        </motion.a>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full max-w-2xl">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base"
            >
              <FiCheckCircle className="text-red-500 text-lg" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-10 italic text-gray-300 text-sm md:text-base max-w-xl"
        >
          “Education is the most powerful weapon which you can use to change the
          world.” – Nelson Mandela
        </motion.blockquote>

        {/* Bible Verse */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-4 text-gray-400 text-xs md:text-sm"
        >
          “The heart of the discerning acquires knowledge, for the ears of the
          wise seek it out.” – Proverbs 18:15
        </motion.p>

        {/* Scroll Hint */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-gray-400 italic text-sm md:text-base mb-2">
            Scroll down to get started
          </p>
          <div className="animate-bounce text-red-500 text-3xl">↓</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
