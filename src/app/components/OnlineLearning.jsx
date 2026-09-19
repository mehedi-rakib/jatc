"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBookOpen, FaGraduationCap, FaUniversity, FaArrowRight } from "react-icons/fa";
import Reveal from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";

const pillars = [
  {
    icon: FaBookOpen,
    color: "bg-sky-500",
    title: "Special Education",
    body: "Personalised Japanese courses with adaptive methods that support every learner's pace and confidence.",
  },
  {
    icon: FaGraduationCap,
    color: "bg-emerald-500",
    title: "Honors Classes",
    body: "Advanced training for top students, focused on complex grammar, fluency and exam preparation.",
  },
  {
    icon: FaUniversity,
    color: "bg-brand-500",
    title: "Traditional Academies",
    body: "A structured curriculum balancing reading, writing, speaking and listening for steady progress.",
  },
];

export default function OnlineLearning() {
  return (
    <section className="section mx-auto max-w-[90rem] px-4 lg:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image with a soft parallax-style float */}
        <Reveal direction="right" className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/aboutImg.png"
              alt="Students learning Japanese at Japan Ambition Training Center"
              width={900}
              height={700}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-full object-cover transition-transform duration-700
                         ease-smooth hover:scale-[1.04]"
            />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-white p-5
                       shadow-lift ring-1 ring-ink-100 md:block lg:-right-6">
            <p className="font-display text-3xl font-extrabold text-brand-500">N5–N3</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">
              JLPT Levels Covered
            </p>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal direction="left">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading mt-4">
              The Best Language Learning Platform
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Japan Ambition Training Center offers an easy learning method built
              for Bangladeshi students — every course is designed around how our
              learners actually study, work and progress.
            </p>
          </Reveal>

          <Stagger className="mt-9 space-y-6" stagger={0.12}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="group flex items-start gap-4">
                    <div
                      className={`${pillar.color} grid h-12 w-12 shrink-0 place-items-center
                                  rounded-2xl text-white shadow-soft transition-transform
                                  duration-300 ease-spring group-hover:scale-110
                                  group-hover:-rotate-6`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink-900">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted)]">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.2} className="mt-9">
            <Link href="/about-us" className="btn-outline group">
              More About the Center
              <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
