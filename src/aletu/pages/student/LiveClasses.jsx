import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, SearchIcon, VideoIcon, ClockIcon, StarIcon, BellIcon } from 'lucide-react';

const allClasses = [
  { id: '1', title: 'Mathematics Revision Session', subject: 'Mathematics', level: 'S4', instructor: 'Mr. John Doe', date: 'Jan 20', time: '2:00 PM', duration: '1 hour', attendees: 24, status: 'live', rating: null },
  { id: '2', title: 'Biology: Ecosystem Dynamics', subject: 'Biology', level: 'S4', instructor: 'Ms. Jane Smith', date: 'Jan 21', time: '10:00 AM', duration: '1.5 hours', attendees: 18, status: 'upcoming', rating: null },
  { id: '3', title: 'Chemistry Lab Session', subject: 'Chemistry', level: 'S4', instructor: 'Dr. Robert Johnson', date: 'Jan 19', time: '3:00 PM', duration: '2 hours', attendees: 15, status: 'ended', rating: 4.8 },
  { id: '4', title: "Physics: Forces & Motion", subject: 'Physics', level: 'S4', instructor: 'Prof. Lisa Anderson', date: 'Jan 18', time: '1:00 PM', duration: '1.5 hours', attendees: 22, status: 'ended', rating: 4.5 },
];

export default function LiveClasses() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [reminders, setReminders] = useState({});

  const filtered = allClasses.filter((c) => {
    const matchesFilter = filter === 'all' || c.status === filter || (filter === 'past' && c.status === 'ended');
    const matchesSearch = !searchQuery || c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Live Classes</h1>
              <p className="text-sm text-gray-500 mt-0.5">Join interactive live sessions</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option value="all">All</option>
              <option value="live">Live Now</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
        </div>

        {['live', 'upcoming', 'ended'].map((status) => {
          const group = filtered.filter((c) => c.status === status);
          if (!group.length) return null;
          const labels = { live: '🔴 Live Now', upcoming: 'Upcoming', ended: 'Past Classes' };
          return (
            <div key={status} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {status === 'live' && <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />}
                <h2 className="text-lg font-semibold text-gray-900">{labels[status]}</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {group.map((cls) => (
                  <div key={cls.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{cls.title}</h3>
                        <p className="text-sm text-gray-500">{cls.subject} · {cls.level}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-medium text-gray-900">{cls.time}</p>
                        <p className="text-gray-400 text-xs">{cls.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">{cls.instructor[0]}</div>
                      <p className="text-sm text-gray-600">{cls.instructor}</p>
                      {cls.rating && (
                        <span className="ml-auto flex items-center gap-1 text-sm font-medium text-gray-700">
                          <StarIcon className="h-4 w-4 text-yellow-400" />{cls.rating}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 py-3 border-y border-gray-100 mb-4 text-center">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{cls.duration}</p>
                        <p className="text-xs text-gray-500">Duration</p>
                      </div>
                      <div className="flex-1 border-x border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{cls.attendees}</p>
                        <p className="text-xs text-gray-500">Students</p>
                      </div>
                    </div>
                    {cls.status === 'live' && (
                      <button className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                        <VideoIcon className="h-4 w-4" /> Join Live Session
                      </button>
                    )}
                    {cls.status === 'upcoming' && (
                      <button onClick={() => setReminders(r => ({ ...r, [cls.id]: !r[cls.id] }))}
                        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${reminders[cls.id] ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
                        <BellIcon className="h-4 w-4" />{reminders[cls.id] ? 'Reminder Set ✓' : 'Set Reminder'}
                      </button>
                    )}
                    {cls.status === 'ended' && (
                      <button className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-semibold transition-colors">Watch Recording</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <VideoIcon className="h-12 w-12 mx-auto mb-3 opacity-40" />
            <p>No classes found</p>
          </div>
        )}
      </div>
    </div>
  );
}
