"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake, FaArrowRight } from "react-icons/fa";
import PageHero from "../ui/PageHero";
import Reveal from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";
import CountUp from "../motion/CountUp";

const values = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    body: "To make high-quality Japanese language education accessible to every Bangladeshi student, at a fee they can genuinely afford.",
    color: "bg-brand-500",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    body: "A generation of confident, fluent speakers who can study, work and build a life in Japan on their own terms.",
    color: "bg-ink-700",
  },
  {
    icon: FaHandshake,
    title: "Our Promise",
    body: "Small batches, patient instructors and an extraordinary learning method that keeps every student progressing.",
    color: "bg-sky-500",
  },
];

const milestones = [
  { value: 2500, suffix: "+", label: "Students trained" },
  { value: 12, suffix: "+", label: "Expert instructors" },
  { value: 98, suffix: "%", label: "Would recommend us" },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Japan Ambition Training Center"
        description="One of the leading Japanese language training centers in Bangladesh — built around how our students actually learn."
        breadcrumbs={[{ label: "About Us" }]}
        image="/images/aboutImg.png"
      />

      {/* Story */}
      <section className="section mx-auto max-w-[90rem] px-4 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <Image
                src="/images/aboutImg.png"
                alt="Learning Japanese at Japan Ambition Training Center"
                width={900}
                height={700}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-auto w-full object-cover transition-transform duration-700
                           ease-smooth hover:scale-[1.04]"
              />
            </div>
          </Reveal>

          <Reveal direction="left">
            <span className="eyebrow">Our Story</span>
            <h2 className="heading mt-4">
              An easier way to learn Japanese
            </h2>
            <span className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-sun-500" />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--muted)]">
              <p>
                Japan Ambition Training Center is one of the leading Japanese
                language training centers in Bangladesh. It offers an easy
                learning method for Bangladeshi students, with courses designed
                especially around how they study.
              </p>
              <p>
                The center uses an extraordinary learning method that makes every
                student eloquent in Japanese. This approach consistently produces
                the highest skill levels in the language.
              </p>
              <p>
                At the same time, Japan Ambition Training Center keeps course
                fees suitable for students right across Bangladesh — quality
                teaching should never be out of reach.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {milestones.map((milestone) => (
                <div key={milestone.label}>
                  <p className="font-display text-2xl font-extrabold text-brand-500 md:text-3xl">
                    <CountUp to={milestone.value} suffix={milestone.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[color:var(--surface)]">
        <div className="mx-auto max-w-[90rem] px-4 lg:px-12">
          <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.12}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group h-full rounded-3xl bg-white p-8 shadow-soft
                               ring-1 ring-ink-100 transition-shadow duration-300
                               hover:shadow-lift">
                    <div
                      className={`${value.color} grid h-14 w-14 place-items-center
                                  rounded-2xl text-white shadow-soft transition-transform
                                  duration-300 ease-spring group-hover:scale-110
                                  group-hover:-rotate-6`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-ink-900">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                      {value.body}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal className="mt-12 text-center">
            <Link href="/student-apply" className="btn-primary group">
              Join the Next Intake
              <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
