"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const iconMap = {
  phone: FaPhone,
  mail: FaEnvelope,
  clock: FaClock,
  location: FaMapMarkerAlt,
};

const accentMap = {
  phone: "bg-brand-500",
  mail: "bg-ink-700",
  clock: "bg-sun-500",
  location: "bg-sky-500",
};

/** Wraps phone numbers and emails in real tel:/mailto: links where we can. */
function DetailLine({ type, detail }) {
  if (type === "phone") {
    return (
      <a
        href={`tel:${detail.replace(/[^\d+]/g, "")}`}
        className="link-underline text-sm text-[color:var(--muted)] transition-colors hover:text-brand-500">
        {detail}
      </a>
    );
  }
  if (type === "mail") {
    return (
      <a
        href={`mailto:${detail}`}
        className="link-underline break-all text-sm text-[color:var(--muted)] transition-colors hover:text-brand-500">
        {detail}
      </a>
    );
  }
  return <p className="text-sm leading-relaxed text-[color:var(--muted)]">{detail}</p>;
}

export function ContactCard({ type, title, details, delay = 0 }) {
  const Icon = iconMap[type];
  const lines = Array.isArray(details) ? details : [details];

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group h-full rounded-3xl bg-white p-7 text-center shadow-soft
                 ring-1 ring-ink-100 transition-shadow duration-300 hover:shadow-lift">
      <div
        className={`${accentMap[type] ?? "bg-brand-500"} mx-auto grid h-14 w-14
                    place-items-center rounded-2xl text-white shadow-soft
                    transition-transform duration-300 ease-spring
                    group-hover:scale-110 group-hover:-rotate-6`}>
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>

      <div className="mt-3 flex flex-col items-center gap-1.5">
        {lines.map((detail) => (
          <DetailLine key={detail} type={type} detail={detail} />
        ))}
      </div>
    </motion.div>
  );
}

export default ContactCard;
