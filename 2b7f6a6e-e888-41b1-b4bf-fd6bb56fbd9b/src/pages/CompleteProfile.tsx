import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import ProfileCompletion from '../components/auth/ProfileCompletion';
const CompleteProfile: React.FC = () => {
  const handleProfileComplete = (data: any) => {
    console.log('Profile completion data:', data);
    // Handle profile completion logic here
  };
  return (
    <AuthLayout
      title="Complete Your Profile"
      subtitle="Help us personalize your learning experience"
      type="signup">
      
      <ProfileCompletion onComplete={handleProfileComplete} />
    </AuthLayout>);

};
export default CompleteProfile;