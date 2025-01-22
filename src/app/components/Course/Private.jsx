import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const PrivateLessons = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          Private Lessons
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Take your Japanese learning experience to the next level with
          personalized lessons tailored to your individual needs and pace.
          Whether you are a beginner or looking to improve your conversation
          skills, private lessons will accelerate your learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Module 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Beginners Japanese
            </h3>
            <p className="text-gray-600 mb-4">
              A one-on-one lesson designed for absolute beginners. Learn the
              basics, including pronunciation, simple sentences, and basic
              kanji.
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">Start Lesson</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Advanced Japanese Conversation
            </h3>
            <p className="text-gray-600 mb-4">
              Improve your speaking skills with private lessons focused on
              advanced topics like debates, current events, and business
              Japanese.
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">Start Lesson</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivateLessons;
