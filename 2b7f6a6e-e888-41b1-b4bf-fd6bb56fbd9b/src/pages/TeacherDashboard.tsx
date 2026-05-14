import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpenIcon,
  VideoIcon,
  UsersIcon,
  BellIcon,
  MessageSquareIcon,
  AlertCircleIcon,
  CalendarIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  BrainIcon,
  BarChartIcon,
  ClockIcon,
  HomeIcon,
  BookIcon,
  FolderIcon,
  MessagesSquareIcon,
  Settings2Icon,
  UserIcon,
  MenuIcon,
  XIcon } from
'lucide-react';
const TeacherDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentHour = new Date().getHours();
  const greeting =
  currentHour < 12 ?
  'Good Morning' :
  currentHour < 18 ?
  'Good Afternoon' :
  'Good Evening';
  const navigationItems = [
  {
    label: 'Dashboard',
    icon: HomeIcon,
    path: '/teacher',
    badge: 3
  },
  {
    label: 'Schedule',
    icon: CalendarIcon,
    path: '/teacher/schedule'
  },
  {
    label: 'Lessons',
    icon: BookIcon,
    path: '/teacher/lessons',
    action: 'Create Lesson'
  },
  {
    label: 'Q&A Forum',
    icon: MessagesSquareIcon,
    path: '/teacher/qa',
    badge: 12
  },
  {
    label: 'Analytics',
    icon: BarChartIcon,
    path: '/teacher/analytics'
  },
  {
    label: 'Resources',
    icon: FolderIcon,
    path: '/teacher/resources'
  },
  {
    label: 'Messages',
    icon: MessageSquareIcon,
    path: '/teacher/messages',
    badge: 5
  },
  {
    label: 'Settings',
    icon: Settings2Icon,
    path: '/teacher/settings'
  }];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
            <BookOpenIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              EduConnect
            </span>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigationItems.map((item) =>
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              
                <item.icon className="h-5 w-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.badge &&
              <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {item.badge}
                  </span>
              }
              </Link>
            )}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  Ms. Sarah Wilson
                </p>
                <p className="text-xs text-gray-500">Mathematics Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
        
        <div className="relative flex flex-col w-80 h-full bg-white">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                EduConnect
              </span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700">
              
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigationItems.map((item) =>
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setIsSidebarOpen(false)}>
              
                <item.icon className="h-5 w-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.badge &&
              <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {item.badge}
                  </span>
              }
              </Link>
            )}
          </nav>
        </div>
        <div
          className="absolute inset-0 bg-gray-600 bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700">
            
            <MenuIcon className="h-6 w-6" />
          </button>
          <BookOpenIcon className="h-8 w-8 text-indigo-600" />
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>
        {/* Existing Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {greeting}, Ms. Sarah Wilson
              </h1>
              <p className="text-gray-600 mt-1">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button className="relative">
                <BellIcon className="h-6 w-6 text-gray-500" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <VideoIcon className="h-5 w-5 mr-2" />
                Start Live Class
              </button>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Today's Classes</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-900">4</p>
                    <p className="ml-2 text-sm text-gray-500">classes</p>
                  </div>
                  <p className="text-xs text-indigo-600 mt-1">Next: 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircleIcon className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Need Attention</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-900">8</p>
                    <p className="ml-2 text-sm text-gray-500">students</p>
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    Below mastery level
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MessageSquareIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Pending Questions</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="ml-2 text-sm text-gray-500">questions</p>
                  </div>
                  <p className="text-xs text-green-600 mt-1">5 new today</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <TrendingUpIcon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Average Rating</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-900">4.8</p>
                    <p className="ml-2 text-sm text-gray-500">/ 5.0</p>
                  </div>
                  <p className="text-xs text-amber-600 mt-1">↑ 0.3 this week</p>
                </div>
              </div>
            </div>
          </div>
          {/* Today's Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Today's Schedule
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {[
                    {
                      time: '10:30 AM',
                      title: 'Mathematics - Quadratic Equations',
                      students: 24,
                      status: 'upcoming'
                    },
                    {
                      time: '1:00 PM',
                      title: 'Physics - Forces and Motion',
                      students: 18,
                      status: 'upcoming'
                    }].
                    map((session, index) =>
                    <div key={index} className="flex items-center">
                        <div className="flex-shrink-0 w-20">
                          <p className="text-sm font-medium text-gray-900">
                            {session.time}
                          </p>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              {session.title}
                            </p>
                            <div className="flex items-center">
                              <UsersIcon className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-sm text-gray-500">
                                {session.students}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Start Class
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Students Needing Attention
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((student) =>
                <div
                  key={student}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          JS
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          John Smith
                        </p>
                        <p className="text-xs text-gray-500">
                          Below 60% in Mathematics
                        </p>
                      </div>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Recent Activity & Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {[
                    {
                      icon: MessageSquareIcon,
                      color: 'text-green-600',
                      bg: 'bg-green-100',
                      content: 'New question in "Quadratic Equations"',
                      time: '5 minutes ago'
                    },
                    {
                      icon: CheckCircleIcon,
                      color: 'text-indigo-600',
                      bg: 'bg-indigo-100',
                      content: 'Completed "Forces and Motion" live session',
                      time: '2 hours ago'
                    },
                    {
                      icon: BrainIcon,
                      color: 'text-amber-600',
                      bg: 'bg-amber-100',
                      content:
                      '5 students achieved mastery in "Chemical Bonding"',
                      time: '4 hours ago'
                    }].
                    map((activity, index) =>
                    <div key={index} className="flex items-start">
                        <div className={`p-2 rounded-lg ${activity.bg}`}>
                          <activity.icon
                          className={`h-5 w-5 ${activity.color}`} />
                        
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-900">
                            {activity.content}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Overview
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Student Engagement</span>
                    <span className="text-gray-900 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{
                        width: '85%'
                      }} />
                    
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Content Rating</span>
                    <span className="text-gray-900 font-medium">4.8/5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{
                        width: '92%'
                      }} />
                    
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Student Progress</span>
                    <span className="text-gray-900 font-medium">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-amber-600 h-2 rounded-full"
                      style={{
                        width: '76%'
                      }} />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};
export default TeacherDashboard;