import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Importing Lucide's Menu and X icons
import logo from "../assets/Logo.svg"; // Import your logo here

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update the document title based on the current hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#home') {
        document.title = 'Home - Greenville-tech';
      } else if (hash === '#about') {
        document.title = 'About - Greenville-Tech';
      } else if (hash === '#innovations') {
        document.title = 'Innovations - Greenville-Tech';
      } else if (hash === '#services') {
        document.title = 'Services - Greenville-Tech';
      } else if (hash === '#team') {
        document.title = 'Team - Greenville-Tech';
      } else if (hash === '#contact') {
        document.title = 'Contact - Greenville-Tech';
      } else if (hash === '#booking') {
        document.title = 'Booking - Greenville-Tech';
      } else {
        document.title = 'Granville-Tech'; // Default title
      }
    };

    // Call the function to set the title on component mount
    handleHashChange();

    // Listen for hash changes and update the title accordingly
    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
   <nav className="bg-black/40 text-white py-2 fixed w-full top-0 left-0 z-50 shadow-lg backdrop-blur-md">
  <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
    {/* Logo Section */}
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <img
        src={logo}
        alt="Granville-Tech Logo"
        className="h-12 w-12 rounded-full border border-silver/40"
      />
      <a
        href="#home"
        className="text-2xl font-semibold tracking-wider font-serif orbitron-logo text-silver hover:text-gray-300 transition-all duration-300"
      >
        Granville
      </a>
    </motion.div>

    {/* Desktop Navigation Links */}
    <div className="hidden lg:flex space-x-8 items-center">
      <motion.ul
        className="flex space-x-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2, // Animates links sequentially
        }}
      >
        {['Home', 'About', 'Innovations', 'Services', 'Team', 'Booking'].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium relative group transition-all duration-300"
            >
              {item}
              {/* Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-white to-silver transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Contact Button */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
      >
        <motion.a
          href="#contact"
          className="text-lg font-semibold text-white border-silver border hover:bg-gray-300 hover:text-black px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all opacity-80 duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>

    {/* Mobile Menu Button (Hamburger or X Icon using Lucide) */}
    <div className="lg:hidden flex items-center">
      <button
        className="text-white"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <X className="w-6 h-6" /> // Show X when menu is open
        ) : (
          <Menu className="w-6 h-6" /> // Show hamburger when menu is closed
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu (Conditional Rendering) */}
  {menuOpen && (
    <motion.div
      className="lg:hidden absolute top-16 left-0 w-full bg-black text-white text-center py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.ul
        className="space-y-6 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {['Home', 'About', 'Innovations', 'Services', 'Team', 'Booking', 'Contact'].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium"
              onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
            >
              {item}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )}
</nav>

  );
}
