import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeftIcon,
  WifiOffIcon,
  HardDriveIcon,
  CloudIcon,
  DownloadIcon,
  TrashIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  AlertCircleIcon } from
'lucide-react';
import StorageStatus from '../../components/offline/StorageStatus';
import SyncStatus from '../../components/offline/SyncStatus';
import OfflineContentCard from '../../components/offline/OfflineContentCard';
interface OfflineContent {
  id: string;
  title: string;
  type: 'lesson' | 'quiz' | 'resource';
  subject: string;
  grade: string;
  size: string;
  lastSync: string;
  status: 'available' | 'downloading' | 'not_downloaded';
  progress?: number;
  thumbnail: string;
}
const OfflineMode: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [totalStorage, setTotalStorage] = useState('10 GB');
  const [usedStorage, setUsedStorage] = useState('4.2 GB');
  const [lastSync, setLastSync] = useState('2023-10-15T14:30:00');
  // Mock data for offline content
  const offlineContent: OfflineContent[] = [
  {
    id: '1',
    title: 'Mathematics - Quadratic Equations',
    type: 'lesson',
    subject: 'Mathematics',
    grade: 'S4',
    size: '250 MB',
    lastSync: '2023-10-15T14:30:00',
    status: 'available',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb'
  },
  {
    id: '2',
    title: 'Biology Past Papers Bundle',
    type: 'resource',
    subject: 'Biology',
    grade: 'S4',
    size: '150 MB',
    lastSync: '2023-10-15T14:30:00',
    status: 'downloading',
    progress: 65,
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb'
  },
  {
    id: '3',
    title: 'Physics Practice Quizzes',
    type: 'quiz',
    subject: 'Physics',
    grade: 'S4',
    size: '50 MB',
    lastSync: '2023-10-15T14:30:00',
    status: 'not_downloaded',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb'
  }];

  const handleSync = () => {
    // Implement sync logic
    console.log('Syncing content...');
  };
  const handleDownload = (contentId: string) => {
    // Implement download logic
    console.log('Downloading content:', contentId);
  };
  const handleDelete = (contentId: string) => {
    // Implement delete logic
    console.log('Deleting content:', contentId);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/student"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Back to Dashboard
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Offline Mode</h1>
              <p className="mt-1 text-gray-600">
                Manage your offline content and storage
              </p>
            </div>
          </div>
        </div>
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StorageStatus
            totalStorage={totalStorage}
            usedStorage={usedStorage}
            onClearStorage={() => console.log('Clearing storage...')} />
          
          <SyncStatus
            isOnline={isOnline}
            lastSync={lastSync}
            onSync={handleSync} />
          
        </div>
        {/* Content Management */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Available Offline Content
            </h2>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Download All Updates
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offlineContent.map((content) =>
            <OfflineContentCard
              key={content.id}
              content={content}
              onDownload={() => handleDownload(content.id)}
              onDelete={() => handleDelete(content.id)} />

            )}
          </div>
        </div>
      </div>
    </div>);

};
export default OfflineMode;