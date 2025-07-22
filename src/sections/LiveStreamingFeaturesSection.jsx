
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'; // Import the new home page component
import HomePageContent from './HomePageContent'; // Import the new home page component
import PrivacyPolicySection from './PrivacyPolicySection'; // Adjust path if you saved it elsewhere
import SectionHeader from './SectionHeader'; // Import SectionHeader
import AlternatingContentSection from './AlternatingContentSection'; // Import AlternatingContentSection
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


// LiveStreamingFeaturesSection.jsx
const LiveStreamingFeaturesSection = () => {
  return (
    <div id="streaming-content">
      <SectionHeader
        title="Seamless Recording & Live Streaming"
        subtitle="Backgrpound Video Recording & Broadcast your world with advanced features for reliable and high-quality live streams."
      />
      <AlternatingContentSection
        index={0}
        icon={CloudArrowUpIcon}
        title="Direct RTMP Integration"
        description="Connect directly to YouTube RTMP or any custom server. OmniCam makes live broadcasting simple and efficient, putting you in control of your stream destination."
        // imageSrc="https://placehold.co/600x400/0D1117/FF00FF?text=RTMP+Streaming"
        imageSrc={omnicamrtmp}
        altText="Backgrpound Video Recording & RTMP Streaming Interface"
        reverse={false}
      />
      <AlternatingContentSection
        index={1}
        icon={CalendarDaysIcon}
        title="Automated Stream Scheduling"
        description="Plan your live events in advance. Set custom schedules for your streams to start and stop automatically, ensuring you never miss a broadcast moment."
        // imageSrc="https://placehold.co/600x400/0D1117/FF00FF?text=Stream+Schedule"
        imageSrc={omnicamliveschedule}
        altText="Backgrpound Video Recording & Live Stream Scheduling"
        reverse={true}
      />
      <AlternatingContentSection
        index={2}
        icon={MapPinIcon}
        title="Location & Time Overlays"
        description="Enhance your streams and recordings with real-time GPS location and timestamp watermarks. Provide verifiable context and authenticity to your content."
        // imageSrc="https://placehold.co/600x400/0D1117/FF00FF?text=Geo+Timestamp"
        imageSrc={omnicamgps}
        altText="Video with Geo Timestamp"
        reverse={false}
      />
    </div>
  );
};

export default LiveStreamingFeaturesSection;
