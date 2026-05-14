import React from 'react';
import {
  DownloadIcon,
  TrashIcon,
  CheckCircleIcon,
  BookOpenIcon,
  FileTextIcon,
  ClipboardIcon } from
'lucide-react';
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
interface OfflineContentCardProps {
  content: OfflineContent;
  onDownload: () => void;
  onDelete: () => void;
}
const OfflineContentCard: React.FC<OfflineContentCardProps> = ({
  content,
  onDownload,
  onDelete
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lesson':
        return BookOpenIcon;
      case 'quiz':
        return ClipboardIcon;
      case 'resource':
        return FileTextIcon;
      default:
        return FileTextIcon;
    }
  };
  const Icon = getTypeIcon(content.type);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={content.thumbnail}
          alt={content.title}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <span className="text-sm font-medium px-2 py-1 bg-black/40 rounded-md">
              {content.subject}
            </span>
            <span className="text-sm font-medium px-2 py-1 bg-black/40 rounded-md">
              {content.grade}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Icon className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-xs text-gray-500 capitalize">
              {content.type}
            </span>
          </div>
          <span className="text-xs text-gray-500">{content.size}</span>
        </div>
        <h3 className="font-medium text-gray-900 mb-4">{content.title}</h3>
        {content.status === 'downloading' && content.progress &&
        <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Downloading</span>
              <span className="text-gray-900">{content.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${content.progress}%`
              }} />
            
            </div>
          </div>
        }
        <div className="flex items-center justify-between">
          {content.status === 'available' ?
          <>
              <span className="text-xs text-gray-500">
                Last updated: {new Date(content.lastSync).toLocaleDateString()}
              </span>
              <button
              onClick={onDelete}
              className="inline-flex items-center text-red-600 hover:text-red-800">
              
                <TrashIcon className="h-4 w-4" />
              </button>
            </> :
          content.status === 'not_downloaded' ?
          <button
            onClick={onDownload}
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </button> :
          null}
        </div>
      </div>
    </div>);

};
export default OfflineContentCard;