// BackgroundRecordingSection.jsx
import React from 'react';
import { EyeSlashIcon, LockClosedIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const BackgroundRecordingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="background-recording" className="bg-dark-secondary text-text-light py-24 px-4">
      <div className="container mx-auto max-w-6xl text-center" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 transition-all duration-700 ease-out 
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Record Silently — Even with the Screen Off
        </h2>
        <p className={`text-lg md:text-xl text-text-subtle mb-12 max-w-3xl mx-auto transition-all duration-700 ease-out delay-200
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          OmniCam ensures uninterrupted background video recording — even when your screen is turned off or your phone is locked. Whether you're capturing evidence, journaling, or vlogging discreetly, your session stays active, secure, and invisible to others.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <FeatureCard
            icon={EyeSlashIcon}
            title="Invisible Operation"
            description="Record without drawing attention — no UI overlays, no screen glow, no sound."
          />
          <FeatureCard
            icon={LockClosedIcon}
            title="Screen-Off Security"
            description="Recording continues securely in the background when your phone is locked or idle."
          />
          <FeatureCard
            icon={DevicePhoneMobileIcon}
            title="Power-Efficient Mode"
            description="Optimized to reduce battery usage while maintaining stable dual-camera recording."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-dark-primary border border-gray-700 rounded-lg p-6 shadow-xl text-center max-w-xs w-full transition-all duration-700 ease-out
        ${inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
    >
      <Icon className="h-10 w-10 text-accent-cyan mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-text-light">{title}</h3>
      <p className="text-sm text-text-subtle">{description}</p>
    </div>
  );
};

export default BackgroundRecordingSection;
