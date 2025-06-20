"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { Select } from "antd";
import CustomMenu from "./Header/CustomMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo  flex-shrink-0*/}
          <div className="">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                width={200}
                height={70}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center  justify-center flex-1">
            {/* <CustomMenu isMobile={false} onItemClick={() => {}} /> */}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="mx-auto">
              <p className="text-red-500 font-semibold text-sm">
                {t('common.hotline')}
              </p>
            </div>
          
            
            {/* Language Switcher */}
            <div className="rounded-md px-2 py-1">
              <LanguageSwitcher />
            </div>
          
          

            <Link
              href="https://dev.japanambition.com/login"
              className="bg-red-500 hover:bg-green-400 border-gradient-to-r border-2  rounded-2xl items-center justify-center gap-2 font-semibold  text-black px-2 py-2  text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              <div className="flex space-x-2 ">
                <AiOutlineLogin className="text-lg text-white w-5 h-5" />
                <span className="text-white text-md">{t('common.login')}</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <CustomMenu isMobile={true} onItemClick={closeMenu} />
          <div className="mt-4 space-y-2">
            {/* Language Switcher for Mobile */}
            <div className=" rounded-md px-2 py-1 flex justify-left">
              <LanguageSwitcher />
            </div>
           
            <Link
              href="https://dev.japanambition.com/login"
              className="bg-[#FFC107] flex items-center justify-center gap-2 font-semibold hover:bg-white hover:text-blue-600 text-black px-4 py-2 rounded-md text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={closeMenu}>
              <AiOutlineLogin className="text-lg" />
              <span>{t('common.login')}</span>
            </Link>
          </div>
        </div>
      </div>
      <nav className="hidden lg:flex items-center  bg-slate-100 justify-start pl-6 py-2 flex-1">
        <CustomMenu isMobile={false} onItemClick={() => {}} />
      </nav>
    </header>
  );
};

export default Navbar;
