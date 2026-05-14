import React, { useState } from 'react';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  RefreshCwIcon } from
'lucide-react';
interface MasteryCheckProps {
  lessonId: string;
  onComplete: (achieved: boolean) => void;
}
const MasteryCheck: React.FC<MasteryCheckProps> = ({
  lessonId,
  onComplete
}) => {
  const [score, setScore] = useState<number | null>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>>(
    {});
  // Mock assessment data
  const assessment = {
    questions: [
    {
      id: '1',
      question: 'What is the standard form of a quadratic equation?',
      options: {
        a: 'ax² + bx + c = 0',
        b: 'ax + b = 0',
        c: 'ax³ + bx² + cx + d = 0',
        d: 'ax + by = c'
      },
      correct: 'a'
    },
    {
      id: '2',
      question:
      'Which term represents the y-intercept in a quadratic equation?',
      options: {
        a: 'ax²',
        b: 'bx',
        c: 'c',
        d: 'None of the above'
      },
      correct: 'c'
    }]

  };
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };
  const calculateScore = () => {
    const totalQuestions = assessment.questions.length;
    const correctAnswers = assessment.questions.filter(
      (q) => selectedAnswers[q.id] === q.correct
    ).length;
    return correctAnswers / totalQuestions * 100;
  };
  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    onComplete(finalScore >= 90); // 90% is the mastery threshold
  };
  const resetAssessment = () => {
    setSelectedAnswers({});
    setScore(null);
    setShowAssessment(true);
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {!showAssessment && !score &&
      <div className="p-6 text-center">
          <AlertCircleIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Mastery Check Required
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Complete this assessment to demonstrate your understanding and
            unlock the next lesson.
          </p>
          <button
          onClick={() => setShowAssessment(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          
            Start Assessment
          </button>
        </div>
      }
      {showAssessment && !score &&
      <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Lesson Assessment
          </h3>
          <div className="space-y-6">
            {assessment.questions.map((question) =>
          <div key={question.id} className="space-y-4">
                <p className="text-sm font-medium text-gray-900">
                  {question.question}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(question.options).map(([key, value]) =>
              <label
                key={key}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${selectedAnswers[question.id] === key ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                
                      <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={key}
                  checked={selectedAnswers[question.id] === key}
                  onChange={() => handleAnswerSelect(question.id, key)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                
                      <span className="ml-3 text-sm text-gray-900">
                        {value}
                      </span>
                    </label>
              )}
                </div>
              </div>
          )}
          </div>
          <div className="mt-6">
            <button
            onClick={handleSubmit}
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            
              Submit Assessment
            </button>
          </div>
        </div>
      }
      {score !== null &&
      <div className="p-6">
          <div className="text-center">
            {score >= 90 ?
          <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" /> :

          <XCircleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
          }
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {score >= 90 ? 'Mastery Achieved!' : 'Mastery Not Yet Achieved'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Your score: {score.toFixed(0)}%
            </p>
            {score < 90 &&
          <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Let's work on improving your understanding. You can:
                </p>
                <div className="flex flex-col gap-3">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    View AI-Generated Explanation
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                    Join Peer Study Group
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                    Schedule Teacher Support
                  </button>
                  <button
                onClick={resetAssessment}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Retake Assessment
                  </button>
                </div>
              </div>
          }
          </div>
        </div>
      }
    </div>);

};
export default MasteryCheck;