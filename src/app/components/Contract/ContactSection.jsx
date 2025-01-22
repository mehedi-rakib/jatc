import React from "react";
import { ContactCard } from "./ContactCard";

const contactInfo = [
  {
    type: "phone",
    title: "Call Us",
    details: "+880 1372 7202",
  },
  {
    type: "mail",
    title: "Mail Us",
    details: "jalc.bd2024@gmail.com",
  },
  {
    type: "clock",
    title: "Opening Hours",
    details: ["Mon - Fri : 10am to 2pm", "Sat - Sun : Closed"],
  },
  {
    type: "location",
    title: "Address",
    details: ["A-61/4 (1st Floor), Ali Market, Khilkhet Bazar Road, Bottola, Khilkhet, Dhaka-1229"],
  },
];

export default function ContactSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <ContactCard
            key={index}
            type={info.type}
            title={info.title}
            details={info.details}
          />
        ))}
      </div>
    </section>
  );
}
