"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { menuItems } from "./navigation";

/**
 * Desktop navigation. Each top-level item gets an animated underline, and
 * parents reveal a dropdown on hover *or* keyboard focus.
 */
export default function CustomMenu() {
  const pathname = usePathname();
  const [openKey, setOpenKey] = useState(null);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isBranchActive = (item) =>
    item.href
      ? isActive(item.href)
      : item.children?.some((child) => isActive(child.href));

  return (
    <ul className="flex items-center gap-0.5">
      {menuItems.map((item) => {
        const active = isBranchActive(item);
        const open = openKey === item.key;

        return (
          <li
            key={item.key}
            className="relative"
            onMouseEnter={() => setOpenKey(item.key)}
            onMouseLeave={() => setOpenKey(null)}
            onFocus={() => setOpenKey(item.key)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setOpenKey(null);
            }}>
            {item.href ? (
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex items-center whitespace-nowrap rounded-lg px-2 py-2.5 2xl:px-3 text-[13px]
                            font-semibold uppercase tracking-wide transition-colors
                            duration-200 ${
                              active
                                ? "text-brand-500"
                                : "text-ink-800 hover:text-brand-500"
                            }`}>
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-brand-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setOpenKey(open ? null : item.key)}
                aria-haspopup="true"
                aria-expanded={open}
                className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-2.5 2xl:px-3
                            text-[13px] font-semibold uppercase tracking-wide
                            transition-colors duration-200 ${
                              active
                                ? "text-brand-500"
                                : "text-ink-800 hover:text-brand-500"
                            }`}>
                {item.label}
                <FaChevronDown
                  className={`h-2.5 w-2.5 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-brand-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {item.children && open && (
                <motion.ul
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  role="menu"
                  className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden
                             rounded-2xl border border-ink-100 bg-white p-2 shadow-lift">
                  {item.children.map((child) => (
                    <li key={child.key} role="none">
                      <Link
                        href={child.href}
                        role="menuitem"
                        onClick={() => setOpenKey(null)}
                        className={`group block rounded-xl px-3 py-2.5 transition-colors
                                    duration-200 hover:bg-brand-50 ${
                                      isActive(child.href) ? "bg-brand-50" : ""
                                    }`}>
                        <span
                          className={`flex items-center justify-between text-sm font-semibold
                                      ${
                                        isActive(child.href)
                                          ? "text-brand-600"
                                          : "text-ink-800 group-hover:text-brand-600"
                                      }`}>
                          {child.label}
                          <span
                            className="translate-x-0 opacity-0 transition-all duration-200
                                       group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>
                        </span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs leading-snug text-[color:var(--muted)]">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
