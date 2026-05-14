import React, { useState } from 'react';
import { MailIcon, PhoneIcon, KeyIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpenIcon } from 'lucide-react';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', phone: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
    navigate('/aletu/student');
  };

  return (
    <div className="space-y-6">
      <div className="flex rounded-md shadow-sm border border-gray-200 overflow-hidden">
        {['email', 'phone'].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMethod(m)}
            className={`w-1/2 py-2.5 text-sm font-medium transition-colors ${method === m ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:text-gray-700'}`}
          >
            <span className="capitalize">{m}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {method === 'email' ? (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email" id="email" required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="tel" id="phone" required
                placeholder="+256 XXX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <KeyIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'} id="password" required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
              {showPassword ? <EyeOffIcon className="h-4 w-4 text-gray-400" /> : <EyeIcon className="h-4 w-4 text-gray-400" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" />
            Remember me
          </label>
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Forgot password?</a>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors"
        >
          Sign in
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/aletu/student/signup" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

const StudentLogin = ({ onLogin }) => {
  const handleLogin = (data) => {
    if (onLogin) onLogin('student');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/aletu" className="flex items-center justify-center gap-2 mb-2">
          <BookOpenIcon className="h-10 w-10 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-900">ALETU</span>
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Student Login</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Continue your learning journey</p>

        {/* Demo note */}
        <div className="mt-3 flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Demo: Enter any email & password to explore
          </span>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-xl sm:px-10">
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
