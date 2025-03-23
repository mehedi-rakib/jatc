import React from "react";
import { Rate } from "antd";
import { FaQuoteRight } from "react-icons/fa";

export function TestimonialCard({ images, name, content, rating, title }) {
  // const images = "/images/student/std-1.jpg";
  return (
    <>
      {/* Profile Image */}
      {/* <div className="relative -top-8 left-1/2 transform -translate-x-1/2">
        <Image src={images} alt="Profile" width={80} height={80} />
      </div> */}

      {/* Card Content */}

      <div className="bg-[#464B5F] rounded-lg p-6 md:p-6 md:pt-14 text-center relative">
        <div className="mb-4 ">
          <img
            src={images}
            alt="Profile"
            width={100}
            height={100}
            className="xl:-mt-20 xl:ml-52 mx-auto rounded-full xl:absolute"
          />
          <Rate
            disabled
            defaultValue={rating}
            className="text-yellow-400 mt-6"
          />
        </div>

        <p className="text-gray-300 mb-6 text-sm italic">{content}</p>

        <div className="mb-2">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-gray-300 text-sm italic">{title}</p>
        </div>

        {/* Quote Icon */}
        <div className="absolute -bottom-4 right-4">
          <div className="bg-red-500 rounded-full p-2">
            <FaQuoteRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
