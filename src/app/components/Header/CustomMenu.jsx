"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CustomMenu = ({ isMobile, onItemClick }) => {
  const { t } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { label: t('menu.home'), key: "1", href: "/" },
    { label: t('menu.about'), key: "16", href: "/about-us" },
    {
      label: t('menu.course'),
      key: "Submenu1",
      children: [
        { label: t('menu.longCourse'), key: "13", href: "/long-course" },
        { label: t('menu.shortCourse'), key: "14", href: "/short-course" },
        { label: t('menu.privateCourse'), key: "15", href: "/private-course" },
      ],
    },
    { label: t('menu.notice'), key: "3", href: "/notice" },
    {
      label: t('menu.studentInfo'),
      key: "Submenu",
      children: [
        { label: t('menu.studentResult'), key: "4", href: "/student-result" },
        { label: t('menu.studentVerifyId'), key: "5", href: "/student-verify" },
        { label: t('menu.studentApply'), key: "6", href: "/student-apply" },
      ],
    },
    {
      label: t('menu.jlptTest'),
      key: "Submenu2",
      children: [
        { label: t('menu.jlptTest1'), key: "8", href: "/test/1" },
        { label: t('menu.jlptTest2'), key: "9", href: "/test/2" },
        { label: t('menu.jlptTest3'), key: "10", href: "/test/3" },
        { label: t('menu.jlptTest4'), key: "20", href: "/test/4" },
      ],
    },
    { label: t('menu.news'), key: "31", href: "/news" },
    { label: t('menu.gallery'), key: "gallery", href: "/gallery" },
    { label: t('menu.contact'), key: "45", href: "/contact-us" },
  ];

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
    <div className="text-sm font-semibold mx-auto">
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
                className={`block px-3 uppercase py-2 text-gray-800 hover:text-red-600 transition-colors duration-200 ${
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
