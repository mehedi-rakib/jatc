/** Single source of truth for the site navigation (desktop + mobile + search). */
export const menuItems = [
  { label: "Home", key: "home", href: "/" },
  { label: "About", key: "about", href: "/about-us" },
  {
    label: "Courses",
    key: "courses",
    children: [
      {
        label: "Long Intensive Course",
        key: "long-course",
        href: "/long-course",
        description: "Master Japanese step by step over a full term",
      },
      {
        label: "Short Intensive Course",
        key: "short-course",
        href: "/short-course",
        description: "Fast-track the essentials in a few weeks",
      },
      {
        label: "Private Course",
        key: "private-course",
        href: "/private-course",
        description: "One-to-one lessons at your own pace",
      },
    ],
  },
  {
    label: "JLPT Test",
    key: "jlpt",
    children: [
      { label: "JLPT Test 1", key: "test-1", href: "/test/1" },
      { label: "JLPT Test 2", key: "test-2", href: "/test/2" },
      { label: "JLPT Test 3", key: "test-3", href: "/test/3" },
      { label: "JLPT Test 4", key: "test-4", href: "/test/4" },
    ],
  },
  {
    label: "Students",
    key: "students",
    children: [
      {
        label: "Student Result",
        key: "student-result",
        href: "/student-result",
        description: "Check your published course results",
      },
      {
        label: "Verify Student ID",
        key: "student-verify",
        href: "/student-verify",
        description: "Confirm an enrolment is genuine",
      },
      {
        label: "Apply for Admission",
        key: "student-apply",
        href: "/student-apply",
        description: "Start your application online",
      },
    ],
  },
  { label: "Notice", key: "notice", href: "/notice" },
  { label: "News", key: "news", href: "/news" },
  { label: "Blog", key: "blog", href: "/blog" },
  { label: "Gallery", key: "gallery", href: "/gallery" },
  { label: "Contact", key: "contact", href: "/contact-us" },
];

/** Flattened list of every reachable page — powers the search overlay. */
export const searchableLinks = menuItems.flatMap((item) =>
  item.children
    ? item.children.map((child) => ({
        label: child.label,
        href: child.href,
        group: item.label,
      }))
    : [{ label: item.label, href: item.href, group: "Pages" }]
);

export const contactDetails = {
  hotline: "01715-458036",
  phone: "01300-302099",
  whatsapp: "8801913727202",
  email: "jalc.bd2024@gmail.com",
  address: "A-61/4 (1st Floor), Ali Market, Khilkhet, Dhaka-1229",
  facebook: "https://www.facebook.com/japan.ambition",
};
