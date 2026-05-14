import React from 'react';
import { LockIcon, BellIcon, ArrowRightIcon, XIcon, UsersIcon, ShieldIcon, BookOpenIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ComingSoonModal({ role = 'teacher', onClose }) {
  const navigate = useNavigate();

  const roleConfig = {
    teacher: {
      icon: UsersIcon,
      title: 'Teacher Portal',
      color: 'text-green-600',
      bg: 'bg-green-50',
      features: [
        'Create & schedule live classes',
        'Build interactive assessments',
        'Track student progress',
        'Earn from your expertise',
      ],
    },
    admin: {
      icon: ShieldIcon,
      title: 'Admin Dashboard',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      features: [
        'Content moderation & approval',
        'User management',
        'Platform analytics',
        'Payment processing',
      ],
    },
  };

  const config = roleConfig[role] || roleConfig.teacher;
  const Icon = config.icon;

  const handleGetNotified = () => {
    onClose();
    window.location.href = '/#newsletter';
  };

  const handleTryStudent = () => {
    onClose();
    navigate('/student/login');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XIcon className="h-5 w-5" />
        </button>

        {/* Lock badge */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 mx-auto mb-6">
          <LockIcon className="h-7 w-7 text-indigo-600" />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">
          Coming in the Full Release
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          The <span className="font-semibold text-indigo-600">{config.title}</span> is not yet available in this demo.
        </p>

        {/* Feature preview */}
        <div className={`${config.bg} rounded-xl p-4 mb-6`}>
          <div className={`flex items-center gap-2 mb-3 ${config.color} font-semibold text-sm`}>
            <Icon className="h-4 w-4" />
            What's coming in {config.title}:
          </div>
          <ul className="space-y-2">
            {config.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <div className={`w-1.5 h-1.5 rounded-full ${config.color.replace('text-', 'bg-')}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGetNotified}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
          >
            <BellIcon className="h-4 w-4" />
            Get Notified for Full Release
          </button>
          <button
            onClick={handleTryStudent}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors text-sm"
          >
            <BookOpenIcon className="h-4 w-4" />
            Continue as Student
            <ArrowRightIcon className="h-3 w-3 ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}
