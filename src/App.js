import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView
import Header from './sections/Header';
import Footer from './sections/Footer'; // Import the new home page component
import HomePageContent from './sections/HomePageContent'; // Import the new home page component
import PrivacyPolicySection from './sections/PrivacyPolicySection'; // Adjust path if you saved it elsewhere
import {
  CameraIcon, ClockIcon, LockClosedIcon, SpeakerWaveIcon, MagnifyingGlassIcon, FolderIcon,
  GlobeAltIcon, CalendarDaysIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon,
  PlayCircleIcon, SparklesIcon, CheckCircleIcon, Bars3Icon, XMarkIcon, RocketLaunchIcon, EyeSlashIcon, CloudArrowUpIcon
} from '@heroicons/react/24/outline';

import omnicamicon256 from './assets/omni9trans256.png'; // Adjust path as needed
import omnicamScreenshot from './assets/Gemini9.png'; // Adjust path as needed
import omnicamrtmp from './assets/Geminirtmp.png'; // Adjust path as needed
import omnicamliveschedule from './assets/Geminiliveschedule.png'; // Adjust path as needed
import omnicamgps from './assets/GeminiGps.png'; // Adjust path as needed
import omnicamdata from './assets/Geminidata.png'; // Adjust path as needed
import omnicamoffscreen from './assets/Geminioffscreen.png'; // Adjust path as needed
import omnicamlock from './assets/Geminilock.png'; // Adjust path as needed
import omnicamvolumekeys from './assets/Geminivolumekeys.png'; // Adjust path as needed
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// App.js (Main component)
export default function App() {
  // No more currentPage or scrollToSectionId states needed here with react-router-dom
  // const [currentPage, setCurrentPage] = useState('home');
  // const [scrollToSectionId, setScrollToSectionId] = useState(null);

  // The useEffect for scrolling is now handled directly by the <a> tags in Header/Footer
  // and the browser's default behavior for #anchors.

  return (
    <Router> {/* Wrap your entire application with HashRouter */}
      <div className="font-sans text-text-light bg-dark-primary min-h-screen">
        {/* Header no longer needs to pass setCurrentPage/setScrollToSectionId */}
        <Header />

        <Routes> {/* Define your routes here */}
          <Route path="/" element={<HomePageContent />} /> {/* Home page */}
          <Route path="/privacy-policy" element={<PrivacyPolicySection />} /> {/* Privacy Policy page */}
          {/* Add other routes for other distinct pages if needed */}
        </Routes>

        {/* Footer no longer needs to pass setCurrentPage/setScrollToSectionId */}
        <Footer />
      </div>
    </Router>
  );
}
