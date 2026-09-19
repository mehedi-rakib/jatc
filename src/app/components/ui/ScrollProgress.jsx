"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin reading-progress bar pinned under the header. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left
                 bg-gradient-to-r from-brand-500 via-sun-500 to-sky-500"
    />
  );
}
