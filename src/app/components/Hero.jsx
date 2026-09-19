"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserGraduate,
  FaPhoneAlt,
} from "react-icons/fa";

const SLIDE_MS = 6500;

const slides = [
  {
    image: "/images/slider-1.jpg",
    eyebrow: "日本語を学ぼう",
    title: "Study and Work in Japan",
    description:
      "Build the language skills, confidence and cultural know-how you need to live, study and work in Japan.",
    primary: { label: "Apply for Admission", href: "/student-apply" },
    secondary: { label: "Explore Courses", href: "/long-course" },
  },
  {
    image: "/images/slider-2.jpg",
    eyebrow: "Welcome",
    title: "Japan Ambition Training Center",
    description:
      "A leading Japanese language institute in Bangladesh — quality teaching, friendly instructors, affordable fees.",
    primary: { label: "Start Learning", href: "/short-course" },
    secondary: { label: "Talk to Us", href: "/contact-us" },
  },
  {
    image: "/images/slider-4.jpg",
    eyebrow: "JLPT Ready",
    title: "Pass the JLPT with Confidence",
    description:
      "Structured N5–N3 preparation, weekly mock tests and one-to-one feedback from experienced instructors.",
    primary: { label: "Try a Practice Test", href: "/test/1" },
    secondary: { label: "See Results", href: "/student-result" },
  },
];

const textVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const touchStart = useRef(null);

  const goTo = useCallback((next) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay — pauses on hover/focus and when the tab is hidden
  useEffect(() => {
    if (paused || reduce) return;
    const timer = setTimeout(next, SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, paused, reduce, next]);

  // Arrow keys move between slides
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 60) (delta < 0 ? next : prev)();
        touchStart.current = null;
      }}
      className="relative h-[520px] w-full overflow-hidden bg-ink-900
                 md:h-[600px] lg:h-[660px]">
      {/* Background image with a slow Ken Burns drift */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0">
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${reduce ? "" : "animate-ken-burns"}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility scrim — dark on the left where the copy sits */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/65
                   to-ink-900/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t
                   from-ink-900/70 to-transparent"
        aria-hidden="true"
      />

      {/* Copy */}
      <div className="relative z-10 mx-auto flex h-full max-w-[90rem] items-center px-6 lg:px-12">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/25
                           bg-white/10 px-4 py-1.5 text-xs font-bold uppercase
                           tracking-[0.2em] text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {slide.eyebrow}
              </span>

              <h1
                className="mt-5 font-display text-4xl font-extrabold leading-[1.08]
                           text-white drop-shadow-sm md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={slide.primary.href} className="btn-primary">
                  <FaUserGraduate className="h-4 w-4" />
                  {slide.primary.label}
                </Link>
                <Link href={slide.secondary.href} className="btn-ghost">
                  {slide.secondary.label}
                </Link>
              </div>

              <a
                href="tel:01715458036"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/75
                           transition-colors hover:text-sun-500">
                <FaPhoneAlt className="h-3 w-3" />
                Questions? Call 01715-458036
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / next — grouped bottom-right so they never overlap the copy */}
      <div className="absolute bottom-24 right-6 z-20 hidden items-center gap-2.5 md:flex lg:right-12">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25
                     bg-white/10 text-white backdrop-blur-sm transition-all duration-300
                     hover:bg-white hover:text-ink-900">
          <FaChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25
                     bg-white/10 text-white backdrop-blur-sm transition-all duration-300
                     hover:bg-white hover:text-ink-900">
          <FaChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Progress dots — the active one fills as the timer runs */}
      <div className="absolute bottom-5 left-6 z-20 flex items-center gap-2.5 md:bottom-24 lg:left-12">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === index}
            className="group relative h-1.5 overflow-hidden rounded-full bg-white/30
                       transition-all duration-300"
            style={{ width: i === index ? 48 : 20 }}>
            {i === index && (
              <motion.span
                key={`${index}-${paused}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused || reduce ? 1 : 1 }}
                transition={{
                  duration: paused || reduce ? 0.3 : SLIDE_MS / 1000,
                  ease: "linear",
                }}
                className="absolute inset-0 origin-left rounded-full bg-brand-500"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
