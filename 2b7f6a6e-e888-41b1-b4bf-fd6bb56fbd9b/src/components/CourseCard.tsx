import React from 'react';
import {
  BookOpenIcon,
  UsersIcon,
  ClockIcon,
  ArrowRightIcon } from
'lucide-react';
interface CourseCardProps {
  title: string;
  subject: string;
  level: string;
  instructor: string;
  thumbnailUrl: string;
  liveSessionCount?: number;
  recordedLessonCount?: number;
  quizCount?: number;
  duration?: string;
}
const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subject,
  level,
  instructor,
  thumbnailUrl,
  liveSessionCount = 0,
  recordedLessonCount = 0,
  quizCount = 0,
  duration = 'N/A'
}) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
        
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900 rounded-full">
            {subject}
          </span>
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-xs font-medium text-white rounded-full">
            {level}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-700">
            {instructor.charAt(0)}
          </span>
          {instructor}
        </p>
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900">{duration}</div>
            <div className="text-xs text-gray-500 mt-1">Duration</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-sm font-medium text-gray-900">
              {liveSessionCount}
            </div>
            <div className="text-xs text-gray-500 mt-1">Live Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900">
              {recordedLessonCount}
            </div>
            <div className="text-xs text-gray-500 mt-1">Lessons</div>
          </div>
        </div>
        <button className="mt-6 w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-900 text-sm font-medium rounded-xl transition-colors duration-200 flex items-center justify-center group">
          View Course
          <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>);

};
export default CourseCard;