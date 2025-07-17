import React from "react";
import { motion } from "framer-motion";
import oneness from "../assets/values/oneness.webp";
import excellence from "../assets/values/excellence.webp";
import innovation from "../assets/values/innovation.webp";
import legacy from "../assets/values/legacy.webp";
import creativity from "../assets/values/creativity.webp";

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
      <div className="flex flex-wrap justify-center gap-12 lg:gap-16 z-20">
        {/* Core Value 1 - Oneness */}
        <motion.div
          className="flex flex-col items-center justify-between w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-2rem)] lg:w-[calc(33%-2rem)] transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden border-2 border-transparent  bg-[#111111]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src={oneness}
            alt="Oneness"
            className="w-full h-[250px] object-cover rounded-t-lg shadow-md transition-all duration-300"
          />
          <div className="p-6 flex flex-col items-center text-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Oneness
            </h4>
            <p className="text-base sm:text-lg text-silver">
              Collaboration is key to success. We believe in unity, combining
              diverse minds to achieve extraordinary results
            </p>
          </div>
        </motion.div>

        {/* Core Value 2 - Innovation */}
        <motion.div
          className="flex flex-col items-center justify-between w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-2rem)] lg:w-[calc(33%-2rem)] transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden border-2 border-transparent  bg-[#111111]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <motion.img
            src={innovation}
            alt="Innovation"
            className="w-full h-[250px] object-cover rounded-t-lg shadow-md transition-all duration-300"
          />
          <div className="p-6 flex flex-col items-center text-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Innovation
            </h4>
            <p className="text-base sm:text-lg text-silver">
              We challenge the norm, pushing boundaries with innovative
              solutions that shape the future of technology
            </p>
          </div>
        </motion.div>

        {/* Core Value 3 - Legacy */}
        <motion.div
          className="flex flex-col items-center justify-between w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-2rem)] lg:w-[calc(33%-2rem)] transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden border-2 border-transparent  bg-[#111111]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <motion.img
            src={legacy}
            alt="Legacy"
            className="w-full h-[250px] object-cover rounded-t-lg shadow-md transition-all duration-300"
          />
          <div className="p-6 flex flex-col items-center text-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Legacy
            </h4>
            <p className="text-base sm:text-lg text-silver">
              Our efforts are geared towards leaving a lasting impact on
              history, shaping the future for generations to come
            </p>
          </div>
        </motion.div>

        {/* Core Value 4 - Creativity */}
        <motion.div
          className="flex flex-col items-center justify-between w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-2rem)] lg:w-[calc(33%-2rem)] transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden border-2 border-transparent  bg-[#111111]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
        >
          <motion.img
            src={creativity}
            alt="Creativity"
            className="w-full h-[250px] object-cover rounded-t-lg shadow-md transition-all duration-300"
          />
          <div className="p-6 flex flex-col items-center text-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Creativity
            </h4>
            <p className="text-base sm:text-lg text-silver">
              Embracing curiosity, we encourage thinking beyond the present to
              discover new horizons
            </p>
          </div>
        </motion.div>

        {/* Core Value 5 - Excellence */}
        <motion.div
          className="flex flex-col items-center justify-between w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-2rem)] lg:w-[calc(33%-2rem)] transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden border-2 border-transparent  bg-[#111111]"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
        >
          <motion.img
            src={excellence}
            alt="Excellence"
            className="w-full h-[250px] object-cover rounded-t-lg shadow-md transition-all duration-300"
          />
          <div className="p-6 flex flex-col items-center text-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Excellence
            </h4>
            <p className="text-base sm:text-lg text-silver">
              We hold ourselves to the highest standards, continually striving
              for excellence in every aspect of our work
            </p>
          </div>
        </motion.div>
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
