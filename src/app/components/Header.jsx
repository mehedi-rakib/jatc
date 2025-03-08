"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import Navbar from "./Header/Navbar";
import CustomDropdown from "./Controler/CustomDropdown.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/", ID: 1 },
    { label: "Course", href: "/", ID: 2 },
    { label: "News", href: "/news", ID: 5 },
    { label: "Importent Links", href: "/", ID: 5 },
    { label: "Notice", href: "/notice", ID: 6 },
    { label: "CONTACT US", href: "/contact-us", ID: 7 },
  ];
  const Student = [
    {
      key: "1",
      label: <a href="./student-result">Student Result</a>,
    },
    {
      key: "2",
      label: <a href="./student-verify">Student Verify ID</a>,
    },
    {
      key: "3",
      label: <a href="./student-apply">Student Apply</a>,
    },
  ];
  const Language = [
    {
      items: "1",
      label: <a href="./#">English</a>,
    },
    {
      items: "2",
      label: <a href="./#">Japanis</a>,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:justify-around">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-between md:justify-around space-x-2 md:mr-28">
            <div className="absolute h-20 w-52 md:ml-52">
              <img
                src="/logo.png"
                alt="Logo"
                className="pt-4"
                width={200}
                height={70}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center mx-auto">
            {/* <ul>
              <li>
                
              </li>
            </ul>
            {navItems.map((item) => (
              <Button className="border-none hover:bg-yellow-400">
                <Link
                  key={item.ID}
                  href={item.href}
                  className="text-sm text-black font-medium  transition-colors">
                  {item.label}
                </Link>
              </Button>
            ))} */}
            <Navbar />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <CustomDropdown
              className="nav-item"
              label="Language"
              items={Language}
            />
            <Button
              className="p-2 text-white bg-yellow-300 hover:bg-blue-600 rounded-full"
              aria-label="Search">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
            <Link
              href="https://app.japanambition.com/login"
              className="bg-[#FFC107] hover:bg-[#FFA000] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Login/Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 text-black rounded-full"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-black font-medium hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <CustomDropdown
                className="nav-item"
                label="COURSE"
                items={Course}
              />
              <div className="px-4 pt-2 space-y-2">
                <CustomDropdown
                  className="nav-item bg-yellow-300"
                  label="Language"
                  items={Language}
                />
                <button
                  className="w-full text-left text-black px-2 py-2 text-sm font-medium hover:bg-gray-100 rounded-md flex items-center"
                  aria-label="Search">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search
                </button>
                <Link
                  href="https://app.japanambition.com/login"
                  className="block w-full bg-[#FFC107] hover:bg-[#FFA000] text-black px-4 py-2 rounded-md text-sm font-medium text-center transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  Login/Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
