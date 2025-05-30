"use client";
import { Image } from "antd";
import { useTranslation } from "react-i18next";

export default function OnlineLearning() {
  const { t } = useTranslation();

  // Static data for Japan work or study opportunities
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
    // {
    //   title: t("onlineLearning.circulars.languageProgram"),
    //   description: t("onlineLearning.circulars.languageProgramDesc"),
    //   link: "/",
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-4 md:pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Collage */}
        <Image
          src="/images/aboutImg.png"
          alt={t("onlineLearning.title")}
          preview={false}
          className="rounded-lg"
        />

        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl pt-0 font-bold">
              {t("onlineLearning.title")}
            </h2>
            <p className="text-gray-600">{t("onlineLearning.description")}</p>
          </div>

          {/* Grid of Cards */}
          <div className="grid gap-6">
            {circulars.map((circular, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{circular.title}</h3>
                <p className="text-gray-600 mb-4">{circular.description}</p>
                {circular.iframe ? (
                  circular.iframe
                ) : (
                  <a
                    href={circular.link}
                    className="inline-block text-blue-600 hover:underline font-medium"
                  >
                    {t("onlineLearning.readMore")} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
