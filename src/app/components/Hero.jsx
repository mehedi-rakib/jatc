"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/slider-1.jpg",
      title: "Education Bright Future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur.",
    },
    {
      image: "/images/slider-2.jpg",
      title: "Shaping Tomorrow's Leaders",
      description:
        "Providing quality education and nurturing young minds for a brighter tomorrow.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[650px] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
            <div className="absolute inset-0 " />
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="text-center text-white relative z-10 max-w-3xl">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slides[currentSlide].title}
                </motion.h1>
                {/* <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl mb-8">
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#"
                    className="bg-[#FFC107] hover:bg-[#FFA000] text-black px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    ENROLL TODAY
                  </Link>
                  <Link
                    href="/#"
                    className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    SCHEDULE A TOUR
                  </Link>
                </motion.div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
