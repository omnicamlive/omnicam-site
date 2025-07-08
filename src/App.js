import React, { useState } from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer'; // Import the new home page component
import HomePageContent from './sections/HomePageContent'; // Import the new home page component
import PrivacyPolicySection from './sections/PrivacyPolicySection'; // Adjust path if you saved it elsewhere
import { useInView } from 'react-intersection-observer';
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

// ImageGenerator Component
const ImageGenerator = ({ prompt, imageClassName }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    setIsLoading(true);
    setError('');
    setImageUrl(''); // Clear previous image

    const payload = {
      instances: { prompt: prompt },
      parameters: { "sampleCount": 1 }
    };

    // API key is provided by the Canvas environment at runtime
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.predictions && result.predictions.length > 0 && result.predictions[0].bytesBase64Encoded) {
        const generatedImageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
        setImageUrl(generatedImageUrl);
      } else {
        setError('Failed to generate image: No image data received.');
      }
    } catch (e) {
      console.error("Error generating image:", e);
      setError(`Failed to generate image: ${e.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {isLoading ? (
        <div className="flex items-center justify-center h-64 w-full max-w-md rounded-3xl bg-dark-secondary animate-pulse">
          <svg className="animate-spin h-10 w-10 text-accent-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="ml-3 text-text-subtle">Generating UI...</span>
        </div>
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt="Generated OmniCam UI Screenshot"
          className={`${imageClassName} w-full max-w-md rounded-3xl shadow-2xl border-4 border-accent-cyan transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-md rounded-3xl bg-dark-secondary border-4 border-gray-700 text-text-subtle">
          <p className="text-center mb-4">Click below to generate a sleek OmniCam UI screenshot!</p>
          <button
            onClick={generateImage}
            className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            Generate UI Image
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};


// // Header.jsx
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-dark-primary bg-opacity-90 backdrop-blur-sm shadow-lg">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center">
//           {/* <img src="https://placehold.co/40x40/00F0FF/0D1117?text=OC" alt="OmniCam Logo" className="h-10 w-10 rounded-full mr-3 border border-accent-cyan animate-pulse-border" /> */}
//         <img src={omnicamicon256} alt="OmniCam Logo" className="h-10 w-15 mr-3 " />

          
//           <span className="text-text-light text-2xl font-bold font-mono">OmniCam</span>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8">
//           <a href="#features" className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Features</a>
//           <a href="#streaming" className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Live Stream</a>
//           <a href="#privacy" className="text-text-base hover:text-accent-cyan transition-colors duration-200 text-lg">Security</a>
//           <a href="https://play.google.com/store/apps/details?id=com.globewaystechnologies.omnicam&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105">Download App</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-text-light focus:outline-none">
//             {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden fixed inset-0 bg-dark-primary bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
//           <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-text-light focus:outline-none">
//             <XMarkIcon className="h-10 w-10" />
//           </button>
//           <a href="#features" onClick={() => setIsOpen(false)} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Features</a>
//           <a href="#streaming" onClick={() => setIsOpen(false)} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Live Stream</a>
//           <a href="#privacy" onClick={() => setIsOpen(false)} className="text-text-light text-3xl hover:text-accent-cyan transition-colors duration-200">Security</a>
//           <a href="#download" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-8 py-4 rounded-full text-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl">Download App</a>
//         </div>
//       )}
//     </header>
//   );
// };

// HeroSection.jsx
// const HeroSection = () => {
//   const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <section id="hero" className="relative bg-dark-primary text-text-light py-24 md:py-40 overflow-hidden min-h-screen flex items-center">
//       {/* Dynamic background elements - more subtle, tech-inspired */}
//       <div className="absolute inset-0 z-0 opacity-5">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float-subtle"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-magenta rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float-subtle animation-delay-2000"></div>
//       </div>

//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
//         <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
//           <h1 ref={headingRef} className={`text-4xl md:text-7xl font-extrabold leading-tight mb-4
//             ${headingInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} transition-all duration-1000 ease-out`}>
//             Your World. <span className="text-accent-cyan">Captured.</span> <br />Your Stream. <span className="text-accent-magenta">Secured.</span>
//           </h1>
//           <p ref={textRef} className={`text-lg md:text-2xl text-text-subtle mb-10
//             ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} transition-all duration-1000 delay-200 ease-out`}>
//             OmniCam: The ultimate discreet dual-camera recorder and live streaming solution.
//           </p>
//           <div ref={buttonsRef} className={`flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6
//             ${buttonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} transition-all duration-1000 delay-400 ease-out`}>
//             <a href="https://play.google.com/store/apps/details?id=com.globewaystechnologies.omnicam&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105 animate-pulse-glow">
//               Get OmniCam Now
//             </a>
//             <a href="#" className="bg-transparent border-2 border-text-light text-text-light px-8 py-4 rounded-full text-xl font-semibold hover:bg-text-light hover:text-dark-primary transition-colors duration-300 shadow-lg transform hover:scale-105">
//               Learn More
//             </a>
//           </div>
//         </div>
//         <div ref={imageRef} className={`md:w-1/2 flex justify-center md:justify-end
//           ${imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-500 ease-out`}>
//           <img
//             // src="https://placehold.co/450x800/161B22/00F0FF?text=OmniCam+App+UI"
//             // src="/images/Gemini9.png"
//             src={omnicamScreenshot}
//             alt="OmniCam App Interface"
//             className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-accent-cyan transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out"
//           />
//         </div>
//         {/* <div ref={imageRef} className={`md:w-1/2 flex justify-center md:justify-end
//           ${imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-500 ease-out`}>
//           <ImageGenerator
//             prompt="A sleek, futuristic mobile app UI screenshot for 'OmniCam'. The UI should show a dual-camera view or a live streaming interface with subtle data overlays. Use a dark background with vibrant cyan, magenta, and blue accents. The design should feel modern and high-tech, suitable for a discreet recording and streaming app."
//             imageClassName="w-full max-w-md rounded-3xl shadow-2xl border-4 border-accent-cyan transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out"
//           />
//         </div> */ }
//       </div>
//     </section>
//   );
// };

// // FeatureCard component for reusability in FeatureGrid and LiveStreamingSection
// const FeatureCard = ({ icon: Icon, title, description, index, colorClass = 'text-accent-cyan' }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div
//       ref={ref}
//       className={`bg-dark-secondary p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center
//         transition-all duration-700 ease-out transform
//         ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
//         ${`delay-${index * 100}`} `}
//     >
//       <Icon className={`h-12 w-12 ${colorClass} mb-4`} />
//       <h3 className="text-xl font-semibold text-text-light mb-2">{title}</h3>
//       <p className="text-text-subtle text-sm">{description}</p>
//     </div>
//   );
// };

// FeatureGridSection.jsx - Comprehensive grid of all features
// const FeatureGridSection = () => {
//   const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   const allFeatures = [
//     { icon: CameraIcon, title: "Dual-Lens Capture", description: "Simultaneously record from both front and rear cameras.", colorClass: 'text-accent-cyan' },
//     { icon: ClockIcon, title: "Scheduled Automation", description: "Set precise times for automated recording and streaming.", colorClass: 'text-accent-magenta' },
//     { icon: EyeSlashIcon, title: "Stealth Mode", description: "Record and stream discreetly with the screen off.", colorClass: 'text-accent-cyan' },
//     { icon: SpeakerWaveIcon, title: "Pro Audio Controls", description: "Fine-tune audio quality and enable/disable recording.", colorClass: 'text-accent-magenta' },
//     { icon: MagnifyingGlassIcon, title: "Dynamic Zoom", description: "Smoothly adjust video zoom in real-time during capture.", colorClass: 'text-accent-cyan' },
//     { icon: FolderIcon, title: "Flexible Storage", description: "Choose internal, SD card, or public media folder storage.", colorClass: 'text-accent-magenta' },
//     { icon: GlobeAltIcon, title: "Universal Live Stream", description: "Stream directly to YouTube RTMP or any custom server.", colorClass: 'text-accent-cyan' },
//     { icon: MapPinIcon, title: "Geo-Timestamping", description: "Embed real-time GPS location data onto your videos.", colorClass: 'text-accent-magenta' },
//     { icon: SparklesIcon, title: "Timestamp Overlay", description: "Add current date and time watermarks to recordings.", colorClass: 'text-accent-cyan' },
//     { icon: PlayCircleIcon, title: "Simultaneous Record & Stream", description: "Record locally while live streaming for instant backup.", colorClass: 'text-accent-magenta' },
//     { icon: CheckCircleIcon, title: "Optimized Performance", description: "Battery-efficient and lightweight for extended operation.", colorClass: 'text-accent-cyan' },
//     { icon: RocketLaunchIcon, title: "Instant Widget Access", description: "Start/stop recording instantly from your home screen widget.", colorClass: 'text-accent-magenta' },
//   ];

//   return (
//     <section id="features" className="py-16 md:py-24 bg-dark-primary text-text-light">
//       <div className="container mx-auto px-4 text-center">
//         <h2 ref={headingRef} className={`text-3xl md:text-5xl font-bold mb-16
//           ${headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
//           Unleash OmniCam's Power
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {allFeatures.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//               index={index}
//               colorClass={feature.colorClass}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // SectionHeader component for consistent heading animation
// const SectionHeader = ({ id, title, subtitle }) => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   return (
//     <div id={id} ref={ref} className="text-center mb-16">
//       <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-text-light
//         ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
//         {title}
//       </h2>
//       <p className={`text-lg md:text-xl text-text-subtle max-w-2xl mx-auto
//         ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-100 ease-out`}>
//         {subtitle}
//       </p>
//     </div>
//   );
// };

// // AlternatingContentSection.jsx - for detailed features/streaming
// const AlternatingContentSection = ({ icon: Icon, title, description, imageSrc, altText, reverse, index }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const isEven = index % 2 === 0;
//   const textAnimationClass = inView ? 'opacity-100 translate-x-0' : (isEven ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16');
//   const imageAnimationClass = inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
//   const delayClass = `delay-${index * 150}`;

//   return (
//     <section ref={ref} className={`py-16 md:py-24 ${isEven ? 'bg-dark-secondary' : 'bg-dark-primary'} text-text-light`}>
//       <div className={`container mx-auto px-4 flex flex-col items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between gap-12`}>
//         <div className={`md:w-1/2 text-center ${reverse ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0
//           ${textAnimationClass} transition-all duration-1000 ease-out ${delayClass}`}>
//           <Icon className="h-16 w-16 text-accent-cyan mb-6 mx-auto md:mx-0" />
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
//           <p className="text-lg text-text-subtle">{description}</p>
//         </div>
//         <div className={`md:w-1/2 flex justify-center
//           ${imageAnimationClass} transition-all duration-1000 ease-out ${delayClass}`}>
//           <img
//             src={imageSrc}
//             alt={altText}
//             className="w-full max-w-md rounded-xl shadow-2xl border-4 border-gray-700 transform hover:scale-102 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };


// // PrivacyAndSecuritySection.jsx - Integrated privacy/discreet controls
// const PrivacyAndSecuritySection = () => {
//   return (
//     <div id="privacy">
//       <SectionHeader
//         title="Privacy & Uncompromised Control"
//         subtitle="OmniCam is built on a foundation of security, ensuring your data remains yours and your operations stay discreet."
//       />
//       <AlternatingContentSection
//         index={0}
//         icon={ShieldCheckIcon}
//         title="Your Data Stays Local"
//         description="OmniCam prioritizes your privacy. We do not collect or share personal data without explicit consent. All recordings are securely saved locally on your device, giving you complete ownership and control."
//         // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=Local+Storage"
//         imageSrc={omnicamdata}
//         altText="Local Data Storage"
//         reverse={false}
//       />
//       <AlternatingContentSection
//         index={1}
//         icon={PhoneIcon}
//         title="Discreet Background Operation"
//         description="Record or stream with your screen off, or while using other applications. OmniCam operates seamlessly in the background, allowing for unobtrusive capture and broadcasting."
//         // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=Background+Mode"
//         imageSrc = {omnicamoffscreen}
//         altText="Phone in background mode"
//         reverse={true}
//       />
//       <AlternatingContentSection
//         index={2}
//         icon={LockClosedIcon}
//         title="Secure Access & Ethical Use"
//         description="Protect your app and recordings with a secure pattern lock. OmniCam is designed for lawful and ethical use; we encourage compliance with local laws and respect for privacy."
//         // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=App+Lock"
//         imageSrc={omnicamlock}
//         altText="App with pattern lock"
//         reverse={false}
//       />
//       <AlternatingContentSection
//         index={3}
//         icon={SpeakerWaveIcon}
//         title="Volume Key Quick Controls"
//         description="For ultimate discretion, use your device's volume buttons to instantly start or stop recording, even when the screen is locked. This optional feature enhances quick and quiet operation."
//         // imageSrc="https://placehold.co/600x400/161B22/00F0FF?text=Volume+Control"
//         imageSrc={omnicamvolumekeys}
//         altText="Hand pressing volume button"
//         reverse={true}
//       />
//     </div>
//   );
// };


// // CallToAction.jsx
// const CallToAction = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="download" ref={ref} className="py-16 md:py-24 bg-dark-primary text-text-light text-center">
//       <div className="container mx-auto px-4">
//         <h2 className={`text-3xl md:text-5xl font-bold mb-6
//           ${inView ? 'opacity-100 zoom-in' : 'opacity-0'} transition-all duration-700 ease-out`}>
//           Ready to Experience OmniCam?
//         </h2>
//         <p className={`text-lg md:text-xl text-text-subtle mb-10
//           ${inView ? 'opacity-100 zoom-in' : 'opacity-0'} transition-all duration-700 delay-200 ease-out`}>
//           Download OmniCam today and unlock powerful, discreet, and customizable video recording and live streaming features.
//         </p>
//         <div className={`flex justify-center space-x-4
//           ${inView ? 'opacity-100 zoom-in' : 'opacity-0'} transition-all duration-700 delay-400 ease-out`}>
//           <a href="https://play.google.com/store/apps/details?id=com.globewaystechnologies.omnicam&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl transform hover:scale-105 animate-pulse-glow">
//             Download on Google Play
//           </a>
//           {/* Add App Store link if applicable */}
//           {/* <a href="#" className="bg-transparent border-2 border-text-light text-text-light px-8 py-4 rounded-full text-xl font-semibold hover:bg-text-light hover:text-dark-primary transition-colors duration-300 shadow-lg transform hover:scale-105">
//             Download on App Store
//           </a> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer.jsx
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-dark-secondary text-text-muted py-8">
//       <div className="container mx-auto px-4 text-center text-sm">
//         <p>&copy; {currentYear} OmniCam. All rights reserved.</p>
//         <div className="mt-2 space-x-4">
//           <a href="#" className="hover:underline hover:text-accent-cyan transition-colors duration-200">Privacy Policy</a>
//           <a href="#" className="hover:underline hover:text-accent-cyan transition-colors duration-200">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// App.js (Main component)
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    // Function to render the correct page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePageContent />;
      case 'privacy-policy':
        return <PrivacyPolicySection />;
      default:
        return <HomePageContent />; // Fallback to home
    }
  };

  return (
    <div className="font-sans text-text-light bg-dark-primary min-h-screen">
      {/* Pass setCurrentPage to Header so it can change pages */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Render the selected page content */}
      {renderPage()}

      {/* Pass setCurrentPage to Footer for navigation */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );

} 





//   return (
//     <div className="font-sans text-text-light bg-soft-blue-bg min-h-screen">
//       <Header />
//       <HeroSection />
//       <FeatureGridSection />
//       <LiveStreamingFeaturesSection />
//       <PrivacyAndSecuritySection />
//       <PrivacyPolicySection />
//       <CallToAction />
//       <Footer />
//     </div>
//   );


