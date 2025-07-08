# OmniCam – Dual Camera Background Recorder & Live Streamer Mobile App


## 📱 Project Overview

This repository hosts the official marketing and informational website for **OmniCam**, a next-generation mobile application engineered for discreet **dual-camera recording** and **live streaming**. The website showcases OmniCam's robust feature set, privacy-first approach, and provides direct calls-to-action for users to explore and download the application.

The site is designed with a sleek, modern interface, incorporating smooth animations and an intuitive layout for optimal user engagement.

---

## 🌟 Key Features

The OmniCam app is power-packed with features highlighted on the website:

- **Dual-Lens Capture** – Simultaneously record from front and rear cameras.
- **Scheduled Automation** – Automate recording/streaming at custom times.
- **Stealth Mode** – Record with the screen off for discreet usage.
- **Pro Audio Controls** – Toggle mic input and adjust audio fidelity.
- **Dynamic Zoom** – Real-time smooth video zoom controls.
- **Flexible Storage** – Record to internal, SD card, or public media folder.
- **Universal Live Stream** – Stream to YouTube RTMP or any custom server.
- **Geo-Timestamping** – Embed GPS data into your videos.
- **Timestamp Overlay** – Watermark recordings with current date and time.
- **Record & Stream Simultaneously** – Backup while broadcasting.
- **Battery Optimized** – Lightweight and efficient for extended sessions.
- **Home Screen Widget** – Quick-access recording from your launcher.
- **RTMP Integration** – Fast setup for live streaming.
- **Automated Scheduling** – Schedule your broadcasts in advance.
- **Secure Pattern Lock** – Protect access and promote responsible usage.
- **Volume Key Controls** – Use volume buttons to start/stop recordings.
- **Discreet Background Operation** – Record/stream while using other apps.
- **Local Data Priority** – Files are stored securely on-device.

---

## 🛠️ Technologies Used

- **React** – Front-end library for building dynamic UIs.
- **Tailwind CSS** – Utility-first CSS framework for rapid styling.
- **React Router DOM (HashRouter)** – For seamless client-side navigation.
- **React Intersection Observer** – Scroll-based UI animations.
- **Heroicons** – Beautiful MIT-licensed SVG icons.
- **Google Gemini API (Imagen 3.0)** – Generates dynamic UI previews.

---

## 🧑‍💻 Local Setup

### 🔧 Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js) or Yarn

### 📥 Installation

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
npm install # or yarn install

npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
npm start # or yarn start

"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME",

npm install --save-dev gh-pages # or yarn add --dev gh-pages

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}


import { HashRouter as Router, Routes, Route } from 'react-router-dom';

npm run deploy # or yarn deploy

In repository settings > Pages, select gh-pages branch as source and / as the root folder.