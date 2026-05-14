import React from 'react';
import {
  ClockIcon,
  BookOpenIcon,
  BarChartIcon,
  CheckCircleIcon,
  PlayIcon,
  StarIcon,
  ChevronLeftIcon,
  RefreshCwIcon } from
'lucide-react';
import type { Quiz } from '../../pages/student/Quizzes';
interface QuizListProps {
  quizzes: Quiz[];
  onStartQuiz: (quiz: Quiz) => void;
}
const QuizList: React.FC<QuizListProps> = ({ quizzes, onStartQuiz }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((quiz) =>
      <div
        key={quiz.id}
        className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(quiz.status)}`}>
                
                  {quiz.status.replace('_', ' ').toUpperCase()}
                </span>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {quiz.title}
                </h3>
              </div>
              <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
              
                {quiz.difficulty.toUpperCase()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <BookOpenIcon className="h-4 w-4 mr-1" />
                {quiz.totalQuestions} Questions
              </div>
              {quiz.timeLimit &&
            <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {quiz.timeLimit} mins
                </div>
            }
            </div>
            {quiz.status === 'completed' && quiz.score &&
          <div className="mb-4">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-gray-500">Score</span>
                  <span className="font-medium text-gray-900">
                    {quiz.score}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                className="bg-green-600 h-2 rounded-full"
                style={{
                  width: `${quiz.score}%`
                }} />
              
                </div>
              </div>
          }
            <button
            onClick={() => onStartQuiz(quiz)}
            className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
              {quiz.status === 'completed' ?
            <>
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Retake Quiz
                </> :

            <>
                  <PlayIcon className="h-4 w-4 mr-2" />
                  Start Quiz
                </>
            }
            </button>
          </div>
        </div>
      )}
    </div>);

};
export default QuizList;