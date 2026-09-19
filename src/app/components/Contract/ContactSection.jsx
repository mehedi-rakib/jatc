import { ContactCard } from "./ContactCard";
import PageHero from "../ui/PageHero";
import { contactDetails } from "../Header/navigation";

const contactInfo = [
  {
    type: "phone",
    title: "Call Us",
    details: [`+880 ${contactDetails.phone}`, `+880 ${contactDetails.hotline}`],
  },
  {
    type: "mail",
    title: "Mail Us",
    details: [contactDetails.email],
  },
  {
    type: "clock",
    title: "Opening Hours",
    details: ["Saturday – Thursday: 10am to 8pm", "Friday: Closed"],
  },
  {
    type: "location",
    title: "Address",
    details: [
      "A-61/4 (1st Floor), Ali Market, Khilkhet Bazar Road, Bottola, Khilkhet, Dhaka-1229",
    ],
  },
];

export default function ContactSection() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions about admission, courses or schedules? We're a call, a message or a short walk away."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="mx-auto max-w-[90rem] px-4 py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={info.title}
              type={info.type}
              title={info.title}
              details={info.details}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </>
  );
}
