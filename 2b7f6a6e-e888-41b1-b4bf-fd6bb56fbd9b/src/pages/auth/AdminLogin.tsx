import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
interface AdminLoginProps {
  onLogin: (role: string) => void;
}
const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const handleLogin = (data: any) => {
    console.log('Admin login data:', data);
    onLogin('admin');
  };
  return (
    <AuthLayout
      title="Admin Login"
      subtitle="Manage your educational platform"
      type="login"
      role="admin">
      
      <LoginForm onLogin={handleLogin} role="admin" />
    </AuthLayout>);

};
export default AdminLogin;