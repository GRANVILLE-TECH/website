import React from 'react';
import { Link } from 'react-router-dom';
import {
  PlayCircleIcon,
  ClockIcon,
  UserIcon,
  StarIcon,
  UsersIcon } from
'lucide-react';
interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    thumbnail: string;
    teacher: string;
    subject: string;
    grade: string;
    progress: number;
    rating: number;
    status: string;
    duration: string;
    completions: number;
  };
}
const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <Link
      to={`/student/lessons/${lesson.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      
      <div className="relative">
        <img
          src={lesson.thumbnail}
          alt={lesson.title}
          className="w-full h-48 object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <span className="text-sm font-medium px-2 py-1 bg-black/40 rounded-md">
              {lesson.subject}
            </span>
            <span className="text-sm font-medium px-2 py-1 bg-black/40 rounded-md">
              {lesson.grade}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{lesson.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <UserIcon className="h-4 w-4 mr-1" />
          {lesson.teacher}
        </div>
        <div className="space-y-3">
          {lesson.progress > 0 &&
          <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Progress</span>
                <span className="text-gray-700 font-medium">
                  {lesson.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{
                  width: `${lesson.progress}%`
                }} />
              
              </div>
            </div>
          }
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <ClockIcon className="h-4 w-4 mr-1" />
              {lesson.duration}
            </div>
            <div className="flex items-center text-gray-500">
              <UsersIcon className="h-4 w-4 mr-1" />
              {lesson.completions}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm font-medium text-gray-700">
                {lesson.rating}
              </span>
            </div>
            <button className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-100 transition-colors">
              <PlayCircleIcon className="h-4 w-4 mr-1" />
              Start Lesson
            </button>
          </div>
        </div>
      </div>
    </Link>);

};
export default LessonCard;