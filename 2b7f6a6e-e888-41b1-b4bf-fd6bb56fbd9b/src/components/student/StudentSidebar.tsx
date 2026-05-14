import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils';
import {
  LayoutDashboardIcon,
  VideoIcon,
  BookOpenIcon,
  ClipboardListIcon,
  MessageSquareIcon,
  FileTextIcon,
  DownloadIcon,
  UserIcon,
  SettingsIcon,
  ChevronLeftIcon,
  BellIcon,
  MenuIcon,
  TrophyIcon } from
'lucide-react';
interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  badge?: number;
  isCollapsed: boolean;
  liveStatus?: 'live' | 'upcoming' | 'none';
  nextSession?: string;
  participantCount?: number;
}
const NavItem: React.FC<NavItemProps> = ({
  to,
  icon: Icon,
  label,
  isActive,
  badge,
  isCollapsed,
  liveStatus = 'none',
  nextSession,
  participantCount
}) =>
<Link
  to={to}
  className={`flex items-center px-3 py-2 rounded-lg transition-colors relative group 
      ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
  aria-label={`${label}${liveStatus === 'live' ? ' - Live Now' : ''}`}>
  
    <div className="relative">
      <Icon
      className={`h-5 w-5 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
    
      {liveStatus === 'live' &&
    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full">
          <span className="absolute inset-0 h-full w-full rounded-full bg-red-400 animate-ping opacity-75"></span>
        </span>
    }
    </div>
    {!isCollapsed &&
  <>
        <span className="ml-3 text-sm font-medium">{label}</span>
        {liveStatus === 'live' &&
    <span className="ml-auto flex items-center gap-1.5">
            <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-600 rounded-full animate-pulse">
              Live Now • {participantCount || 0}
            </span>
          </span>
    }
        {liveStatus === 'upcoming' && nextSession &&
    <span className="ml-auto flex items-center gap-1.5">
            <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-600 rounded-full">
              In {nextSession}
            </span>
          </span>
    }
        {badge && liveStatus === 'none' &&
    <span className="ml-auto bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {badge}
          </span>
    }
      </>
  }
    {isCollapsed &&
  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity min-w-[180px] z-50">
        <div className="font-medium mb-1">{label}</div>
        {liveStatus === 'live' &&
    <div className="text-red-300 flex items-center gap-1.5">
            <span className="h-2 w-2 bg-red-400 rounded-full"></span>
            Live Now • {participantCount} students
          </div>
    }
        {liveStatus === 'upcoming' && nextSession &&
    <div className="text-green-300">Next session in {nextSession}</div>
    }
      </div>
  }
  </Link>;

const navigation = [
{
  to: '/student',
  icon: LayoutDashboardIcon,
  label: 'Dashboard'
},
{
  to: '/student/live-classes',
  icon: VideoIcon,
  label: 'Live Classes',
  badge: 2,
  liveStatus: 'live' as const,
  participantCount: 24,
  nextSession: '10 min'
},
{
  to: '/student/lessons',
  icon: BookOpenIcon,
  label: 'Lessons'
},
{
  to: '/student/mastery',
  icon: TrophyIcon,
  label: 'Mastery Learning',
  badge: 3
},
{
  to: '/student/quizzes',
  icon: ClipboardListIcon,
  label: 'Quizzes',
  badge: 5
},
{
  to: '/student/qa-forum',
  icon: MessageSquareIcon,
  label: 'Q&A Forum',
  badge: 3
},
{
  to: '/student/resources',
  icon: FileTextIcon,
  label: 'Resources'
},
{
  to: '/student/offline',
  icon: DownloadIcon,
  label: 'Offline Mode'
}];

const bottomNavigation = [
{
  to: '/student/settings',
  icon: SettingsIcon,
  label: 'Settings'
},
{
  to: '/student/profile',
  icon: UserIcon,
  label: 'Profile'
}];

const StudentSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md">
        
        <MenuIcon className="h-6 w-6 text-gray-600" />
      </button>
      <aside
        className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 transition-all duration-300 z-40 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:static lg:flex lg:flex-col
          ${isCollapsed ? 'w-[4.5rem]' : 'w-64'}`}>
        
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed &&
          <div className="flex items-center gap-2">
              <BookOpenIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">
                EduConnect
              </span>
            </div>
          }
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 hidden lg:block">
            
            <ChevronLeftIcon
              className={`h-5 w-5 text-gray-500 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
            
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navigation.map((item) =>
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to}
            badge={item.badge}
            isCollapsed={isCollapsed}
            liveStatus={item.liveStatus}
            nextSession={item.nextSession}
            participantCount={item.participantCount} />

          )}
        </nav>
        <div className="p-4 border-t border-gray-200 space-y-1">
          {bottomNavigation.map((item) =>
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to}
            isCollapsed={isCollapsed} />

          )}
        </div>
        {!isCollapsed &&
        <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">S4 Student</p>
              </div>
            </div>
          </div>
        }
      </aside>
      {isMobileMenuOpen &&
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 lg:hidden"
        onClick={() => setIsMobileMenuOpen(false)} />

      }
    </>);

};
export default StudentSidebar;