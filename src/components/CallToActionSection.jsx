// src/components/CallToActionSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const CallToActionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6
          transition-all duration-700 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Ready to Capture Every Moment?
        </h2>
        <p className={`text-lg md:text-xl opacity-90 mb-10
          transition-all duration-700 ease-out delay-200
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Download OmniCam today and unlock powerful, discreet, and customizable video recording features.
        </p>
        <div className={`flex justify-center space-x-4
          transition-all duration-700 ease-out delay-400
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#" className="bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg
            transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"> {/* Hover effect */}
            Download on Google Play
          </a>
          {/* Add App Store link if applicable */}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;