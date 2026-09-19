"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaQuoteLeft } from "react-icons/fa";
import PageHero from "../ui/PageHero";
import Reveal from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";

/** Shared profile layout for staff pages (instructor, coordinator, …). */
export default function ProfilePage({
  eyebrow,
  pageTitle,
  name,
  role,
  image,
  quote,
  bio = [],
  panels = [],
  highlights = [],
  breadcrumbs = [],
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={pageTitle}
        breadcrumbs={breadcrumbs}
        image={image}
      />

      <section className="section mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-[320px_1fr] lg:gap-14">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-ink-100">
              <div className="relative aspect-[4/5] bg-ink-50">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-white p-5 text-center">
                <h2 className="text-lg font-bold text-ink-900">{name}</h2>
                <p className="mt-1 text-sm font-medium text-brand-500">{role}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="left">
              {quote && (
                <blockquote className="relative rounded-2xl bg-[color:var(--surface)] p-6 pl-12">
                  <FaQuoteLeft className="absolute left-5 top-6 h-4 w-4 text-brand-500/40" />
                  <p className="text-base italic leading-relaxed text-ink-800">
                    {quote}
                  </p>
                </blockquote>
              )}

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--muted)]">
                {bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {panels.length > 0 && (
              <Stagger className="mt-9 grid gap-5 sm:grid-cols-2" stagger={0.12}>
                {panels.map((panel) => (
                  <StaggerItem key={panel.title}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="h-full rounded-2xl bg-white p-6 shadow-soft
                                 ring-1 ring-ink-100 transition-shadow duration-300
                                 hover:shadow-lift">
                      <h3 className="text-base font-bold text-ink-700">
                        {panel.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                        {panel.body}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </Stagger>
            )}

            {highlights.length > 0 && (
              <Reveal className="mt-9">
                <div className="rounded-3xl bg-ink-700 p-7 md:p-8">
                  <h3 className="font-display text-xl font-extrabold !text-white">
                    Key Highlights
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {highlights.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="flex items-start gap-3 text-sm text-white/85">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <FaCheck className="h-2.5 w-2.5" />
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal className="mt-9">
              <div className="rounded-3xl bg-[color:var(--surface)] p-7 text-center">
                <h3 className="text-lg font-bold">Ready to learn?</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Join the next intake and start your Japanese journey with us.
                </p>
                <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/student-apply" className="btn-primary">
                    Apply for Admission
                  </Link>
                  <Link href="/contact-us" className="btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
