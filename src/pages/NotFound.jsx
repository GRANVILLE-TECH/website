import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white/80">
          Intelligence Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-12">
          The path you're searching for has either evolved, migrated, or never existed in our database.
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-amber-400 transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
