// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-16 md:py-24 overflow-hidden">
      {/* Subtle background animation - using a custom keyframe if desired, or simpler pulse */}
      {/* You'd define 'pulse-slow' in tailwind.config.js if using custom keyframes */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4
            opacity-0 animate-fade-in-up duration-700"> {/* Fades in and slides up */}
            OmniCam – Dual Camera Background Recorder & Live Streamer
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8
            opacity-0 animate-fade-in-up duration-700 delay-200"> {/* Fades in and slides up with a delay */}
            Powerful, secure, and privacy-focused video recording and live streaming, even with your screen off.
          </p>
          <div className="flex justify-center md:justify-start space-x-4
            opacity-0 animate-fade-in-up duration-700 delay-400"> {/* Buttons fade in with a delay */}
            <a href="#" className="bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"> {/* Hover effect */}
              Download on Google Play
            </a>
            {/* Add App Store link if applicable */}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* App image with a subtle rotation and scaling effect */}
          <img
            src="https://via.placeholder.com/400x700/667eea/ffffff?text=OmniCam+App+Mockup"
            alt="OmniCam App Screenshot"
            className="w-full max-w-sm rounded-xl shadow-2xl
              transform rotate-3 scale-95 opacity-0 animate-fade-in-up-scale duration-700 delay-500
              transition-transform ease-out-back" // A bit more playful animation on image
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;