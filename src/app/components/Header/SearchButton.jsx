"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";
import { searchableLinks } from "./navigation";

/**
 * Quick-jump search. Opens on click or ⌘K / Ctrl-K, filters every page in the
 * site navigation, and supports arrow-key + Enter selection.
 */
export default function SearchButton({ className = "" }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchableLinks.slice(0, 6);
    return searchableLinks
      .filter(
        (link) =>
          link.label.toLowerCase().includes(q) ||
          link.group.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  // Opening always starts from a clean slate
  const openPalette = useCallback(() => {
    setQuery("");
    setCursor(0);
    setOpen(true);
  }, []);

  const closePalette = useCallback(() => setOpen(false), []);

  // ⌘K / Ctrl-K toggles the palette from anywhere
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) closePalette();
        else openPalette();
      }
      if (e.key === "Escape") closePalette();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, openPalette, closePalette]);

  // Wait for the entry animation before stealing focus
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(id);
  }, [open]);

  const go = (href) => {
    setOpen(false);
    router.push(href);
  };

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      go(results[cursor].href);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label="Search the site"
        className={`grid h-10 w-10 place-items-center rounded-full bg-ink-50 text-ink-700
                    transition-all duration-300 hover:bg-brand-500 hover:text-white
                    hover:shadow-glow ${className}`}>
        <FaSearch className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePalette}
            className="fixed inset-0 z-[90] flex items-start justify-center
                       bg-ink-900/55 px-4 pt-[18vh] backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Site search"
              className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-lift">
              <div className="flex items-center gap-3 border-b border-ink-100 px-5 py-4">
                <FaSearch className="h-4 w-4 shrink-0 text-ink-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCursor(0);
                  }}
                  onKeyDown={onInputKeyDown}
                  placeholder="Search courses, notices, pages…"
                  aria-label="Search"
                  className="w-full bg-transparent text-sm text-ink-900 outline-none
                             placeholder:text-ink-400"
                />
                <button
                  type="button"
                  onClick={closePalette}
                  aria-label="Close search"
                  className="shrink-0 rounded-full p-1.5 text-ink-400 transition-colors
                             hover:bg-ink-50 hover:text-ink-700">
                  <FaTimes className="h-3.5 w-3.5" />
                </button>
              </div>

              <ul className="max-h-80 overflow-y-auto p-2">
                {results.length === 0 && (
                  <li className="px-4 py-8 text-center text-sm text-[color:var(--muted)]">
                    Nothing matches “{query}”. Try “course”, “notice” or “result”.
                  </li>
                )}
                {results.map((link, index) => (
                  <li key={`${link.href}-${link.label}`}>
                    <button
                      type="button"
                      onMouseEnter={() => setCursor(index)}
                      onClick={() => go(link.href)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3
                                  text-left transition-colors ${
                                    cursor === index
                                      ? "bg-brand-50 text-brand-600"
                                      : "text-ink-800 hover:bg-ink-50"
                                  }`}>
                      <span className="text-sm font-medium">{link.label}</span>
                      <span className="text-[11px] uppercase tracking-wider text-ink-400">
                        {link.group}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-ink-100
                              bg-ink-50/60 px-5 py-2.5 text-[11px] text-ink-500">
                <span>↑ ↓ to navigate · Enter to open</span>
                <span className="hidden sm:inline">Esc to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
