import Image from "next/image";
import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801325661767"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 z-50">
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="h-14 w-14  rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;
