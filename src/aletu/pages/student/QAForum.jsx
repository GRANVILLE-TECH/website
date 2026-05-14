import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, PlusCircleIcon, MessageSquareIcon, CheckCircleIcon, UserIcon, XIcon, PaperclipIcon } from 'lucide-react';

const initialQuestions = [
  { id: '1', title: 'How to solve quadratic equations?', description: "I'm having trouble understanding the steps to solve quadratic equations using the quadratic formula.", author: { name: 'John Doe', grade: 'S4' }, subject: 'Mathematics', tags: ['algebra', 'equations'], timestamp: '2 hours ago', upvotes: 5, replies: 2, resolved: false },
  { id: '2', title: 'Difference between mitosis and meiosis', description: 'Can someone explain the key differences between mitosis and meiosis cell division processes?', author: { name: 'Jane Smith', grade: 'S4' }, subject: 'Biology', tags: ['cell division', 'genetics'], timestamp: '3 hours ago', upvotes: 8, replies: 3, resolved: true },
  { id: '3', title: 'Understanding chemical bonding', description: 'What are the different types of chemical bonds and how do they form?', author: { name: 'Mike Wilson', grade: 'S4' }, subject: 'Chemistry', tags: ['chemical bonds', 'atomic structure'], timestamp: '5 hours ago', upvotes: 6, replies: 4, resolved: false },
];

export default function QAForum() {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState(initialQuestions);
  const [showModal, setShowModal] = useState(false);
  const [newQ, setNewQ] = useState({ title: '', description: '', subject: '', grade: '' });

  const filtered = questions.filter((q) =>
    (!search || q.title.toLowerCase().includes(search.toLowerCase())) &&
    (!subject || q.subject === subject)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQ.title || !newQ.description || !newQ.subject) return;
    setQuestions([{ id: Date.now().toString(), ...newQ, author: { name: 'You', grade: newQ.grade || 'S4' }, tags: [], timestamp: 'Just now', upvotes: 0, replies: 0, resolved: false }, ...questions]);
    setShowModal(false);
    setNewQ({ title: '', description: '', subject: '', grade: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/aletu/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"><ChevronLeftIcon className="h-5 w-5 mr-1" /> Back</Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Q&A Forum</h1>
              <p className="text-sm text-gray-500 mt-0.5">Ask questions and learn from your peers</p>
            </div>
          </div>
          <button onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
            <PlusCircleIcon className="h-4 w-4" /> Ask a Question
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input type="search" placeholder="Search questions..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-44 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Subjects</option>
            <option>Mathematics</option><option>Biology</option><option>Chemistry</option><option>Physics</option>
          </select>
        </div>

        <div className="space-y-4">
          {filtered.map((q) => (
            <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-indigo-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <UserIcon className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-900">{q.author.name}</span>
                    <span className="text-xs text-gray-400">{q.author.grade} · {q.timestamp}</span>
                    {q.resolved && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        <CheckCircleIcon className="h-3 w-3" /> Resolved
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-900">{q.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{q.description}</p>
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">{q.subject}</span>
                    {q.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    <span className="text-xs font-medium">{q.upvotes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors">
                    <MessageSquareIcon className="h-4 w-4" />
                    <span className="text-xs font-medium">{q.replies}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <MessageSquareIcon className="h-10 w-10 mx-auto mb-2 opacity-40" />
              <p>No questions found</p>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-gray-900">Ask a Question</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><XIcon className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" required placeholder="What's your question?" value={newQ.title} onChange={(e) => setNewQ({ ...newQ, title: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={4} required placeholder="Provide more details..." value={newQ.description} onChange={(e) => setNewQ({ ...newQ, description: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select required value={newQ.subject} onChange={(e) => setNewQ({ ...newQ, subject: e.target.value })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option value="">Select Subject</option>
                    <option>Mathematics</option><option>Biology</option><option>Chemistry</option><option>Physics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                  <select value={newQ.grade} onChange={(e) => setNewQ({ ...newQ, grade: e.target.value })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option value="">Select Grade</option>
                    {['S1','S2','S3','S4','S5','S6'].map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors">Post Question</button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
