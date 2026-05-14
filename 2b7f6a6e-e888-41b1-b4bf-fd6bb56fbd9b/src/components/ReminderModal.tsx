import React, { useState } from 'react';
import { BellIcon, XIcon, CheckIcon } from 'lucide-react';
interface ReminderModalProps {
  classTitle: string;
  subject: string;
  instructor: string;
  date: string;
  time: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (preferences: ReminderPreferences) => void;
}
export interface ReminderPreferences {
  channels: {
    push: boolean;
    sms: boolean;
    email: boolean;
  };
  timing: '5' | '10' | '15' | '30'; // minutes before class
}
const ReminderModal: React.FC<ReminderModalProps> = ({
  classTitle,
  subject,
  instructor,
  date,
  time,
  isOpen,
  onClose,
  onConfirm
}) => {
  const [preferences, setPreferences] = useState<ReminderPreferences>({
    channels: {
      push: true,
      sms: false,
      email: false
    },
    timing: '15'
  });
  if (!isOpen) return null;
  const handleConfirm = () => {
    onConfirm(preferences);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <BellIcon className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Set Class Reminder
              </h3>
              <p className="text-sm text-gray-500">
                Choose how you'd like to be reminded
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500">
            
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900">{classTitle}</h4>
            <p className="text-sm text-gray-500">
              {subject} • {instructor}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {date} at {time}
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Notification Channels
            </label>
            <div className="mt-2 space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.channels.push}
                  onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    channels: {
                      ...preferences.channels,
                      push: e.target.checked
                    }
                  })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                
                <span className="ml-3 text-sm text-gray-700">
                  Push Notification
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.channels.sms}
                  onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    channels: {
                      ...preferences.channels,
                      sms: e.target.checked
                    }
                  })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                
                <span className="ml-3 text-sm text-gray-700">SMS</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.channels.email}
                  onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    channels: {
                      ...preferences.channels,
                      email: e.target.checked
                    }
                  })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                
                <span className="ml-3 text-sm text-gray-700">Email</span>
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="timing"
              className="text-sm font-medium text-gray-700">
              
              Remind me before class
            </label>
            <select
              id="timing"
              value={preferences.timing}
              onChange={(e) =>
              setPreferences({
                ...preferences,
                timing: e.target.value as ReminderPreferences['timing']
              })
              }
              className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
              
              <option value="5">5 minutes before</option>
              <option value="10">10 minutes before</option>
              <option value="15">15 minutes before</option>
              <option value="30">30 minutes before</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
            
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
            
            <CheckIcon className="h-4 w-4 mr-2" />
            Confirm Reminder
          </button>
        </div>
      </div>
    </div>);

};
export default ReminderModal;