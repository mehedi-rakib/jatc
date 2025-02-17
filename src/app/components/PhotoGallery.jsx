"use client";

import { Image } from "antd";
import Link from "next/link";

export default function PhotoGallery() {
  const images = [
    // {
    //   src: "/images/gallery-1.jpg",
    //   alt: "Parents helping children with homework",
    // },
    {
      src: "/images/gallery-2.jpg",
      alt: "Group of diverse children smiling",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Child with alphabet letters",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Children playing with colorful toys",
    },
    // {
    //   src: "/images/gallery-5.jpg",
    //   alt: "Children getting on school bus",
    // },
    // {
    //   src: "/images/gallery-6.jpg",
    //   alt: "Teacher with children",
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#663399]">
            Photo Gallery
          </h2>
          <p className="text-gray-600 mb-8">
          Explore a collection of stunning photos capturing unforgettable moments and breathtaking scenes.
          </p>
          <Link
            href="/#"
            className="inline-block bg-green-400 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            VIEW ALL GALLERY
          </Link>
        </div>

        {/* Right Gallery Grid */}

        <div className="flex flex-col gap-3">
          <div className="w-full m-0 h-64 md:h-[350px] overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.facebook.com/v2.9/plugins/video.php?href=https://www.facebook.com/japan.ambition/videos/1776418973155870&show_text=0&width=560"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg "
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Image.PreviewGroup>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[16/9] relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover"
                  /> */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover"
                    preview={{
                      mask: (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      ),
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
