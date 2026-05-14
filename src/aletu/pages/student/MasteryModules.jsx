import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, TrophyIcon, StarIcon, BrainIcon, BarChartIcon, CheckCircleIcon, LockIcon, ArrowRightIcon } from 'lucide-react';

const modules = [
  { id: '1', subject: 'Mathematics', topic: 'Quadratic Equations', grade: 'S4', mastery: 72, status: 'in_progress', checks: [true, true, false, false] },
  { id: '2', subject: 'Biology', topic: 'Cell Division – Mitosis', grade: 'S4', mastery: 100, status: 'mastered', checks: [true, true, true, true] },
  { id: '3', subject: 'Chemistry', topic: 'Chemical Bonding', grade: 'S4', mastery: 45, status: 'in_progress', checks: [true, false, false, false] },
  { id: '4', subject: 'Physics', topic: "Newton's Laws", grade: 'S4', mastery: 88, status: 'mastered', checks: [true, true, true, false] },
  { id: '5', subject: 'Mathematics', topic: 'Trigonometry Basics', grade: 'S4', mastery: 0, status: 'not_started', checks: [false, false, false, false] },
];

const stats = [
  { label: 'Mastered Topics', value: '12', icon: TrophyIcon, color: 'bg-indigo-100 text-indigo-600' },
  { label: 'Average Mastery', value: '85%', icon: StarIcon, color: 'bg-green-100 text-green-600' },
  { label: 'In Progress', value: '5', icon: BrainIcon, color: 'bg-amber-100 text-amber-600' },
  { label: 'Total Progress', value: '68%', icon: BarChartIcon, color: 'bg-purple-100 text-purple-600' },
];

export default function MasteryModules() {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');

  const filtered = modules.filter((m) =>
    (!search || m.topic.toLowerCase().includes(search.toLowerCase())) &&
    (!subject || m.subject === subject)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mastery Learning</h1>
            <p className="text-sm text-gray-500 mt-0.5">Track your progress and master concepts</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <div className={`p-2 rounded-lg ${s.color}`}><s.icon className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="text-xl font-bold text-gray-900">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input type="search" placeholder="Search topics..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-44 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Subjects</option>
            <option>Mathematics</option><option>Physics</option><option>Chemistry</option><option>Biology</option>
          </select>
        </div>

        <div className="space-y-4">
          {filtered.map((mod) => (
            <div key={mod.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">{mod.subject}</span>
                    <span className="text-xs text-gray-500">{mod.grade}</span>
                    {mod.status === 'mastered' && (
                      <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircleIcon className="h-3 w-3" /> Mastered
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{mod.topic}</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${mod.mastery === 100 ? 'bg-green-500' : mod.mastery > 0 ? 'bg-indigo-500' : 'bg-gray-300'}`}
                        style={{ width: `${mod.mastery}%` }} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 shrink-0">{mod.mastery}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {mod.checks.map((done, i) => (
                    <div key={i} className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${done ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {done ? '✓' : i + 1}
                    </div>
                  ))}
                  <button className="ml-2 flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                    {mod.status === 'not_started' ? 'Start' : mod.status === 'mastered' ? 'Review' : 'Continue'}
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
