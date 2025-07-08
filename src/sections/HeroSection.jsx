
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



const HeroSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="hero-content" className="relative bg-dark-primary text-text-light py-24 md:py-40 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic background elements - more subtle, tech-inspired */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float-subtle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-magenta rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float-subtle animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 ref={headingRef} className={`text-4xl md:text-7xl font-extrabold leading-tight mb-4
            ${headingInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} transition-all duration-1000 ease-out`}>
            Your World. <span className="text-accent-cyan">Captured.</span> <br />Your Stream. <span className="text-accent-magenta">Secured.</span>
          </h1>
          <p ref={textRef} className={`text-lg md:text-2xl text-text-subtle mb-10
            ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} transition-all duration-1000 delay-200 ease-out`}>
            OmniCam: The ultimate discreet dual-camera recorder and live streaming solution.
          </p>
          <div ref={buttonsRef} className={`flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6
            ${buttonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} transition-all duration-1000 delay-400 ease-out`}>
            <a href="https://play.google.com/store/apps/details?id=com.globewaystechnologies.omnicam&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105 animate-pulse-glow">
              Get OmniCam Now
            </a>
            <a href="#" className="bg-transparent border-2 border-text-light text-text-light px-8 py-4 rounded-full text-xl font-semibold hover:bg-text-light hover:text-dark-primary transition-colors duration-300 shadow-lg transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
        <div ref={imageRef} className={`md:w-1/2 flex justify-center md:justify-end
          ${imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-500 ease-out`}>
          <img
            // src="https://placehold.co/450x800/161B22/00F0FF?text=OmniCam+App+UI"
            // src="/images/Gemini9.png"
            src={omnicamScreenshot}
            alt="OmniCam App Interface"
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-accent-cyan transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out"
          />
        </div>
        {/* <div ref={imageRef} className={`md:w-1/2 flex justify-center md:justify-end
          ${imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-500 ease-out`}>
          <ImageGenerator
            prompt="A sleek, futuristic mobile app UI screenshot for 'OmniCam'. The UI should show a dual-camera view or a live streaming interface with subtle data overlays. Use a dark background with vibrant cyan, magenta, and blue accents. The design should feel modern and high-tech, suitable for a discreet recording and streaming app."
            imageClassName="w-full max-w-md rounded-3xl shadow-2xl border-4 border-accent-cyan transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out"
          />
        </div> */ }
      </div>
    </section>
  );
};

// FeatureCard component for reusability in FeatureGrid and LiveStreamingSection
const FeatureCard = ({ icon: Icon, title, description, index, colorClass = 'text-accent-cyan' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-dark-secondary p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center
        transition-all duration-700 ease-out transform
        ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        ${`delay-${index * 100}`} `}
    >
      <Icon className={`h-12 w-12 ${colorClass} mb-4`} />
      <h3 className="text-xl font-semibold text-text-light mb-2">{title}</h3>
      <p className="text-text-subtle text-sm">{description}</p>
    </div>
  );
};

export default HeroSection;