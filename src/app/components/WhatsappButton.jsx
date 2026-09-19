"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { contactDetails } from "./Header/navigation";

/** Floating WhatsApp contact with a pulsing ring and a hover label. */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contactDetails.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-8 right-6 z-50 flex items-center gap-3">
      {/* Label reveals on hover (desktop only) */}
      <span
        className="hidden translate-x-3 rounded-full bg-ink-900 px-4 py-2 text-xs
                   font-semibold text-white opacity-0 shadow-lift transition-all
                   duration-300 ease-smooth group-hover:translate-x-0
                   group-hover:opacity-100 md:block">
        Chat with us
      </span>

      <span className="relative grid h-14 w-14 place-items-center">
        {/* Pulsing ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]"
        />
        {/* Solid brand-green disc with a crisp white vector glyph */}
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift">
          <FaWhatsapp className="h-8 w-8" />
        </span>
      </span>
    </motion.a>
  );
}
