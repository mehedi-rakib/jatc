import ProfilePage from "../components/Profile/ProfilePage";

export const metadata = {
  title: "Our Instructor",
  description:
    "Meet the instructor behind Japan Ambition Training Center's Japanese language courses.",
};

export default function InstructorPage() {
  return (
    <ProfilePage
      eyebrow="Teaching Team"
      pageTitle="Meet Our Instructor"
      name="Md Golam Kibria Bhuiyan"
      role="Managing Director & Lead Instructor"
      image="/images/golam-kibria.png"
      breadcrumbs={[{ label: "Instructor" }]}
      quote="Empowering minds through knowledge and mentorship."
      bio={[
        "With over a decade of experience in Japanese language education, Md Golam Kibria Bhuiyan specialises in delivering engaging, insightful and genuinely practical lessons.",
        "His strength lies in simplifying complex grammar and kanji so that learners at every level can follow along — and keep going. Students consistently describe his classes as the point where Japanese finally started to click.",
      ]}
      panels={[
        {
          title: "Our Mission",
          body: "To provide high-quality Japanese language education and inspire learners to reach their fullest potential in a supportive environment.",
        },
        {
          title: "Our Vision",
          body: "Building a community of lifelong learners, driven by curiosity and empowered by knowledge to make a meaningful impact.",
        },
      ]}
      highlights={[
        "10+ years of teaching experience in Japanese language education",
        "Mentored thousands of students across Bangladesh",
        "Expert at simplifying complex grammar and kanji",
        "Focused on building critical thinking and real fluency",
      ]}
    />
  );
}
