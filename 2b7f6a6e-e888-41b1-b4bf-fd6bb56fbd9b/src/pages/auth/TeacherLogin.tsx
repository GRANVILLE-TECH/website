import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
interface TeacherLoginProps {
  onLogin: (role: string) => void;
}
const TeacherLogin: React.FC<TeacherLoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleLogin = (data: any) => {
    console.log('Teacher login data:', data);
    onLogin('teacher');
    navigate('/teacher');
  };
  return (
    <AuthLayout
      title="Teacher Login"
      subtitle="Access your teaching dashboard"
      type="login"
      role="teacher">
      
      <LoginForm onLogin={handleLogin} role="teacher" />
    </AuthLayout>);

};
export default TeacherLogin;