import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const Long = () => {
  return (
    <div className=" py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          Long Intensive Course
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          The Long Intensive Japanese Course can help you master the Japanese
          language in a very fast manner. This course focuses on speaking,
          pronunciation, listening, reading and writing. The focus is on
          improving your ability to communicate clearly and effectively. The
          syllabus for your lessons is based on your course book, but your
          teacher will also use other materials, including suggestions from
          students so the content of the class is interesting and suit the
          student's needs. You will work individually, in pairs or as a class.
          Your teacher will correct your spoken and written errors so that you
          will become more accurate and you will progress quickly. Each week,
          you will be given homework to make sure you have sufficient amount of
          extra knowledge. All Valiant students will understand their mistakes
          and will gain the confidence to speak Japanese freely and naturally.
          We have a diverse spectrum of enrolled students. Our students include:
          business people, university students, corporate trainees, diplomats,
          family members, working expats, teachers, spouses, and other adult
          students of Japanese with various cultural backgrounds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Module 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Introduction to Japanese
            </h3>
            <p className="text-gray-600 mb-4">
              A beginner-friendly introduction to the Japanese language,
              focusing on basic grammar and vocabulary. You will be introduced
              to essential phrases and essential Japanese customs.
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">Start Course</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Intermediate Japanese
            </h3>
            <p className="text-gray-600 mb-4">
              Aimed at intermediate learners, this module dives into more
              complex sentence structures, kanji, and conversation practice.
            </p>
            <div className="flex items-center text-red-600">
              <FaAngleRight />
              <span className="ml-2">Start Course</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            What You Will Learn
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">- Master Hiragana and Katakana</li>
            <li className="mb-2">- Understand basic grammar patterns</li>
            <li className="mb-2">
              - Engage in simple conversations in Japanese
            </li>
            <li className="mb-2">
              - Learn about Japanese culture and traditions
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Long;
