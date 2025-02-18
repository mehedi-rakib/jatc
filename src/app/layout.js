import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";
import LanguageSwitcher from "./components/Header/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Japan Ambition Training Center",
  description: "Japan Ambition Training Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <LanguageSwitcher /> */}
        <Layout>
          <div className="relative w-full min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
