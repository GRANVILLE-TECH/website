import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

/**
 * InfiniteSlider
 * Smoothly scrolls a list of logo items horizontally on a seamless loop.
 *
 * Props:
 *  items   — array of { name, src }
 *  speed   — pixels per second (default 40)
 *  gap     — pixel gap between items (default 80)
 */
export default function InfiniteSlider({ items = [], speed = 40, gap = 80 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!ref.current) return;
    const sliderWidth = ref.current.scrollWidth / 2; // two copies of the list
    const nextX = x.get() - (speed * delta) / 1000;
    // Once we've scrolled one full copy, snap back silently
    x.set(nextX % -sliderWidth);
  });

  // Duplicate items for seamless wrapping
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={ref}
        style={{ x }}
        className="flex items-center will-change-transform"
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ marginRight: `${gap}px` }}
          >
            <img
              src={item.src}
              alt={`${item.name} logo`}
              className="h-5 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 invert"
              style={{ maxWidth: "100px" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
