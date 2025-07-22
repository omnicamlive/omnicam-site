import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// Footer.jsx
const Footer = () => { // Removed setCurrentPage, setScrollToSectionId props
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate(); // Import and use useNavigate hook

  const handleFooterLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top of the new page
  };

  return (
    <footer className="bg-dark-secondary text-text-muted py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} OmniCam. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          {/* Use standard <a> tags with full paths for routing */}
          <a href="/#/privacy-policy" onClick={(e) => { e.preventDefault(); handleFooterLinkClick('/privacy-policy'); }} className="hover:underline hover:text-accent-cyan transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-accent-cyan transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer; // Export the Footer component