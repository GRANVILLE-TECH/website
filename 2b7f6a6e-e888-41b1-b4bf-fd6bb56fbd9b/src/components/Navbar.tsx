import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpenIcon, MenuIcon, XIcon, LogOutIcon } from 'lucide-react';
interface NavbarProps {
  onLogout?: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate('/');
    }
  };
  const isLoggedIn = Boolean(onLogout);
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpenIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                EduConnect
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {isLoggedIn ?
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              
                <LogOutIcon className="h-4 w-4 mr-2" />
                Log Out
              </button> :

            <>
                <Link
                to="/student"
                className={`px-3 py-2 text-sm font-medium ${isActive('/student') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                
                  Student
                </Link>
                <Link
                to="/teacher"
                className={`px-3 py-2 text-sm font-medium ${isActive('/teacher') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                
                  Teacher
                </Link>
                <Link
                to="/admin"
                className={`px-3 py-2 text-sm font-medium ${isActive('/admin') ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                
                  Admin
                </Link>
              </>
            }
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              
              {isMenuOpen ?
              <XIcon className="block h-6 w-6" /> :

              <MenuIcon className="block h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen &&
      <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
            to="/student"
            className={`block px-3 py-2 text-base font-medium ${isActive('/student') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
            
              Student
            </Link>
            <Link
            to="/teacher"
            className={`block px-3 py-2 text-base font-medium ${isActive('/teacher') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
            
              Teacher
            </Link>
            <Link
            to="/admin"
            className={`block px-3 py-2 text-base font-medium ${isActive('/admin') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
            
              Admin
            </Link>
            <Link
            to={getLoginLink()}
            className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-gray-50">
            
              Log In
            </Link>
          </div>
        </div>
      }
    </nav>);

};
export default Navbar;