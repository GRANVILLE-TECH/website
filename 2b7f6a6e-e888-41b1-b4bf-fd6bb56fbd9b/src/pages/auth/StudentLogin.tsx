import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
interface StudentLoginProps {
  onLogin: (role: string) => void;
}
const StudentLogin: React.FC<StudentLoginProps> = ({ onLogin }) => {
  const handleLogin = (data: any) => {
    console.log('Student login data:', data);
    onLogin('student');
  };
  return (
    <AuthLayout
      title="Student Login"
      subtitle="Continue your learning journey"
      type="login"
      role="student">
      
      <LoginForm onLogin={handleLogin} role="student" />
    </AuthLayout>);

};
export default StudentLogin;