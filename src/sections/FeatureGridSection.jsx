
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'; // Import the new home page component
import HomePageContent from './HomePageContent'; // Import the new home page component
import PrivacyPolicySection from './PrivacyPolicySection'; // Adjust path if you saved it elsewhere
import FeatureCard from './FeatureCard'; // Adjust path if you saved it elsewhere

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



const FeatureGridSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const allFeatures = [
    { icon: CameraIcon, title: "Dual-Lens Capture", description: "Simultaneously record from both front and rear cameras.", colorClass: 'text-accent-cyan' },
    { icon: ClockIcon, title: "Scheduled Automation", description: "Set precise times for automated recording and streaming.", colorClass: 'text-accent-magenta' },
    { icon: EyeSlashIcon, title: "Stealth Mode", description: "Record and stream discreetly with the screen off.", colorClass: 'text-accent-cyan' },
    { icon: SpeakerWaveIcon, title: "Pro Audio Controls", description: "Fine-tune audio quality and enable/disable recording.", colorClass: 'text-accent-magenta' },
    { icon: MagnifyingGlassIcon, title: "Dynamic Zoom", description: "Smoothly adjust video zoom in real-time during capture.", colorClass: 'text-accent-cyan' },
    { icon: FolderIcon, title: "Flexible Storage", description: "Choose internal, SD card, or public media folder storage.", colorClass: 'text-accent-magenta' },
    { icon: GlobeAltIcon, title: "Universal Live Stream", description: "Stream directly to YouTube RTMP or any custom server.", colorClass: 'text-accent-cyan' },
    { icon: MapPinIcon, title: "Geo-Timestamping", description: "Embed real-time GPS location data onto your videos.", colorClass: 'text-accent-magenta' },
    { icon: SparklesIcon, title: "Timestamp Overlay", description: "Add current date and time watermarks to recordings.", colorClass: 'text-accent-cyan' },
    { icon: PlayCircleIcon, title: "Simultaneous Record & Stream", description: "Record locally while live streaming for instant backup.", colorClass: 'text-accent-magenta' },
    { icon: CheckCircleIcon, title: "Optimized Performance", description: "Battery-efficient and lightweight for extended operation.", colorClass: 'text-accent-cyan' },
    { icon: RocketLaunchIcon, title: "Instant Widget Access", description: "Start/stop recording instantly from your home screen widget.", colorClass: 'text-accent-magenta' },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-dark-primary text-text-light">
      <div className="container mx-auto px-4 text-center">
        <h2 ref={headingRef} className={`text-3xl md:text-5xl font-bold mb-16
          ${headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
          Unleash OmniCam's Power
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;