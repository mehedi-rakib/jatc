"use client";

import Image from "next/image";
import { Rate } from "antd";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

export function TestimonialCard({ images, name, role, content, rating, delay = 0 }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-3xl bg-white p-7
                 pt-14 text-center shadow-soft ring-1 ring-ink-100
                 transition-shadow duration-300 hover:shadow-lift">
      {/* Avatar overlapping the top edge */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div
          className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-white
                     shadow-lift transition-transform duration-300 ease-spring
                     group-hover:scale-110">
          <Image
            src={images}
            alt={name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      </div>

      <Rate disabled defaultValue={rating} className="!text-sun-500 !text-base" />

      <blockquote className="mt-5 flex-1 text-sm italic leading-relaxed text-[color:var(--muted)]">
        “{content}”
      </blockquote>

      <figcaption className="mt-6 border-t border-ink-100 pt-5">
        <p className="font-bold text-ink-900">{name}</p>
        {role && (
          <p className="mt-0.5 text-xs uppercase tracking-wider text-brand-500">
            {role}
          </p>
        )}
      </figcaption>

      {/* Quote badge */}
      <span
        className="absolute -bottom-4 right-6 grid h-9 w-9 place-items-center
                   rounded-full bg-brand-500 text-white shadow-lift
                   transition-transform duration-300 ease-spring
                   group-hover:scale-110 group-hover:-rotate-12">
        <FaQuoteRight className="h-3.5 w-3.5" />
      </span>
    </motion.figure>
  );
}

export default TestimonialCard;
