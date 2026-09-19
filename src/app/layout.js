import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Layout from "./components/Layout/Layout";
import WhatsAppButton from "./components/WhatsappButton";
import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:2002";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Japan Ambition Training Center | Learn Japanese in Bangladesh",
    template: "%s | Japan Ambition Training Center",
  },
  description:
    "Japan Ambition Training Center is a leading Japanese language institute in Bangladesh, offering JLPT preparation, long and short intensive courses, and private tuition.",
  keywords: [
    "Japanese language course Bangladesh",
    "JLPT preparation Dhaka",
    "Japan Ambition Training Center",
    "learn Japanese Khilkhet",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Japan Ambition Training Center",
    title: "Japan Ambition Training Center",
    description:
      "Learn Japanese the easy way — courses designed for Bangladeshi students.",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#e31e24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {/* Keyboard users can jump straight past the navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4
                     focus:z-[100] focus:rounded-full focus:bg-brand-500
                     focus:px-5 focus:py-3 focus:text-sm focus:font-semibold
                     focus:text-white focus:shadow-lift">
          Skip to content
        </a>

        <Providers>
          <ScrollProgress />
          <Layout>{children}</Layout>
          <WhatsAppButton />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
