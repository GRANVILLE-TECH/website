import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, SearchIcon, BookOpenIcon, ArrowRightIcon, ClockIcon, StarIcon } from 'lucide-react';

const lessons = [
  { id: '1', title: 'Quadratic Equations Explained', teacher: 'Mr. John Smith', subject: 'Mathematics', grade: 'S4', progress: 50, rating: 4.5, status: 'in_progress', duration: '45 min', thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400' },
  { id: '2', title: 'Algebra Basics', teacher: 'Ms. Sarah Wilson', subject: 'Mathematics', grade: 'S4', progress: 80, rating: 5, status: 'in_progress', duration: '30 min', thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400' },
  { id: '3', title: 'Cell Division – Mitosis & Meiosis', teacher: 'Ms. Jane Smith', subject: 'Biology', grade: 'S4', progress: 0, rating: 4.7, status: 'not_started', duration: '50 min', thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400' },
  { id: '4', title: "Newton's Laws of Motion", teacher: 'Prof. Lisa Anderson', subject: 'Physics', grade: 'S4', progress: 100, rating: 4.9, status: 'completed', duration: '40 min', thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400' },
  { id: '5', title: 'Chemical Bonding', teacher: 'Dr. Robert Johnson', subject: 'Chemistry', grade: 'S4', progress: 30, rating: 4.6, status: 'in_progress', duration: '55 min', thumbnail: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400' },
  { id: '6', title: 'Ecosystem Dynamics', teacher: 'Ms. Jane Smith', subject: 'Biology', grade: 'S4', progress: 0, rating: 4.8, status: 'not_started', duration: '45 min', thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400' },
];

const statusColors = { completed: 'bg-green-100 text-green-700', in_progress: 'bg-indigo-100 text-indigo-700', not_started: 'bg-gray-100 text-gray-600' };
const statusLabels = { completed: 'Completed', in_progress: 'In Progress', not_started: 'Not Started' };

export default function Lessons() {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');

  const filtered = lessons.filter((l) =>
    (!search || l.title.toLowerCase().includes(search.toLowerCase()) || l.subject.toLowerCase().includes(search.toLowerCase())) &&
    (!subject || l.subject === subject) &&
    (!status || l.status === status)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back to Dashboard
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Lessons Library</h1>
          <p className="mt-1 text-sm text-gray-500">Browse through our collection of lessons and start learning</p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input type="search" placeholder="Search lessons, subjects, topics..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Subjects</option>
            <option>Mathematics</option><option>Physics</option><option>Chemistry</option><option>Biology</option>
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Status</option>
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="text-sm text-gray-500 mb-4">{filtered.length} lessons found</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((lesson) => (
            <div key={lesson.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <span className="px-2 py-0.5 bg-white/90 text-xs font-medium text-gray-900 rounded-full">{lesson.subject}</span>
                  <span className="px-2 py-0.5 bg-black/50 text-xs font-medium text-white rounded-full">{lesson.grade}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[lesson.status]}`}>{statusLabels[lesson.status]}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-600"><StarIcon className="h-3.5 w-3.5 text-yellow-400" />{lesson.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{lesson.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{lesson.teacher} · <ClockIcon className="inline h-3 w-3" /> {lesson.duration}</p>
                {lesson.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span><span>{lesson.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${lesson.progress}%` }} />
                    </div>
                  </div>
                )}
                <button className="mt-2 w-full py-2 bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                  {lesson.status === 'completed' ? 'Review' : lesson.status === 'in_progress' ? 'Continue' : 'Start Lesson'}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
