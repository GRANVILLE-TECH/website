import React from 'react';
import {
  BookOpenIcon,
  VideoIcon,
  ClockIcon,
  BellIcon,
  SearchIcon,
  BarChartIcon,
  AwardIcon } from
'lucide-react';
import CourseCard from '../components/CourseCard';
import LiveClassCard from '../components/LiveClassCard';
const StudentDashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, Student
            </h1>
            <p className="text-gray-600">Continue your learning journey</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search courses, topics..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
              
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <button className="p-2 bg-gray-100 rounded-full relative">
              <BellIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-full">
                <BookOpenIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Enrolled Courses</p>
                <p className="text-xl font-semibold">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-full">
                <VideoIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Live Classes</p>
                <p className="text-xl font-semibold">3</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-full">
                <ClockIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Study Hours</p>
                <p className="text-xl font-semibold">24.5</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-full">
                <AwardIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Quizzes Completed</p>
                <p className="text-xl font-semibold">12</p>
              </div>
            </div>
          </div>
        </div>
        {/* Continue Learning Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Continue Learning
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
              
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                    Mathematics
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">
                    Algebra Fundamentals
                  </h3>
                </div>
                <span className="text-sm text-gray-500">S4</span>
              </div>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{
                      width: '65%'
                    }}>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">Progress: 65%</span>
                  <span className="text-xs text-gray-500">13/20 lessons</span>
                </div>
              </div>
              <button className="w-full py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
                Continue Learning
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                    Biology
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">
                    Cell Structure & Function
                  </h3>
                </div>
                <span className="text-sm text-gray-500">S4</span>
              </div>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: '30%'
                    }}>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">Progress: 30%</span>
                  <span className="text-xs text-gray-500">6/20 lessons</span>
                </div>
              </div>
              <button className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
                Continue Learning
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded">
                    Physics
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">
                    Forces & Motion
                  </h3>
                </div>
                <span className="text-sm text-gray-500">S4</span>
              </div>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-600 h-2 rounded-full"
                    style={{
                      width: '80%'
                    }}>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">Progress: 80%</span>
                  <span className="text-xs text-gray-500">16/20 lessons</span>
                </div>
              </div>
              <button className="w-full py-2 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-700">
                Continue Learning
              </button>
            </div>
          </div>
        </section>
        {/* Upcoming Live Classes */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Upcoming Live Classes
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
              
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LiveClassCard
              title="Mathematics Revision Session"
              subject="Mathematics"
              level="S4"
              instructor="Mr. John Doe"
              date="Today"
              time="2:00 PM"
              duration="1 hour"
              attendees={24}
              status="live" />
            
            <LiveClassCard
              title="Biology: Ecosystem Dynamics"
              subject="Biology"
              level="S4"
              instructor="Ms. Jane Smith"
              date="Tomorrow"
              time="10:00 AM"
              duration="1.5 hours"
              attendees={18}
              status="upcoming" />
            
          </div>
        </section>
        {/* Recommended Courses */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Recommended for You
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
              
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              title="Chemistry: Organic Compounds"
              subject="Chemistry"
              level="S4"
              instructor="Dr. Robert Johnson"
              thumbnailUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              liveSessionCount={2}
              recordedLessonCount={15}
              quizCount={5}
              duration="10 hours" />
            
            <CourseCard
              title="English Literature: Shakespeare"
              subject="English"
              level="S4"
              instructor="Mrs. Emily Wilson"
              thumbnailUrl="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
              liveSessionCount={1}
              recordedLessonCount={12}
              quizCount={4}
              duration="8 hours" />
            
            <CourseCard
              title="Geography: Climate Patterns"
              subject="Geography"
              level="S4"
              instructor="Mr. David Brown"
              thumbnailUrl="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              liveSessionCount={3}
              recordedLessonCount={18}
              quizCount={6}
              duration="12 hours" />
            
          </div>
        </section>
      </div>
    </div>);

};
export default StudentDashboard;