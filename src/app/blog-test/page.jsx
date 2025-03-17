"use client";
import { useTranslation } from "react-i18next";
import SingleBlog from "../components/Blog/SingleBlog";

export default function BlogTest() {
  const { t } = useTranslation();
  return (
    <SingleBlog />
  );
}
