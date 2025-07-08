import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView
import SectionHeader from './SectionHeader'; // Import SectionHeader
import HeroSection from './HeroSection'; // Assuming these are in the same components folder
import FeatureGridSection from './FeatureGridSection';
import LiveStreamingFeaturesSection from './LiveStreamingFeaturesSection';
import PrivacyAndSecuritySection from './PrivacyAndSecuritySection';
import CallToAction from './CallToAction';

const HomePageContent = () => {
    // The useInView hook is used by child components, not directly by HomePageContent itself in this structure.
    // However, if HomePageContent ever needs its own animations based on its visibility, this import would be used.
    // For now, it's kept here for consistency if the user's original snippet implied its direct usage.
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            {/* The SectionHeader for the home page itself */}
            {/* <div ref={ref} className="container mx-auto px-4 py-16 md:py-24">
                <SectionHeader
                    id="home"
                    title="Welcome to OmniCam"
                    subtitle="Your all-in-one solution for seamless video recording and live streaming."
                />
                <p className={`text-lg md:text-xl text-text-subtle max-w-2xl mx-auto text-center
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-100 ease-out`}>
                    OmniCam combines powerful video recording capabilities with advanced live streaming features, making it the perfect tool for content creators, streamers, and anyone who wants to capture and share their world.
                </p>
            </div> */}
            {/* Render all other sections that make up the home page */}
            <HeroSection />
            <FeatureGridSection />
            <LiveStreamingFeaturesSection />
            <PrivacyAndSecuritySection />
            <CallToAction />
        </>
    );
};

export default HomePageContent;
