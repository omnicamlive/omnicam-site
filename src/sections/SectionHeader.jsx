import React from 'react';
import { useInView } from 'react-intersection-observer';

// SectionHeader component for consistent heading animation
const SectionHeader = ({ id, title, subtitle }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div id={id} ref={ref} className="text-center mb-16">
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-text-light
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
        {title}
      </h2>
      <p className={`text-lg md:text-xl text-text-subtle max-w-2xl mx-auto
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-100 ease-out`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
