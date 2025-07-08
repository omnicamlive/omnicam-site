OmniCam - Dual Camera Recorder & Live Streamer Website
Project Overview
This repository hosts the official marketing and informational website for OmniCam, a cutting-edge mobile application designed for discreet dual-camera recording and live streaming. The website showcases OmniCam's powerful features, emphasizes its commitment to privacy and security, and provides clear calls to action for users to learn more and download the app.

The website is built with a sleek, futuristic design, incorporating modern UI elements and smooth animations to provide an engaging user experience.

Features
The OmniCam website highlights the following core functionalities and benefits of the application:

Dual-Lens Capture: Simultaneously record from both front and rear cameras.

Scheduled Automation: Set precise times for automated recording and streaming.

Stealth Mode: Record and stream discreetly with the screen off.

Pro Audio Controls: Fine-tune audio quality and enable/disable recording.

Dynamic Zoom: Smoothly adjust video zoom in real-time during capture.

Flexible Storage: Choose internal, SD card, or public media folder storage.

Universal Live Stream: Stream directly to YouTube RTMP or any custom server.

Geo-Timestamping: Embed real-time GPS location data onto your videos.

Timestamp Overlay: Add current date and time watermarks to recordings.

Simultaneous Record & Stream: Record locally while live streaming for instant backup.

Optimized Performance: Battery-efficient and lightweight for extended operation.

Instant Widget Access: Start/stop recording instantly from your home screen widget.

Direct RTMP Integration: Simple and efficient live broadcasting to custom servers.

Automated Stream Scheduling: Plan live events to start and stop automatically.

Location & Time Overlays: Enhance streams with verifiable context.

Your Data Stays Local: Prioritizing privacy by saving recordings locally.

Discreet Background Operation: Record or stream with the screen off or while using other apps.

Secure Access & Ethical Use: Protect your app with a pattern lock and promote responsible use.

Volume Key Quick Controls: Start/stop recording instantly using volume buttons for discretion.

Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

React Intersection Observer: For animating elements as they scroll into view.

Heroicons: A set of free MIT-licensed SVG icons.

React Router DOM: For client-side routing, enabling direct links and navigation within the single-page application. (HashRouter specifically for GitHub Pages compatibility).

Google Gemini API (Imagen 3.0): Integrated for dynamic UI screenshot generation within the Hero Section.

Local Setup
To get a local copy of the project up and running, follow these simple steps.

Prerequisites
Node.js (LTS version recommended)

npm (comes with Node.js) or Yarn

Installation
Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME

Install dependencies:

npm install
# or
yarn install

Configure Tailwind CSS:
Ensure your tailwind.config.js file is correctly configured to include your source files and the extended theme properties (colors, fonts, keyframes, animations) as provided in the project's App.js comments.

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ... (ensure all custom colors, fonts, keyframes, animations are here)
    },
  },
  plugins: [],
};

Also, ensure your main CSS file (e.g., src/index.css) includes the Tailwind directives:

/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add any custom global styles like this if needed */
.bg-dots-pattern {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}

Link CSS in public/index.html:
Verify that your public/index.html file correctly links to the generated Tailwind CSS output and Google Fonts:

<!-- public/index.html -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OmniCam - Dual Camera Recorder & Live Streamer</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/index.js"></script>
</body>

Running the Development Server
To start the development server and see the website in your browser:

Start the Tailwind CSS build process (in a separate terminal):

npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

Start the React development server:

npm start
# or
yarn start

The application will usually open in your browser at http://localhost:3000.

Deployment to GitHub Pages
This project uses react-router-dom with HashRouter for client-side routing, which is ideal for deployment on static hosting services like GitHub Pages because it doesn't require server-side configuration for routing.

Steps to Deploy
Add homepage to package.json:
Open your package.json file and add a homepage property. Replace YOUR_USERNAME and YOUR_REPOSITORY_NAME with your actual GitHub username and repository name.

{
  "name": "omnicam-website",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME", // <--- Add this line
  "dependencies": {
    // ...
  },
  // ...
}

Install gh-pages:
This package helps deploy your React app to GitHub Pages.

npm install --save-dev gh-pages
# or
yarn add --dev gh-pages

Add deploy scripts to package.json:
In your package.json, add the following scripts to the scripts section:

{
  "name": "omnicam-website",
  // ...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build", // This runs 'build' before 'deploy'
    "deploy": "gh-pages -d build" // This deploys the 'build' folder
  },
  // ...
}

Ensure HashRouter is used in App.js:
Confirm that your src/App.js uses HashRouter from react-router-dom.

// src/App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/* This should be HashRouter */}
      {/* ... rest of your app */}
    </Router>
  );
}

Deploy your application:
Run the deploy script:

npm run deploy
# or
yarn deploy

This command will build your application and push the build folder to a gh-pages branch in your repository.

Configure GitHub Pages:
Go to your GitHub repository settings. Under the "Pages" section, select the gh-pages branch as your source and / (root) as the folder. Your site should be live at the homepage URL you specified in package.json.

Usage and Navigation
Once deployed, you can access the website via its GitHub Pages URL (e.g., https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME).

Home Page: The default landing page, showcasing the Hero section, features, live streaming capabilities, and privacy/security information.

Section Navigation: Use the navigation links in the header (e.g., "Features", "Live Stream") to smoothly scroll to the respective sections on the home page.

Privacy Policy: Access the dedicated Privacy Policy page via the "Privacy Policy" link in the header or footer. This page has a direct, shareable URL (e.g., https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/#/privacy-policy).

Contributing
Contributions are welcome! If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

License
This project is open-source and available under the MIT License. (You might want to create a LICENSE.md file in your repository if you haven't already).