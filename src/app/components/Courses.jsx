"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaUsers, FaUserTie } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";

const courses = [
  {
    title: "Long Intensive Course",
    href: "/long-course",
    icon: FaClock,
    duration: "6–12 months",
    level: "Beginner → N3",
    accent: "from-brand-500 to-brand-700",
    description:
      "Master Japanese step by step: speaking, pronunciation, listening, reading and writing, with weekly homework and corrections.",
    points: ["Structured syllabus", "Weekly assessments", "JLPT preparation"],
  },
  {
    title: "Short Intensive Course",
    href: "/short-course",
    icon: FaUsers,
    duration: "6–12 weeks",
    level: "Beginner → N5",
    accent: "from-sky-500 to-ink-700",
    description:
      "Fast-track the essentials. Perfect if you need conversational Japanese quickly for work, travel or an upcoming interview.",
    points: ["Daily practice", "Conversation focus", "Small batches"],
    featured: true,
  },
  {
    title: "Private Course",
    href: "/private-course",
    icon: FaUserTie,
    duration: "Flexible",
    level: "Any level",
    accent: "from-sun-500 to-sun-600",
    description:
      "One-to-one lessons shaped entirely around your goals, your schedule and the pace that works for you.",
    points: ["One-to-one", "Choose your hours", "Tailored syllabus"],
  },
];

export default function Courses() {
  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[90rem] px-4 lg:px-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Find the Course That Fits You"
          description="Three tracks, one goal — getting you fluent, confident and ready for Japan."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl
                            bg-white p-7 shadow-soft transition-shadow duration-300
                            hover:shadow-lift ${
                              course.featured ? "ring-2 ring-brand-500" : "ring-1 ring-ink-100"
                            }`}>
                {course.featured && (
                  <span
                    className="absolute right-5 top-5 rounded-full bg-brand-500 px-3 py-1
                               text-[10px] font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}

                {/* Accent gradient bar that widens on hover */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${course.accent}
                              origin-left scale-x-0 transition-transform duration-500
                              ease-smooth group-hover:scale-x-100`}
                />

                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br
                              ${course.accent} text-white shadow-soft transition-transform
                              duration-300 ease-spring group-hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink-900">
                  {course.title}
                </h3>

                <div className="mt-2.5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-ink-50 px-3 py-1 text-[11px] font-semibold text-ink-600">
                    {course.duration}
                  </span>
                  <span className="rounded-full bg-ink-50 px-3 py-1 text-[11px] font-semibold text-ink-600">
                    {course.level}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  {course.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {course.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-ink-700">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[10px] text-emerald-600">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={course.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold
                             text-brand-500 transition-all duration-300 hover:gap-3">
                  View course details
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
