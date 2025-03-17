"use client";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mt-0 mx-auto px-0 md:px-4 pb-10">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Image Collage */}
        <img
          src="/images/aboutImg.png"
          alt={t('pages.about.title')}
          height={1200}
          width={1200}
          preview={false}
        />

        {/* Content */}
        <div className="space-y-4 px-4">
          <h2 className="text-4xl font-bold text-center">{t('pages.about.title')}</h2>
          <p>
            {t('pages.about.paragraph1', 'Japan Ambition Training Center is one of the leading Japanese language training center in Bangladesh. It offers an easy learning method for Bangladeshi students. The courses are designed especially for the Bangladeshi students.')}
            <br />
            <br />
            {t('pages.about.paragraph2', 'Japan Ambition Training Center has an extraordinary learning method to make each of the students eloquent in Japanese language. This easiest method ensures highest skill in Japanese Language.')}
            <br />
            <br />
            {t('pages.about.paragraph3', 'At the same time, Japan Ambition Training Center ensures the suitable course fee for all the students of Bangladesh.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
