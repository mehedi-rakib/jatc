"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaRegNewspaper,
  FaRegClock,
  FaClipboardList,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    title: "News",
    href: "/news",
    icon: FaRegNewspaper,
    accent: "bg-sun-500",
    iconColor: "text-sun-500",
    description:
      "Learn the easiest method of learning the Japanese language successfully.",
  },
  {
    title: "Schedule",
    href: "/long-course",
    icon: FaRegClock,
    accent: "bg-brand-500",
    iconColor: "text-brand-500",
    description:
      "Morning, day and evening shifts so every student finds a slot that fits.",
  },
  {
    title: "Notice Board",
    href: "/notice",
    icon: FaClipboardList,
    accent: "bg-ink-700",
    iconColor: "text-ink-700",
    description:
      "Admission is going on. Contact our program coordinator to apply today.",
  },
  {
    title: "Achieve",
    href: "/student-result",
    icon: FaAward,
    accent: "bg-sky-500",
    iconColor: "text-sky-500",
    description:
      "Results for finished courses have been published — check yours now.",
  },
];

export default function Features() {
  return (
    <div className="relative z-20 mx-auto mt-6 max-w-[90rem] px-4 md:mt-10 lg:px-12">
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pt-12">
              <Link
                href={feature.href}
                className="group block focus:outline-none">
                {/* Floating icon badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  className="absolute left-1/2 top-0 z-20 grid h-24 w-24 -translate-x-1/2
                             place-items-center rounded-full bg-white shadow-lift
                             ring-1 ring-ink-100">
                  <Icon className={`h-10 w-10 ${feature.iconColor}`} />
                </motion.div>

                <div
                  className={`${feature.accent} relative overflow-hidden rounded-2xl px-6
                              pb-7 pt-16 text-center shadow-soft transition-all
                              duration-300 ease-smooth group-hover:-translate-y-1.5
                              group-hover:shadow-lift`}>
                  {/* Sheen that sweeps across on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full
                               bg-gradient-to-r from-transparent via-white/25
                               to-transparent transition-transform duration-700
                               ease-smooth group-hover:translate-x-full"
                  />

                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {feature.description}
                  </p>

                  <span
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold
                               uppercase tracking-wider text-white/90
                               transition-all duration-300 group-hover:gap-3">
                    Learn more
                    <FaArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
