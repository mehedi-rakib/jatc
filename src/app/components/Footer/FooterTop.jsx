"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function FooterTop() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus({ type: "error", message: "Please enter your email address." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", message: "That doesn't look like a valid email." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    // No newsletter backend yet — acknowledge locally so the form never hangs.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setStatus({ type: "success", message: "Thanks for subscribing! We'll be in touch." });
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 bg-[length:200%_100%] py-14 md:py-16">
      {/* Slow gradient drift + decorative rings */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-gradient-x
                   bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700
                   bg-[length:200%_100%] opacity-90"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full
                   border-[22px] border-white/10"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-white md:text-left">
          <h2 className="font-display text-2xl font-extrabold !text-white md:text-3xl">
            Stay in the loop
          </h2>
          <p className="mt-2 text-sm text-white/85 md:text-base">
            Get admission dates, notices and JLPT tips straight to your inbox.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status.message) setStatus({ type: "", message: "" });
              }}
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full flex-1 rounded-full border-2 border-transparent bg-white
                         px-5 py-3 text-sm text-ink-900 outline-none transition-all
                         duration-300 placeholder:text-ink-400
                         focus:border-sun-500 focus:ring-4 focus:ring-white/25"
            />
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full
                         bg-ink-900 px-7 py-3 text-sm font-bold uppercase tracking-wide
                         text-white transition-colors duration-300 hover:bg-ink-800
                         disabled:opacity-70">
              {submitting ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <FaPaperPlane className="h-3.5 w-3.5" />
              )}
              {submitting ? "Signing up" : "Sign up"}
            </motion.button>
          </div>

          <AnimatePresence>
            {status.message && (
              <motion.p
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                role="status"
                className={`mt-3 flex items-center gap-2 text-sm ${
                  status.type === "error" ? "text-sun-400" : "text-white"
                }`}>
                {status.type === "error" ? (
                  <FaExclamationCircle className="h-3.5 w-3.5 shrink-0" />
                ) : (
                  <FaCheckCircle className="h-3.5 w-3.5 shrink-0" />
                )}
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
