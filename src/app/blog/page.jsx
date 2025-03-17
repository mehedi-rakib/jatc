"use client";
import { useTranslation } from "react-i18next";
import BlogPage from "../components/Blog/BlogPage";

const Blog = () => {
  const { t } = useTranslation();
  return <BlogPage />;
};

export default Blog;
