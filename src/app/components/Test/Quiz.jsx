"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaTimes,
  FaRedo,
  FaPlay,
} from "react-icons/fa";
import PageHero from "../ui/PageHero";
import { getResultComment } from "../../data/jlptTests";

/**
 * Shared JLPT practice quiz.
 *
 * Answers are stored per question index, so the score is derived once at the
 * end — going back and changing an answer can never double-count.
 */
export default function Quiz({ testId, title, level, description, questions }) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [finished, setFinished] = useState(false);

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question, index) =>
          answers[index] === question.answer ? total + 1 : total,
        0
      ),
    [answers, questions]
  );

  const percentage = Math.round((score / questions.length) * 100);
  const selected = answers[current];
  const isLast = current === questions.length - 1;

  const select = (option) =>
    setAnswers((prev) => ({ ...prev, [current]: option }));

  const next = () => {
    if (!selected) return;
    if (isLast) {
      setFinished(true);
      return;
    }
    setDirection(1);
    setCurrent((c) => c + 1);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const reset = () => {
    setCurrent(0);
    setAnswers({});
    setFinished(false);
    setDirection(1);
  };

  const progress = finished
    ? 100
    : Math.round((current / questions.length) * 100);

  return (
    <>
      <PageHero
        eyebrow={`${level} Practice`}
        title={title}
        description={description}
        breadcrumbs={[{ label: "JLPT Test" }, { label: title }]}
      />

      <section className="section mx-auto max-w-2xl px-6">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-ink-100">
          {/* Progress bar */}
          <div className="h-1.5 bg-ink-100">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-500 to-sun-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="p-7 md:p-9">
            <AnimatePresence mode="wait" custom={direction}>
              {/* ---------- Start screen ---------- */}
              {!started && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="py-8 text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-500">
                    <FaPlay className="ml-1 h-5 w-5" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold">Ready to start?</h2>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    {questions.length} questions · no time limit · you can go
                    back and change any answer.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="btn-primary mt-8">
                    Start Test
                    <FaArrowRight className="h-3 w-3" />
                  </button>
                </motion.div>
              )}

              {/* ---------- Results ---------- */}
              {started && finished && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="text-center">
                    {/* Score ring */}
                    <div className="relative mx-auto h-32 w-32">
                      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                        <circle
                          cx="60"
                          cy="60"
                          r="52"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="12"
                          className="text-ink-100"
                        />
                        <motion.circle
                          cx="60"
                          cy="60"
                          r="52"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="12"
                          strokeLinecap="round"
                          className={
                            percentage >= 70
                              ? "text-emerald-500"
                              : percentage >= 40
                              ? "text-sun-500"
                              : "text-brand-500"
                          }
                          strokeDasharray={2 * Math.PI * 52}
                          initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                          animate={{
                            strokeDashoffset:
                              2 * Math.PI * 52 * (1 - percentage / 100),
                          }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </svg>
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="font-display text-3xl font-extrabold text-ink-900">
                          {percentage}%
                        </span>
                      </div>
                    </div>

                    <h2 className="mt-6 text-2xl font-bold">
                      {getResultComment(percentage)}
                    </h2>
                    <p className="mt-2 text-[color:var(--muted)]">
                      You scored {score} out of {questions.length}.
                    </p>
                  </div>

                  {/* Answer review */}
                  <div className="mt-8 space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--muted)]">
                      Review your answers
                    </h3>
                    {questions.map((question, index) => {
                      const correct = answers[index] === question.answer;
                      return (
                        <motion.div
                          key={question.question}
                          initial={{ opacity: 0, x: -14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                          className={`rounded-2xl p-4 ring-1 ${
                            correct
                              ? "bg-emerald-50/60 ring-emerald-100"
                              : "bg-brand-50/60 ring-brand-100"
                          }`}>
                          <div className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white ${
                                correct ? "bg-emerald-500" : "bg-brand-500"
                              }`}>
                              {correct ? (
                                <FaCheck className="h-2.5 w-2.5" />
                              ) : (
                                <FaTimes className="h-2.5 w-2.5" />
                              )}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-ink-900">
                                {question.question}
                              </p>
                              <p className="mt-1.5 text-xs text-[color:var(--muted)]">
                                Your answer:{" "}
                                <span className="font-semibold">
                                  {answers[index] ?? "—"}
                                </span>
                                {!correct && (
                                  <>
                                    {" · Correct: "}
                                    <span className="font-semibold text-emerald-700">
                                      {question.answer}
                                    </span>
                                  </>
                                )}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button type="button" onClick={reset} className="btn-primary">
                      <FaRedo className="h-3 w-3" />
                      Try Again
                    </button>
                    <Link
                      href={`/test/${Number(testId) === 4 ? 1 : Number(testId) + 1}`}
                      className="btn-outline">
                      Next Test
                      <FaArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* ---------- Question ---------- */}
              {started && !finished && (
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                    Question {current + 1} of {questions.length}
                  </p>

                  <h2 className="mt-3 text-xl font-bold leading-relaxed text-ink-900 md:text-2xl">
                    {questions[current].question}
                  </h2>

                  <div
                    role="radiogroup"
                    aria-label="Answer options"
                    className="mt-7 space-y-3">
                    {questions[current].options.map((option, index) => {
                      const active = selected === option;
                      return (
                        <motion.button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => select(option)}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 400, damping: 26 }}
                          className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4
                                      text-left transition-colors duration-200 ${
                                        active
                                          ? "border-brand-500 bg-brand-50"
                                          : "border-ink-100 bg-white hover:border-brand-200 hover:bg-brand-50/40"
                                      }`}>
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full
                                        text-xs font-bold transition-colors duration-200 ${
                                          active
                                            ? "bg-brand-500 text-white"
                                            : "bg-ink-50 text-ink-600"
                                        }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-base text-ink-900">{option}</span>
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={prev}
                      disabled={current === 0}
                      className="btn-outline !px-5 !py-2.5 !text-xs disabled:opacity-40">
                      <FaArrowLeft className="h-3 w-3" />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      disabled={!selected}
                      className="btn-primary !px-6 !py-2.5 !text-xs disabled:opacity-40">
                      {isLast ? "Finish" : "Next"}
                      <FaArrowRight className="h-3 w-3" />
                    </button>
                  </div>

                  {!selected && (
                    <p className="mt-4 text-center text-xs text-[color:var(--muted)]">
                      Pick an answer to continue.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
