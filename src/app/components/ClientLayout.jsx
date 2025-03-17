"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import StructuredData from "./StructuredData";

export default function ClientLayout({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language || 'en';
    }
  }, [i18n.language]);

  return (
    <div className="smooth-scroll-container">
      <StructuredData />
      <Navbar />
      <div className="relative w-full min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
        {children}
      </div>
      <Footer />
    </div>
  );
} 