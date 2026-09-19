"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal. Wraps any block and fades/slides it into view once.
 * Falls back to a plain fade when the visitor prefers reduced motion.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  once = true,
  amount = 0.2,
  className = "",
  as = "div",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  const offset = reduce
    ? { x: 0, y: 0 }
    : {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
      }[direction] ?? { x: 0, y: distance };

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: reduce ? 0.2 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}>
      {children}
    </MotionTag>
  );
}
