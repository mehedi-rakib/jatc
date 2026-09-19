"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaPhoneAlt } from "react-icons/fa";
import PageHero from "../ui/PageHero";
import Reveal from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";
import { contactDetails } from "../Header/navigation";

/**
 * Shared layout for the three course pages — keeps them visually consistent
 * while each one supplies its own copy through props.
 */
export default function CourseTemplate({
  eyebrow,
  title,
  intro,
  body,
  facts = [],
  modules = [],
  outcomes = [],
  breadcrumbs = [],
  image,
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={breadcrumbs}
        image={image}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/student-apply" className="btn-primary">
            Enroll Now
          </Link>
          <a
            href={`tel:${contactDetails.hotline.replace(/-/g, "")}`}
            className="btn-ghost">
            <FaPhoneAlt className="h-3 w-3" />
            {contactDetails.hotline}
          </a>
        </div>
      </PageHero>

      {/* Quick facts strip */}
      {facts.length > 0 && (
        <div className="border-b border-ink-100 bg-[color:var(--surface)]">
          <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-6 px-6 py-8 lg:grid-cols-4 lg:px-12">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="text-center lg:text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[color:var(--muted)]">
                  {fact.label}
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-ink-900">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <section className="section mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-base leading-[1.85] text-[color:var(--muted)] md:text-lg">
            {body}
          </p>
        </Reveal>

        {/* Modules */}
        {modules.length > 0 && (
          <>
            <Reveal className="mt-14">
              <h2 className="heading">Course Modules</h2>
              <span className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-sun-500" />
            </Reveal>

            <Stagger className="mt-8 grid gap-6 md:grid-cols-2" stagger={0.1}>
              {modules.map((module, index) => (
                <StaggerItem key={module.title}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group h-full rounded-3xl bg-white p-7 shadow-soft
                               ring-1 ring-ink-100 transition-shadow duration-300
                               hover:shadow-lift">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50
                                 font-display text-base font-extrabold text-brand-600
                                 transition-transform duration-300 ease-spring
                                 group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink-900">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                      {module.body}
                    </p>
                    <Link
                      href="/student-apply"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold
                                 text-brand-500 transition-all duration-300 hover:gap-3">
                      Start this module
                      <FaArrowRight className="h-3 w-3" />
                    </Link>
                  </motion.article>
                </StaggerItem>
              ))}
            </Stagger>
          </>
        )}

        {/* Outcomes */}
        {outcomes.length > 0 && (
          <Reveal className="mt-14">
            <div className="rounded-3xl bg-ink-700 p-8 md:p-10">
              <h2 className="font-display text-2xl font-extrabold !text-white md:text-3xl">
                What You Will Learn
              </h2>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {outcomes.map((outcome, index) => (
                  <motion.li
                    key={outcome}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <FaCheck className="h-2.5 w-2.5" />
                    </span>
                    {outcome}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {/* Closing CTA */}
        <Reveal className="mt-14 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to begin?</h2>
          <p className="mt-3 text-[color:var(--muted)]">
            Seats are limited each intake — apply online in a couple of minutes.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/student-apply" className="btn-primary">
              Apply for Admission
            </Link>
            <Link href="/contact-us" className="btn-outline">
              Ask a Question
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
