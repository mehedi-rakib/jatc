import { TestimonialCard } from "./TestimonialCard.jsx";

const testimonials = [
  {
    // image: "/images//std-1.jpg",
    name: "DAVID MALAN",
    content:
      "Lorem ipsum dolor sit amet, consectetur elit. Phasellus porttitor leo id tortor cursus, a gravida sem feugiat. Maecenas nisl libero, lobortis id hendrerit sed, fermentum ut nunc. Duis condimentum tincidunt posuere.",
    rating: 5,
  },
  {
    // image: "/images/std-2.jpg",
    name: "DAVID MALAN",
    content:
      "Lorem ipsum dolor sit amet, consectetur elit. Phasellus porttitor leo id tortor cursus, a gravida sem feugiat. Maecenas nisl libero, lobortis id hendrerit sed, fermentum ut nunc. Duis condimentum tincidunt posuere.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className=" px-4 mb-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold pb-4 md:pb-16 text-center">
        Words from Our Graduates
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            // image={testimonial.image}
            name={testimonial.name}
            content={testimonial.content}
            rating={testimonial.rating}
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
