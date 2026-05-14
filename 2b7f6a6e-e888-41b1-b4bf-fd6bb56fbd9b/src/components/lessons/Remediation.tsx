import React, { useState } from 'react';
import {
  BookOpenIcon,
  UsersIcon,
  UserIcon,
  PlayCircleIcon,
  MessageSquareIcon,
  CalendarIcon,
  CheckCircleIcon } from
'lucide-react';
interface RemediationProps {
  lessonId: string;
  weakAreas: string[];
  onComplete: () => void;
}
const Remediation: React.FC<RemediationProps> = ({
  lessonId,
  weakAreas,
  onComplete
}) => {
  const [activeStep, setActiveStep] = useState<
    'ai' | 'peer' | 'teacher' | 'complete'>(
    'ai');
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Personalized Learning Support
          </h3>
          <div className="flex items-center space-x-2">
            <span
              className={`w-2 h-2 rounded-full ${activeStep === 'complete' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
            
            <span className="text-sm text-gray-500">
              {activeStep === 'complete' ? 'Completed' : 'In Progress'}
            </span>
          </div>
        </div>
        <div className="space-y-8">
          {/* AI-Driven Remediation */}
          <div
            className={`relative ${activeStep !== 'ai' && activeStep !== 'complete' ? 'opacity-50' : ''}`}>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <BookOpenIcon className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">
                  AI-Generated Learning Materials
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  Personalized content focusing on your areas for improvement
                </p>
                {activeStep === 'ai' &&
                <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">
                        Alternative Explanations Available
                      </h5>
                      <div className="space-y-2">
                        {weakAreas.map((area, index) =>
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 bg-white rounded-md border border-gray-200 hover:border-indigo-500 transition-colors">
                        
                            <div className="flex items-center">
                              <PlayCircleIcon className="h-5 w-5 text-indigo-600 mr-2" />
                              <span className="text-sm text-gray-900">
                                {area}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              5 min video
                            </span>
                          </button>
                      )}
                      </div>
                      <button
                      onClick={() => setActiveStep('peer')}
                      className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      
                        Continue to Peer Learning
                      </button>
                    </div>
                  </div>
                }
              </div>
              {activeStep !== 'ai' && activeStep !== 'complete' &&
              <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                </div>
              }
            </div>
          </div>
          {/* Peer Collaboration */}
          <div
            className={`relative ${activeStep !== 'peer' && activeStep !== 'complete' ? 'opacity-50' : ''}`}>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <UsersIcon className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">
                  Peer Study Groups
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  Learn and discuss with other students
                </p>
                {activeStep === 'peer' &&
                <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">
                        Available Study Groups
                      </h5>
                      <div className="space-y-2">
                        {[1, 2].map((group) =>
                      <div
                        key={group}
                        className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-200">
                        
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Group Study Session {group}
                              </p>
                              <p className="text-xs text-gray-500">
                                4 students enrolled
                              </p>
                            </div>
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                              Join Now
                            </button>
                          </div>
                      )}
                      </div>
                      <button
                      onClick={() => setActiveStep('teacher')}
                      className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                      
                        Continue to Teacher Support
                      </button>
                    </div>
                  </div>
                }
              </div>
              {activeStep !== 'peer' && activeStep !== 'complete' &&
              <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                </div>
              }
            </div>
          </div>
          {/* Teacher Support */}
          <div
            className={`relative ${activeStep !== 'teacher' && activeStep !== 'complete' ? 'opacity-50' : ''}`}>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">
                  Teacher Support
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  One-on-one guidance from your instructor
                </p>
                {activeStep === 'teacher' &&
                <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">
                        Schedule a Session
                      </h5>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <CalendarIcon className="h-5 w-5 text-gray-400" />
                          <select className="block w-full rounded-md border-gray-300 text-sm">
                            <option>Select a date</option>
                            <option>Tomorrow, 2:00 PM</option>
                            <option>Tomorrow, 3:00 PM</option>
                            <option>Friday, 2:00 PM</option>
                          </select>
                        </div>
                        <div className="flex items-center space-x-4">
                          <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                          <textarea
                          rows={3}
                          placeholder="Describe what you'd like to discuss..."
                          className="block w-full rounded-md border-gray-300 text-sm" />
                        
                        </div>
                        <button
                        onClick={() => {
                          setActiveStep('complete');
                          onComplete();
                        }}
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                        
                          Schedule Session
                        </button>
                      </div>
                    </div>
                  </div>
                }
              </div>
              {activeStep === 'complete' &&
              <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>);

};
export default Remediation;