import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate } from
'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentLogin from './pages/auth/StudentLogin';
import TeacherLogin from './pages/auth/TeacherLogin';
import AdminLogin from './pages/auth/AdminLogin';
import StudentSignUp from './pages/auth/StudentSignUp';
import TeacherSignUp from './pages/auth/TeacherSignUp';
import StudentDashboard from './pages/student/Dashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Verification from './pages/Verification';
import CompleteProfile from './pages/CompleteProfile';
import MainLayout from './layouts/MainLayout';
import StudentLiveClasses from './pages/student/LiveClasses';
import Lessons from './pages/student/Lessons';
import LessonDetail from './components/lessons/LessonDetail';
import MasteryModules from './pages/student/MasteryModules';
import Quizzes from './pages/student/Quizzes';
import QAForum from './pages/student/QAForum';
import Resources from './pages/student/Resources';
import OfflineMode from './pages/student/OfflineMode';
import TeacherSchedule from './pages/teacher/Schedule';
export function App() {
  const [userRole, setUserRole] = useState<string | null>(() => {
    return localStorage.getItem('userRole');
  });
  const handleLogin = (role: string) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };
  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('userRole');
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/student/login"
          element={<StudentLogin onLogin={handleLogin} />} />
        
        <Route
          path="/teacher/login"
          element={<TeacherLogin onLogin={handleLogin} />} />
        
        <Route
          path="/admin/login"
          element={<AdminLogin onLogin={handleLogin} />} />
        
        <Route path="/student/signup" element={<StudentSignUp />} />
        <Route path="/teacher/signup" element={<TeacherSignUp />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route
          path="/student/*"
          element={
          userRole === 'student' ?
          <MainLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="/" element={<StudentDashboard />} />
                  <Route
                path="/live-classes"
                element={<StudentLiveClasses />} />
              
                  <Route path="/lessons" element={<Lessons />} />
                  <Route path="/lessons/:id" element={<LessonDetail />} />
                  <Route path="/mastery" element={<MasteryModules />} />
                  <Route path="/quizzes" element={<Quizzes />} />
                  <Route path="/qa-forum" element={<QAForum />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/offline" element={<OfflineMode />} />
                </Routes>
              </MainLayout> :

          <Navigate to="/student/login" replace />

          } />
        
        <Route
          path="/teacher/*"
          element={
          userRole === 'teacher' ?
          <MainLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="/" element={<TeacherDashboard />} />
                  <Route path="/schedule" element={<TeacherSchedule />} />
                </Routes>
              </MainLayout> :

          <Navigate to="/teacher/login" replace />

          } />
        
        <Route
          path="/admin/*"
          element={
          userRole === 'admin' ?
          <MainLayout onLogout={handleLogout}>
                <AdminDashboard />
              </MainLayout> :

          <Navigate to="/admin/login" replace />

          } />
        
      </Routes>
    </Router>);

}