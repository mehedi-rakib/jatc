"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

/**
 * Banner used at the top of every inner page: title, short blurb and a
 * breadcrumb trail so visitors always know where they are.
 */
export default function PageHero({
  title,
  description,
  eyebrow,
  breadcrumbs = [],
  image = "/images/slider-2.jpg",
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      {/* Background image, heavily dimmed so text stays readable */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-800/70"
        aria-hidden="true"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full
                   border-[26px] border-brand-500/10"
      />

      <div className="relative mx-auto max-w-[90rem] px-6 py-14 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          {eyebrow && (
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/20
                         bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase
                         tracking-[0.2em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </span>
          )}

          <h1 className="mt-4 font-display text-3xl font-extrabold !text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>
          )}

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mt-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <FaChevronRight className="h-2 w-2" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
