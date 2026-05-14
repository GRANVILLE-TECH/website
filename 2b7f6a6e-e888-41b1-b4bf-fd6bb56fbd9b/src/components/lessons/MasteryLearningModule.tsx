import React, { useEffect, useState } from 'react';
import {
  BookOpenIcon,
  UsersIcon,
  UserIcon,
  CheckCircleIcon,
  XCircleIcon,
  BarChartIcon,
  BrainIcon,
  ArrowRightIcon,
  AlertCircleIcon } from
'lucide-react';
interface MasteryLearningModuleProps {
  lessonId: string;
  initialScore?: number;
  masteryThreshold?: number;
  onComplete: (achieved: boolean) => void;
}
const MasteryLearningModule: React.FC<MasteryLearningModuleProps> = ({
  lessonId,
  initialScore = 0,
  masteryThreshold = 90,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState<
    'assessment' | 'ai' | 'peer' | 'teacher' | 'complete'>(
    'assessment');
  const [score, setScore] = useState(initialScore);
  const [attempts, setAttempts] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [weakAreas, setWeakAreas] = useState<string[]>([]);
  useEffect(() => {
    if (score >= masteryThreshold) {
      setCurrentStep('complete');
      onComplete(true);
    }
  }, [score, masteryThreshold, onComplete]);
  const handleRetake = () => {
    setAttempts((prev) => prev + 1);
    // Mock score improvement for demo
    setScore((prev) => Math.min(prev + 15, 100));
  };
  const renderStepIndicator = () =>
  <div className="flex items-center justify-between mb-6 px-4">
      <div className="flex space-x-4">
        {['assessment', 'ai', 'peer', 'teacher'].map((step) =>
      <div
        key={step}
        className={`flex items-center ${currentStep === step ? 'text-indigo-600' : 'text-gray-400'}`}>
        
            <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step ? 'bg-indigo-100 border-2 border-indigo-600' : 'bg-gray-100'}`}>
          
              {step === 'assessment' && <BarChartIcon className="h-4 w-4" />}
              {step === 'ai' && <BrainIcon className="h-4 w-4" />}
              {step === 'peer' && <UsersIcon className="h-4 w-4" />}
              {step === 'teacher' && <UserIcon className="h-4 w-4" />}
            </div>
            {step !== 'teacher' &&
        <div
          className={`h-1 w-8 ${currentStep === step ? 'bg-indigo-600' : 'bg-gray-200'}`} />

        }
          </div>
      )}
      </div>
      <div className="flex items-center space-x-2">
        <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${score >= masteryThreshold ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
        
          Score: {score}%
        </span>
        <span className="text-sm text-gray-500">Attempt {attempts + 1}</span>
      </div>
    </div>;

  const renderContent = () => {
    switch (currentStep) {
      case 'assessment':
        return (
          <div className="space-y-6">
            <div className="text-center">
              {score < masteryThreshold ?
              <XCircleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" /> :

              <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              }
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {score < masteryThreshold ?
                'Mastery Not Yet Achieved' :
                'Mastery Achieved!'}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Your current score: {score}% (Required: {masteryThreshold}%)
              </p>
            </div>
            {score < masteryThreshold &&
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-400" />
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Let's work together to improve your understanding. We'll
                      guide you through additional learning resources.
                    </p>
                  </div>
                </div>
              </div>
            }
            <div className="flex justify-center">
              {score < masteryThreshold &&
              <button
                onClick={() => setCurrentStep('ai')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                
                  Start AI-Guided Learning
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              }
            </div>
          </div>);

      case 'ai':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                AI-Generated Learning Materials
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <BookOpenIcon className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Alternative Explanation
                      </p>
                      <p className="text-xs text-gray-500">
                        A different approach to understanding the concept
                      </p>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <BrainIcon className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Interactive Practice
                      </p>
                      <p className="text-xs text-gray-500">
                        Hands-on exercises with immediate feedback
                      </p>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    Start
                  </button>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleRetake}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  
                  Retake Assessment
                </button>
                <button
                  onClick={() => setCurrentStep('peer')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  
                  Continue to Peer Learning
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>);

      case 'peer':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Peer Learning Sessions
              </h3>
              <div className="space-y-4">
                {[1, 2].map((session) =>
                <div
                  key={session}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  
                    <div className="flex items-center">
                      <UsersIcon className="h-5 w-5 text-indigo-600 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Study Group Session {session}
                        </p>
                        <p className="text-xs text-gray-500">
                          {session === 1 ?
                        'Starting in 15 minutes' :
                        'Today at 3 PM'}
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Join Now
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleRetake}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  
                  Retake Assessment
                </button>
                <button
                  onClick={() => setCurrentStep('teacher')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  
                  Request Teacher Support
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>);

      case 'teacher':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Schedule Teacher Support
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                  'Tomorrow 2 PM',
                  'Tomorrow 3 PM',
                  'Friday 2 PM',
                  'Friday 3 PM'].
                  map((slot) =>
                  <button
                    key={slot}
                    className="p-4 text-center border rounded-lg hover:border-indigo-500 hover:bg-indigo-50">
                    
                      <UserIcon className="h-5 w-5 mx-auto mb-2 text-indigo-600" />
                      <span className="block text-sm font-medium text-gray-900">
                        {slot}
                      </span>
                    </button>
                  )}
                </div>
                <textarea
                  placeholder="Describe what you'd like to discuss..."
                  className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  rows={3} />
                
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleRetake}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  
                  Retake Assessment
                </button>
                <button
                  onClick={() => setCurrentStep('complete')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  
                  Schedule Session
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>);

      case 'complete':
        return (
          <div className="text-center">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Mastery Achieved!
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Congratulations! You've demonstrated mastery of this lesson.
            </p>
            <button
              onClick={() => onComplete(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              
              Continue to Next Lesson
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>);

      default:
        return null;
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {renderStepIndicator()}
      <div className="p-6">{renderContent()}</div>
    </div>);

};
export default MasteryLearningModule;