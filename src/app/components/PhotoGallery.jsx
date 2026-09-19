"use client";

import Link from "next/link";
import { Image } from "antd";
import { motion } from "framer-motion";
import { FaArrowRight, FaExpand } from "react-icons/fa";
import Reveal from "./motion/Reveal";

const images = [
  { src: "/images/gallery-2.jpg", alt: "Students in class at the training center" },
  { src: "/images/gallery-3.jpg", alt: "Japanese alphabet practice session" },
  { src: "/images/gallery-4.jpg", alt: "Group activity during a language workshop" },
];

export default function PhotoGallery() {
  return (
    <section className="section mx-auto max-w-[90rem] px-4 lg:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal direction="right">
          <span className="eyebrow">Life at JATC</span>
          <h2 className="heading mt-4">Photo &amp; Video Gallery</h2>
          <span className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-sun-500" />
          <p className="mt-5 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
            Classrooms, seminars, cultural events and graduation days — a look at
            what learning with us actually feels like.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/gallery" className="btn-primary group">
              View All Photos
              <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/contact-us" className="btn-outline">
              Visit Our Campus
            </Link>
          </div>
        </Reveal>

        {/* Media */}
        <Reveal direction="left" className="flex flex-col gap-4">
          <div className="h-64 w-full overflow-hidden rounded-2xl shadow-lift md:h-[340px]">
            <iframe
              title="Japan Ambition Training Center on Facebook"
              width="100%"
              height="100%"
              src="https://www.facebook.com/v2.9/plugins/video.php?href=https://www.facebook.com/japan.ambition/videos/1776418973155870&show_text=0&width=560"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Image.PreviewGroup>
              {images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl
                             shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    rootClassName="h-full w-full [&_.ant-image-img]:h-full [&_.ant-image-img]:w-full [&_.ant-image-img]:object-cover"
                    className="transition-transform duration-500 ease-smooth group-hover:scale-110"
                    preview={{
                      mask: (
                        <span className="flex items-center gap-2 text-xs font-semibold">
                          <FaExpand className="h-3 w-3" />
                          View
                        </span>
                      ),
                    }}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </Image.PreviewGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
