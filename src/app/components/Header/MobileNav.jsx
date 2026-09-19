"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { menuItems, contactDetails } from "./navigation";

/** Slide-in mobile drawer with accordion submenus and a scroll lock. */
export default function MobileNav({ open, onClose }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(null);

  // Lock the page behind the drawer while it is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes the drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-ink-900/50 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="fixed right-0 top-0 z-[80] flex h-full w-[85%] max-w-sm flex-col
                       bg-white shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Japan Ambition Training Center"
                  width={150}
                  height={52}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink-50
                           text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-500">
                <FaTimes />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.035,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block rounded-xl px-4 py-3 text-sm font-semibold
                                    uppercase tracking-wide transition-colors ${
                                      isActive(item.href)
                                        ? "bg-brand-50 text-brand-600"
                                        : "text-ink-800 hover:bg-ink-50"
                                    }`}>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setExpanded(expanded === item.key ? null : item.key)
                          }
                          aria-expanded={expanded === item.key}
                          className="flex w-full items-center justify-between rounded-xl
                                     px-4 py-3 text-sm font-semibold uppercase tracking-wide
                                     text-ink-800 transition-colors hover:bg-ink-50">
                          {item.label}
                          <FaChevronDown
                            className={`h-3 w-3 transition-transform duration-300 ${
                              expanded === item.key ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {expanded === item.key && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden">
                              <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-brand-100 pl-3">
                                {item.children.map((child) => (
                                  <li key={child.key}>
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className={`block rounded-lg px-3 py-2.5 text-sm
                                                  transition-colors ${
                                                    isActive(child.href)
                                                      ? "text-brand-600"
                                                      : "text-ink-600 hover:text-brand-500"
                                                  }`}>
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-ink-100 bg-ink-50/60 px-5 py-5">
              <a
                href={`tel:${contactDetails.hotline.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-sm font-semibold text-ink-800">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
                  <FaPhoneAlt className="h-3.5 w-3.5" />
                </span>
                {contactDetails.hotline}
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-3 text-sm text-ink-700">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-700 text-white">
                  <FaEnvelope className="h-3.5 w-3.5" />
                </span>
                {contactDetails.email}
              </a>
              <Link
                href="/student-apply"
                onClick={onClose}
                className="btn-primary w-full">
                Apply for Admission
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
