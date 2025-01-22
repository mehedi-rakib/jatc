"use client";

import Image from "next/image";
import Link from "next/link";
const Teacher = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold pb-4 xl:pb-6 text-center">
        Our Management
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24 items-center justify-center">
        <div className="w-[350px]">
          <Image
            src="/images/Instructor.jpg"
            alt="teacher"
            width={300}
            height={300}
          />
          <div className="w-full">
            <h2 className="mx-auto text-center text-2xl my-2 font-bold hover:text-red-600">
              <Link href="/management/coordinator">Coordinator</Link>
            </h2>
            <p className="text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus sed, at adipisci rerum ipsam quae sit
              voluptatibus nobis aliquam earum tenetur ut recusandae quo
              quisquam optio quis officia id aspernatur blanditiis odit ipsa
              provident?
            </p>
          </div>
        </div>
        <div className="w-[350px]">
          <Image
            src="/images/Instructor.jpg"
            alt="teacher"
            width={300}
            height={300}
          />
          <div className="w-full">
            <h2 className="mx-auto text-center text-2xl my-2 font-bold hover:text-red-600">
              <Link href="/management/instructor">Instructor</Link>
            </h2>
            <p className="text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus sed, at adipisci rerum ipsam quae sit
              voluptatibus nobis aliquam earum tenetur ut recusandae quo
              quisquam optio quis officia id aspernatur blanditiis odit ipsa
              provident?
            </p>
          </div>
        </div>
        <div className="w-[350px]">
          <Image
            src="/images/Instructor.jpg"
            alt="teacher"
            width={300}
            height={300}
            className=""
          />
          <div className="w-full">
            <h2 className="mx-auto text-center text-2xl my-2 font-bold hover:text-red-600">
              <Link href="/management/coordinator">Coordinator</Link>
            </h2>
            <p className="text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus sed, at adipisci rerum ipsam quae sit
              voluptatibus nobis aliquam earum tenetur ut recusandae quo
              quisquam optio quis officia id aspernatur blanditiis odit ipsa
              provident?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
