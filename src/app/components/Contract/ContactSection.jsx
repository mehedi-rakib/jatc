"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { ContactCard } from "./ContactCard";

export default function ContactSection() {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      type: "phone",
      title: t('footer.phone'),
      details: ["+880 1300-302099", "+880 1715-458036","+880 1913727202"],
    },
    {
      type: "mail",
      title: t('footer.email'),
      details: "jalc.bd2024@gmail.com",
    },
    {
      type: "clock",
      title: t('footer.openingHours'),
      details: [
        `${t('footer.sunday')} - ${t('footer.thursday')} : 10am to 8pm`, 
        `${t('footer.friday')} : ${t('footer.closed')}`
      ],
    },
    {
      type: "location",
      title: t('footer.address'),
      details: [
        t('footer.addressValue'),
      ],
    },
  ];

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
