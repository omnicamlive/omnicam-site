import React from 'react';
import { useInView } from 'react-intersection-observer';

// SectionHeader component (re-used for consistent styling)
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

// PrivacyPolicySection.jsx - Component for the Privacy Policy content
const PrivacyPolicySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="privacy-policy-content" ref={ref} className="py-16 md:py-24 bg-dark-primary text-text-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className={`text-3xl md:text-5xl font-bold mb-8 text-center
          ${inView ? 'opacity-100 slide-in-up' : 'opacity-0'} transition-all duration-700 ease-out`}>
          OmniCam Privacy Policy
        </h2>
        <p className={`text-text-subtle text-center mb-12
          ${inView ? 'opacity-100 slide-in-up' : 'opacity-0'} transition-all duration-700 delay-100 ease-out`}>
          Last Updated: 19th June 2025
        </p>

        <div className={`space-y-8 text-text-base leading-relaxed
          ${inView ? 'opacity-100 fade-in' : 'opacity-0'} transition-all duration-1000 delay-200 ease-out`}>
          <p>
            OmniCam ("we", "our", or "us") respects your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our application.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-accent-cyan mb-3">Information We Collect</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Camera Access:</span> Our app accesses your device's front and back cameras to record video as per your instruction. No video or images are uploaded or shared by the app *unless you initiate a live stream to an external service*.
              </li>
              <li>
                <span className="font-semibold">Location Data:</span> If you enable the Geo-Timestamping feature, OmniCam accesses your device's GPS location to embed it directly onto your recorded videos or live streams. This location data is processed on your device and is not collected or stored by OmniCam.
              </li>
              <li>
                <span className="font-semibold">No Personal Data Collection by OmniCam:</span> We do not collect, store, or share any personal information. All data processing (recording, timestamping) occurs on your device. When you use live streaming, video and audio are transmitted directly to the external service you configure, and we do not store or control that streamed data.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-cyan mb-3">Permissions We Request</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Camera and Audio Recording:</span> Required for video recording with sound functionality.</li>
              <li><span className="font-semibold">Storage Access:</span> Necessary to save recorded videos to your device's storage.</li>
              <li><span className="font-semibold">Location Access (Precise Location):</span> Required to embed GPS location data onto videos/streams when Geo-Timestamping is enabled.</li>
              <li><span className="font-semibold">Notifications:</span> To keep you informed about recording status and app functionality.</li>
              <li><span className="font-semibold">Foreground Services:</span> Enables continuous recording and live streaming even when the app is running in the background.</li>
              <li><span className="font-semibold">Media Projection:</span> Required for screen recording capabilities.</li>
              <li><span className="font-semibold">Battery Optimization Exception:</span> To ensure reliable background recording and streaming.</li>
              <li><span className="font-semibold">Overlay Permission:</span> For displaying recording controls while using other apps.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-cyan mb-3">How We Use Permissions</h3>
            <p>
              All permissions are used strictly for their intended purposes to provide core app functionality (recording, live streaming, and related features). We do not use these permissions for any other purposes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-cyan mb-3">Your Data Security</h3>
            <p>
              All recorded video and audio data remains exclusively on your device. For live streaming, video and audio are transmitted directly from your device to the external streaming service (e.g., YouTube RTMP) you configure. We do not transmit, collect, or store any user data on our servers, including streamed content.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-cyan mb-3">Changes to this Privacy Policy</h3>
            <p>
              We may update this policy. Changes will be posted within the app or on this page.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-cyan mb-3">Contact Us</h3>
            <p>
              If you have any questions about this policy, please email: <a href="mailto:omnicamhelp@gmail.com" className="text-accent-magenta hover:underline">omnicamhelp@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
