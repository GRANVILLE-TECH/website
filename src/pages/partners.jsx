import React from "react";
import { motion } from "framer-motion";
import partner1 from "../assets/partners/cerfodes.webp";
import partner2 from "../assets/partners/foundation publisher.png";

export default function Partners() {
  const partners = [
    {
      name: "CERFODES",
      image: partner1,
      url: "https://cerfodes.com/",
    },
    {
      name: "Fountain Publishers",
      image: partner2,
      url: "https://www.fountainpublishers.co.ug/",
    },
  ];

  return (
    <section
      id="partners"
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

      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-transparent p-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-[250px] sm:w-[400px] md:w-[500px] h-[200px] invert-0 mx-auto object-contain opacity-80"
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
