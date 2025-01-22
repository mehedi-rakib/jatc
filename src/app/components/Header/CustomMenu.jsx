"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const menuItems = [
  { label: "HOME", key: "1", href: "/" },
  { label: "ABOUT", key: "16", href: "/about-us" },
  {
    label: "COURSE",
    key: "Submenu1",
    children: [
      { label: "Long Intensive Course", key: "13", href: "/course/long" },
      { label: "Short Intensive Course", key: "14", href: "/course/short" },
      { label: "Private Course", key: "15", href: "/course/private" },
    ],
  },
  { label: "NOTICE", key: "3", href: "/notice" },
  {
    label: "STUDENT INFO",
    key: "Submenu",
    children: [
      { label: "Student Result", key: "4", href: "/student-result" },
      { label: "Student Verify ID", key: "5", href: "/student-verify" },
      { label: "Student Apply", key: "6", href: "/student-apply" },
    ],
  },
  {
    label: "JLPT TEST",
    key: "Submenu2",
    children: [
      { label: "JLPT Test 1", key: "8", href: "/test/1" },
      { label: "JLPT Test 2", key: "9", href: "/test/2" },
      { label: "JLPT Test 3", key: "10", href: "/test/3" },
      { label: "JLPT Test 4", key: "20", href: "/test/4" },
    ],
  },
  { label: "LINKS", key: "11", href: "#" },
  { label: "CONTACT", key: "12", href: "/contact-us" },
];

const CustomMenu = ({ isMobile, onItemClick }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleItemHover = (key) => {
    if (!isMobile) {
      setHoveredItem(key);
    }
  };
  //close the mobile menu
  const handleItemClick = (key, href) => {
    if (isMobile) {
      if (href) {
        onItemClick(); // Close the mobile menu
      } else {
        setActiveSubmenu(activeSubmenu === key ? null : key);
      }
    }
  };

  return (
    <div className="text-sm font-semibold">
      <ul className={`${isMobile ? "space-y-2" : "flex space-x-2"}`}>
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={`relative group ${isMobile ? "w-full" : ""}`}
            onMouseEnter={() => handleItemHover(item.key)}
            onMouseLeave={() => handleItemHover(null)}>
            {item.href ? (
              <Link
                href={item.href}
                className={`block px-3 py-2 text-gray-800 hover:text-red-600 transition-colors duration-200 ${
                  isMobile ? "w-full text-left" : ""
                }`}
                onClick={() => handleItemClick(item.key, item.href)}>
                {item.label}
              </Link>
            ) : (
              <button
                onClick={() => handleItemClick(item.key)}
                className={`flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:text-red-600 transition-colors duration-200 focus:outline-none focus:text-red-600 ${
                  isMobile ? "w-full" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={
                  isMobile
                    ? activeSubmenu === item.key
                    : hoveredItem === item.key
                }>
                {item.label}
                <FaChevronDown
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    (
                      isMobile
                        ? activeSubmenu === item.key
                        : hoveredItem === item.key
                    )
                      ? "transform rotate-180"
                      : ""
                  }`}
                />
              </button>
            )}

            {item.children && (
              <ul
                className={`
                ${
                  isMobile
                    ? "mt-2 space-y-2"
                    : "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
                }
                transition-all duration-200 
                ${
                  (
                    isMobile
                      ? activeSubmenu === item.key
                      : hoveredItem === item.key
                  )
                    ? "opacity-100 visible max-h-96"
                    : "opacity-0 invisible max-h-0"
                }
                ${!isMobile ? "lg:left-1/2 lg:-translate-x-1/2" : ""}
              `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby={`menu-button-${item.key}`}>
                {item.children.map((child) => (
                  <li key={child.key} role="none">
                    <Link
                      href={child.href}
                      className={`
                      block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 
                      transition-colors duration-200
                      ${isMobile ? "pl-6" : ""}
                    `}
                      role="menuitem"
                      onClick={onItemClick} // Close mobile menu when a submenu item is clicked
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomMenu;
