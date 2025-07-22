import React, { useState, useEffect } from 'react';

// Placeholder for Lucide icons if not directly available (for demonstration purposes)
const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>
  </svg>
);

const SmartphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const App = () => {
  // State for managing mobile navigation visibility
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close nav when screen resizes to desktop or on initial load if wide enough
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint for Tailwind
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 fixed w-full z-50">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Changed href to "/" for accessibility, keeping onClick for smooth scroll */}
          <a
            href="/" // Changed from "#" to "/"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link navigation
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-gray-100 transition-colors"
          >
            Omnicam
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-100">Features</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-100">Testimonials</a></li>
            <li><a href="#download" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-100">Download</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-md p-2 hover:bg-gray-100">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile navigation menu */}
        {isNavOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-2">
            <ul className="flex flex-col items-center space-y-2">
              <li><a href="#features" onClick={toggleNav} className="block w-full text-center py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md transition-colors">Features</a></li>
              <li><a href="#testimonials" onClick={toggleNav} className="block w-full text-center py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md transition-colors">Testimonials</a></li>
              <li><a href="#download" onClick={toggleNav} className="block w-full text-center py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md transition-colors">Download</a></li>
              <li><a href="#contact" onClick={toggleNav} className="block w-full text-center py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md transition-colors">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 md:py-32 overflow-hidden pt-28 md:pt-36">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
              Capture Life's Moments with <span className="text-yellow-300">Omnicam</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
              Your all-in-one camera app for stunning photos and videos, enhanced with AI.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up delay-400">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center group">
                Download Now
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-right">
            {/* Placeholder for app screenshot */}
            <img
              src="https://placehold.co/400x600/6366F1/FFFFFF?text=Omnicam+App+Screenshot"
              alt="Omnicam App Screenshot"
              className="w-64 md:w-80 lg:w-96 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
        {/* Abstract shapes for background effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full -top-10 -left-10 animate-pulse-slow"></div>
          <div className="absolute w-60 h-60 bg-white opacity-10 rounded-full -bottom-20 -right-20 animate-pulse-slow delay-500"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Unlock Powerful Features</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Omnicam is packed with innovative tools to make your photos and videos stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <CameraIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Powered Enhancements</h3>
              <p className="text-gray-600">
                Automatically enhance your photos with smart algorithms for perfect lighting, color, and detail.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <SmartphoneIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Pro-Level Controls</h3>
              <p className="text-gray-600">
                Take full control with manual settings for ISO, shutter speed, white balance, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <StarIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cinematic Video Modes</h3>
              <p className="text-gray-600">
                Shoot stunning 4K videos with advanced stabilization and creative filters.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-12 h-12">
                  <path d="M5 15h4l-2 2-2-2Z"/><path d="M18 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><circle cx="8.5" cy="8.5" r="1.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Intelligent Object Recognition</h3>
              <p className="text-gray-600">
                Smartly identifies subjects to optimize focus and exposure for perfect shots every time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-12 h-12">
                  <circle cx="12" cy="12" r="10"/><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/><path d="M13.5 10.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Creative Filters & Effects</h3>
              <p className="text-gray-600">
                Apply a wide range of artistic filters and effects in real-time to express your unique style.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2 w-12 h-12">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Seamless Sharing</h3>
              <p className="text-gray-600">
                Share your masterpieces directly to social media or with friends and family with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from satisfied users who have transformed their photography with Omnicam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                "Omnicam has completely changed how I take photos. The AI enhancements are incredible, and the manual controls give me so much flexibility!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/48x48/E0E7FF/4F46E5?text=JD"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-300"
                />
                <div>
                  <p className="font-semibold text-gray-900">Jane Doe</p>
                  <p className="text-sm text-gray-500">Amateur Photographer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                "I love the cinematic video modes! My travel vlogs look so much more professional now. Highly recommend Omnicam for content creators."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/48x48/E0E7FF/4F46E5?text=MS"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-300"
                />
                <div>
                  <p className="font-semibold text-gray-900">Mark Smith</p>
                  <p className="text-sm text-gray-500">Vlogger</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                "The intelligent object recognition is a game-changer. My photos are always in focus, even with fast-moving subjects. Fantastic app!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/48x48/E0E7FF/4F46E5?text=AL"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-300"
                />
                <div>
                  <p className="font-semibold text-gray-900">Anna Lee</p>
                  <p className="text-sm text-gray-500">Casual User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Download Section */}
      <section id="download" className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Photography?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Download Omnicam today and start capturing breathtaking moments with ease. Available on iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple w-6 h-6 mr-3">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-4 3.78 0 2.86-2 2.06-2 9.22Z"/><path d="M10 1.5C10 2 10 2.5 10 3c0 1.5-2 2-2 4.5 0 2.5 2 3 2 4.5s-1 2-2 2.5c-2.5 0-4.5-2-4.5-5.5C3.5 6 6 2 10 1.5Z"/>
              </svg>
              Download for iOS
            </button>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-android w-6 h-6 mr-3">
                <path d="M18 10a6 6 0 0 0-12 0v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/>
              </svg>
              Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold text-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Omnicam. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="/support" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations (if not using a separate CSS file) */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .font-inter {
            font-family: 'Inter', sans-serif;
        }

        /* Keyframe animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }

        /* Apply animations */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s infinite ease-in-out;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </div>
  );
};

export default App;
