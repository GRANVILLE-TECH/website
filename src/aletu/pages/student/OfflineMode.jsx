import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, WifiOffIcon, WifiIcon, HardDriveIcon, CloudIcon, DownloadIcon, TrashIcon, RefreshCwIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';

const mockContent = [
  { id: '1', title: 'Mathematics – Quadratic Equations', type: 'lesson', subject: 'Mathematics', grade: 'S4', size: '250 MB', lastSync: '2023-10-15', status: 'available', progress: null },
  { id: '2', title: 'Biology Past Papers Bundle', type: 'resource', subject: 'Biology', grade: 'S4', size: '150 MB', lastSync: '2023-10-15', status: 'downloading', progress: 65 },
  { id: '3', title: 'Physics Practice Quizzes', type: 'quiz', subject: 'Physics', grade: 'S4', size: '50 MB', lastSync: '2023-10-15', status: 'not_downloaded', progress: null },
];

const typeColors = { lesson: 'bg-indigo-100 text-indigo-700', resource: 'bg-amber-100 text-amber-700', quiz: 'bg-green-100 text-green-700' };

export default function OfflineMode() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [content, setContent] = useState(mockContent);
  const [syncing, setSyncing] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 2000);
  };

  const handleDownload = (id) => {
    setContent(prev => prev.map(c => c.id === id ? { ...c, status: 'downloading', progress: 0 } : c));
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setContent(prev => prev.map(c => c.id === id ? { ...c, progress: p, status: p >= 100 ? 'available' : 'downloading' } : c));
      if (p >= 100) clearInterval(interval);
    }, 200);
  };

  const handleDelete = (id) => setContent(prev => prev.map(c => c.id === id ? { ...c, status: 'not_downloaded', progress: null } : c));

  const usedGB = 4.2;
  const totalGB = 10;
  const usedPct = Math.round((usedGB / totalGB) * 100);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Offline Mode</h1>
            <p className="text-sm text-gray-500 mt-0.5">Manage your offline content and storage</p>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Storage */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg"><HardDriveIcon className="h-5 w-5 text-indigo-600" /></div>
              <h2 className="font-semibold text-gray-900">Storage Status</h2>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">{usedGB} GB used</span>
                <span className="text-gray-400">{totalGB} GB total</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${usedPct}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">{totalGB - usedGB} GB available</p>
            </div>
            <button onClick={() => setContent(prev => prev.map(c => ({ ...c, status: 'not_downloaded', progress: null })))}
              className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors">
              <TrashIcon className="h-4 w-4" /> Clear All Downloaded Content
            </button>
          </div>

          {/* Sync Status */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
                {isOnline ? <WifiIcon className="h-5 w-5 text-green-600" /> : <WifiOffIcon className="h-5 w-5 text-red-600" />}
              </div>
              <h2 className="font-semibold text-gray-900">Sync Status</h2>
            </div>
            <div className={`flex items-center gap-2 mb-4 px-3 py-2 rounded-lg ${isOnline ? 'bg-green-50' : 'bg-red-50'}`}>
              {isOnline ? <CheckCircleIcon className="h-4 w-4 text-green-600" /> : <AlertCircleIcon className="h-4 w-4 text-red-600" />}
              <span className={`text-sm font-medium ${isOnline ? 'text-green-700' : 'text-red-700'}`}>
                {isOnline ? 'Connected to Internet' : 'Offline — Limited Access'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Last synced: Oct 15, 2023 at 2:30 PM</p>
            <div className="flex gap-3">
              <button onClick={handleSync} disabled={!isOnline || syncing}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors">
                <RefreshCwIcon className={`h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
                {syncing ? 'Syncing...' : 'Sync Now'}
              </button>
              <button onClick={() => setIsOnline(o => !o)} className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                {isOnline ? 'Simulate Offline' : 'Go Online'}
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Offline Content</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Download All Updates</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${typeColors[item.type]}`}>{item.type}</span>
                  <span className={`flex items-center gap-1 text-xs font-medium ${item.status === 'available' ? 'text-green-600' : item.status === 'downloading' ? 'text-indigo-600' : 'text-gray-400'}`}>
                    {item.status === 'available' ? <><CheckCircleIcon className="h-3.5 w-3.5" /> Downloaded</> : item.status === 'downloading' ? <><CloudIcon className="h-3.5 w-3.5" /> Downloading</> : <><WifiOffIcon className="h-3.5 w-3.5" /> Not Downloaded</>}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.subject} · {item.grade} · {item.size}</p>
                {item.status === 'downloading' && item.progress !== null && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Downloading...</span><span>{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                )}
                <div className="flex gap-2">
                  {item.status === 'not_downloaded' && (
                    <button onClick={() => handleDownload(item.id)} className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1">
                      <DownloadIcon className="h-4 w-4" /> Download
                    </button>
                  )}
                  {item.status === 'available' && (
                    <>
                      <button className="flex-1 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium transition-colors">Open</button>
                      <button onClick={() => handleDelete(item.id)} className="py-2 px-3 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><TrashIcon className="h-4 w-4" /></button>
                    </>
                  )}
                  {item.status === 'downloading' && (
                    <button className="flex-1 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">Downloading...</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
