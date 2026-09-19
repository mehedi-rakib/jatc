import ProfilePage from "../components/Profile/ProfilePage";

export const metadata = {
  title: "Our Coordinator",
  description:
    "Meet the program coordinator who keeps every course at Japan Ambition Training Center running smoothly.",
};

export default function CoordinatorPage() {
  return (
    <ProfilePage
      eyebrow="Administration"
      pageTitle="Meet Our Coordinator"
      name="Md Baharul Alam Bonny"
      role="Director of Administration"
      image="/images/baharul.png"
      breadcrumbs={[{ label: "Coordinator" }]}
      quote="Ensuring smooth operations for seamless learning experiences."
      bio={[
        "Md Baharul Alam Bonny brings years of coordination and management experience to Japan Ambition Training Center.",
        "His role ensures every educational activity is organised efficiently, so learners can focus on what matters most — gaining knowledge and skills. His expertise lies in streamlining processes and maintaining a genuinely supportive environment.",
      ]}
      panels={[
        {
          title: "Responsibilities",
          body: "Overseeing daily operations of every programme, and coordinating between instructors and students so communication never breaks down.",
        },
        {
          title: "Achievements",
          body: "Built the scheduling system that keeps morning, day and evening shifts running side by side without clashes.",
        },
      ]}
      highlights={[
        "Coordinates morning, day, evening and weekend shifts",
        "First point of contact for admission enquiries",
        "Keeps instructors and students in sync",
        "Manages the admission and enrolment pipeline",
      ]}
    />
  );
}
