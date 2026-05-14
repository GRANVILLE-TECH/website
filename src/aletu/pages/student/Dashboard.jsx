import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon, VideoIcon, ClockIcon, BellIcon, SearchIcon,
  BarChartIcon, AwardIcon, ArrowRightIcon, TrendingUpIcon,
  CheckCircleIcon, ZapIcon
} from 'lucide-react';

const stats = [
  { label: 'Enrolled Courses', value: '8', icon: BookOpenIcon, color: 'bg-indigo-100 text-indigo-600' },
  { label: 'Live Classes', value: '3', icon: VideoIcon, color: 'bg-green-100 text-green-600' },
  { label: 'Study Hours', value: '24.5', icon: ClockIcon, color: 'bg-amber-100 text-amber-600' },
  { label: 'Achievements', value: '12', icon: AwardIcon, color: 'bg-purple-100 text-purple-600' },
];

const recentActivity = [
  { subject: 'Mathematics', lesson: 'Quadratic Equations', progress: 70, color: 'bg-indigo-500' },
  { subject: 'Biology', lesson: 'Cell Division - Mitosis', progress: 45, color: 'bg-green-500' },
  { subject: 'Physics', lesson: "Newton's Laws of Motion", progress: 90, color: 'bg-amber-500' },
];

const upcomingClasses = [
  { title: 'Mathematics Revision Session', time: '2:00 PM', instructor: 'Mr. John Doe', subject: 'Mathematics', status: 'live' },
  { title: 'Biology: Ecosystem Dynamics', time: '4:30 PM', instructor: 'Ms. Jane Smith', subject: 'Biology', status: 'upcoming' },
];

const quickLinks = [
  { label: 'Live Classes', to: '/aletu/student/live-classes', icon: VideoIcon, desc: 'Join now' },
  { label: 'Lessons', to: '/aletu/student/lessons', icon: BookOpenIcon, desc: '24 available' },
  { label: 'Quizzes', to: '/aletu/student/quizzes', icon: ZapIcon, desc: '8 pending' },
  { label: 'Q&A Forum', to: '/aletu/student/qa-forum', icon: BarChartIcon, desc: '3 replies' },
];

const StudentDashboard = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{greeting}, Student 👋</h1>
            <p className="text-gray-600 mt-1">Continue your learning journey</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="relative">
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text" placeholder="Search courses, topics..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-64"
              />
            </div>
            <button className="p-2 bg-gray-100 rounded-full relative">
              <BellIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>

        {/* Gamification bar */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-5 mb-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">S</div>
            <div>
              <p className="text-indigo-200 text-sm">Your Level</p>
              <p className="text-xl font-bold">Level 7 — Achiever</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-2 w-32 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-amber-400 rounded-full" />
                </div>
                <span className="text-xs text-indigo-200">1,250 / 2,000 XP</span>
              </div>
            </div>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-2xl font-bold">🔥 12</p>
              <p className="text-xs text-indigo-200">Day Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold">❤️ 5</p>
              <p className="text-xs text-indigo-200">Lives</p>
            </div>
            <div>
              <p className="text-2xl font-bold">🏆 8</p>
              <p className="text-xs text-indigo-200">Badges</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 border border-transparent transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                  <link.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <ArrowRightIcon className="h-4 w-4 text-gray-300 group-hover:text-indigo-500 ml-auto transition-colors" />
              </div>
              <p className="font-semibold text-gray-900 text-sm">{link.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{link.desc}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Continue Learning</h2>
                <Link to="/aletu/student/lessons" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  View all
                </Link>
              </div>
              <div className="p-5 space-y-4">
                {recentActivity.map((item) => (
                  <div key={item.lesson} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600 shrink-0">
                      {item.subject[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.lesson}</p>
                      <p className="text-xs text-gray-500">{item.subject}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.progress}%` }} />
                        </div>
                        <span className="text-xs text-gray-500 shrink-0">{item.progress}%</span>
                      </div>
                    </div>
                    <Link to="/aletu/student/lessons" className="text-xs text-indigo-600 hover:text-indigo-700 font-medium shrink-0">
                      Resume
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Classes */}
          <div>
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Today's Classes</h2>
                <Link to="/aletu/student/live-classes" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  View all
                </Link>
              </div>
              <div className="p-5 space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.title} className="p-3 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${cls.status === 'live' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                      <span className={`text-xs font-medium ${cls.status === 'live' ? 'text-red-600' : 'text-green-600'}`}>
                        {cls.status === 'live' ? 'Live Now' : cls.time}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{cls.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{cls.instructor}</p>
                    <Link
                      to="/aletu/student/live-classes"
                      className={`mt-3 block text-center py-1.5 rounded-lg text-xs font-semibold ${
                        cls.status === 'live'
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
                      } transition-colors`}
                    >
                      {cls.status === 'live' ? 'Join Now' : 'Set Reminder'}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mastery tip */}
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <TrendingUpIcon className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900">Mastery Tip</p>
                  <p className="text-xs text-amber-700 mt-1">You're 30% away from mastering Quadratic Equations!</p>
                  <Link to="/aletu/student/mastery" className="text-xs text-amber-600 font-medium hover:text-amber-700 mt-2 inline-block">
                    Practice now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
