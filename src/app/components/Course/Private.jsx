import CourseTemplate from "./CourseTemplate";

export default function PrivateLessons() {
  return (
    <CourseTemplate
      eyebrow="One-to-One"
      title="Private Lessons"
      image="/images/slider-4.jpg"
      breadcrumbs={[{ label: "Courses" }, { label: "Private Course" }]}
      intro="Personalised lessons shaped entirely around your goals, your schedule and the pace that works for you."
      facts={[
        { label: "Duration", value: "Flexible" },
        { label: "Level", value: "Any level" },
        { label: "Schedule", value: "You choose" },
        { label: "Format", value: "One-to-one" },
      ]}
      body="Take your Japanese to the next level with lessons tailored to your individual needs and pace. Whether you are an absolute beginner or polishing your conversation skills, private lessons accelerate your progress — because every minute of class time is spent on exactly what you need. You set the hours, and your instructor builds the syllabus around your goals."
      modules={[
        {
          title: "Beginner's Japanese",
          body: "One-to-one lessons designed for absolute beginners: pronunciation, simple sentences and your first kanji.",
        },
        {
          title: "Advanced Conversation",
          body: "Sharpen your speaking with sessions built around debates, current events and business Japanese.",
        },
        {
          title: "JLPT Coaching",
          body: "Targeted preparation for the level you are sitting, with practice papers marked and reviewed with you.",
        },
        {
          title: "Interview & Job Prep",
          body: "Rehearse the exact conversations you will face when applying to work or study in Japan.",
        },
      ]}
      outcomes={[
        "A syllabus built around your goals",
        "Lessons at times that suit you",
        "Immediate, personal feedback",
        "Faster progress than group classes",
        "Focused JLPT or interview coaching",
        "Confidence speaking one-to-one",
      ]}
    />
  );
}
