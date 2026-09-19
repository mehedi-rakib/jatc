import CourseTemplate from "./CourseTemplate";

export default function Short() {
  return (
    <CourseTemplate
      eyebrow="Short Intensive"
      title="Short Intensive Course"
      image="/images/slider-2.jpg"
      breadcrumbs={[{ label: "Courses" }, { label: "Short Intensive Course" }]}
      intro="Fast-track the essentials. Built for anyone who needs practical Japanese quickly — for travel, work or an upcoming interview."
      facts={[
        { label: "Duration", value: "6–12 weeks" },
        { label: "Level", value: "Beginner → N5" },
        { label: "Batch size", value: "Small groups" },
        { label: "Focus", value: "Speaking first" },
      ]}
      body="This short intensive course is designed for learners who want essential Japanese phrases and vocabulary fast. It covers speaking, reading and basic cultural awareness in a fun, interactive format. Classes stay small so you get to speak in every single session, and the vocabulary is chosen around the situations you will actually encounter."
      modules={[
        {
          title: "Survival Japanese",
          body: "A crash course in the basics: everyday expressions and polite phrases for ordering food, asking directions and handling daily situations.",
        },
        {
          title: "Japanese for Tourists",
          body: "Travel-specific vocabulary, the questions you will need most, and the phrases that make getting around Japan genuinely easy.",
        },
        {
          title: "Workplace Basics",
          body: "Greetings, self-introductions and the polite forms expected in Japanese professional settings.",
        },
        {
          title: "Reading Hiragana & Katakana",
          body: "Both syllabaries from scratch, so signs, menus and station boards stop being a guessing game.",
        },
      ]}
      outcomes={[
        "Introduce yourself confidently in Japanese",
        "Read Hiragana and Katakana",
        "Handle everyday conversations",
        "Understand key cultural etiquette",
        "Build a practical starter vocabulary",
        "Be ready to continue to N5",
      ]}
    />
  );
}
