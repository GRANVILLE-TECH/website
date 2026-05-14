import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';
const Login: React.FC = () => {
  const handleLogin = (data: any) => {
    console.log('Login data:', data);
    // Handle login logic here
  };
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Access your learning journey"
      type="login">
      
      <LoginForm onLogin={handleLogin} />
    </AuthLayout>);

};
export default Login;