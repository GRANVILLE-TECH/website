import React, { useState } from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import DemoBanner from './components/DemoBanner';
import LandingPage from './pages/LandingPage';
import StudentLogin from './pages/auth/StudentLogin';
import StudentSignUp from './pages/auth/StudentSignUp';
import StudentDashboard from './pages/student/Dashboard';
import LiveClasses from './pages/student/LiveClasses';
import Lessons from './pages/student/Lessons';
import MasteryModules from './pages/student/MasteryModules';
import Quizzes from './pages/student/Quizzes';
import QAForum from './pages/student/QAForum';
import Resources from './pages/student/Resources';
import OfflineMode from './pages/student/OfflineMode';

// Thin wrapper that provides layout above ALETU's content
const StudentLayout = ({ children, onLogout }) => (
  <div>
    {children}
  </div>
);

const AletuApp = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo banner always visible at top */}
      <DemoBanner />

      {/* Offset content below fixed banner */}
      <div className="pt-10">
        <Routes>
          {/* Landing */}
          <Route index element={<LandingPage />} />

          {/* Auth */}
          <Route path="student/login" element={<StudentLogin onLogin={handleLogin} />} />
          <Route path="student/signup" element={<StudentSignUp />} />

          {/* Student pages */}
          <Route
            path="student"
            element={userRole === 'student' ? <StudentDashboard /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/live-classes"
            element={userRole === 'student' ? <LiveClasses /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/lessons"
            element={userRole === 'student' ? <Lessons /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/mastery"
            element={userRole === 'student' ? <MasteryModules /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/quizzes"
            element={userRole === 'student' ? <Quizzes /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/qa-forum"
            element={userRole === 'student' ? <QAForum /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/resources"
            element={userRole === 'student' ? <Resources /> : <Navigate to="/aletu/student/login" replace />}
          />
          <Route
            path="student/offline"
            element={userRole === 'student' ? <OfflineMode /> : <Navigate to="/aletu/student/login" replace />}
          />

          {/* Catch-all: send to landing */}
          <Route path="*" element={<Navigate to="/aletu" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AletuApp;
