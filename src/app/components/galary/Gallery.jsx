"use client";

import { Image } from "antd";
import { motion } from "framer-motion";
import { FaExpand } from "react-icons/fa";
import PageHero from "../ui/PageHero";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Students studying together", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Group of students smiling" },
  { src: "/images/gallery-3.jpg", alt: "Japanese alphabet practice" },
  { src: "/images/gallery-4.jpg", alt: "Classroom activity session" },
  { src: "/images/gallery-5.jpg", alt: "Students arriving at the center" },
  { src: "/images/gallery-6.jpg", alt: "Instructor teaching a class", span: "lg:col-span-2" },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Life at JATC"
        title="Photo Gallery"
        description="Classrooms, seminars, cultural events and graduation days — moments from life at the center."
        breadcrumbs={[{ label: "Gallery" }]}
        image="/images/gallery-2.jpg"
      />

      <section className="section mx-auto max-w-[90rem] px-4 lg:px-12">
        <Image.PreviewGroup>
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl shadow-soft
                            transition-shadow duration-300 hover:shadow-lift
                            ${photo.span ?? ""}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  rootClassName="h-full w-full"
                  className="transition-transform duration-700 ease-smooth group-hover:scale-110"
                  preview={{
                    mask: (
                      <span className="flex items-center gap-2 text-xs font-semibold">
                        <FaExpand className="h-3 w-3" />
                        View photo
                      </span>
                    ),
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Caption slides up on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full
                             bg-gradient-to-t from-ink-900/85 to-transparent px-4 pb-4 pt-10
                             text-xs font-medium text-white transition-transform
                             duration-400 ease-smooth group-hover:translate-y-0">
                  {photo.alt}
                </span>
              </motion.div>
            ))}
          </div>
        </Image.PreviewGroup>
      </section>
    </>
  );
}
