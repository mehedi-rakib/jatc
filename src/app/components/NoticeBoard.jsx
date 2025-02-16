"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

const notices = [
  {
    id: 5,
    type: "Event",
    title: "Free Seminar",
    date: "2025-02-18",
    content:
      "A seminar will be held at Japan Ambition Training Center in the presence of the company owner from Japan and representatives from Kumiai Company. To participate in the seminar, please click on the registration link and register quickly or collect your ticket.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc73-p0aSxuZ0oJ5m6Daq5jIWRukwovpi4EpYAXzd839YsnKQ/viewform?usp=sf_link",
  },
  // {
  //   id: 5,
  //   type: "Important",
  //   title: "Campus Closure Due to Weather",
  //   date: "2023-12-15",
  //   content:
  //     "Due to severe weather conditions, the campus will be closed on December 16th. All classes are cancelled. Stay safe!",
  // },
  // {
  //   id: 2,
  //   type: "Academic",
  //   title: "Fall Semester Registration Open",
  //   date: "2023-12-10",
  //   content:
  //     "Registration for the Fall 2024 semester is now open. Please log in to the student portal to select your courses.",
  // },
  // {
  //   id: 3,
  //   type: "Event",
  //   title: "Annual Science Fair",
  //   date: "2023-12-05",
  //   content:
  //     "Join us for the Annual Science Fair on January 15th, 2024. Showcase your projects and win exciting prizes!",
  // },
  // {
  //   id: 4,
  //   type: "Deadline",
  //   title: "Scholarship Application Due",
  //   date: "2023-12-01",
  //   content:
  //     "Reminder: The deadline for submitting scholarship applications is December 31st. Dont miss this opportunity!",
  // },
];

const typeColors = {
  Important: "bg-red-100 text-red-800",
  Academic: "bg-blue-100 text-blue-800",
  Event: "bg-green-100 text-green-800",
  Deadline: "bg-yellow-100 text-yellow-800",
};

export default function NoticeBoard() {
  const [expandedNotice, setExpandedNotice] = useState(null);

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Notice Board</h1>
      <div className="space-y-4">
        {notices.map((notice) => (
          <motion.div
            key={notice.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <div
              className="p-4 cursor-pointer"
              onClick={() =>
                setExpandedNotice(
                  expandedNotice === notice.id ? null : notice.id
                )
              }>
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded ${
                    typeColors[notice.type]
                  }`}>
                  {notice.type}
                </span>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{notice.title}</h2>
              <motion.div
                initial={false}
                animate={{ height: expandedNotice === notice.id ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden">
                <p className="text-gray-600">{notice.content}</p>
                <button className="text-sm font-semibold text-green-700 bg-green-100 mt-2 hover:text-white hover:bg-red-600 px-2 py-1 rounded">
                  <a target="_blank" href={notice.link}>
                    Read More
                  </a>
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
