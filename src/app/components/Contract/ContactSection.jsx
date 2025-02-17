import React from "react";
import { ContactCard } from "./ContactCard";

const contactInfo = [
  {
    type: "phone",
    title: "Call Us",
    details: "+880 1300-302099",
    details2: "+880 1715-458036",
  },
  {
    type: "mail",
    title: "Mail Us",
    details: "jalc.bd2024@gmail.com",
  },
  {
    type: "clock",
    title: "Opening Hours",
    details: ["Saturday - Thursday : 10am to 8pm", "Friday : Closed"],
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
            detailses={info.details2}
          />
        ))}
      </div>
    </section>
  );
}
