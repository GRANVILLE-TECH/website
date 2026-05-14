import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  FileTextIcon,
  BookIcon,
  ClipboardIcon,
  StarIcon,
  DownloadIcon,
  BookmarkIcon } from
'lucide-react';
import { Resource } from '../../pages/student/Resources';
interface ResourceCardProps {
  resource: Resource;
}
const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'notes':
        return FileTextIcon;
      case 'past_paper':
        return ClipboardIcon;
      case 'ebook':
        return BookIcon;
      case 'worksheet':
        return BookOpenIcon;
      default:
        return FileTextIcon;
    }
  };
  const Icon = getResourceIcon(resource.type);
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <span className="text-sm font-medium px-2 py-1 bg-black/40 rounded-md">
              {resource.subject}
            </span>
            <span className="text-sm font-medium px-2 py-1 bg-black/40 rounded-md">
              {resource.grade}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Icon className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-xs text-gray-500 capitalize">
              {resource.type.replace('_', ' ')}
            </span>
          </div>
          <button className="text-gray-400 hover:text-indigo-600">
            <BookmarkIcon
              className={`h-4 w-4 ${resource.isBookmarked ? 'fill-current text-indigo-600' : ''}`} />
            
          </button>
        </div>
        <h3 className="font-medium text-gray-900 mb-1">{resource.title}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {resource.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-gray-600">{resource.rating}</span>
            </div>
            <span className="text-gray-500">
              {resource.downloads} downloads
            </span>
          </div>
          <Link
            to={`/student/resources/${resource.id}`}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
            
            <DownloadIcon className="h-4 w-4 mr-1" />
            Download
          </Link>
        </div>
      </div>
    </div>);

};
export default ResourceCard;