import React, { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  VideoIcon,
  UserIcon,
  BookIcon } from
'lucide-react';
import SessionModal from '../../components/teacher/SessionModal';
interface Session {
  id: string;
  type: 'live' | 'tutoring' | 'recorded';
  subject: string;
  topic: string;
  date: string;
  time: string;
  duration: number;
  capacity: number;
  enrolled: number;
  description: string;
  isRecorded?: boolean;
  student?: string; // for tutoring sessions
}
const TeacherSchedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  // Mock data for today's sessions
  const todaySessions: Session[] = [
  {
    id: '1',
    type: 'live',
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    date: '2024-01-20',
    time: '10:00 AM',
    duration: 60,
    capacity: 30,
    enrolled: 15,
    description:
    'Live class covering quadratic equations and their applications.'
  },
  {
    id: '2',
    type: 'tutoring',
    subject: 'Mathematics',
    topic: 'One-on-One Help',
    date: '2024-01-20',
    time: '1:00 PM',
    duration: 45,
    capacity: 1,
    enrolled: 1,
    description: 'Individual tutoring session',
    student: 'John Doe'
  },
  {
    id: '3',
    type: 'recorded',
    subject: 'Mathematics',
    topic: 'Algebra Review',
    date: '2024-01-20',
    time: '3:30 PM',
    duration: 90,
    capacity: 100,
    enrolled: 0,
    description: 'Pre-recorded lesson release for algebra review'
  }];

  const handleCreateSession = () => {
    setSelectedSession(null);
    setShowSessionModal(true);
  };
  const handleEditSession = (session: Session) => {
    setSelectedSession(session);
    setShowSessionModal(true);
  };
  const handleSaveSession = (sessionData: Partial<Session>) => {
    console.log('Saving session:', sessionData);
    setShowSessionModal(false);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
            <p className="mt-1 text-gray-600">
              Manage your classes and teaching sessions
            </p>
          </div>
          <button
            onClick={handleCreateSession}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            
            <PlusIcon className="h-5 w-5 mr-2" />
            New Session
          </button>
        </div>
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <VideoIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Today's Classes</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-indigo-600 mt-1">Next: 10:00 AM</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Student Sessions</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
                <p className="text-xs text-green-600 mt-1">
                  2 pending requests
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-lg">
                <BookIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Recorded Lessons</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-xs text-amber-600 mt-1">
                  1 scheduled release
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${view === 'month' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setView('month')}>
                  
                  Month
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${view === 'week' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setView('week')}>
                  
                  Week
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${view === 'day' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setView('day')}>
                  
                  Day
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
                </button>
                <span className="text-sm font-medium text-gray-900">
                  {selectedDate.toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRightIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          {/* Calendar Grid */}
          <div className="p-4">
            {/* Calendar implementation will go here */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {/* Calendar days will be rendered here */}
            </div>
          </div>
        </div>
        {/* Today's Sessions */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Today's Sessions
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {todaySessions.map((session) =>
            <div
              key={session.id}
              className="p-6 hover:bg-gray-50 transition-colors">
              
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                    className={`p-2 rounded-lg ${session.type === 'live' ? 'bg-indigo-100' : session.type === 'tutoring' ? 'bg-green-100' : 'bg-amber-100'}`}>
                    
                      {session.type === 'live' ?
                    <VideoIcon
                      className={`h-5 w-5 ${session.type === 'live' ? 'text-indigo-600' : session.type === 'tutoring' ? 'text-green-600' : 'text-amber-600'}`} /> :

                    session.type === 'tutoring' ?
                    <UserIcon className="h-5 w-5 text-green-600" /> :

                    <BookIcon className="h-5 w-5 text-amber-600" />
                    }
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {session.subject}: {session.topic}
                      </h3>
                      <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {session.time} ({session.duration} min)
                        </span>
                        {session.type === 'live' &&
                      <span className="flex items-center">
                            <UsersIcon className="h-4 w-4 mr-1" />
                            {session.enrolled}/{session.capacity} enrolled
                          </span>
                      }
                        {session.type === 'tutoring' &&
                      <span className="flex items-center">
                            <UserIcon className="h-4 w-4 mr-1" />
                            {session.student}
                          </span>
                      }
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                    onClick={() => handleEditSession(session)}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    
                      Edit
                    </button>
                    {session.type === 'live' &&
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Start Class
                      </button>
                  }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Session Modal */}
      {showSessionModal &&
      <SessionModal
        session={selectedSession}
        isOpen={showSessionModal}
        onClose={() => setShowSessionModal(false)}
        onSave={handleSaveSession} />

      }
    </div>);

};
export default TeacherSchedule;