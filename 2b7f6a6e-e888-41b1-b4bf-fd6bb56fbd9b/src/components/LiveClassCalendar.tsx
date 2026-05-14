import React, { useState } from 'react';
import {
  Calendar,
  ChevronLeftIcon,
  ChevronRightIcon,
  VideoIcon,
  ClockIcon,
  UserIcon,
  BookOpenIcon,
  XIcon,
  BellIcon } from
'lucide-react';
interface CalendarEvent {
  id: string;
  title: string;
  subject: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  status: 'live' | 'upcoming' | 'ended';
  description?: string;
  topics?: string[];
  hasReminder?: boolean;
  reminderTiming?: '5' | '10' | '15' | '30';
  reminderChannels?: {
    push: boolean;
    sms: boolean;
    email: boolean;
  };
}
interface EventDetailsModalProps {
  event: CalendarEvent;
  onClose: () => void;
  onJoin?: () => void;
  onSetReminder?: () => void;
  hasReminder?: boolean;
  reminderTiming?: '5' | '10' | '15' | '30';
  reminderChannels?: {
    push: boolean;
    sms: boolean;
    email: boolean;
  };
}
const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  onClose,
  onJoin,
  onSetReminder,
  hasReminder,
  reminderTiming,
  reminderChannels
}) =>
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-md w-full p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${event.status === 'live' ? 'bg-red-100 text-red-800' : event.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          
            {event.status === 'live' ?
          'Live Now' :
          event.status === 'upcoming' ?
          'Upcoming' :
          'Ended'}
          </span>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            {event.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {event.subject} • {event.instructor}
          </p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {event.time} ({event.duration})
          </div>
          <div className="flex items-center">
            <UserIcon className="h-4 w-4 mr-1" />
            {event.attendees} students
          </div>
        </div>
        {event.description &&
      <p className="text-sm text-gray-600">{event.description}</p>
      }
        {event.topics && event.topics.length > 0 &&
      <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Topics:</h4>
            <div className="flex flex-wrap gap-2">
              {event.topics.map((topic, index) =>
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            
                  {topic}
                </span>
          )}
            </div>
          </div>
      }
        {hasReminder &&
      <div className="mt-4 bg-indigo-50 rounded-lg p-4">
            <div className="flex items-center">
              <BellIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h4 className="text-sm font-medium text-indigo-900">
                Reminder Set
              </h4>
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-sm text-indigo-700">
                {reminderTiming} minutes before class
              </p>
              <div className="flex flex-wrap gap-2">
                {reminderChannels?.push &&
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Push Notification
                  </span>
            }
                {reminderChannels?.sms &&
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    SMS
                  </span>
            }
                {reminderChannels?.email &&
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Email
                  </span>
            }
              </div>
            </div>
          </div>
      }
        <div className="flex gap-3 mt-6">
          {event.status === 'live' &&
        <button
          onClick={onJoin}
          className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
          
              Join Now
            </button>
        }
          {event.status === 'upcoming' &&
        <button
          onClick={onSetReminder}
          className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
          
              Set Reminder
            </button>
        }
        </div>
      </div>
    </div>
  </div>;

interface LiveClassCalendarProps {
  events: CalendarEvent[];
  onDateSelect: (date: Date) => void;
  onEventSelect: (event: CalendarEvent) => void;
  onSetReminder?: (event: CalendarEvent) => void;
  reminders: {
    [key: string]: {
      timing: '5' | '10' | '15' | '30';
      channels: {
        push: boolean;
        sms: boolean;
        email: boolean;
      };
    };
  };
}
const LiveClassCalendar: React.FC<LiveClassCalendarProps> = ({
  events,
  onDateSelect,
  onEventSelect,
  onSetReminder,
  reminders
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [selectedDateEvents, setSelectedDateEvents] = useState<CalendarEvent[]>(
    []
  );
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    const dateEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear());

    });
    setSelectedDateEvents(dateEvents);
    onDateSelect(newDate);
  };
  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };
  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-32 border border-gray-100" />
      );
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dayEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === day &&
          eventDate.getMonth() === currentDate.getMonth() &&
          eventDate.getFullYear() === currentDate.getFullYear());

      });
      const isSelected = selectedDate?.getDate() === day;
      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`min-h-32 border relative transition-all duration-200 ${isSelected ? 'border-indigo-600 bg-indigo-50 shadow-sm z-10' : 'border-gray-100 hover:bg-gray-50'}`}>
          
          <div className="p-2">
            <div className="flex justify-between">
              <span
                className={`text-sm font-medium ${isSelected ? 'text-indigo-600' : ''}`}>
                
                {day}
              </span>
              {dayEvents.length > 0 &&
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                  {dayEvents.length}
                </span>
              }
            </div>
            <div className="mt-1 space-y-1">
              {dayEvents.map((event) => {
                const hasReminder = reminders[event.id];
                return (
                  <button
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventClick(event);
                    }}
                    className={`w-full text-left text-xs p-2 rounded-md transition-colors ${event.status === 'live' ? 'bg-red-100 text-red-700 hover:bg-red-200' : event.status === 'upcoming' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} ${isSelected ? 'ring-2 ring-indigo-600 ring-opacity-50' : ''}`}>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-medium truncate">
                        {event.title}
                      </span>
                      {hasReminder &&
                      <BellIcon className="h-3 w-3 text-indigo-600 flex-shrink-0" />
                      }
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <ClockIcon className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                  </button>);

              })}
            </div>
          </div>
        </div>
      );
    }
    return days;
  };
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Class Schedule
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() - 1,
                  1
                )
              )
              }
              className="p-2 hover:bg-gray-100 rounded-full">
              
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            </button>
            <span className="text-sm font-medium">
              {currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <button
              onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  1
                )
              )
              }
              className="p-2 hover:bg-gray-100 rounded-full">
              
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        {selectedDateEvents.length > 0 &&
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg">
            <h3 className="text-sm font-medium text-indigo-900 mb-2">
              Classes on{' '}
              {selectedDate?.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            </h3>
            <div className="space-y-2">
              {selectedDateEvents.map((event) =>
            <div
              key={event.id}
              className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
              
                  <div>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {event.time} • {event.instructor}
                    </p>
                  </div>
                  <button
                onClick={() => handleEventClick(event)}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                
                    View Details
                  </button>
                </div>
            )}
            </div>
          </div>
        }
        <div className="grid grid-cols-7 gap-px">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) =>
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2">
            
              {day}
            </div>
          )}
          {renderCalendarDays()}
        </div>
      </div>
      {selectedEvent &&
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onJoin={() => onEventSelect(selectedEvent)}
        onSetReminder={() => {
          if (onSetReminder) onSetReminder(selectedEvent);
          setSelectedEvent(null);
        }}
        hasReminder={!!reminders[selectedEvent.id]}
        reminderTiming={reminders[selectedEvent.id]?.timing}
        reminderChannels={reminders[selectedEvent.id]?.channels} />

      }
    </div>);

};
export default LiveClassCalendar;