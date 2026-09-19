"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "Md Abul Khair Bhuiyan",
    role: "Chairman",
    image: "/images/chairman.png",
  },
  {
    name: "Md Golam Kibria Bhuiyan",
    role: "Managing Director",
    image: "/images/golam-kibria.png",
  },
  {
    name: "Md Baharul Alam Bonny",
    role: "Director of Administration",
    image: "/images/baharul.png",
  },
  {
    name: "Md Salahuddin",
    role: "Director of Administration",
    image: "/images/salahuddin.png",
  },
];

const socials = [FaFacebookF, FaLinkedinIn, FaEnvelope];

export default function TeacherCard() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((member, index) => (
        <motion.article
          key={member.name}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-3xl bg-white shadow-soft
                     ring-1 ring-ink-100 transition-shadow duration-300 hover:shadow-lift">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-50">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-700
                         ease-smooth group-hover:scale-105"
            />

            {/* Social strip slides up on hover */}
            <div
              className="absolute inset-x-0 bottom-0 flex translate-y-full items-center
                         justify-center gap-2.5 bg-gradient-to-t from-ink-900/90
                         to-transparent pb-4 pt-10 transition-transform duration-400
                         ease-smooth group-hover:translate-y-0">
              {socials.map((Icon, i) => (
                <span
                  key={i}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/15
                             text-white backdrop-blur-sm transition-colors
                             hover:bg-brand-500">
                  <Icon className="h-3 w-3" />
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 text-center">
            <h3 className="text-base font-bold leading-snug text-ink-900">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-500">
              {member.role}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
