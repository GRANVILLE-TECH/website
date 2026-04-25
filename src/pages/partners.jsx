import { motion } from "framer-motion";
import { LogoCarousel } from "../components/LogoCarousel";
import partner1 from "../assets/partners/cerfodes.webp";
import partner2 from "../assets/partners/GAIMESVG.svg";

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "CERFODES",
      src: partner1,
      url: "https://cerfodes.com/",
    },
    {
      id: 2,
      name: "GAIME Conference",
      src: partner2,
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
        OUR CLIENTS
      </motion.h2>

      <div className="w-full">
        <LogoCarousel logos={partners} columns={2} />
      </div>
    </section>
  );
}
