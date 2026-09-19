import { TestimonialCard } from "./TestimonialCard.jsx";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    image: "/images/student/std-2.jpg",
    name: "Mahabub Hossain",
    role: "JLPT N4 Graduate",
    content:
      "The teaching method is amazing! I learned Japanese quickly and confidently. The instructors are knowledgeable and engaging. I highly recommend this course to anyone looking to learn Japanese.",
    rating: 5,
  },
  {
    image: "/images/student/std-1.jpg",
    name: "Abu Bakkar Siddique",
    role: "Long Intensive Course",
    content:
      "Great courses at an affordable price. Highly recommended for Japanese learners! I feel more fluent every day and the instructors genuinely care about our progress.",
    rating: 5,
  },
  {
    image: "/images/student/std-3.jpg",
    name: "Nusrat Jahan",
    role: "Short Intensive Course",
    content:
      "I joined with zero Japanese and within weeks I was holding real conversations. The small batches mean you actually get to speak in every single class.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[90rem] px-4 lg:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words from Our Graduates"
          description="Real students, real results — here's what learning with us led to."
        />

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              images={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
