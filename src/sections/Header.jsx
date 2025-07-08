// src/components/Header.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// ... other icon imports

// Accept setCurrentPage as a prop
const Header = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false); // Close mobile menu after clicking
    window.scrollTo(0, 0); // Scroll to top of the new page
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-primary bg-opacity-90 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* ... logo and title ... */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" onClick={() => handleNavLinkClick('home')} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Home</a>
          {/* You can still link to sections within the 'home' page if you want */}
          <a href="#" onClick={() => handleNavLinkClick('features')} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Features</a>
          <a href="#" onClick={() => handleNavLinkClick('streaming')} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Live Stream</a>
          <a href="#" onClick={() => handleNavLinkClick('security')} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Security</a>
          <a href="#" onClick={() => handleNavLinkClick('privacy-policy')} className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Privacy Policy</a>
          <a href="#" onClick={() => handleNavLinkClick('download')} className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105">Download App</a>
        </div>

        {/* Mobile Menu Button and Overlay (similar changes) */}
        {/* ... */}
      </nav>
    </header>
  );
};

export default Header;