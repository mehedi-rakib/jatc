"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Button } from "antd"; // Import Ant Design Button
const Test4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [testStarted, setTestStarted] = useState(false);

 
  const questions = [
    {
    question: 'しゅくだいはもう _______ しまいました。',
    options: ['やる', 'おわり', 'やって', 'やった'],
   answer: 'やって'
}, 
{
    question: 'かいぎの前にへやのれいぼうを　_______　おいてください。',
    options: ['つけた', 'つけて', 'つけたい', 'つける'],
   answer: 'つけて'
}, 
{
question: '旅行する前にガイドブックを買って _______。',
    options: ['おきない', 'ねます', 'おきます', 'おきた'],
   answer: 'おきます'
}, 
{
    question: 'つくえはそのままに　_______ おいてください。',
    options: ['する', 'して', 'した', 'うえ'],
   answer: 'する'
}, 
{
    question: 'へやを出るときは、まどをしめて _______　ほうがいいですよ。',
    options: ['ある', 'いた', 'います', 'おいた'],
   answer: 'おいた'
}, ];

  const resultComments = {
    perfect: "Flawless, you are a star!",
    excellent: "Outstanding, very noble.",
    good: "Exceeds expectations.",
    average: "Acceptable or Luck?",
    bad: "More studying perhaps?",
    poor: "That was not good...",
    worst: "Shameful! Contact JATC!",
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResultComment = (percentage) => {
    if (percentage === 100) return resultComments.perfect;
    if (percentage > 90) return resultComments.excellent;
    if (percentage > 70) return resultComments.good;
    if (percentage > 50) return resultComments.average;
    if (percentage > 35) return resultComments.bad;
    if (percentage > 20) return resultComments.poor;
    return resultComments.worst;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setScore(0);
  };

  const scorePercentage = Math.round((score / questions.length) * 100);

  const handleStartTest = () => {
    setTestStarted(true); // Start the test
  };

  return (
    <div className="main-quiz-holder mx-auto mt-10 mb-24 p-6 bg-gray-100 border border-gray-300 shadow-lg rounded-tl-3xl rounded-br-3xl w-full max-w-xl">
      {!testStarted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Ready to start?
          </h2>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}>
            <Button
              onClick={handleStartTest}
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md">
              Start Test
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        // Show the quiz questions and options once the test starts
        <div>
          {showResults ? (
            <div className="results-container text-center">
              <h2 className="text-3xl font-bold text-gray-700 mb-4">
                {getResultComment(scorePercentage)}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                You scored {scorePercentage}% ({score} out of {questions.length}
                ).
              </p>
              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                Restart Quiz
              </button>
            </div>
          ) : (
            <div className="slide-container">
              <div className="question-number text-sm text-gray-500 mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <h2 className="question text-2xl font-semibold text-gray-700 mb-6">
                {questions[currentQuestion].question}
              </h2>
              <ul className="answers list-none p-0 space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`cursor-pointer p-4 border rounded-md shadow-md transition ${
                      selectedAnswer === option
                        ? "bg-blue-400 text-white"
                        : "bg-gray-200 hover:bg-blue-400 hover:text-white"
                    }`}>
                    {option}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between">
                {currentQuestion > 0 && (
                  <button
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400">
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">
                  {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Test4;
