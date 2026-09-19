"use client";

import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";
import { notices } from "../data/notices";

/**
 * Scrolling announcement strip. Pauses on hover (see .animate-marquee in
 * globals.css) so visitors can actually read and click an item.
 */
export default function NoticeTicker() {
  if (notices.length === 0) return null;

  const items = [...notices, ...notices]; // duplicated for a seamless loop

  return (
    <div className="relative flex items-stretch overflow-hidden border-y border-ink-100 bg-ink-50">
      <div
        className="z-10 flex shrink-0 items-center gap-2 bg-brand-500 px-4 py-2.5
                   text-xs font-bold uppercase tracking-wider text-white md:px-6">
        <FaBullhorn className="h-3.5 w-3.5 animate-float" />
        <span className="hidden sm:inline">Latest</span>
      </div>

      <div className="mask-fade-x relative flex-1 overflow-hidden py-2.5">
        <div className="animate-marquee">
          {items.map((notice, index) => (
            <Link
              key={`${notice.id}-${index}`}
              href="/notice"
              className="mx-8 inline-flex items-center gap-3 text-sm text-ink-700
                         transition-colors hover:text-brand-600">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span className="font-semibold">{notice.title}</span>
              <span className="text-[color:var(--muted)]">
                — {notice.content.slice(0, 90)}…
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
