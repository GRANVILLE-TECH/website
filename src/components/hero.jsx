import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

// Granville-Tech brand colors
// Primary: #f59e0b (amber/gold) — from existing logo palette
// Accent:  #0ea5e9 (sky-blue) — tech/innovation feel
// Dark:    #000000 / #0a0a0a

export default function GranvilleHero() {
  const containerRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* ── SVG filter defs ───────────────────────────────────────── */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>

          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Granville gold gradient for accent text */}
          <linearGradient id="granville-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Animated mesh background ───────────────────────────────── */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#0ea5e9", "#0369a1", "#1e3a5f", "#f59e0b"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      {/* Wireframe overlay */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={["#000000", "#ffffff", "#0ea5e9", "#f59e0b"]}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />

      {/* ── Corner frame accents ───────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/20 z-20" />
      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white/20 z-20" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white/20 z-20" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/20 z-20" />

      {/* ── Hero copy — bottom-left ───────────────────────────────── */}
      <main className="absolute bottom-10 left-8 z-20 max-w-2xl">
        <div className="text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent rounded-full" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
              ✦ Driving Innovation with AI Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Animated gradient word */}
            <motion.span
              className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f59e0b 30%, #0ea5e9 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              Reimagining
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl">The Future</span>
            <span className="block font-light text-white/70 italic text-5xl md:text-6xl lg:text-7xl">of Intelligence</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            className="text-base lg:text-lg font-light text-white/60 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Pioneering transformative AI solutions that redefine industries and
            empower a smarter tomorrow across Africa and beyond.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button
              onClick={() => scrollToSection("innovations")}
              className="px-8 py-3.5 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-amber-400/50 hover:text-amber-100 cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Innovations
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-sky-500 text-white font-semibold text-sm transition-all duration-300 hover:from-amber-400 hover:to-sky-400 cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* ── Pulsing border accent — bottom-right ─────────────────── */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#f59e0b", "#fbbf24", "#0ea5e9", "#38bdf8", "#ffffff", "#fcd34d", "#7dd3fc"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spotsPerColor={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />

          {/* Rotating text ring */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path
                id="granville-ring"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text style={{ fontSize: "7px", fill: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
              <textPath href="#granville-ring" startOffset="0%">
                Granville-Tech • AI Solutions • Innovation • Africa •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="text-white text-[9px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/60"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}
