import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  PhoneIcon,
  UserIcon } from
'lucide-react';
interface SignUpFormProps {
  onSignUp: (data: any) => void;
}
const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    school: '',
    grade: '',
    subjects: []
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSignUp(formData);
    navigate('/verify');
  };
  return (
    <div className="space-y-6">
      <div className="flex rounded-md shadow-sm">
        <button
          type="button"
          onClick={() => setMethod('email')}
          className={`relative w-1/2 py-2 text-sm font-medium rounded-l-md focus:outline-none ${method === 'email' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:text-gray-700'}`}>
          
          <MailIcon className="h-5 w-5 mx-auto" />
          <span className="mt-1 block">Email</span>
        </button>
        <button
          type="button"
          onClick={() => setMethod('phone')}
          className={`relative w-1/2 py-2 text-sm font-medium rounded-r-md focus:outline-none ${method === 'phone' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:text-gray-700'}`}>
          
          <PhoneIcon className="h-5 w-5 mx-auto" />
          <span className="mt-1 block">Phone</span>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            
            Full Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              required
              className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
              } />
            
          </div>
        </div>
        {method === 'email' ?
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
          </div> :

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
        }
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">
            
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              className="block w-full pr-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
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
            htmlFor="school"
            className="block text-sm font-medium text-gray-700">
            
            School Name (Optional)
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="school"
              className="block w-full sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your School"
              value={formData.school}
              onChange={(e) =>
              setFormData({
                ...formData,
                school: e.target.value
              })
              } />
            
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
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={formData.grade}
            onChange={(e) =>
            setFormData({
              ...formData,
              grade: e.target.value
            })
            }>
            
            <option value="">Select Grade</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
            <option value="S4">S4</option>
            <option value="S5">S5</option>
            <option value="S6">S6</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            
            Create Account
          </button>
        </div>
      </form>
    </div>);

};
export default SignUpForm;