import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SearchIcon,
  FilterIcon,
  BookOpenIcon,
  ClockIcon,
  BarChartIcon,
  TrophyIcon,
  StarIcon,
  ChevronLeftIcon } from
'lucide-react';
import QuizList from '../../components/quizzes/QuizList';
import QuizPlayer from '../../components/quizzes/QuizPlayer';
export interface Quiz {
  id: string;
  title: string;
  subject: string;
  grade: string;
  totalQuestions: number;
  timeLimit?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'not_started' | 'in_progress' | 'completed';
  score?: number;
  lastAttempt?: string;
  attempts?: number;
  type: 'lesson' | 'practice' | 'assessment';
  questions: QuizQuestion[];
}
export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'fill_in_blank' | 'short_answer';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}
const Quizzes: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Quadratic Equations Mastery Check',
    subject: 'Mathematics',
    grade: 'S4',
    totalQuestions: 10,
    timeLimit: 20,
    difficulty: 'intermediate',
    status: 'not_started',
    type: 'lesson',
    questions: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'What is the standard form of a quadratic equation?',
      options: [
      'ax² + bx + c = 0',
      'ax + b = 0',
      'ax³ + bx² + cx + d = 0',
      'ax + by = c'],

      correctAnswer: 'ax² + bx + c = 0',
      explanation:
      'The standard form of a quadratic equation is ax² + bx + c = 0, where a ≠ 0',
      points: 10
    }]

  }];

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
  };
  const handleCloseQuiz = () => {
    setActiveQuiz(null);
  };
  if (activeQuiz) {
    return <QuizPlayer quiz={activeQuiz} onClose={handleCloseQuiz} />;
  }
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/student"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Back to Dashboard
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
              <p className="mt-1 text-gray-600">
                Test your knowledge and track your progress
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <BookOpenIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Completed Quizzes</p>
                <p className="text-xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <StarIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Average Score</p>
                <p className="text-xl font-bold text-gray-900">85%</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-lg">
                <ClockIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Time Spent</p>
                <p className="text-xl font-bold text-gray-900">12.5h</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrophyIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Achievements</p>
                <p className="text-xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search quizzes by title or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
              
            </div>
            <div className="flex gap-2">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
                
                <option value="">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
                
                <option value="">All Status</option>
                <option value="not_started">Not Started</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
                
                <option value="">All Types</option>
                <option value="lesson">Lesson Quizzes</option>
                <option value="practice">Practice Tests</option>
                <option value="assessment">Assessments</option>
              </select>
            </div>
          </div>
        </div>
        <QuizList quizzes={quizzes} onStartQuiz={handleStartQuiz} />
      </div>
    </div>);

};
export default Quizzes;