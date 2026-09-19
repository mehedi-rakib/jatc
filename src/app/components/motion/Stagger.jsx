"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Staggered container — children rendered with <StaggerItem> animate in
 * one after another as the group scrolls into view.
 */
export function Stagger({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
  amount = 0.15,
  once = true,
  ...rest
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : stagger,
            delayChildren: reduce ? 0 : delay,
          },
        },
      }}
      {...rest}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  distance = 24,
  ...rest
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : distance },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...rest}>
      {children}
    </motion.div>
  );
}

export default Stagger;
