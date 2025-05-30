"use client";
import { Image, Tabs } from "antd";
import { useTranslation } from "react-i18next";

export default function OnlineLearning() {
  const { t } = useTranslation();

  // Static data for circulars
  const circulars = [
    {
      title: t("onlineLearning.circulars.circular.title"),
      description: t("onlineLearning.circulars.circular.description"),
      link: "/notice/circular-1",
    },
    {
      title: t("onlineLearning.circulars.studyOpportunity"),
      description: t("onlineLearning.circulars.studyOpportunityDesc"),
      link: "#",
    },
  ];

  // Static data for notices
  const notices = [
    {
      title: "Latest Events and Workshops",
      description: "Join our upcoming workshops and seminars to enhance your skills and knowledge about Japan.",
      link: "/notice/notice-1",
    },
    {
      title: "Schedule Updates",
      description: "Check our updated class schedules and important academic announcements.",
      link: "/notice/notice-2",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <span className="text-base font-medium px-2 py-1">
          Circulars
        </span>
      ),
      children: (
        <div className="grid sm:grid-cols-1 gap-4 md:gap-6">
          {circulars.map((circular, index) => (
            <div
              key={index}
              className="p-4 md:p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">
                {circular.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {circular.description}
              </p>
              {circular.iframe ? (
                circular.iframe
              ) : (
                <a
                  href={circular.link}
                  className="inline-flex items-center text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  {t("onlineLearning.readMore")}
                  <span className="ml-1">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-base font-medium px-2 py-1">
          Notice
        </span>
      ),
      children: (
        <div className="grid sm:grid-cols-1 gap-4 md:gap-6">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="p-4 md:p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">
                {notice.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                {notice.description}
              </p>
              <a
                href={notice.link}
                className="inline-flex items-center text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {t("onlineLearning.readMore")}
                <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Image Collage */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/aboutImg.png"
            alt={t("onlineLearning.title")}
            preview={false}
            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("onlineLearning.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              {t("onlineLearning.description")}
            </p>
          </div>

          {/* Tabs */}
          <Tabs
            items={items}
            className="w-full"
            defaultActiveKey="1"
            tabBarStyle={{
              marginBottom: "1.5rem",
            }}
            tabBarGutter={24}
          />
        </div>
      </div>
    </div>
  );
}
