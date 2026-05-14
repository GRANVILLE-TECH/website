import React from 'react';
import { BookOpenIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  type: 'login' | 'signup';
  role: 'student' | 'teacher' | 'admin';
}
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  type,
  role
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2">
          <BookOpenIcon className="h-12 w-12 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-900">EduConnect</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link
            to="/student/login"
            className={`px-4 py-2 rounded-md text-sm font-medium ${role === 'student' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            
            Student
          </Link>
          <Link
            to="/teacher/login"
            className={`px-4 py-2 rounded-md text-sm font-medium ${role === 'teacher' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            
            Teacher
          </Link>
          <Link
            to="/admin/login"
            className={`px-4 py-2 rounded-md text-sm font-medium ${role === 'admin' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            
            Admin
          </Link>
        </div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {type === 'login' ?
            "Don't have an account? " :
            'Already registered? '}
            <Link
              to={`/${role}${type === 'login' ? '/signup' : '/login'}`}
              className="font-medium text-indigo-600 hover:text-indigo-500">
              
              {type === 'login' ? 'Sign up' : 'Log in'}
            </Link>
          </p>
        </div>
      </div>
    </div>);

};
export default AuthLayout;