import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignUpForm from '../components/auth/SignUpForm';
const SignUp: React.FC = () => {
  const handleSignUp = (data: any) => {
    console.log('Sign up data:', data);
    // Handle sign up logic here
  };
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your learning journey today"
      type="signup">
      
      <SignUpForm onSignUp={handleSignUp} />
    </AuthLayout>);

};
export default SignUp;