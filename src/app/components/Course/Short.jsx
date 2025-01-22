import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const Short = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          Short Intensive Course
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          This short intensive course is designed for those who want to quickly
          learn essential Japanese phrases and vocabulary for travel or
          short-term use. It covers speaking, reading, and basic cultural
          awareness in a fun, interactive format.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Module 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Survival Japanese
            </h3>
            <p className="text-gray-600 mb-4">
              A crash course for travelers, teaching basic expressions and
              polite phrases for everyday situations like ordering food or
              asking for directions.
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">Start Course</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Japanese for Tourists
            </h3>
            <p className="text-gray-600 mb-4">
              Focuses on travel-specific vocabulary, common questions, and
              phrases to help you navigate Japan with ease.
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">Start Course</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Short;
