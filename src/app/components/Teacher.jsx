"use client";

import Image from "next/image";
import Link from "next/link";
import TeacherCard from "./Teacher/TeacherCard";
const Teacher = () => {
  return (
    <>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold pb-6 xl:pb-8 text-center">
          Our Management
        </h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24 items-center justify-center">
          {/* ImgSrc, MTitle, MDesc */}
          <TeacherCard
          // MTitle="Mohammad Golam Kibria Bhuiyan"
          // MDesc="Managing Director"
          // ImgSrc="/images/golam-kibria.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default Teacher;
