import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  KeyIcon,
  BookOpenIcon,
  FileTextIcon,
  VideoIcon,
  CheckIcon,
  UploadIcon,
  EyeIcon,
  EyeOffIcon,
  AlertCircleIcon } from
'lucide-react';
interface TeacherSignUpFlowProps {
  onSubmit: (data: any) => void;
}
const SUBJECTS = [
{
  id: 'mathematics',
  name: 'Mathematics',
  levels: ['O-Level', 'A-Level']
},
{
  id: 'physics',
  name: 'Physics',
  levels: ['O-Level', 'A-Level']
},
{
  id: 'chemistry',
  name: 'Chemistry',
  levels: ['O-Level', 'A-Level']
},
{
  id: 'biology',
  name: 'Biology',
  levels: ['O-Level', 'A-Level']
},
{
  id: 'english',
  name: 'English',
  levels: ['O-Level', 'A-Level']
},
{
  id: 'history',
  name: 'History',
  levels: ['O-Level', 'A-Level']
},
{
  id: 'geography',
  name: 'Geography',
  levels: ['O-Level', 'A-Level']
}];

const TeacherSignUpFlow: React.FC<TeacherSignUpFlowProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: '',
    email: '',
    phone: '',
    password: '',
    bio: '',
    profilePhoto: null as File | null,
    // Credentials
    governmentId: null as File | null,
    teachingCertificate: null as File | null,
    additionalDocuments: [] as File[],
    // Subjects & Specialization
    subjects: [] as {
      id: string;
      levels: string[];
    }[],
    // Demo Content
    demoVideo: null as File | null,
    sampleLessonPlan: null as File | null,
    // Agreement
    agreedToTerms: false
  });
  const totalSteps = 5;
  const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  field: string) =>
  {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [field]: file
      }));
    }
  };
  const handleSubjectToggle = (subjectId: string) => {
    setFormData((prev) => {
      const exists = prev.subjects.find((s) => s.id === subjectId);
      if (exists) {
        return {
          ...prev,
          subjects: prev.subjects.filter((s) => s.id !== subjectId)
        };
      }
      return {
        ...prev,
        subjects: [
        ...prev.subjects,
        {
          id: subjectId,
          levels: []
        }]

      };
    });
  };
  const handleLevelToggle = (subjectId: string, level: string) => {
    setFormData((prev) => {
      const updatedSubjects = prev.subjects.map((subject) => {
        if (subject.id === subjectId) {
          const levels = subject.levels.includes(level) ?
          subject.levels.filter((l) => l !== level) :
          [...subject.levels, level];
          return {
            ...subject,
            levels
          };
        }
        return subject;
      });
      return {
        ...prev,
        subjects: updatedSubjects
      };
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      await onSubmit(formData);
      navigate('/verify');
    }
  };
  const renderProgressBar = () =>
  <div className="mb-8">
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4, 5].map((number) =>
      <div key={number} className="flex items-center flex-1">
            <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= number ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
          
              {step > number ? <CheckIcon className="h-5 w-5" /> : number}
            </div>
            {number < 5 &&
        <div
          className={`flex-1 h-1 mx-2 ${step > number ? 'bg-indigo-600' : 'bg-gray-200'}`} />

        }
          </div>
      )}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">Basic Info</span>
        <span className="text-xs text-gray-500">Credentials</span>
        <span className="text-xs text-gray-500">Subjects</span>
        <span className="text-xs text-gray-500">Demo</span>
        <span className="text-xs text-gray-500">Agreement</span>
      </div>
    </div>;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700">
                
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value
                  })
                  } />
                
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                  } />
                
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700">
                
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="+256 XXX XXX XXX"
                  value={formData.phone}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                  } />
                
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  className="block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.password}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value
                  })
                  } />
                
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}>
                  
                  {showPassword ?
                  <EyeOffIcon className="h-5 w-5 text-gray-400" /> :

                  <EyeIcon className="h-5 w-5 text-gray-400" />
                  }
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700">
                
                Brief Bio (Optional)
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  rows={3}
                  className="block w-full sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Share your teaching philosophy and experience..."
                  value={formData.bio}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    bio: e.target.value
                  })
                  } />
                
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Photo (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="profile-photo"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      
                      <span>Upload a file</span>
                      <input
                        id="profile-photo"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'profilePhoto')} />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>);

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <AlertCircleIcon className="h-5 w-5 text-yellow-400" />
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Please ensure all documents are clear and valid. This helps
                    us maintain high teaching standards.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Government-issued ID
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FileTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="government-id"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      
                      <span>Upload ID</span>
                      <input
                        id="government-id"
                        type="file"
                        className="sr-only"
                        required
                        onChange={(e) => handleFileChange(e, 'governmentId')} />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Teaching Certificate
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FileTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="teaching-certificate"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      
                      <span>Upload Certificate</span>
                      <input
                        id="teaching-certificate"
                        type="file"
                        className="sr-only"
                        required
                        onChange={(e) =>
                        handleFileChange(e, 'teachingCertificate')
                        } />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Documents (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FileTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="additional-docs"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      
                      <span>Upload Documents</span>
                      <input
                        id="additional-docs"
                        type="file"
                        multiple
                        className="sr-only"
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          setFormData((prev) => ({
                            ...prev,
                            additionalDocuments: files
                          }));
                        }} />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB each
                  </p>
                </div>
              </div>
            </div>
          </div>);

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select subjects you're qualified to teach
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SUBJECTS.map((subject) =>
                <div
                  key={subject.id}
                  className={`p-4 rounded-lg border-2 ${formData.subjects.find((s) => s.id === subject.id) ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <BookOpenIcon
                        className={`h-5 w-5 ${formData.subjects.find((s) => s.id === subject.id) ? 'text-indigo-600' : 'text-gray-400'}`} />
                      
                        <span
                        className={`ml-2 font-medium ${formData.subjects.find((s) => s.id === subject.id) ? 'text-indigo-600' : 'text-gray-900'}`}>
                        
                          {subject.name}
                        </span>
                      </div>
                      <button
                      type="button"
                      onClick={() => handleSubjectToggle(subject.id)}
                      className={`px-3 py-1 text-sm rounded-full ${formData.subjects.find((s) => s.id === subject.id) ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      
                        {formData.subjects.find((s) => s.id === subject.id) ?
                      'Selected' :
                      'Select'}
                      </button>
                    </div>
                    {formData.subjects.find((s) => s.id === subject.id) &&
                  <div className="mt-2 flex flex-wrap gap-2">
                        {subject.levels.map((level) =>
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleLevelToggle(subject.id, level)}
                      className={`px-3 py-1 text-sm rounded-full border ${formData.subjects.find((s) => s.id === subject.id)?.levels.includes(level) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-600'}`}>
                      
                            {level}
                          </button>
                    )}
                      </div>
                  }
                  </div>
                )}
              </div>
            </div>
          </div>);

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Demo Video (Optional but Recommended)
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Upload a short video introducing yourself and demonstrating your
                teaching style.
              </p>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <VideoIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="demo-video"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      
                      <span>Upload a video</span>
                      <input
                        id="demo-video"
                        type="file"
                        className="sr-only"
                        accept="video/*"
                        onChange={(e) => handleFileChange(e, 'demoVideo')} />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    MP4, MOV up to 100MB (2-3 minutes)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sample Lesson Plan (Optional)
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Share a sample lesson plan to showcase your teaching approach.
              </p>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FileTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="lesson-plan"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      
                      <span>Upload a file</span>
                      <input
                        id="lesson-plan"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                        handleFileChange(e, 'sampleLessonPlan')
                        } />
                      
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>);

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Terms and Conditions
              </h3>
              <div className="h-48 overflow-y-auto bg-white p-4 rounded border border-gray-200 mb-4">
                <div className="prose prose-sm">
                  <h4>Teacher Agreement</h4>
                  <p>By accepting these terms, you agree to:</p>
                  <ul>
                    <li>Maintain professional conduct at all times</li>
                    <li>Provide accurate and up-to-date content</li>
                    <li>Respond to student queries in a timely manner</li>
                    <li>Respect student privacy and confidentiality</li>
                    <li>
                      Comply with platform guidelines for content creation
                    </li>
                  </ul>
                  <h4>Quality Standards</h4>
                  <p>
                    You commit to maintaining high educational standards by:
                  </p>
                  <ul>
                    <li>Creating engaging and accurate educational content</li>
                    <li>Following the approved curriculum guidelines</li>
                    <li>
                      Participating in teacher training sessions when required
                    </li>
                    <li>Maintaining a minimum satisfaction rating</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    agreedToTerms: e.target.checked
                  })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900">
                  
                  I agree to the terms and conditions and quality standards
                </label>
              </div>
            </div>
          </div>);

      default:
        return null;
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      {renderProgressBar()}
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStep()}
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
            
            {step === totalSteps ? 'Submit Application' : 'Continue'}
          </button>
        </div>
      </form>
    </div>);

};
export default TeacherSignUpFlow;