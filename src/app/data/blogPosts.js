/** Demo blog content — replace with a CMS feed when one is available. */
export const blogPosts = [
  {
    id: 1,
    slug: "/blog-test",
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
    slug: "/blog-test",
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
    slug: "/blog-test",
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
    slug: "/blog-test",
    title: "Sustainable Practices in Campus Management",
    description:
      "Explore innovative approaches to making university campuses more environmentally friendly and sustainable for future generations.",
    image: "/images/gallery-4.jpg",
    category: "Sustainability",
    author: "Prof. David Green",
    date: "2023-11-30",
    readTime: 7,
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
