// src/components/FeaturesSection.jsx (and similarly for StreamingSection.jsx)
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView
import { CameraIcon, ClockIcon, LockClosedIcon, VolumeUpIcon, MagnifyingGlassIcon, WifiIcon, FolderIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const features = [
  // ... (same features array)
];

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only plays once when it enters view
    threshold: 0.1,    // Trigger when 10% of the item is visible
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-700 ease-out flex flex-col items-center
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${delay}`} // Apply delay class based on prop
    >
      <Icon className="h-12 w-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 opacity-0 animate-fade-in-up duration-700">Key Recording Features</h2> {/* Heading animates as well */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index === 0 ? '' : `transition-delay-${index * 100}`} // Staggered delay (you might need to define `transition-delay-X` classes in config)
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;