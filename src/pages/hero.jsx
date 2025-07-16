import React from "react";
import { motion } from "framer-motion";
import bg_img from "../assets/ai_back.jpeg";
import Button from "../components/Button";

// Letter-by-letter animation helper function
// Note: Wrap the returned array in parentheses to avoid
// automatic semicolon insertion breaking the implicit return.
const letterByLetter = (text) => (
  Array.from(text).map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    >
      {char}
    </motion.span>
  ))
);

export default function Hero() {
  const scrollToInnovations = () => {
    const innovationsSection = document.getElementById("innovations");
    if (innovationsSection) {
      innovationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1)), url(${bg_img})`,
      }}
    >
      {/* Background Overlay for Contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 space-y-8">
        {/* Main Heading with Framer Motion letter-by-letter animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight text-white sm:tracking-wider text-center break-words"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {letterByLetter("Reimagining the future with every innovation")}
        </motion.h1>

        {/* Subheading with fade-in and slide-up animation */}
        <motion.h2
          className="text-lg sm:text-xl lg:text-2xl text-white font-medium mb-8 opacity-70 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Revolutionizing industries with intelligent solutions that unlock
          limitless potential
        </motion.h2>

        {/* Description Text with fade-in animation */}
        <motion.p
          className="text-base sm:text-lg mb-8 max-w-xl text-white font-light sm:max-w-3xl mx-auto tracking-wider opacity-65"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Granville-Tech leverages cutting-edge AI technology to bring
          transformative solutions, designed to elevate businesses and drive
          success in the digital age
        </motion.p>

        {/* Button with fade-in effect and slight scaling on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Button
            text="Start Your Journey"
            className="hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={scrollToInnovations} 
          />
        </motion.div>
      </div>

      {/* Optional Background Gradient for Depth */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-[#1a1a1a] to-[#0a192f] opacity-30"></div>
      </div>
    </section>
  );
}
