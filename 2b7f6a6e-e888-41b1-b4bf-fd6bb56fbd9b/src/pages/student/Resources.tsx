import React, { useState } from 'react';
import {
  SearchIcon,
  ChevronLeftIcon,
  BookOpenIcon,
  StarIcon,
  DownloadIcon,
  BookmarkIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import ResourceCard from '../../components/resources/ResourceCard';
import ResourceFilters from '../../components/resources/ResourceFilters';
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'notes' | 'past_paper' | 'ebook' | 'worksheet';
  subject: string;
  grade: string;
  thumbnail: string;
  downloadUrl: string;
  rating: number;
  reviewCount: number;
  downloads: number;
  dateUploaded: string;
  author: string;
  fileSize: string;
  isBookmarked: boolean;
}
const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const resources: Resource[] = [
  {
    id: '1',
    title: 'S4 Mathematics Notes - Algebra',
    description:
    'Comprehensive notes covering algebraic concepts, equations, and problem-solving techniques.',
    type: 'notes',
    subject: 'Mathematics',
    grade: 'S4',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    downloadUrl: '#',
    rating: 4.5,
    reviewCount: 128,
    downloads: 1250,
    dateUploaded: '2023-05-15',
    author: 'Mr. John Smith',
    fileSize: '2.4 MB',
    isBookmarked: false
  },
  {
    id: '2',
    title: 'Biology Past Papers (2020-2022)',
    description:
    'Collection of past examination papers with detailed solutions and marking schemes.',
    type: 'past_paper',
    subject: 'Biology',
    grade: 'S4',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    downloadUrl: '#',
    rating: 4.8,
    reviewCount: 95,
    downloads: 890,
    dateUploaded: '2023-05-10',
    author: 'UCE Examination Board',
    fileSize: '5.1 MB',
    isBookmarked: true
  }];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/student"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Back to Dashboard
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Learning Resources
              </h1>
              <p className="mt-1 text-gray-600">
                Access study materials, past papers, and more
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <BookOpenIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Available Resources</p>
                <p className="text-xl font-bold text-gray-900">2,450</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DownloadIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="text-xl font-bold text-gray-900">847</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-lg">
                <StarIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Avg Rating</p>
                <p className="text-xl font-bold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookmarkIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Bookmarked</p>
                <p className="text-xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search resources, topics, past papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
              
            </div>
            <ResourceFilters
              selectedSubject={selectedSubject}
              selectedGrade={selectedGrade}
              selectedType={selectedType}
              sortBy={sortBy}
              onSubjectChange={setSelectedSubject}
              onGradeChange={setSelectedGrade}
              onTypeChange={setSelectedType}
              onSortChange={setSortBy} />
            
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) =>
          <ResourceCard key={resource.id} resource={resource} />
          )}
        </div>
      </div>
    </div>);

};
export default Resources;