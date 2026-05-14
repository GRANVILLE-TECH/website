import React from 'react';
import {
  VideoIcon,
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  ArrowRightIcon,
  BellIcon,
  BellOffIcon } from
'lucide-react';
interface LiveClassCardProps {
  title: string;
  subject: string;
  level: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  status: 'upcoming' | 'live' | 'ended';
  onJoin?: () => void;
  onSetReminder?: () => void;
  onRemoveReminder?: () => void;
  description?: string;
  topics?: string[];
  hasReminder?: boolean;
}
const LiveClassCard: React.FC<LiveClassCardProps> = ({
  title,
  subject,
  level,
  instructor,
  date,
  time,
  duration,
  attendees,
  status,
  onJoin,
  onSetReminder,
  onRemoveReminder,
  description,
  topics,
  hasReminder = false
}) => {
  const handleSetReminder = () => {
    if (onSetReminder) {
      onSetReminder();
    }
  };
  const getStatusConfig = () => {
    switch (status) {
      case 'live':
        return {
          color: 'bg-red-500',
          pulseRing: true,
          text: 'Live Now',
          buttonText: 'Join Live Session',
          buttonClass: 'bg-red-500 hover:bg-red-600',
          onClick: onJoin
        };
      case 'upcoming':
        return {
          color: 'bg-green-500',
          pulseRing: false,
          text: 'Upcoming',
          buttonText: 'Set Reminder',
          buttonClass: 'bg-indigo-500 hover:bg-indigo-600',
          onClick: handleSetReminder
        };
      case 'ended':
        return {
          color: 'bg-gray-500',
          pulseRing: false,
          text: 'Ended',
          buttonText: 'Watch Recording',
          buttonClass: 'bg-gray-500 hover:bg-gray-600'
        };
      default:
        return {
          color: 'bg-gray-500',
          pulseRing: false,
          text: 'Unknown',
          buttonText: 'View Details',
          buttonClass: 'bg-gray-500 hover:bg-gray-600'
        };
    }
  };
  const statusConfig = getStatusConfig();
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`relative inline-flex h-3 w-3 ${statusConfig.color} rounded-full`}>
                
                {statusConfig.pulseRing &&
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                }
              </span>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${status === 'live' ? 'bg-red-50 text-red-700' : status === 'upcoming' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'}`}>
                
                {statusConfig.text}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {subject} • {level}
            </p>
          </div>
          <div className="bg-gray-50 px-3 py-1 rounded-lg">
            <p className="text-sm font-medium text-gray-900">{time}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">
            {instructor.charAt(0)}
          </span>
          <div>
            <p className="text-sm font-medium text-gray-900">{instructor}</p>
            <p className="text-xs text-gray-500">Class Instructor</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mb-6">
          <div className="text-center">
            <ClockIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
            <div className="text-sm font-medium text-gray-900">{duration}</div>
            <div className="text-xs text-gray-500">Duration</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <UsersIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
            <div className="text-sm font-medium text-gray-900">{attendees}</div>
            <div className="text-xs text-gray-500">Students</div>
          </div>
          <div className="text-center">
            <CalendarIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
            <div className="text-sm font-medium text-gray-900">{date}</div>
            <div className="text-xs text-gray-500">Date</div>
          </div>
        </div>
        <button
          onClick={statusConfig.onClick}
          className={`w-full py-3 px-4 text-white rounded-xl transition-all duration-200 flex items-center justify-center group ${statusConfig.buttonClass}`}>
          
          {status === 'live' && <VideoIcon className="w-4 h-4 mr-2" />}
          {statusConfig.buttonText}
          <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
        {status === 'upcoming' &&
        <button
          onClick={hasReminder ? onRemoveReminder : onSetReminder}
          className={`ml-auto p-2 rounded-lg transition-colors ${hasReminder ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}
          title={hasReminder ? 'Remove reminder' : 'Set reminder'}>
          
            {hasReminder ?
          <BellIcon className="h-5 w-5" /> :

          <BellOffIcon className="h-5 w-5" />
          }
          </button>
        }
      </div>
    </div>);

};
export default LiveClassCard;