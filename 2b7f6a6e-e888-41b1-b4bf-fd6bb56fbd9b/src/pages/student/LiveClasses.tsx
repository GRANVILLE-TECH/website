import React, { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  SortAscIcon,
  VideoIcon,
  CalendarIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  MessageSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
import LiveClassCard from '../../components/LiveClassCard';
import LiveClassCalendar from '../../components/LiveClassCalendar';
import VirtualClassroom from '../../components/virtual-classroom/VirtualClassroom';
import ReminderModal, {
  ReminderPreferences } from
'../../components/ReminderModal';
import { Link } from 'react-router-dom';
const allClasses = [
{
  id: '1',
  title: 'Mathematics Revision Session',
  subject: 'Mathematics',
  level: 'S4',
  instructor: 'Mr. John Doe',
  date: '2024-01-20',
  time: '2:00 PM',
  duration: '1 hour',
  attendees: 24,
  status: 'live' as const,
  description:
  'Join us for an intensive revision of quadratic equations and algebraic expressions.',
  topics: ['Quadratic Equations', 'Algebraic Expressions', 'Problem Solving']
},
{
  id: '2',
  title: 'Biology: Ecosystem Dynamics',
  subject: 'Biology',
  level: 'S4',
  instructor: 'Ms. Jane Smith',
  date: '2024-01-21',
  time: '10:00 AM',
  duration: '1.5 hours',
  attendees: 18,
  status: 'upcoming' as const,
  description:
  'Explore the fascinating world of ecosystem interactions and environmental biology.',
  topics: ['Food Chains', 'Energy Flow', 'Ecological Balance']
},
{
  id: '3',
  title: 'Chemistry Lab Session',
  subject: 'Chemistry',
  level: 'S4',
  instructor: 'Dr. Robert Johnson',
  date: '2024-01-19',
  time: '3:00 PM',
  duration: '2 hours',
  attendees: 15,
  status: 'ended' as const,
  description: 'Virtual lab demonstration of chemical reactions and bonding.',
  topics: ['Chemical Bonding', 'Reaction Types', 'Lab Safety'],
  recording: 'https://example.com/recording',
  rating: 4.8,
  reviews: [
  {
    id: '1',
    user: 'Sarah M.',
    rating: 5,
    comment: 'Excellent explanation of complex concepts!',
    date: '2024-01-19'
  },
  {
    id: '2',
    user: 'James K.',
    rating: 4,
    comment: 'Very helpful session, would recommend.',
    date: '2024-01-19'
  }]

},
{
  id: '4',
  title: 'Physics: Forces & Motion',
  subject: 'Physics',
  level: 'S4',
  instructor: 'Prof. Lisa Anderson',
  date: '2024-01-18',
  time: '1:00 PM',
  duration: '1.5 hours',
  attendees: 22,
  status: 'ended' as const,
  description:
  'Comprehensive review of Newtonian mechanics and practical applications.',
  topics: ["Newton's Laws", 'Force Diagrams', 'Motion Analysis'],
  recording: 'https://example.com/recording',
  rating: 4.5,
  reviews: [
  {
    id: '3',
    user: 'Michael R.',
    rating: 5,
    comment: 'Prof. Anderson explains complex topics so clearly!',
    date: '2024-01-18'
  }]

}];

const LiveClasses: React.FC = () => {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeClass, setActiveClass] = useState<{
    title: string;
    subject: string;
    instructor: string;
  } | null>(null);
  const [selectedReviewClass, setSelectedReviewClass] = useState<string | null>(
    null
  );
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  });
  const [reminders, setReminders] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedClassForReminder, setSelectedClassForReminder] =
  useState<any>(null);
  const [reminderPreferences, setReminderPreferences] = useState<{
    [key: string]: {
      timing: '5' | '10' | '15' | '30';
      channels: {
        push: boolean;
        sms: boolean;
        email: boolean;
      };
    };
  }>({});
  const handleDateSelect = (date: Date) => {
    console.log('Selected date:', date);
  };
  const handleEventSelect = (event: any) => {
    console.log('Selected event:', event);
  };
  const handleJoinClass = (classInfo: {
    title: string;
    subject: string;
    instructor: string;
  }) => {
    setActiveClass(classInfo);
  };
  const handleSubmitReview = (classId: string) => {
    console.log('Submitting review for class:', classId, newReview);
    setShowReviewModal(false);
    setNewReview({
      rating: 5,
      comment: ''
    });
  };
  const handleSetReminder = (classInfo: any) => {
    setSelectedClassForReminder(classInfo);
  };
  const handleRemoveReminder = (classId: string) => {
    const updatedReminders = {
      ...reminders
    };
    delete updatedReminders[classId];
    setReminders(updatedReminders);
    console.log('Reminder removed for class:', classId);
  };
  const handleConfirmReminder = (preferences: ReminderPreferences) => {
    if (selectedClassForReminder) {
      setReminders({
        ...reminders,
        [selectedClassForReminder.id]: true
      });
      setReminderPreferences({
        ...reminderPreferences,
        [selectedClassForReminder.id]: {
          timing: preferences.timing,
          channels: preferences.channels
        }
      });
      console.log('Reminder set with preferences:', preferences);
    }
    setSelectedClassForReminder(null);
  };
  const filteredClasses = allClasses.filter((classItem) => {
    if (filter === 'live') return classItem.status === 'live';
    if (filter === 'upcoming') return classItem.status === 'upcoming';
    if (filter === 'past') return classItem.status === 'ended';
    return true;
  });
  if (activeClass) {
    return (
      <VirtualClassroom
        classTitle={activeClass.title}
        subject={activeClass.subject}
        teacherName={activeClass.instructor}
        isTeacher={false} />);


  }
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
              <h1 className="text-2xl font-bold text-gray-900">Live Classes</h1>
              <p className="mt-1 text-gray-600">
                Join interactive live sessions with expert teachers
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full" />
              
            </div>
            <div className="flex gap-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                
                <option value="all">All Classes</option>
                <option value="live">Live Now</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past Classes</option>
              </select>
              <div className="flex rounded-lg border border-gray-300 p-1">
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded ${view === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                  
                  <VideoIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setView('calendar')}
                  className={`p-2 rounded ${view === 'calendar' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                  
                  <CalendarIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setView('list')}
                disabled={view === 'list'}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${view === 'list' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                
                <VideoIcon className="h-5 w-5" />
                <span className="font-medium">List View</span>
              </button>
              <button
                onClick={() => setView('calendar')}
                disabled={view === 'calendar'}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${view === 'calendar' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                
                <CalendarIcon className="h-5 w-5" />
                <span className="font-medium">Calendar View</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView('list')}
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                aria-label="Previous view">
                
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setView('calendar')}
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                aria-label="Next view">
                
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {view === 'calendar' ?
        <LiveClassCalendar
          events={allClasses}
          onDateSelect={handleDateSelect}
          onEventSelect={handleEventSelect}
          onSetReminder={handleSetReminder}
          reminders={reminderPreferences} /> :


        <>
            {filter === 'live' &&
          <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Live Now
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredClasses.
              filter((c) => c.status === 'live').
              map((classItem) =>
              <LiveClassCard
                key={classItem.id}
                {...classItem}
                hasReminder={reminders[classItem.id]}
                onJoin={() =>
                handleJoinClass({
                  title: classItem.title,
                  subject: classItem.subject,
                  instructor: classItem.instructor
                })
                }
                onSetReminder={() => handleSetReminder(classItem)}
                onRemoveReminder={() =>
                handleRemoveReminder(classItem.id)
                } />

              )}
                </div>
              </section>
          }
            {(filter === 'all' || filter === 'upcoming') &&
          <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Upcoming Classes
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredClasses.
              filter((c) => c.status === 'upcoming').
              map((classItem) =>
              <LiveClassCard
                key={classItem.id}
                {...classItem}
                onJoin={() =>
                handleJoinClass({
                  title: classItem.title,
                  subject: classItem.subject,
                  instructor: classItem.instructor
                })
                }
                onSetReminder={() => handleSetReminder(classItem)} />

              )}
                </div>
              </section>
          }
            {(filter === 'all' || filter === 'past') &&
          <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Past Classes
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredClasses.
              filter((c) => c.status === 'ended').
              map((classItem) =>
              <div
                key={classItem.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Recording Available
                              </span>
                              <h3 className="mt-2 text-lg font-medium text-gray-900">
                                {classItem.title}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {classItem.subject} • {classItem.level}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <StarIcon className="h-5 w-5 text-yellow-400" />
                              <span className="ml-1 text-sm font-medium text-gray-900">
                                {classItem.rating}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <ClockIcon className="h-4 w-4 mr-1" />
                              {classItem.duration}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <UserIcon className="h-4 w-4 mr-1" />
                              {classItem.attendees} attended
                            </div>
                          </div>
                          <div className="space-y-4">
                            <button
                      onClick={() => window.open(classItem.recording)}
                      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      
                              Watch Recording
                            </button>
                            <div className="border-t border-gray-200 pt-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">
                                Reviews ({classItem.reviews.length})
                              </h4>
                              <div className="space-y-3">
                                {classItem.reviews.map((review) =>
                        <div
                          key={review.id}
                          className="flex items-start space-x-3">
                          
                                    <div className="flex-shrink-0">
                                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-sm font-medium text-gray-600">
                                          {review.user[0]}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                          {review.user}
                                        </p>
                                        <div className="flex items-center">
                                          <StarIcon className="h-4 w-4 text-yellow-400" />
                                          <span className="ml-1 text-sm text-gray-600">
                                            {review.rating}
                                          </span>
                                        </div>
                                      </div>
                                      <p className="text-sm text-gray-500">
                                        {review.comment}
                                      </p>
                                    </div>
                                  </div>
                        )}
                              </div>
                              <button
                        onClick={() => {
                          setSelectedReviewClass(classItem.id);
                          setShowReviewModal(true);
                        }}
                        className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        
                                Add Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
              )}
                </div>
              </section>
          }
          </>
        }
      </div>

      {showReviewModal &&
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Add Your Review
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) =>
                <button
                  key={star}
                  onClick={() =>
                  setNewReview({
                    ...newReview,
                    rating: star
                  })
                  }
                  className="p-1">
                  
                      <StarIcon
                    className={`h-6 w-6 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                  
                    </button>
                )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comment
                </label>
                <textarea
                rows={3}
                value={newReview.comment}
                onChange={(e) =>
                setNewReview({
                  ...newReview,
                  comment: e.target.value
                })
                }
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Share your experience..." />
              
              </div>
              <div className="flex justify-end gap-3">
                <button
                onClick={() => setShowReviewModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
                
                  Cancel
                </button>
                <button
                onClick={() =>
                selectedReviewClass &&
                handleSubmitReview(selectedReviewClass)
                }
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
                
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      }

      {selectedClassForReminder &&
      <ReminderModal
        classTitle={selectedClassForReminder.title}
        subject={selectedClassForReminder.subject}
        instructor={selectedClassForReminder.instructor}
        date={selectedClassForReminder.date}
        time={selectedClassForReminder.time}
        isOpen={true}
        onClose={() => setSelectedClassForReminder(null)}
        onConfirm={handleConfirmReminder} />

      }
    </div>);

};
export default LiveClasses;