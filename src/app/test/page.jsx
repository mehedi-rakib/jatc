import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import { jlptTests, testIds } from "../data/jlptTests";

export const metadata = {
  title: "JLPT Practice Tests",
  description:
    "Free JLPT vocabulary and grammar practice tests from Japan Ambition Training Center.",
};

export default function TestIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice"
        title="JLPT Practice Tests"
        description="Short, free practice sets covering vocabulary and grammar. No sign-up needed — pick one and start."
        breadcrumbs={[{ label: "JLPT Test" }]}
      />

      <section className="section mx-auto max-w-4xl px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {testIds.map((id) => {
            const test = jlptTests[id];
            return (
              <Link
                key={id}
                href={`/test/${id}`}
                className="group rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100
                           transition-all duration-300 ease-smooth hover:-translate-y-1.5
                           hover:shadow-lift">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-600">
                  {test.level}
                </span>
                <h2 className="mt-4 text-xl font-bold text-ink-900">
                  {test.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--muted)]">
                  {test.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-500 transition-all duration-300 group-hover:gap-3">
                  {test.questions.length} questions →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
