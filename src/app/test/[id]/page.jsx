import { notFound } from "next/navigation";
import Quiz from "../../components/Test/Quiz";
import { jlptTests, testIds } from "../../data/jlptTests";

export function generateStaticParams() {
  return testIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const test = jlptTests[id];
  if (!test) return { title: "Test Not Found" };

  return {
    title: test.title,
    description: `${test.level} practice — ${test.description}`,
  };
}

export default async function TestPage({ params }) {
  const { id } = await params;
  const test = jlptTests[id];

  if (!test) notFound();

  return (
    <Quiz
      testId={id}
      title={test.title}
      level={test.level}
      description={test.description}
      questions={test.questions}
    />
  );
}
