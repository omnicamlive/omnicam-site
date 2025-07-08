// src/components/Footer.jsx
import React from 'react';

// Accept setCurrentPage as a prop
const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top of the new page
  };

  return (
    <footer className="bg-dark-secondary text-text-muted py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} OmniCam. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" onClick={() => handleFooterLinkClick('privacy-policy')} className="hover:underline hover:text-accent-cyan transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-accent-cyan transition-colors duration-200">Terms of Service</a> {/* Assuming Terms of Service is still a placeholder or external link */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;