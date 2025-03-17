"use client";
import { useTranslation } from "react-i18next";
import Features from "./components/features";
import FooterTop from "./components/Footer/FooterTop";
import Hero from "./components/Hero";
import OnlineLearning from "./components/OnlineLearning";
import PhotoGallery from "./components/PhotoGallery";
import Teacher from "./components/Teacher";
import TestimonialsSection from "./components/Testimonial/TestimonialsSection.jsx";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <Hero />
      <Features />
      <OnlineLearning />
      <PhotoGallery />
      <Teacher />
      <TestimonialsSection />
      <FooterTop />
    </>
  );
}
