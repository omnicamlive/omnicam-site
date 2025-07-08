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

export default FeatureCard;