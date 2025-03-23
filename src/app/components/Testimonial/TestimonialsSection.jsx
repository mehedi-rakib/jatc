import { TestimonialCard } from "./TestimonialCard.jsx";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    image: "/images/student/roja.jpeg",
    name: "Ariyana Azad Roja",
    content:
      "The academy's guidance was instrumental in helping me achieve my academic goals in Japan.",
    rating: 5,
    title:"Tokyo International University | Digital Business and Innovation.",
  },
  {
    image: "/images/student/murad.jpeg",
    name: "Md Murad Sarker",
    content:
      "Great courses at an affordable price. Highly recommended for Japanese learners!",
    rating: 5,
    title:"Student visa to Japan",
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  return (
    <section className=" px-4 mb-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold pb-4 md:pb-16 text-center">
      {t('testimonials.title')} 
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            images={testimonial.image}
            name={testimonial.name}
            content={testimonial.content}
            rating={testimonial.rating}
            title={testimonial.title}
          />
        ))}
      </div>

      {/* Navigation Dots
      <div className="flex justify-center mt-8 gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div> */}
      {/* </div> */}
    </section>
  );
}
