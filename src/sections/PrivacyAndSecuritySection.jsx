
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



// PrivacyAndSecuritySection.jsx - Integrated privacy/discreet controls

const PrivacyAndSecuritySection = () => {
  return (
    <div id="security-content">
      <SectionHeader
        title="Privacy & Uncompromised Control"
        subtitle="OmniCam is built on a foundation of security, ensuring your data remains yours and your operations stay discreet."
      />
      <AlternatingContentSection
        index={0}
        icon={ShieldCheckIcon}
        title="Your Data Stays Local"
        description="OmniCam prioritizes your privacy. We do not collect or share personal data without explicit consent. All recordings are securely saved locally on your device, giving you complete ownership and control."
        // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=Local+Storage"
        imageSrc={omnicamdata}
        altText="Local Data Storage"
        reverse={false}
      />
      <AlternatingContentSection
        index={1}
        icon={PhoneIcon}
        title="Discreet Background Operation"
        description="Record or stream with your screen off, or while using other applications. OmniCam operates seamlessly in the background, allowing for unobtrusive capture and broadcasting."
        // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=Background+Mode"
        imageSrc = {omnicamoffscreen}
        altText="Phone in background mode"
        reverse={true}
      />
      <AlternatingContentSection
        index={2}
        icon={LockClosedIcon}
        title="Secure Access & Ethical Use"
        description="Protect your app and recordings with a secure pattern lock. OmniCam is designed for lawful and ethical use; we encourage compliance with local laws and respect for privacy."
        // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=App+Lock"
        imageSrc={omnicamlock}
        altText="App with pattern lock"
        reverse={false}
      />
      <AlternatingContentSection
        index={3}
        icon={SpeakerWaveIcon}
        title="Volume Key Quick Controls"
        description="For ultimate discretion, use your device's volume buttons to instantly start or stop recording, even when the screen is locked. This optional feature enhances quick and quiet operation."
        // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=Volume+Control"
        imageSrc={omnicamvolumekeys}
        altText="Hand pressing volume button"
        reverse={true}
      />
    </div>
  );
};

export default PrivacyAndSecuritySection;