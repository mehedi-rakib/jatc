"use client";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const   Short = () => {
  const { t } = useTranslation();
  
  return (
    <div className=" py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          {t('pages.courses.short')}
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          {t('courses.short.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Module 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              {t('courses.short.module1.title')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('courses.short.module1.description')}
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">{t('courses.startCourse')}</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              {t('courses.short.module2.title')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('courses.short.module2.description')}
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">{t('courses.startCourse')}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Short;
