import React from "react";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="bg-gradient-to-b w-full from-[#111111] to-black text-white py-24 px-6 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            See Our Vision in Action
          </h2>
          <p className="text-lg sm:text-xl text-silver max-w-2xl mx-auto leading-relaxed">
            Discover the intersection of research and technology as we pioneer 
            intelligent solutions designed to educate and transform industries.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative mx-auto max-w-[960px]"
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {/* Ambient glow behind the video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 via-amber-500/5 to-yellow-400/10 rounded-3xl blur-2xl opacity-60" />

          {/* Video frame */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-gray-300/20 bg-[#0a0a0a]"
            style={{
              boxShadow:
                "0 0 60px rgba(233, 69, 96, 0.05), 0 25px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/WtPkQEKQIbg?rel=0&modestbranding=1&color=white"
              title="Granville-Tech — See Our Vision in Action"
              className="w-full h-full"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Caption / CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-sm sm:text-base text-silver opacity-70 tracking-wide">
            Reimagining the future with every innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
