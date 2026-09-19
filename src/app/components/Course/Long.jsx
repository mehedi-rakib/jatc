import CourseTemplate from "./CourseTemplate";

export default function Long() {
  return (
    <CourseTemplate
      eyebrow="Long Intensive"
      title="Long Intensive Course"
      image="/images/slider-1.jpg"
      breadcrumbs={[{ label: "Courses" }, { label: "Long Intensive Course" }]}
      intro="Master the Japanese language at a steady, thorough pace — speaking, pronunciation, listening, reading and writing, all in one structured programme."
      facts={[
        { label: "Duration", value: "6–12 months" },
        { label: "Level", value: "Beginner → N3" },
        { label: "Shifts", value: "Morning · Day · Evening" },
        { label: "Format", value: "Classroom + homework" },
      ]}
      body="The Long Intensive Japanese Course helps you master Japanese quickly and thoroughly. The focus is on communicating clearly and effectively. Your syllabus is built around your course book, but your teacher also brings in other materials — including suggestions from students — so every class stays interesting and relevant. You will work individually, in pairs and as a class. Your teacher corrects both spoken and written errors so you become more accurate and progress faster. Each week you receive homework to reinforce what you have learned. Our students come from every background: business people, university students, corporate trainees, diplomats, working expats, teachers and adult learners of all kinds."
      modules={[
        {
          title: "Introduction to Japanese",
          body: "A beginner-friendly start covering basic grammar and vocabulary. You will learn essential phrases alongside the Japanese customs that shape how they are used.",
        },
        {
          title: "Intermediate Japanese",
          body: "For learners with a foundation: more complex sentence structures, a growing kanji set and sustained conversation practice.",
        },
        {
          title: "Advanced Grammar & Kanji",
          body: "Deep work on nuanced grammar patterns and the kanji range you need for N3-level reading comprehension.",
        },
        {
          title: "JLPT Exam Preparation",
          body: "Timed mock tests, exam strategy and one-to-one feedback so you walk into the JLPT knowing exactly what to expect.",
        },
      ]}
      outcomes={[
        "Master Hiragana and Katakana",
        "Understand core grammar patterns",
        "Hold natural conversations in Japanese",
        "Read and write practical everyday kanji",
        "Learn Japanese culture and traditions",
        "Prepare confidently for the JLPT",
      ]}
    />
  );
}
