"use client";

import { motion } from "framer-motion";

/** Consistent, animated section header used across the site. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow">
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="heading mt-4">
        {title}
      </motion.h2>

      {/* Underline sweep */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-4 block h-1 w-20 origin-left rounded-full
                    bg-gradient-to-r from-brand-500 to-sun-500
                    ${centered ? "mx-auto" : ""}`}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className={`subheading ${centered ? "" : "ml-0"}`}>
          {description}
        </motion.p>
      )}
    </div>
  );
}
