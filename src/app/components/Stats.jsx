"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaStar } from "react-icons/fa";
import CountUp from "./motion/CountUp";

const stats = [
  { icon: FaUserGraduate, value: 2500, suffix: "+", label: "Students Trained" },
  { icon: FaChalkboardTeacher, value: 12, suffix: "+", label: "Expert Instructors" },
  { icon: FaBookOpen, value: 3, suffix: "", label: "Course Tracks" },
  { icon: FaStar, value: 98, suffix: "%", label: "Student Satisfaction" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-700 py-14 md:py-16">
      {/* Decorative rising-sun rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full
                   border-[24px] border-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full
                   border-[20px] border-brand-500/10"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center">
              <div
                className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl
                           bg-white/10 text-sun-500 backdrop-blur-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1.5 text-sm text-white/70">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
