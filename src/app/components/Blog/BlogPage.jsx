"use client";

import React, { useState } from "react";
import { Input, Select, Pagination } from "antd";
import {
  SearchOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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

// Extract unique categories for the filter dropdown
const categories = ["All Categories", ...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate current posts based on pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{t('blog.title')}</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <Search
            placeholder={t('blog.search')}
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            className="max-w-md"
          />
          <Select
            defaultValue="All Categories"
            size="large"
            style={{ minWidth: 180 }}
            className="w-full md:w-auto"
          >
            {categories.map((category, index) => (
              <Option key={index} value={category}>
                {category === "All Categories" ? t('blog.allCategories') : category}
              </Option>
            ))}
          </Select>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`${link}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                  <span>{post.category}</span>
                  <span className="flex items-center">
                    <ClockCircleOutlined className="mr-1" />
                    {post.readTime} {t('blog.readTime')}
                  </span>
                </div>
                <Link href={`${link}`}>
                  <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <UserOutlined className="mr-2" />
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                  <Link
                    href={`${link}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={blogPosts.length}
            pageSize={postsPerPage}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
}
//BlogPage
