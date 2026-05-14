import React, { useState } from 'react';
import {
  BookOpenIcon,
  VideoIcon,
  BellIcon,
  SearchIcon,
  UserIcon,
  TrophyIcon,
  StarIcon,
  ClockIcon,
  DownloadIcon,
  MessageSquareIcon,
  FileTextIcon,
  ArrowRightIcon,
  BookIcon,
  AwardIcon,
  CheckCircleIcon,
  BarChartIcon } from
'lucide-react';
import StudentSidebar from '../../components/student/StudentSidebar';
const StudentDashboard: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <StudentSidebar />
      <div className="flex-1">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search lessons, quizzes..."
                  className="ml-2 border-0 focus:ring-0 text-sm text-gray-800 placeholder-gray-400 bg-transparent" />
                
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative">
                  <BellIcon className="h-6 w-6 text-gray-500" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <UserIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-2 hidden md:block">
                    <p className="text-sm font-medium text-gray-700">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500">S4 Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <TrophyIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Learning Streak</p>
                  <p className="text-xl font-bold text-gray-900">7 Days</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <StarIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">XP Points</p>
                  <p className="text-xl font-bold text-gray-900">2,450</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Study Time</p>
                  <p className="text-xl font-bold text-gray-900">12.5h</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <AwardIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Badges</p>
                  <p className="text-xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Next Live Class
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-indigo-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Live in 10 minutes
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    Mathematics: Quadratic Equations
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    with Mr. John Smith
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      2:00 PM - 3:00 PM
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="h-4 w-4 mr-1" />
                      24 students joined
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Continue Learning
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    Mathematics
                  </span>
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Algebra Fundamentals
                </h3>
                <div className="mt-4 mb-3">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{
                        width: '60%'
                      }}>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">12/20 lessons</span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                    Continue
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                    Biology
                  </span>
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Cell Structure
                </h3>
                <div className="mt-4 mb-3">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{
                        width: '25%'
                      }}>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">5/20 lessons</span>
                  <button className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                    Continue
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Physics
                  </span>
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Forces & Motion
                </h3>
                <div className="mt-4 mb-3">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-amber-600 h-2 rounded-full"
                      style={{
                        width: '80%'
                      }}>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">16/20 lessons</span>
                  <button className="text-amber-600 hover:text-amber-800 font-medium inline-flex items-center">
                    Continue
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Quizzes
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <BarChartIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">
                        Mathematics Quiz
                      </h3>
                      <p className="text-sm text-gray-500">
                        Chapter 4: Quadratic Equations
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-indigo-600">
                    85%
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>15/20 correct</span>
                    <span>20 minutes</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                    Review Answers
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChartIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">
                        Biology Quiz
                      </h3>
                      <p className="text-sm text-gray-500">
                        Chapter 2: Cell Biology
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-600">92%</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>18/20 correct</span>
                    <span>15 minutes</span>
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                    Review Answers
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Study Resources
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Browse Library
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <FileTextIcon className="h-6 w-6 text-indigo-600" />
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  Mathematics Notes
                </h3>
                <p className="text-xs text-gray-500 mt-1">Chapter 4 Summary</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <BookIcon className="h-6 w-6 text-green-600" />
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  Biology Textbook
                </h3>
                <p className="text-xs text-gray-500 mt-1">Complete S4 Guide</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <FileTextIcon className="h-6 w-6 text-amber-600" />
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  Physics Formulas
                </h3>
                <p className="text-xs text-gray-500 mt-1">Quick Reference</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <FileTextIcon className="h-6 w-6 text-purple-600" />
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  Past Papers
                </h3>
                <p className="text-xs text-gray-500 mt-1">2022 Collection</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Questions
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Ask a Question
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <MessageSquareIcon className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Mathematics
                      </h3>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      How do we solve quadratic equations using the quadratic
                      formula?
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500">2 answers</span>
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                        View Answers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <MessageSquareIcon className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Biology
                      </h3>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      What's the difference between mitosis and meiosis?
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500">1 answer</span>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                        View Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>);

};
export default StudentDashboard;