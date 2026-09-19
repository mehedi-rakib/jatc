"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/** Fades each route in as it mounts, so navigation never snaps. */
export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
