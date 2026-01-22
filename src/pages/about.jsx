import React from "react";
import { motion } from "framer-motion";
// Images now imported within the component
import InteractiveSelector from "../components/InteractiveSelector";

export default function About() {
  return (
    <section
      className="bg-gradient-to-b w-[100%] from-black to-[#111111] text-white py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-[#0a0a0a] opacity-10 z-0"></div>

      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl text-center max-w-4xl mx-auto mb-20 z-20 text-silver leading-relaxed"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          }}
        >
          Granville-Tech is at the forefront of AI-driven innovation, empowering
          businesses with transformative solutions. Our team of experts develops
          cutting-edge AI technologies to solve real-world challenges and drive
          impactful change in industries across the globe
        </motion.p>
      </div>



      {/* Core Values Heading */}
      <motion.h3
        className="text-3xl sm:text-4xl font-semibold text-center text-white mb-16 z-20"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Our Core Values
      </motion.h3>

      {/* Core Values Grid */}
      {/* Core Values Grid replaced by InteractiveSelector */}
      <div className="z-20 w-full mb-20">
        <InteractiveSelector />
      </div>

      {/* Final Paragraph */}
      <motion.p
        className="text-2xl text-center max-w-7xl mt-20 mx-auto  z-20 text-silver leading-relaxed"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          type: "spring",
          stiffness: 80,
        }}
      >
        At Granville-Tech, we're not just creating products—we're crafting
        experiences that resonate, inspire, and transform. Each innovation is a
        testament to our dedication to pushing boundaries and redefining
        possibilities. We invite you to be a part of this exciting journey, to
        imagine alongside us, and to help shape a future where technology serves
        as a force for positive change
      </motion.p>
    </section>
  );
}
