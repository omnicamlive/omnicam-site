
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'; // Import the new home page component
import HomePageContent from './HomePageContent'; // Import the new home page component
import PrivacyPolicySection from './PrivacyPolicySection'; // Adjust path if you saved it elsewhere
import { useInView } from 'react-intersection-observer';
import {
  CameraIcon, ClockIcon, LockClosedIcon, SpeakerWaveIcon, MagnifyingGlassIcon, FolderIcon,
  GlobeAltIcon, CalendarDaysIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon,
  PlayCircleIcon, SparklesIcon, CheckCircleIcon, Bars3Icon, XMarkIcon, RocketLaunchIcon, EyeSlashIcon, CloudArrowUpIcon
} from '@heroicons/react/24/outline';

import omnicamicon256 from '../assets/omni9trans256.png'; // Adjust path as needed
import omnicamScreenshot from '../assets/Gemini9.png'; // Adjust path as needed
import omnicamrtmp from '../assets/Geminirtmp.png'; // Adjust path as needed
import omnicamliveschedule from '../assets/Geminiliveschedule.png'; // Adjust path as needed
import omnicamgps from '../assets/GeminiGps.png'; // Adjust path as needed
import omnicamdata from '../assets/Geminidata.png'; // Adjust path as needed
import omnicamoffscreen from '../assets/Geminioffscreen.png'; // Adjust path as needed
import omnicamlock from '../assets/Geminilock.png'; // Adjust path as needed
import omnicamvolumekeys from '../assets/Geminivolumekeys.png'; // Adjust path as needed


// CallToAction.jsx
const CallToAction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="download-content" ref={ref} className="py-16 md:py-24 bg-dark-primary text-text-light text-center">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold mb-6
          ${inView ? 'opacity-100 zoom-in' : 'opacity-0'} transition-all duration-700 ease-out`}>
          Ready to Experience OmniCam?
        </h2>
        <p className={`text-lg md:text-xl text-text-subtle mb-10
          ${inView ? 'opacity-100 zoom-in' : 'opacity-0'} transition-all duration-700 delay-200 ease-out`}>
          Download OmniCam today and unlock powerful, discreet, and customizable video recording and live streaming features.
        </p>
        <div className={`flex justify-center space-x-4
          ${inView ? 'opacity-100 zoom-in' : 'opacity-0'} transition-all duration-700 delay-400 ease-out`}>
          <a href="https://play.google.com/store/apps/details?id=com.globewaystechnologies.omnicam&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105 animate-pulse-glow">
            Download on Google Play
          </a>
          {/* Add App Store link if applicable */}
          {/* <a href="#" className="bg-transparent border-2 border-text-light text-text-light px-8 py-4 rounded-full text-xl font-semibold hover:bg-text-light hover:text-dark-primary transition-colors duration-300 shadow-lg transform hover:scale-105">
            Download on App Store
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;