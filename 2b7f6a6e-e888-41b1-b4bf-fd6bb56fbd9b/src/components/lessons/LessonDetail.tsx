import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ChevronLeftIcon,
  DownloadIcon,
  FileTextIcon,
  MessageSquareIcon,
  BookOpenIcon,
  CheckCircleIcon,
  StarIcon } from
'lucide-react';
import VideoPlayer from './VideoPlayer';
import MasteryCheck from './MasteryCheck';
import Remediation from './Remediation';
import MasteryLearningModule from './MasteryLearningModule';
const LessonDetail: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const [activeTab, setActiveTab] = useState<'notes' | 'questions'>('notes');
  const [showQuiz, setShowQuiz] = useState(false);
  const [masteryAchieved, setMasteryAchieved] = useState(false);
  const [showRemediation, setShowRemediation] = useState(false);
  const [showMasteryModule, setShowMasteryModule] = useState(false);
  const [weakAreas] = useState([
  'Quadratic Formula Application',
  'Root Finding']
  );
  const lesson = {
    id,
    title: 'Quadratic Equations Explained',
    description:
    'Learn how to solve quadratic equations using various methods including factoring, completing the square, and the quadratic formula.',
    teacher: 'Mr. John Smith',
    subject: 'Mathematics',
    grade: 'S4',
    videoUrl: 'https://example.com/video.mp4',
    materials: [
    {
      id: '1',
      name: 'Lesson Notes',
      type: 'pdf',
      size: '2.4 MB'
    },
    {
      id: '2',
      name: 'Practice Workbook',
      type: 'pdf',
      size: '1.8 MB'
    },
    {
      id: '3',
      name: 'Formula Sheet',
      type: 'pdf',
      size: '500 KB'
    }],

    questions: [
    {
      id: '1',
      user: 'Sarah M.',
      question: 'Can you explain the difference between roots and solutions?',
      answers: [
      {
        id: '1',
        user: 'Mr. John Smith',
        answer:
        'Roots and solutions are actually the same thing in the context of quadratic equations...',
        isTeacher: true
      }]

    }]

  };
  const handleMasteryCheck = (achieved: boolean) => {
    setMasteryAchieved(achieved);
    if (!achieved) {
      setShowRemediation(true);
    }
  };
  const handleRemediationComplete = () => {
    setShowRemediation(false);
    // Optionally trigger a new mastery check
  };
  const handleLessonComplete = () => {
    setShowMasteryModule(true);
  };
  const handleMasteryComplete = (achieved: boolean) => {
    setMasteryAchieved(achieved);
    if (achieved) {
      // Handle progression to next lesson
      console.log('Mastery achieved, ready for next lesson');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/student/lessons"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Back to Lessons
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{lesson.title}</h1>
          <p className="mt-2 text-gray-600">{lesson.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {lesson.subject}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {lesson.grade}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
              4.8 (234 ratings)
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <VideoPlayer
              src={lesson.videoUrl}
              title={lesson.title}
              onComplete={handleLessonComplete}
              onProgress={(progress) => console.log('Progress:', progress)} />
            
            {showMasteryModule && !masteryAchieved &&
            <MasteryLearningModule
              lessonId={lesson.id}
              onComplete={handleMasteryComplete} />

            }
            {!masteryAchieved && !showRemediation &&
            <MasteryCheck
              lessonId={lesson.id}
              onComplete={handleMasteryCheck} />

            }
            {showRemediation &&
            <Remediation
              lessonId={lesson.id}
              weakAreas={weakAreas}
              onComplete={handleRemediationComplete} />

            }
            <div>
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`${activeTab === 'notes' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                    
                    Lesson Notes
                  </button>
                  <button
                    onClick={() => setActiveTab('questions')}
                    className={`${activeTab === 'questions' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                    
                    Questions
                  </button>
                </nav>
              </div>
              <div className="py-6">
                {activeTab === 'notes' ?
                <div className="space-y-4">
                    {lesson.materials.map((material) =>
                  <div
                    key={material.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    
                        <div className="flex items-center">
                          <FileTextIcon className="h-5 w-5 text-gray-400" />
                          <span className="ml-3 text-sm font-medium text-gray-900">
                            {material.name}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            ({material.size})
                          </span>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800">
                          <DownloadIcon className="h-5 w-5" />
                        </button>
                      </div>
                  )}
                  </div> :

                <div className="space-y-6">
                    {lesson.questions.map((question) =>
                  <div
                    key={question.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    
                        <div className="p-4 border-b border-gray-200">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-600">
                                  {question.user[0]}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {question.user}
                              </p>
                              <p className="text-sm text-gray-500">Student</p>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            {question.question}
                          </p>
                        </div>
                        {question.answers.map((answer) =>
                    <div
                      key={answer.id}
                      className="p-4 bg-gray-50 border-t border-gray-200">
                      
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <div
                            className={`h-8 w-8 rounded-full ${answer.isTeacher ? 'bg-indigo-100' : 'bg-gray-200'} flex items-center justify-center`}>
                            
                                  <span
                              className={`text-sm font-medium ${answer.isTeacher ? 'text-indigo-600' : 'text-gray-600'}`}>
                              
                                    {answer.user[0]}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {answer.user}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {answer.isTeacher ? 'Teacher' : 'Student'}
                                </p>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                              {answer.answer}
                            </p>
                          </div>
                    )}
                      </div>
                  )}
                    <div className="mt-4">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <MessageSquareIcon className="h-4 w-4 mr-2" />
                        Ask a Question
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Your Instructor
              </h3>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-lg font-medium text-indigo-600">
                      {lesson.teacher[0]}
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {lesson.teacher}
                  </p>
                  <p className="text-sm text-gray-500">Mathematics Teacher</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Your Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Completion</span>
                    <span className="text-gray-900 font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{
                        width: '60%'
                      }} />
                    
                  </div>
                </div>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Take Quiz
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download Materials
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Next in Course
              </h3>
              <div className="space-y-3">
                <Link
                  to="/student/lessons/2"
                  className="block p-3 hover:bg-gray-50 rounded-lg">
                  
                  <div className="flex items-center">
                    <BookOpenIcon className="h-5 w-5 text-gray-400" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Solving Complex Equations
                      </p>
                      <p className="text-sm text-gray-500">25 minutes</p>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/student/lessons/3"
                  className="block p-3 hover:bg-gray-50 rounded-lg">
                  
                  <div className="flex items-center">
                    <BookOpenIcon className="h-5 w-5 text-gray-400" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Applications in Real Life
                      </p>
                      <p className="text-sm text-gray-500">30 minutes</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};
export default LessonDetail;