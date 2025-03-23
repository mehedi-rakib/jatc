"use client";

import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import MenuHeader from "../Header/MenuHeader";
import StructuredData from "../StructuredData";
import Preheader from "../Header/PreHeader";

// Import SplashScreen with no SSR to avoid hydration issues

const Layout = ({ children }) => {
  useEffect(() => {
    // Function to handle passive scrolling for better performance
    const handlePassiveScroll = () => {
      // This is just to enable the passive event listener
    };

    // Add passive scroll listeners for better mobile performance
    window.addEventListener('scroll', handlePassiveScroll, { passive: true });
    window.addEventListener('touchstart', handlePassiveScroll, { passive: true });
    window.addEventListener('touchmove', handlePassiveScroll, { passive: true });

    // Prevent momentum scrolling issues on iOS
    document.addEventListener('touchmove', (e) => {
      // Allow scrolling in elements that should scroll
      if (e.target.closest('.scrollable-element')) {
        return;
      }
    }, { passive: true });

    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', handlePassiveScroll);
      window.removeEventListener('touchstart', handlePassiveScroll);
      window.removeEventListener('touchmove', handlePassiveScroll);
      document.removeEventListener('touchmove', handlePassiveScroll);
    };
  }, []);

  return (
    <div className="smooth-scroll-container">
      <StructuredData />
      <Preheader />
      <Navbar />
      {/* <MenuHeader /> */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
