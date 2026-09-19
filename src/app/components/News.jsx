"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaRegCalendarAlt } from "react-icons/fa";
import PageHero from "./ui/PageHero";
import { typeStyles } from "../data/notices";

const newsItems = [
  {
    id: 1,
    type: "Important",
    title: "Campus Closure Due to Weather",
    date: "2023-12-15",
    content:
      "Due to severe weather conditions, the campus will be closed on December 16th. All classes are cancelled. Stay safe!",
  },
  {
    id: 2,
    type: "Academic",
    title: "Fall Semester Registration Open",
    date: "2023-12-10",
    content:
      "Registration for the Fall 2024 semester is now open. Please log in to the student portal to select your courses.",
  },
  {
    id: 3,
    type: "Event",
    title: "Annual Science Fair",
    date: "2023-12-05",
    content:
      "Join us for the Annual Science Fair on January 15th, 2024. Showcase your projects and win exciting prizes!",
  },
  {
    id: 4,
    type: "Deadline",
    title: "Scholarship Application Due",
    date: "2023-12-01",
    content:
      "Reminder: The deadline for submitting scholarship applications is December 31st. Don't miss this opportunity!",
  },
];

const filters = ["All", "Important", "Academic", "Event", "Deadline"];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function News() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(newsItems[0]?.id ?? null);

  const visible =
    filter === "All"
      ? newsItems
      : newsItems.filter((item) => item.type === filter);

  return (
    <>
      <PageHero
        eyebrow="Updates"
        title="Important News"
        description="Everything happening at the center — closures, deadlines, events and academic updates."
        breadcrumbs={[{ label: "News" }]}
      />

      <section className="section mx-auto max-w-4xl px-6">
        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`relative rounded-full px-4 py-2 text-xs font-bold uppercase
                          tracking-wider transition-colors duration-300 ${
                            filter === option
                              ? "text-white"
                              : "text-ink-600 hover:text-brand-500"
                          }`}>
              {filter === option && (
                <motion.span
                  layoutId="news-filter"
                  className="absolute inset-0 rounded-full bg-brand-500"
                  transition={{ type: "spring", stiffness: 360, damping: 30 }}
                />
              )}
              <span className="relative">{option}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => {
              const open = expanded === item.id;

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`overflow-hidden rounded-2xl bg-white shadow-soft ring-1
                              transition-shadow duration-300 hover:shadow-lift ${
                                open ? "ring-brand-200" : "ring-ink-100"
                              }`}>
                  <button
                    type="button"
                    onClick={() => setExpanded(open ? null : item.id)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-4 p-5 text-left md:p-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase
                                      tracking-wider ring-1 ${
                                        typeStyles[item.type] ??
                                        "bg-ink-50 text-ink-700 ring-ink-100"
                                      }`}>
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
                          <FaRegCalendarAlt className="h-3 w-3" />
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <h2 className="mt-3 text-lg font-bold text-ink-900 md:text-xl">
                        {item.title}
                      </h2>
                    </div>

                    <span
                      className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full
                                  bg-ink-50 text-ink-600 transition-all duration-300 ${
                                    open ? "rotate-180 bg-brand-500 text-white" : ""
                                  }`}>
                      <FaChevronDown className="h-3 w-3" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden">
                        <p className="border-t border-ink-100 px-5 py-5 text-sm leading-relaxed text-[color:var(--muted)] md:px-6">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-[color:var(--muted)]">
            No {filter.toLowerCase()} items right now.
          </p>
        )}
      </section>
    </>
  );
}
