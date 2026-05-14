import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, SearchIcon, BookOpenIcon, DownloadIcon, StarIcon, BookmarkIcon } from 'lucide-react';

const resources = [
  { id: '1', title: 'S4 Mathematics Notes – Algebra', desc: 'Comprehensive notes covering algebraic concepts and equations.', type: 'notes', subject: 'Mathematics', grade: 'S4', rating: 4.5, reviews: 128, downloads: 1250, author: 'Mr. John Smith', size: '2.4 MB', bookmarked: false },
  { id: '2', title: 'Biology Past Papers (2020–2022)', desc: 'Collection of past exam papers with detailed solutions.', type: 'past_paper', subject: 'Biology', grade: 'S4', rating: 4.8, reviews: 95, downloads: 890, author: 'UCE Examination Board', size: '5.1 MB', bookmarked: true },
  { id: '3', title: 'Physics – Forces & Motion Worksheet', desc: 'Practice problems on Newton\'s laws and motion analysis.', type: 'worksheet', subject: 'Physics', grade: 'S4', rating: 4.6, reviews: 72, downloads: 560, author: 'Prof. Lisa Anderson', size: '1.2 MB', bookmarked: false },
  { id: '4', title: 'Chemistry Ebook – Chemical Bonding', desc: 'Detailed ebook on ionic, covalent, and metallic bonding.', type: 'ebook', subject: 'Chemistry', grade: 'S4', rating: 4.9, reviews: 210, downloads: 2100, author: 'Dr. Robert Johnson', size: '8.7 MB', bookmarked: false },
];

const typeColors = { notes: 'bg-indigo-100 text-indigo-700', past_paper: 'bg-amber-100 text-amber-700', ebook: 'bg-green-100 text-green-700', worksheet: 'bg-purple-100 text-purple-700' };
const typeLabels = { notes: 'Notes', past_paper: 'Past Paper', ebook: 'Ebook', worksheet: 'Worksheet' };

export default function Resources() {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('');
  const [items, setItems] = useState(resources);

  const toggleBookmark = (id) => setItems(prev => prev.map(r => r.id === id ? { ...r, bookmarked: !r.bookmarked } : r));

  const filtered = items.filter((r) =>
    (!search || r.title.toLowerCase().includes(search.toLowerCase())) &&
    (!subject || r.subject === subject) &&
    (!type || r.type === type)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/aletu/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
            <p className="text-sm text-gray-500 mt-0.5">Access study materials, past papers, and more</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[['Available', '2,450', BookOpenIcon, 'bg-indigo-100 text-indigo-600'], ['Downloads', '847', DownloadIcon, 'bg-green-100 text-green-600'], ['Avg Rating', '4.8', StarIcon, 'bg-amber-100 text-amber-600'], ['Bookmarked', '12', BookmarkIcon, 'bg-purple-100 text-purple-600']].map(([label, value, Icon, color]) => (
            <div key={label} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <div className={`p-2 rounded-lg ${color}`}><Icon className="h-5 w-5" /></div>
              <div><p className="text-xs text-gray-500">{label}</p><p className="text-xl font-bold text-gray-900">{value}</p></div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input type="search" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Subjects</option>
            <option>Mathematics</option><option>Biology</option><option>Chemistry</option><option>Physics</option>
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Types</option>
            <option value="notes">Notes</option>
            <option value="past_paper">Past Papers</option>
            <option value="ebook">Ebooks</option>
            <option value="worksheet">Worksheets</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[r.type]}`}>{typeLabels[r.type]}</span>
                <button onClick={() => toggleBookmark(r.id)} className={`transition-colors ${r.bookmarked ? 'text-indigo-500' : 'text-gray-300 hover:text-gray-500'}`}>
                  <BookmarkIcon className="h-5 w-5" fill={r.bookmarked ? 'currentColor' : 'none'} />
                </button>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{r.title}</h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{r.desc}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><StarIcon className="h-3.5 w-3.5 text-yellow-400" />{r.rating}</span>
                <span>{r.reviews} reviews</span>
                <span>{r.downloads.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>{r.author}</span>
                <span>{r.size}</span>
              </div>
              <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                <DownloadIcon className="h-4 w-4" /> Download
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-12 text-gray-400">
              <BookOpenIcon className="h-10 w-10 mx-auto mb-2 opacity-40" />
              <p>No resources found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
