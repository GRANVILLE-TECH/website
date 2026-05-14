import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import OTPVerification from '../components/auth/OTPVerification';
const Verification: React.FC = () => {
  const handleVerify = (otp: string) => {
    console.log('Verifying OTP:', otp);
    // Handle verification logic here
  };
  const handleResend = () => {
    console.log('Resending verification code');
    // Handle resend logic here
  };
  return (
    <AuthLayout
      title="Verify Your Account"
      subtitle="Enter the verification code to continue"
      type="signup">
      
      <OTPVerification
        method="email"
        contact="j***@example.com"
        onVerify={handleVerify}
        onResend={handleResend} />
      
    </AuthLayout>);

};
export default Verification;