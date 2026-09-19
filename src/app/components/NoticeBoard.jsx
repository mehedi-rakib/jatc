"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import PageHero from "./ui/PageHero";
import { notices, typeStyles } from "../data/notices";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function NoticeBoard() {
  // First notice open by default so the page never looks empty
  const [expanded, setExpanded] = useState(notices[0]?.id ?? null);

  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Notice Board"
        description="Admission dates, seminars and important updates from Japan Ambition Training Center."
        breadcrumbs={[{ label: "Notice" }]}
      />

      <section className="section mx-auto max-w-4xl px-6">
        {notices.length === 0 ? (
          <div className="rounded-3xl bg-[color:var(--surface)] p-12 text-center">
            <p className="text-[color:var(--muted)]">
              No notices right now — check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((notice, index) => {
              const open = expanded === notice.id;

              return (
                <motion.article
                  key={notice.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`overflow-hidden rounded-2xl bg-white shadow-soft ring-1
                              transition-shadow duration-300 hover:shadow-lift ${
                                open ? "ring-brand-200" : "ring-ink-100"
                              }`}>
                  <button
                    type="button"
                    onClick={() => setExpanded(open ? null : notice.id)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-4 p-5 text-left md:p-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase
                                      tracking-wider ring-1 ${
                                        typeStyles[notice.type] ??
                                        "bg-ink-50 text-ink-700 ring-ink-100"
                                      }`}>
                          {notice.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
                          <FaRegCalendarAlt className="h-3 w-3" />
                          {formatDate(notice.date)}
                        </span>
                      </div>

                      <h2 className="mt-3 text-lg font-bold text-ink-900 md:text-xl">
                        {notice.title}
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
                        <div className="border-t border-ink-100 px-5 py-5 md:px-6">
                          <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                            {notice.content}
                          </p>

                          {notice.link && (
                            <a
                              href={notice.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary mt-5 !px-5 !py-2.5 !text-xs">
                              Register Now
                              <FaExternalLinkAlt className="h-2.5 w-2.5" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
