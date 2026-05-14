import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import SignUpForm from '../../components/auth/SignUpForm';
const StudentSignUp: React.FC = () => {
  const handleSignUp = (data: any) => {
    console.log('Student signup data:', data);
    // Handle student signup logic
  };
  return (
    <AuthLayout
      title="Create Student Account"
      subtitle="Start your learning journey today"
      type="signup"
      role="student">
      
      <SignUpForm
        onSignUp={handleSignUp}
        role="student"
        extraFields={[
        {
          name: 'grade',
          label: 'Grade/Class',
          type: 'select',
          options: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6']
        },
        {
          name: 'school',
          label: 'School Name (Optional)',
          type: 'text'
        }]
        } />
      
    </AuthLayout>);

};
export default StudentSignUp;