import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Assuming these are the only icons needed here
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Import BrowserRouter, Routes, Route for routing
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import omnicamicon256 from '../assets/omni9trans256.png'; // Adjust path as needed


// Header.jsx
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Import and use useNavigate hook

  const handleNavLinkClick = (path, sectionId = null) => {
    setIsOpen(false); // Close mobile menu

    if (sectionId) {
      // If it's a section link, navigate to the path first, then scroll
      // For HashRouter, the path will include the hash, e.g., /#/features-content
      navigate(path);
      // Use a timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page transition
    } else {
      // For direct page links (like /privacy-policy or /)
      navigate(path);
      window.scrollTo(0, 0); // Scroll to top of the new page
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-primary bg-opacity-90 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={omnicamicon256} alt="OmniCam Logo" className="h-10 w-15 mr-3" />
          <span className="text-text-light text-2xl font-bold font-mono">OmniCam</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {/* Update hrefs for HashRouter paths */}
          <a href="/#/" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/'); }} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Home</a>
          <a href="/#/features-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'features-content'); }} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Features</a>
          <a href="/#/streaming-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'streaming-content'); }} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Live Stream</a>
          <a href="/#/security-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'security-content'); }} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Security</a>
          <a href="/#/privacy-policy" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/privacy-policy'); }} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Privacy Policy</a>
          <a href="/#/download-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'download-content'); }} className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105">Download App</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-light focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-dark-primary bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-text-light focus:outline-none">
            <XMarkIcon className="h-10 w-10" />
          </button>
          {/* Update hrefs for HashRouter paths */}
          <a href="/#/" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/'); }} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Home</a>
          <a href="/#/features-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'features-content'); }} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Features</a>
          <a href="/#/streaming-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'streaming-content'); }} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Live Stream</a>
          <a href="/#/security-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'security-content'); }} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Security</a>
          <a href="/#/privacy-policy" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/privacy-policy'); }} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Privacy Policy</a>
          <a href="/#/download-content" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/', 'download-content'); }} className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-8 py-4 rounded-full text-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl">Download App</a>
        </div>
      )}
    </header>
  );
};

export default Header;

//