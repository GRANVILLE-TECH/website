import React, { useState } from 'react';
import {
  ClockIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  RefreshCwIcon } from
'lucide-react';
import type { Quiz, QuizQuestion } from '../../pages/student/Quizzes';
interface QuizPlayerProps {
  quiz: Quiz;
  onClose: () => void;
}
const QuizPlayer: React.FC<QuizPlayerProps> = ({ quiz, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    quiz.timeLimit ? quiz.timeLimit * 60 : 0
  );
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
    setShowExplanation(true);
  };
  const handleNext = () => {
    setShowExplanation(false);
    if (isLastQuestion) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    setShowExplanation(false);
    setCurrentQuestionIndex((prev) => prev - 1);
  };
  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return Math.round(correctAnswers / totalQuestions * 100);
  };
  if (quizComplete) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="text-center">
            {score >= 70 ?
            <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" /> :

            <AlertCircleIcon className="mx-auto h-12 w-12 text-yellow-500" />
            }
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Quiz Complete!
            </h2>
            <p className="mt-2 text-lg text-gray-600">Your score: {score}%</p>
            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  setQuizComplete(false);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                
                <RefreshCwIcon className="h-4 w-4 mr-2" />
                Retry Quiz
              </button>
              <button
                onClick={onClose}
                className="block w-full text-sm text-gray-500 hover:text-gray-700">
                
                Return to Quizzes
              </button>
            </div>
          </div>
        </div>
      </div>);

  }
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onClose}
            className="inline-flex items-center text-gray-500 hover:text-gray-700">
            
            <XIcon className="h-5 w-5 mr-2" />
            Exit Quiz
          </button>
          {quiz.timeLimit &&
          <div className="flex items-center text-gray-500">
              <ClockIcon className="h-5 w-5 mr-2" />
              {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, '0')}
            </div>
          }
        </div>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span>
              {Math.round((currentQuestionIndex + 1) / totalQuestions * 100)}%
              Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(currentQuestionIndex + 1) / totalQuestions * 100}%`
              }} />
            
          </div>
        </div>
        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {currentQuestion.question}
          </h3>
          {/* Multiple Choice Options */}
          {currentQuestion.type === 'multiple_choice' &&
          currentQuestion.options &&
          <div className="space-y-4">
                {currentQuestion.options.map((option, index) =>
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${showExplanation ? option === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50' : answers[currentQuestion.id] === option ? 'border-red-500 bg-red-50' : 'border-gray-200' : answers[currentQuestion.id] === option ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
              
                    <span className="text-sm font-medium">{option}</span>
                  </button>
            )}
              </div>
          }
          {/* Explanation */}
          {showExplanation &&
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Explanation
              </h4>
              <p className="text-sm text-gray-600">
                {currentQuestion.explanation}
              </p>
            </div>
          }
          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              
              <ChevronLeftIcon className="h-5 w-5 mr-2" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">
              
              {isLastQuestion ? 'Complete Quiz' : 'Next'}
              {!isLastQuestion && <ChevronRightIcon className="h-5 w-5 ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>);

};
export default QuizPlayer;