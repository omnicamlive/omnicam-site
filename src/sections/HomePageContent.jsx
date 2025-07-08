import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView
import SectionHeader from './SectionHeader'; // Import SectionHeader
import HeroSection from './HeroSection'; // Assuming these are in the same components folder
import FeatureGridSection from './FeatureGridSection';
import LiveStreamingFeaturesSection from './LiveStreamingFeaturesSection';
import PrivacyAndSecuritySection from './PrivacyAndSecuritySection';
import CallToAction from './CallToAction';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// HomePageContent.jsx - Combines all main sections
const HomePageContent = () => { // Removed scrollToSectionId prop
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <HeroSection /> {/* This section already has id="hero-content" */}
      <FeatureGridSection /> {/* This section already has id="features-content" */}
      <LiveStreamingFeaturesSection /> {/* This section already has id="streaming-content" */}
      <PrivacyAndSecuritySection /> {/* This section already has id="security-content" */}
      <CallToAction /> {/* This section already has id="download-content" */}
    </>
  );
};
export default HomePageContent; // Export the HomePageContent component