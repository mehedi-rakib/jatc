"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input, Select, Pagination, Empty } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegClock, FaRegUser, FaArrowRight } from "react-icons/fa";
import PageHero from "../ui/PageHero";
import { blogPosts, blogCategories } from "../../data/blogPosts";

const POSTS_PER_PAGE = 6;

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  // Search and category filter both actually drive the list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const visible = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const resetPage = () => setPage(1);

  return (
    <>
      <PageHero
        eyebrow="Reading"
        title="Our Blog"
        description="Study tips, language guides and news from the world of Japanese learning."
        breadcrumbs={[{ label: "Blog" }]}
        image="/images/gallery-3.jpg"
      />

      <section className="section mx-auto max-w-[90rem] px-4 lg:px-12">
        {/* Search + filter */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Input.Search
            placeholder="Search posts by title, topic or author"
            allowClear
            size="large"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPage();
            }}
            className="w-full md:max-w-md"
          />

          <Select
            value={category}
            onChange={(value) => {
              setCategory(value);
              resetPage();
            }}
            size="large"
            style={{ width: 220 }}
            options={blogCategories.map((c) => ({
              value: c,
              label: c === "All" ? "All Categories" : c,
            }))}
          />
        </div>

        <p className="mb-6 text-sm text-[color:var(--muted)]">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
          {category !== "All" && ` in ${category}`}
          {query && ` matching “${query}”`}
        </p>

        {/* Grid */}
        {visible.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white
                             shadow-soft ring-1 ring-ink-100 transition-shadow
                             duration-300 hover:shadow-lift">
                  <Link href={post.slug} className="relative block h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700
                                 ease-smooth group-hover:scale-110"
                    />
                    <span
                      className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1
                                 text-[11px] font-bold uppercase tracking-wider
                                 text-brand-600 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="line-clamp-2 text-lg font-bold leading-snug">
                      <Link
                        href={post.slug}
                        className="text-ink-900 transition-colors hover:text-brand-500">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                      {post.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-[color:var(--muted)]">
                      <span className="flex items-center gap-1.5">
                        <FaRegUser className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaRegClock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>

                    <Link
                      href={post.slug}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold
                                 text-brand-500 transition-all duration-300 hover:gap-3">
                      Read article
                      <FaArrowRight className="h-3 w-3" />
                    </Link>

                    <time className="mt-2 text-[11px] text-ink-400" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-3xl bg-[color:var(--surface)] py-16">
            <Empty description="No posts match your search yet." />
          </div>
        )}

        {filtered.length > POSTS_PER_PAGE && (
          <div className="mt-12 flex justify-center">
            <Pagination
              current={page}
              total={filtered.length}
              pageSize={POSTS_PER_PAGE}
              onChange={setPage}
              showSizeChanger={false}
            />
          </div>
        )}
      </section>
    </>
  );
}
