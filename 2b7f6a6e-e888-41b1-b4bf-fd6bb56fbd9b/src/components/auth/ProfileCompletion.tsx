import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpenIcon, CalendarIcon, UserIcon, CheckIcon } from 'lucide-react';
interface ProfileCompletionProps {
  onComplete: (data: any) => void;
}
const SUBJECTS = [
{
  id: 'math',
  name: 'Mathematics'
},
{
  id: 'physics',
  name: 'Physics'
},
{
  id: 'chemistry',
  name: 'Chemistry'
},
{
  id: 'biology',
  name: 'Biology'
},
{
  id: 'english',
  name: 'English'
},
{
  id: 'history',
  name: 'History'
},
{
  id: 'geography',
  name: 'Geography'
}];

const ProfileCompletion: React.FC<ProfileCompletionProps> = ({
  onComplete
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    displayName: '',
    grade: '',
    subjects: [] as string[],
    studySchedule: {
      weekdays: true,
      weekends: false,
      preferredTime: 'morning'
    }
  });
  const handleSubjectToggle = (subjectId: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subjectId) ?
      prev.subjects.filter((id) => id !== subjectId) :
      [...prev.subjects, subjectId]
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(formData);
      navigate('/student/onboarding');
    }
  };
  return (
    <div className="max-w-md mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((number) =>
          <div
            key={number}
            className={`flex items-center ${number < 3 ? 'flex-1' : ''}`}>
            
              <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= number ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
              
                {step > number ? <CheckIcon className="h-5 w-5" /> : number}
              </div>
              {number < 3 &&
            <div
              className={`flex-1 h-1 mx-2 ${step > number ? 'bg-indigo-600' : 'bg-gray-200'}`} />

            }
            </div>
          )}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-gray-500">Basic Info</span>
          <span className="text-xs text-gray-500">Subjects</span>
          <span className="text-xs text-gray-500">Schedule</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 &&
        <div className="space-y-6">
            <div>
              <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-700">
              
                Display Name
              </label>
              <div className="mt-1 relative">
                <input
                type="text"
                id="displayName"
                value={formData.displayName}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  displayName: e.target.value
                })
                }
                className="block w-full px-4 py-3 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                required />
              
                <UserIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label
              htmlFor="grade"
              className="block text-sm font-medium text-gray-700">
              
                Grade/Class
              </label>
              <select
              id="grade"
              value={formData.grade}
              onChange={(e) =>
              setFormData({
                ...formData,
                grade: e.target.value
              })
              }
              className="mt-1 block w-full py-3 px-4 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              required>
              
                <option value="">Select your grade</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="S4">S4</option>
                <option value="S5">S5</option>
                <option value="S6">S6</option>
              </select>
            </div>
          </div>
        }
        {step === 2 &&
        <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select your subjects
              </label>
              <div className="grid grid-cols-2 gap-4">
                {SUBJECTS.map((subject) =>
              <button
                key={subject.id}
                type="button"
                onClick={() => handleSubjectToggle(subject.id)}
                className={`p-4 rounded-lg border-2 text-left transition-colors ${formData.subjects.includes(subject.id) ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                
                    <BookOpenIcon
                  className={`h-5 w-5 ${formData.subjects.includes(subject.id) ? 'text-indigo-600' : 'text-gray-400'}`} />
                
                    <span
                  className={`block mt-2 text-sm ${formData.subjects.includes(subject.id) ? 'text-indigo-600 font-medium' : 'text-gray-900'}`}>
                  
                      {subject.name}
                    </span>
                  </button>
              )}
              </div>
            </div>
          </div>
        }
        {step === 3 &&
        <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Study Schedule
              </label>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                  type="checkbox"
                  id="weekdays"
                  checked={formData.studySchedule.weekdays}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    studySchedule: {
                      ...formData.studySchedule,
                      weekdays: e.target.checked
                    }
                  })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                
                  <label
                  htmlFor="weekdays"
                  className="ml-3 block text-sm text-gray-700">
                  
                    Weekdays
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                  type="checkbox"
                  id="weekends"
                  checked={formData.studySchedule.weekends}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    studySchedule: {
                      ...formData.studySchedule,
                      weekends: e.target.checked
                    }
                  })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                
                  <label
                  htmlFor="weekends"
                  className="ml-3 block text-sm text-gray-700">
                  
                    Weekends
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
              htmlFor="preferredTime"
              className="block text-sm font-medium text-gray-700">
              
                Preferred Study Time
              </label>
              <select
              id="preferredTime"
              value={formData.studySchedule.preferredTime}
              onChange={(e) =>
              setFormData({
                ...formData,
                studySchedule: {
                  ...formData.studySchedule,
                  preferredTime: e.target.value
                }
              })
              }
              className="mt-1 block w-full py-3 px-4 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
              
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </div>
        }
        <div className="flex justify-between pt-6">
          {step > 1 &&
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            
              Back
            </button>
          }
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto">
            
            {step === 3 ? 'Complete Setup' : 'Continue'}
          </button>
        </div>
      </form>
    </div>);

};
export default ProfileCompletion;