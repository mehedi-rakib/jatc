"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaBars,
  FaUserGraduate,
} from "react-icons/fa";
import CustomMenu from "./Header/CustomMenu";
import MobileNav from "./Header/MobileNav";
import SearchButton from "./Header/SearchButton";
import { contactDetails } from "./Header/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Collapse the utility bar and tighten the header once the page scrolls
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  // Close the drawer if the viewport grows into desktop layout
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Utility bar — slides away as you scroll to reclaim vertical space */}
      <motion.div
        initial={false}
        animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="hidden overflow-hidden bg-ink-700 text-white lg:block">
        <div className="mx-auto flex h-10 max-w-[90rem] items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactDetails.hotline.replace(/-/g, "")}`}
              className="flex items-center gap-2 text-white transition-colors hover:text-sun-400">
              <FaPhoneAlt className="h-3 w-3" />
              Hotline: {contactDetails.hotline}
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-2 text-white transition-colors hover:text-sun-400">
              <FaEnvelope className="h-3 w-3" />
              {contactDetails.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white">{contactDetails.address}</span>
            <a
              href={contactDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-6 w-6 place-items-center rounded-full bg-white/15
                         text-white transition-colors hover:bg-[#1877f2]">
              <FaFacebookF className="h-2.5 w-2.5" />
            </a>
          </div>
        </div>
      </motion.div>

      <header
        className={`sticky top-0 z-[55] transition-all duration-300 ease-smooth ${
          scrolled
            ? "glass border-b border-ink-100 shadow-soft"
            : "border-b border-ink-100/70 bg-white"
        }`}>
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={false}
            animate={{ height: scrolled ? 64 : 80 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center"
              aria-label="Japan Ambition Training Center — home">
              <motion.span
                animate={{ scale: scrolled ? 0.88 : 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="origin-left">
                <Image
                  src="/logo.png"
                  alt="Japan Ambition Training Center"
                  width={200}
                  height={70}
                  priority
                  className="h-12 w-auto object-contain transition-transform
                             duration-300 group-hover:scale-105"
                />
              </motion.span>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Main navigation"
              className="hidden flex-1 justify-center xl:flex">
              <CustomMenu />
            </nav>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <SearchButton className="hidden sm:grid" />


              <Link href="/student-apply" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
                <FaUserGraduate className="h-3.5 w-3.5" />
                Apply Now
              </Link>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="grid h-10 w-10 place-items-center rounded-full bg-ink-50
                           text-ink-800 transition-colors hover:bg-brand-500
                           hover:text-white xl:hidden">
                <FaBars className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
