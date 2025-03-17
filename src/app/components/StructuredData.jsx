"use client";

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function StructuredData() {
  const pathname = usePathname();
  
  // Base organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Japan Ambition Training Center",
    "alternateName": "JATC",
    "url": "https://japanambition.com",
    "logo": "https://japanambition.com/logo.png",
    "sameAs": [
      "https://facebook.com/japanambition",
      "https://twitter.com/japanambition",
      "https://instagram.com/japanambition"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-61/4 (1st Floor), Ali Market, Khilkhet Bazar Road, Bottola",
      "addressLocality": "Khilkhet",
      "addressRegion": "Dhaka",
      "postalCode": "1229",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ["+880 1300-302099", "+880 1715-458036"],
      "contactType": "customer service",
      "email": "info@japanambition.com",
      "availableLanguage": ["English", "Bengali", "Japanese"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "description": "Japan Ambition Training Center offers high-quality language training and cultural preparation for students aspiring to study or work in Japan."
  };

  // Page-specific structured data
  let pageSpecificData = null;

  // Home page
  if (pathname === '/') {
    pageSpecificData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Japan Ambition Training Center | JATC",
      "description": "Japan Ambition Training Center offers high-quality language training and cultural preparation for students aspiring to study or work in Japan.",
      "url": "https://japanambition.com",
      "mainEntity": organizationData
    };
  }
  
  // About page
  else if (pathname === '/about') {
    pageSpecificData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Japan Ambition Training Center",
      "description": "Learn about Japan Ambition Training Center's mission, vision, and history.",
      "url": "https://japanambition.com/about",
      "mainEntity": organizationData
    };
  }
  
  // Courses page
  else if (pathname === '/courses') {
    pageSpecificData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Japanese Language Courses | JATC",
      "description": "Explore our comprehensive Japanese language courses for all levels.",
      "url": "https://japanambition.com/courses"
    };
  }
  
  // Contact page
  else if (pathname === '/contact-us') {
    pageSpecificData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Japan Ambition Training Center",
      "description": "Get in touch with Japan Ambition Training Center for inquiries about our courses and services.",
      "url": "https://japanambition.com/contact-us",
      "mainEntity": organizationData.contactPoint
    };
  }

  return (
    <>
      {/* Organization data for all pages */}
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      {/* Page-specific structured data */}
      {pageSpecificData && (
        <Script
          id="page-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSpecificData) }}
        />
      )}
    </>
  );
} 