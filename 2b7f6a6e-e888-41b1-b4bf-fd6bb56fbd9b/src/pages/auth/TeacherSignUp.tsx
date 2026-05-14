import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import TeacherSignUpFlow from '../../components/auth/TeacherSignUpFlow';
const TeacherSignUp: React.FC = () => {
  const handleSignUp = async (data: any) => {
    console.log('Teacher signup data:', data);
    // Handle teacher signup logic here
  };
  return (
    <AuthLayout
      title="Join Our Teaching Community"
      subtitle="Share your expertise and help students excel"
      type="signup"
      role="teacher">
      
      <TeacherSignUpFlow onSubmit={handleSignUp} />
    </AuthLayout>);

};
export default TeacherSignUp;