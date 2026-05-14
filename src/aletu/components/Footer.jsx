import React from 'react';
import { BookOpenIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <BookOpenIcon className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-semibold text-gray-900">ALETU</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500">
              © {new Date().getFullYear()} ALETU by Granville-Tech. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">Students</h3>
            <ul className="mt-2 space-y-1">
              {['Courses', 'Live Classes', 'Quizzes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">Teachers</h3>
            <ul className="mt-2 space-y-1">
              {['Create Content', 'Schedule Classes', 'Earnings'].map((item) => (
                <li key={item}>
                  <span className="text-xs text-gray-400 cursor-default">{item} (Coming Soon)</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">Support</h3>
            <ul className="mt-2 space-y-1">
              {['Help Center', 'Contact Us', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">Legal</h3>
            <ul className="mt-2 space-y-1">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-gray-500 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
