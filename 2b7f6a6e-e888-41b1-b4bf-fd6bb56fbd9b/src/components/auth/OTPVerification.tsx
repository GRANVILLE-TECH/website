import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, RefreshCwIcon } from 'lucide-react';
interface OTPVerificationProps {
  method: 'email' | 'phone';
  contact: string;
  onVerify: (otp: string) => void;
  onResend: () => void;
}
const OTPVerification: React.FC<OTPVerificationProps> = ({
  method,
  contact,
  onVerify,
  onResend
}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(countdown as NodeJS.Timeout);
  }, [timer]);
  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all digits');
      return;
    }
    onVerify(otpString);
  };
  const handleResend = () => {
    setTimer(30);
    onResend();
  };
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
          <CheckIcon className="h-8 w-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Verify your {method}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          We sent a verification code to{' '}
          <span className="font-medium">{contact}</span>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) =>
          <input
            key={index}
            ref={(ref) => inputRefs.current[index] = ref}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-2xl font-semibold border-2 rounded-lg focus:border-indigo-500 focus:ring-indigo-500" />

          )}
        </div>
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          
          Verify
        </button>
        <div className="text-center">
          <button
            type="button"
            onClick={handleResend}
            disabled={timer > 0}
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 disabled:text-gray-400">
            
            <RefreshCwIcon className="h-4 w-4 mr-1" />
            {timer > 0 ? `Resend code in ${timer}s` : 'Resend code'}
          </button>
        </div>
      </form>
    </div>);

};
export default OTPVerification;