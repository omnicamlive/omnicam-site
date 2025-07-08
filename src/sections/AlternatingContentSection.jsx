
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


// AlternatingContentSection.jsx - for detailed features/streaming
const AlternatingContentSection = ({ icon: Icon, title, description, imageSrc, altText, reverse, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;
  const textAnimationClass = inView ? 'opacity-100 translate-x-0' : (isEven ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16');
  const imageAnimationClass = inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
  const delayClass = `delay-${index * 150}`;

  return (
    <section ref={ref} className={`py-16 md:py-24 ${isEven ? 'bg-dark-secondary' : 'bg-dark-primary'} text-text-light`}>
      <div className={`container mx-auto px-4 flex flex-col items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between gap-12`}>
        <div className={`md:w-1/2 text-center ${reverse ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0
          ${textAnimationClass} transition-all duration-1000 ease-out ${delayClass}`}>
          <Icon className="h-16 w-16 text-accent-cyan mb-6 mx-auto md:mx-0" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
          <p className="text-lg text-text-subtle">{description}</p>
        </div>
        <div className={`md:w-1/2 flex justify-center
          ${imageAnimationClass} transition-all duration-1000 ease-out ${delayClass}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full max-w-md rounded-xl shadow-2xl border-4 border-gray-700 transform hover:scale-102 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AlternatingContentSection;