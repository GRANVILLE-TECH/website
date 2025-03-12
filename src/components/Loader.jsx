import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Main spinning ring */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-t-4 border-r-4 border-gray-300 rounded-full animate-spin" />
          <div className="absolute inset-4 border-b-4 border-l-4 border-gray-400 rounded-full animate-spin-slow" />
          <div className="absolute inset-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300/20 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Text section */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="text-gray-300 text-xl font-light tracking-widest">
            Granville-Tech
          </div>
          <div className="text-gray-400 text-sm tracking-wider">
            {`LOADING${dots}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;