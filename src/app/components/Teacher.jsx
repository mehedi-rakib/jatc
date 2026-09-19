import TeacherCard from "./Teacher/TeacherCard";
import SectionHeading from "./ui/SectionHeading";

export default function Teacher() {
  return (
    <section className="section mx-auto max-w-[90rem] px-4 lg:px-12">
      <SectionHeading
        eyebrow="Leadership"
        title="Our Management"
        description="The people steering Japan Ambition Training Center — and backing every student who walks through our doors."
      />
      <div className="mt-12">
        <TeacherCard />
      </div>
    </section>
  );
}
