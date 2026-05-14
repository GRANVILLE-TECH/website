import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
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
  student?: string;
}
interface SessionModalProps {
  session?: Session | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (sessionData: Partial<Session>) => void;
}
const SessionModal: React.FC<SessionModalProps> = ({
  session,
  isOpen,
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState<Partial<Session>>(
    session || {
      type: 'live',
      subject: '',
      topic: '',
      date: '',
      time: '',
      duration: 60,
      capacity: 30,
      description: '',
      isRecorded: false
    }
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {session ? 'Edit Session' : 'Schedule New Session'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500">
            
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Session Type
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as Session['type']
                })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                
                <option value="live">Live Class</option>
                <option value="tutoring">One-on-One Tutoring</option>
                <option value="recorded">Pre-recorded Lesson</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value
                })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topic
            </label>
            <input
              type="text"
              value={formData.topic}
              onChange={(e) =>
              setFormData({
                ...formData,
                topic: e.target.value
              })
              }
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Quadratic Equations" />
            
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  date: e.target.value
                })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  time: e.target.value
                })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
              
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  duration: parseInt(e.target.value)
                })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                min="15"
                step="15" />
              
            </div>
            {formData.type === 'live' &&
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Capacity
                </label>
                <input
                type="number"
                value={formData.capacity}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  capacity: parseInt(e.target.value)
                })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                min="1" />
              
              </div>
            }
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value
              })
              }
              rows={3}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add session details and learning objectives..." />
            
          </div>
          {formData.type === 'live' &&
          <div className="flex items-center">
              <input
              type="checkbox"
              id="record-session"
              checked={formData.isRecorded}
              onChange={(e) =>
              setFormData({
                ...formData,
                isRecorded: e.target.checked
              })
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            
              <label
              htmlFor="record-session"
              className="ml-2 text-sm text-gray-700">
              
                Record this session
              </label>
            </div>
          }
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              
              {session ? 'Save Changes' : 'Create Session'}
            </button>
          </div>
        </form>
      </div>
    </div>);

};
export default SessionModal;