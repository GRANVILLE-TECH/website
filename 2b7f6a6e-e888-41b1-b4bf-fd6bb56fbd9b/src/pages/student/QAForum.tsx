import React, { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  ChevronLeftIcon,
  PlusCircleIcon,
  MessageSquareIcon,
  CheckCircleIcon,
  UserIcon,
  XIcon,
  PaperclipIcon,
  AlertCircleIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
interface Question {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    grade: string;
    avatar?: string;
  };
  subject: string;
  tags: string[];
  timestamp: string;
  upvotes: number;
  replies: number;
  resolved: boolean;
}
interface NewQuestion {
  title: string;
  description: string;
  subject: string;
  grade: string;
  tags: string[];
  attachments: File[];
}
const QAForum: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState<NewQuestion>({
    title: '',
    description: '',
    subject: '',
    grade: '',
    tags: [],
    attachments: []
  });
  const [similarQuestions, setSimilarQuestions] = useState<Question[]>([]);
  const [formErrors, setFormErrors] = useState<Partial<NewQuestion>>({});
  const [questions, setQuestions] = useState<Question[]>([
  {
    id: '1',
    title: 'How to solve quadratic equations?',
    description:
    "I'm having trouble understanding the steps to solve quadratic equations using the quadratic formula. Could someone explain it in detail?",
    author: {
      name: 'John Doe',
      grade: 'S4'
    },
    subject: 'Mathematics',
    tags: ['algebra', 'equations'],
    timestamp: '2 hours ago',
    upvotes: 5,
    replies: 2,
    resolved: false
  },
  {
    id: '2',
    title: 'Difference between mitosis and meiosis',
    description:
    'Can someone explain the key differences between mitosis and meiosis cell division processes?',
    author: {
      name: 'Jane Smith',
      grade: 'S4'
    },
    subject: 'Biology',
    tags: ['cell division', 'genetics'],
    timestamp: '3 hours ago',
    upvotes: 8,
    replies: 3,
    resolved: true
  },
  {
    id: '3',
    title: 'Understanding chemical bonding',
    description:
    'What are the different types of chemical bonds and how do they form?',
    author: {
      name: 'Mike Wilson',
      grade: 'S4'
    },
    subject: 'Chemistry',
    tags: ['chemical bonds', 'atomic structure'],
    timestamp: '5 hours ago',
    upvotes: 6,
    replies: 4,
    resolved: false
  }]
  );
  const handleAskQuestion = () => {
    setIsAskingQuestion(true);
  };
  const handleCloseModal = () => {
    setIsAskingQuestion(false);
    setNewQuestion({
      title: '',
      description: '',
      subject: '',
      grade: '',
      tags: [],
      attachments: []
    });
    setFormErrors({});
  };
  const validateForm = () => {
    const errors: Partial<NewQuestion> = {};
    if (!newQuestion.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!newQuestion.description.trim()) {
      errors.description = 'Description is required';
    }
    if (!newQuestion.subject) {
      errors.subject = 'Subject is required';
    }
    if (!newQuestion.grade) {
      errors.grade = 'Grade is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      console.log('Submitting question:', newQuestion);
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setNewQuestion((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...newFiles]
      }));
    }
  };
  const removeAttachment = (index: number) => {
    setNewQuestion((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };
  const askQuestionButton =
  <button
    onClick={handleAskQuestion}
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
    
      <PlusCircleIcon className="h-5 w-5 mr-2" />
      Ask a Question
    </button>;

  const questionModal = isAskingQuestion &&
  <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        onClick={handleCloseModal} />
      
        <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
            onClick={handleCloseModal}
            className="text-gray-400 hover:text-gray-500">
            
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Ask a Question
              </h3>
              <form onSubmit={handleSubmitQuestion} className="mt-4 space-y-4">
                <div>
                  <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700">
                  
                    Title
                  </label>
                  <input
                  type="text"
                  id="title"
                  value={newQuestion.title}
                  onChange={(e) =>
                  setNewQuestion((prev) => ({
                    ...prev,
                    title: e.target.value
                  }))
                  }
                  className={`mt-1 block w-full rounded-md border ${formErrors.title ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                  placeholder="What's your question?" />
                
                  {formErrors.title &&
                <p className="mt-1 text-sm text-red-600">
                      {formErrors.title}
                    </p>
                }
                </div>
                <div>
                  <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700">
                  
                    Description
                  </label>
                  <textarea
                  id="description"
                  rows={4}
                  value={newQuestion.description}
                  onChange={(e) =>
                  setNewQuestion((prev) => ({
                    ...prev,
                    description: e.target.value
                  }))
                  }
                  className={`mt-1 block w-full rounded-md border ${formErrors.description ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                  placeholder="Provide more details about your question..." />
                
                  {formErrors.description &&
                <p className="mt-1 text-sm text-red-600">
                      {formErrors.description}
                    </p>
                }
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700">
                    
                      Subject
                    </label>
                    <select
                    id="subject"
                    value={newQuestion.subject}
                    onChange={(e) =>
                    setNewQuestion((prev) => ({
                      ...prev,
                      subject: e.target.value
                    }))
                    }
                    className={`mt-1 block w-full rounded-md border ${formErrors.subject ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}>
                    
                      <option value="">Select Subject</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                    </select>
                    {formErrors.subject &&
                  <p className="mt-1 text-sm text-red-600">
                        {formErrors.subject}
                      </p>
                  }
                  </div>
                  <div>
                    <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-gray-700">
                    
                      Grade
                    </label>
                    <select
                    id="grade"
                    value={newQuestion.grade}
                    onChange={(e) =>
                    setNewQuestion((prev) => ({
                      ...prev,
                      grade: e.target.value
                    }))
                    }
                    className={`mt-1 block w-full rounded-md border ${formErrors.grade ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}>
                    
                      <option value="">Select Grade</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                      <option value="S4">S4</option>
                    </select>
                    {formErrors.grade &&
                  <p className="mt-1 text-sm text-red-600">
                        {formErrors.grade}
                      </p>
                  }
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Attachments
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <PaperclipIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                        
                          <span>Upload a file</span>
                          <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange} />
                        
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                  {newQuestion.attachments.length > 0 &&
                <ul className="mt-4 space-y-2">
                      {newQuestion.attachments.map((file, index) =>
                  <li
                    key={index}
                    className="flex items-center justify-between py-1">
                    
                          <span className="text-sm text-gray-500">
                            {file.name}
                          </span>
                          <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="text-red-500 hover:text-red-700">
                      
                            <XIcon className="h-4 w-4" />
                          </button>
                        </li>
                  )}
                    </ul>
                }
                </div>
                {similarQuestions.length > 0 &&
              <div className="mt-4 p-4 bg-yellow-50 rounded-md">
                    <div className="flex">
                      <AlertCircleIcon className="h-5 w-5 text-yellow-400" />
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Similar questions found
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <ul className="list-disc pl-5 space-y-1">
                            {similarQuestions.map((q) =>
                        <li key={q.id}>
                                <a href="#" className="hover:text-yellow-800">
                                  {q.title}
                                </a>
                              </li>
                        )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              }
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                  
                    Post Question
                  </button>
                  <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                  
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;

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
              <h1 className="text-2xl font-bold text-gray-900">Q&A Forum</h1>
              <p className="mt-1 text-gray-600">
                Ask questions and learn from your peers
              </p>
            </div>
          </div>
          {askQuestionButton}
        </div>
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
              
            </div>
            <div className="flex gap-2">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
                
                <option value="">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
              </select>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="block w-32 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
                
                <option value="">All Grades</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="S4">S4</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
                
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="unanswered">Unanswered</option>
              </select>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {questions.map((question) =>
          <div
            key={question.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:border-indigo-500 transition-colors">
            
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {question.author.avatar ?
                    <img
                      src={question.author.avatar}
                      alt={question.author.name}
                      className="h-10 w-10 rounded-full" /> :


                    <UserIcon className="h-5 w-5 text-gray-500" />
                    }
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          {question.author.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {question.author.grade}
                        </span>
                        {question.resolved &&
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircleIcon className="h-3 w-3 mr-1" />
                            Resolved
                          </span>
                      }
                      </div>
                      <span className="text-sm text-gray-500">
                        {question.timestamp}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {question.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {question.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {question.subject}
                    </span>
                    {question.tags.map((tag) =>
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    
                        {tag}
                      </span>
                  )}
                  </div>
                </div>
                <div className="ml-4 flex flex-col items-end gap-2">
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                      <MessageSquareIcon className="h-5 w-5 mr-1" />
                      <span className="text-sm">{question.replies}</span>
                    </button>
                    <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                      <svg
                      className="h-5 w-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7" />
                      
                      </svg>
                      <span className="text-sm">{question.upvotes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {questionModal}
    </div>);

};
export default QAForum;