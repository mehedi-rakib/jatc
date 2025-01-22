"use client";

import React, { useState } from "react";
import { Input, Select, Pagination } from "antd";
import {
  SearchOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const { Search } = Input;
const { Option } = Select;
//test link

const link = "/blog-test";
// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Online Learning in Higher Education",
    description:
      "Explore how technology is reshaping the landscape of higher education, from AI-driven personalized learning to virtual reality classrooms.",
    image: "/images/gallery-1.jpg",
    category: "Education Technology",
    author: "Dr. Jane Smith",
    date: "2023-12-15",
    readTime: 8,
  },
  {
    id: 2,
    title: "Balancing Academic Success and Mental Health",
    description:
      "Learn effective strategies for maintaining good mental health while pursuing academic excellence in a high-pressure educational environment.",
    image: "/images/gallery-2.jpg",
    category: "Student Wellness",
    author: "Prof. Michael Johnson",
    date: "2023-12-10",
    readTime: 6,
  },
  {
    id: 3,
    title: "The Impact of Artificial Intelligence on STEM Education",
    description:
      "Discover how AI is transforming STEM education, from automated grading systems to advanced simulation tools for complex scientific concepts.",
    image: "/images/gallery-3.jpg",
    category: "STEM",
    author: "Dr. Emily Chen",
    date: "2023-12-05",
    readTime: 10,
  },
  {
    id: 4,
    title: "Sustainable Practices in Campus Management",
    description:
      "Explore innovative approaches to making university campuses more environmentally friendly and sustainable for future generations.",
    image: "/images/gallery-4.jpg",
    category: "Sustainability",
    author: "Prof. David Green",
    date: "2023-11-30",
    readTime: 7,
  },
  // Add more blog posts as needed
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <Search
          placeholder="Search blog posts"
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          className="w-full md:w-96"
        />
        <Select defaultValue="all" style={{ width: 200 }}>
          <Option value="all">All Categories</Option>
          <Option value="education-technology">Education Technology</Option>
          <Option value="student-wellness">Student Wellness</Option>
          <Option value="stem">STEM</Option>
          <Option value="sustainability">Sustainability</Option>
        </Select>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src={post.image} alt={post.title} layout="fill" />
            </div>
            <div className="p-6">
              <span className="text-sm font-semibold text-blue-600 mb-2 block">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mb-2 line-clamp-2">
                <Link
                  //   href={`/blog/${post.id}`}
                  href={link}
                  className="text-gray-800 hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <UserOutlined className="mr-1" /> {post.author}
                </span>
                <span className="flex items-center">
                  <ClockCircleOutlined className="mr-1" /> {post.readTime} min
                  read
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <Pagination
          current={currentPage}
          total={blogPosts.length}
          pageSize={postsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </section>
  );
}
//BlogPage
