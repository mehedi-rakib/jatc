"use client";

import { useState } from "react";
import { Input, Button, App } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { FaSearch, FaAward, FaRegFrown } from "react-icons/fa";
import PageHero from "../ui/PageHero";

// Demo records — swap for a real lookup when the results API is ready.
const studentResults = {
  LTC001: {
    name: "John Doe",
    fatherName: "Robert Doe",
    course: "Japanese Proficiency (N4)",
    passingYear: 2023,
    results: {
      Listening: "Advanced",
      Speaking: "Advanced",
      Reading: "Upper Intermediate",
      Writing: "Upper Intermediate",
    },
    overallScore: "B2",
  },
  LTC002: {
    name: "Jane Smith",
    fatherName: "William Smith",
    course: "Japanese Proficiency (N5)",
    passingYear: 2023,
    results: {
      Listening: "Intermediate",
      Speaking: "Upper Intermediate",
      Reading: "Intermediate",
      Writing: "Intermediate",
    },
    overallScore: "B1",
  },
};

export default function Result() {
  const { message } = App.useApp();
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const id = studentId.trim().toUpperCase();
    if (!id) {
      message.warning("Enter your Student ID first.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    const found = studentResults[id] ?? null;
    setResult(found);
    setSearched(true);
    setLoading(false);

    if (!found) message.error(`No results found for “${id}”.`);
  };

  return (
    <>
      <PageHero
        eyebrow="Student Portal"
        title="Check Your Result"
        description="Enter the Student ID printed on your admission slip to see your published course result."
        breadcrumbs={[{ label: "Students" }, { label: "Student Result" }]}
      />

      <section className="section mx-auto max-w-4xl px-6">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 md:p-8">
          <label
            htmlFor="student-id"
            className="block text-sm font-bold text-ink-900">
            Student ID
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Input
              id="student-id"
              size="large"
              placeholder="e.g. LTC001"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              onPressEnter={handleSearch}
              className="flex-1"
            />
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={handleSearch}
              icon={!loading && <FaSearch className="h-3 w-3" />}
              className="!h-11 !px-8 !font-bold">
              Search
            </Button>
          </div>
          <p className="mt-3 text-xs text-[color:var(--muted)]">
            Try <code className="rounded bg-ink-50 px-1.5 py-0.5">LTC001</code> or{" "}
            <code className="rounded bg-ink-50 px-1.5 py-0.5">LTC002</code> to see
            a sample result.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-ink-100">
              {/* Header band */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-ink-700 to-ink-800 p-6 md:p-8">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-sun-500">
                  <FaAward className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-extrabold !text-white md:text-2xl">
                    {result.name}
                  </h2>
                  <p className="mt-0.5 text-sm text-white/70">{result.course}</p>
                </div>
                <span className="ml-auto rounded-2xl bg-sun-500 px-4 py-2 text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-ink-900/70">
                    Overall
                  </span>
                  <span className="block font-display text-xl font-extrabold text-ink-900">
                    {result.overallScore}
                  </span>
                </span>
              </div>

              <div className="p-6 md:p-8">
                <dl className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["Father's Name", result.fatherName],
                    ["Course", result.course],
                    ["Passing Year", result.passingYear],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-[color:var(--surface)] p-4">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-[color:var(--muted)]">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold text-ink-900">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <h3 className="mt-8 text-lg font-bold">Skill-wise Proficiency</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {Object.entries(result.results).map(([skill, level], index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                      className="flex items-center justify-between rounded-2xl
                                 bg-[color:var(--surface)] px-5 py-4">
                      <span className="text-sm font-medium text-ink-800">
                        {skill}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        {level}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-7 border-t border-ink-100 pt-5 text-center text-xs text-[color:var(--muted)]">
                  This record certifies the language proficiency level achieved
                  by the student at Japan Ambition Training Center.
                </p>
              </div>
            </motion.div>
          )}

          {searched && !result && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 rounded-3xl bg-[color:var(--surface)] p-12 text-center">
              <FaRegFrown className="mx-auto h-8 w-8 text-ink-300" />
              <p className="mt-4 font-semibold text-ink-900">No result found</p>
              <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                Double-check your Student ID, or contact the office on 01715-458036.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
