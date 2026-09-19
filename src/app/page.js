import Hero from "./components/Hero";
import NoticeTicker from "./components/NoticeTicker";
import Features from "./components/features";
import OnlineLearning from "./components/OnlineLearning";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import PhotoGallery from "./components/PhotoGallery";
import Teacher from "./components/Teacher";
import TestimonialsSection from "./components/Testimonial/TestimonialsSection.jsx";
import FooterTop from "./components/Footer/FooterTop";

export default function Home() {
  return (
    <>
      <Hero />
      <NoticeTicker />
      <Features />
      <OnlineLearning />
      <Courses />
      <Stats />
      <PhotoGallery />
      <Teacher />
      <TestimonialsSection />
      <FooterTop />
    </>
  );
}
