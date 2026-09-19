"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { contactDetails } from "../Header/navigation";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Notice", href: "/notice" },
  { name: "Admission", href: "/student-apply" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact-us" },
];

const courseLinks = [
  { name: "Long Intensive Course", href: "/long-course" },
  { name: "Short Intensive Course", href: "/short-course" },
  { name: "Private Course", href: "/private-course" },
  { name: "JLPT Practice Tests", href: "/test/1" },
  { name: "Student Results", href: "/student-result" },
  { name: "Verify Student ID", href: "/student-verify" },
];

const openingHours = [
  { day: "Saturday – Thursday", time: "10:00 – 20:00" },
  { day: "Friday", time: "Closed" },
];

const socialLinks = [
  { icon: FaFacebookF, href: contactDetails.facebook, label: "Facebook", hover: "hover:bg-[#1877f2]" },
  { icon: FaTwitter, href: "#", label: "Twitter", hover: "hover:bg-[#1da1f2]" },
  { icon: FaInstagram, href: "#", label: "Instagram", hover: "hover:bg-[#e1306c]" },
  { icon: FaYoutube, href: "#", label: "YouTube", hover: "hover:bg-[#ff0000]" },
];

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FooterColumn({ index, title, children }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={columnVariants}>
      {title && (
        <h3 className="mb-5 text-lg font-bold !text-white">
          {title}
          <span className="mt-2 block h-0.5 w-10 rounded-full bg-brand-500" />
        </h3>
      )}
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-[90rem] px-6 py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <FooterColumn index={0}>
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-44">
                <Image
                  src="/logo.png"
                  alt="Japan Ambition Training Center"
                  fill
                  sizes="176px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              A leading Japanese language institute in Bangladesh, offering easy
              and effective learning methods. Our courses are tailored for
              Bangladeshi students — ensuring fluency and real skill at an
              affordable cost.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 380, damping: 18 }}
                  className={`grid h-9 w-9 place-items-center rounded-full bg-white/10
                              transition-colors duration-300 ${social.hover}`}>
                  <social.icon className="h-3.5 w-3.5" />
                </motion.a>
              ))}
            </div>
          </FooterColumn>

          {/* Quick links */}
          <FooterColumn index={1} title="Quick Links">
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65
                               transition-colors duration-200 hover:text-white">
                    <span className="text-brand-500 transition-transform duration-200 group-hover:translate-x-1">
                      ▸
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Courses */}
          <FooterColumn index={2} title="Courses & Students">
            <ul className="space-y-2.5">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65
                               transition-colors duration-200 hover:text-white">
                    <span className="text-brand-500 transition-transform duration-200 group-hover:translate-x-1">
                      ▸
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn index={3} title="Get in Touch">
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                <span>{contactDetails.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white">
                  <FaEnvelope className="h-4 w-4 shrink-0 text-brand-500" />
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-white">
                  <FaPhoneAlt className="h-4 w-4 shrink-0 text-brand-500" />
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.hotline.replace(/-/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-white">
                  <FaPhoneAlt className="h-4 w-4 shrink-0 text-brand-500" />
                  {contactDetails.hotline}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                Opening Hours
              </p>
              <ul className="mt-3 space-y-1.5">
                {openingHours.map((schedule) => (
                  <li
                    key={schedule.day}
                    className="flex justify-between gap-3 text-xs text-white/65">
                    <span>{schedule.day}</span>
                    <span
                      className={
                        schedule.time === "Closed"
                          ? "font-semibold text-brand-400"
                          : "font-semibold text-white/85"
                      }>
                      {schedule.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/55 sm:flex-row lg:px-12">
          <p>
            © {new Date().getFullYear()} Japan Ambition Training Center. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with
            <span className="text-brand-500">♥</span>
            in Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
