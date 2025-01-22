import { Image } from "antd";

export default function OnlineLearning() {
  return (
    <div className="container mt-10 mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Collage */}
        <Image
          src="/images/aboutImg.png"
          alt="Online Learning"
          preview={false}
        />

        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Best Language Learning Platform
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nibh dolor, gravida faucibus dolor consectetur, pulvinar moncus
              risus. Fusce vel rutrum mi.
            </p>
          </div>

          <div className="space-y-6">
            {/* Special Education */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#41C5E5] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Special Education
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh
                  dolor gravida at eleifend
                </p>
              </div>
            </div>

            {/* Honors classes */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M3 8h12M3 11h12M17 5h2M17 8h2M17 11h2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Honors classes</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh
                  dolor gravida at eleifend
                </p>
              </div>
            </div>

            {/* Traditional academies */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF1943] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Traditional academies
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh
                  dolor gravida at eleifend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
