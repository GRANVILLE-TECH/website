import React from 'react';
import { BookOpenIcon } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <BookOpenIcon className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-lg font-semibold text-gray-900">
              EduConnect
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500">
              &copy; 2023 EduConnect. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
              Students
            </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Live Classes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Quizzes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
              Teachers
            </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Create Content
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Schedule Classes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Earnings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
              Support
            </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
              Legal
            </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900">
                  
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>);

};
export default Footer;