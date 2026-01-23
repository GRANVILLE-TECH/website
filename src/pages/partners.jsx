import React from "react";
import { motion } from "framer-motion";
import partner1 from "../assets/partners/cerfodes.webp";
import partner2 from "../assets/partners/GAIMESVG.svg";
export default function Partners() {
  const partners = [
    {
      name: "CERFODES",
      image: partner1,
      url: "https://cerfodes.com/",
    },
    {
      name: "GAIME Conference",
      image: partner2,
      url: "https://www.gaimeconference.ai/en/partners",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b w-[100%] from-black to-[#111111] text-white py-20 px-8 md:pr-20 pr-6  sm:pr-16 relative overflow-hidden"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="text-4xl sm:text-5xl lg:text-5xl text-center font-extrabold mb-12 text-white"
      >
        Our Trusted Partners
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-12 items-center">
        {partners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-transparent p-8 rounded-lg transition-all duration-300">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
