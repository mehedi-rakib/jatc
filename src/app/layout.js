import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsappButton";
import I18nProvider from "./i18n/I18nProvider";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Static metadata for Next.js App Router
export const metadata = {
  title: "Japan Ambition Training Center | JATC",
  description: "Japan Ambition Training Center offers high-quality language training and cultural preparation for students aspiring to study or work in Japan.",
  keywords: "Japan, language training, Japanese language, study in Japan, JLPT, cultural training, Japan Ambition, JATC",
  openGraph: {
    title: "Japan Ambition Training Center | JATC",
    description: "High-quality Japanese language training and cultural preparation for international success",
    url: "https://japanambition.com.bd",
    siteName: "Japan Ambition Training Center",
    images: [
      {
        url: "https://japanambition.com.bd/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Japan Ambition Training Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Ambition Training Center | JATC",
    description: "High-quality Japanese language training and cultural preparation for international success",
    images: ["https://japanambition.com.bd/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  alternates: {
    canonical: "https://japanambition.com.bd",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E31E24" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <ClientLayout>{children}</ClientLayout>
          <WhatsAppButton />
        </I18nProvider>
      </body>
    </html>
  );
}
