import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Notice", href: "/notice" },
    { name: "Admission", href: "/student-apply" },
    { name: "Links", href: "/#" },
    { name: "Contact", href: "/contact-us" },
  ];

  const openingHours = [
    { day: "Sunday", time: "10:00 - 20:00" },
    { day: "Monday", time: "10:00 - 20:00" },
    { day: "Tuesday", time: "10:00 - 20:00" },
    { day: "Wednesday", time: "10:00 - 20:00" },
    { day: "Thursday", time: "10:00 - 20:00" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "10:00 - 20:00" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/japan.ambition",
      target: "_blank",
      color: "bg-[#3b5998]",
    },
    { icon: FaTwitter, href: "/#", color: "bg-[#1da1f2]" },
    { icon: FaInstagram, href: "/#", color: "bg-[#e1306c]" },
    { icon: FaYoutube, href: "/#", color: "bg-[#ff0000]" },
  ];

  return (
    <>
      <footer className="bg-[#1E2832] text-white">
        <div className="container w-3/4 mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <Link href="/#" className="inline-block">
                <div className="relative w-48 h-16">
                  <Image
                    src="/logo.png"
                    alt="International School System"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Japan Ambition Training Center is a leading Japanese language
                institute in Bangladesh, offering easy and effective learning
                methods. Our courses are tailored for Bangladeshi students,
                ensuring fluency and skill development. Join us for quality
                education at an affordable cost.
              </p>
            </div>

            {/* Quick Links */}
            <div className="pr-10 w-3/4">
              <h3 className="text-xl font-bold mb-4">Quick links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <span className="text-[#E31E24]">▸</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                {openingHours.map((schedule) => (
                  <li
                    key={schedule.day}
                    className="flex justify-between text-gray-400">
                    <span>{schedule.day}</span>
                    <span>{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-3 text-gray-400">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    {/* Khilkhet Bazar Road, Bottola , */}
                  </svg>
                  A-61/4 (1st floor), Ali Market, Khilkhet,Dhaka- 1229
                </p>
                <p className="flex items-center gap-3 text-gray-400">
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  jalc.bd2024@gmail.com
                </p>
                <p className="flex items-center gap-3 text-gray-400">
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  01300-302099
                </p>
                <p className="flex items-center gap-3 text-gray-400">
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  01715-458036
                </p>
                <div className="flex gap-3 pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className={`${social.color} p-2 rounded-full hover:opacity-80 transition-opacity`}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </footer>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            Copyright © Japan Ambition Training Center 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
