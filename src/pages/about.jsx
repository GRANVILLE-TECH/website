import React from "react";
import { motion } from "framer-motion";
// Images now imported within the component
import InteractiveSelector from "../components/InteractiveSelector";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      className="bg-gradient-to-b w-[100%] from-black to-[#111111] text-white py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-[#0a0a0a] opacity-10 z-0"></div>

      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-[url('https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=900&auto=format&fit=crop&q=60')] bg-[length:200%_auto] animate-text-shimmer opacity-90"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          {t('about.title')}
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl text-center max-w-4xl mx-auto mb-20 z-20 text-silver leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('about.description')}
        </motion.p>
      </div>

      {/* Core Values Heading */}
      <motion.h3
        className="text-3xl sm:text-5xl font-bold text-center uppercase mb-16 z-20 text-transparent bg-clip-text bg-[url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=900&auto=format&fit=crop&q=60')] bg-[length:200%_auto] animate-text-shimmer opacity-80"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {t('about.coreValues')}
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
        {t('about.finalParagraph')}
      </motion.p>
    </section>
  );
}
