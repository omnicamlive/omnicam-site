// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // This line is important
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'], // Add Inter font
//       },
//     },
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // This line is important
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'], // Add Inter font
//       },
//       transitionDelay: {
//         '0': '0ms',
//         '100': '100ms',
//         '200': '200ms',
//         '300': '300ms',
//         // ... add more as needed
//         '700': '700ms',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeInUpScale: {
//             '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
//             '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
//         },
//         pulseSlow: {
//           '0%, 100%': { opacity: '0.1' },
//           '50%': { opacity: '0.15' },
//         },
//       },
//       animation: {
//         'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
//         'fade-in-up-scale': 'fadeInUpScale 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards', // easeOutBack-like
//         'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//     },
//   },
//   plugins: [],
// };


// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'dark-primary': '#0D1117', // Darkest background
//         'dark-secondary': '#161B22', // Slightly lighter dark for sections
//         'accent-cyan': '#00F0FF', // Bright cyan for highlights
//         'accent-magenta': '#FF00FF', // Bright magenta for secondary highlights
//         'text-base': '#C9D1D9', // Light gray text
//         'text-subtle': '#8B949E', // Muted text
//         'blue-gradient-start': '#3b82f6', // Original accent-blue
//         'blue-gradient-end': '#2563eb', // A slightly darker blue for gradient
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'], // Using Inter font
//         mono: ['Space Mono', 'monospace'], // For code-like elements
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideInUp: {
//           '0%': { transform: 'translateY(50px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         slideInLeft: {
//           '0%': { transform: 'translateX(-50px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideInRight: {
//           '0%': { transform: 'translateX(50px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         zoomIn: {
//           '0%': { transform: 'scale(0.8)', opacity: '0' },
//           '100%': { transform: 'scale(1)', opacity: '1' },
//         },
//         floatSubtle: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-8px)' },
//         },
//         pulseBorder: {
//           '0%, 100%': { borderColor: 'rgba(0, 240, 255, 0.3)' },
//           '50%': { borderColor: 'rgba(0, 240, 255, 0.8)' },
//         },
//         pulseGlow: { // Enhanced glow
//           '0%, 100%': { boxShadow: '0 0 0px rgba(59, 130, 246, 0.4)' },
//           '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.9), 0 0 40px rgba(59, 130, 246, 0.6)' },
//         },
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.8s ease-out forwards',
//         'slide-in-up': 'slideInUp 0.8s ease-out forwards',
//         'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
//         'slide-in-right': 'slideInRight 0.8s ease-out forwards',
//         'zoom-in': 'zoomIn 0.8s ease-out forwards',
//         'float-subtle': 'floatSubtle 3s ease-in-out infinite',
//         'pulse-border': 'pulseBorder 2s ease-in-out infinite',
//         'pulse-glow': 'pulseGlow 2s ease-in-out infinite', // Ensure this is active
//       },
//       transitionDelay: {
//         '0': '0ms',
//         '100': '100ms',
//         '200': '200ms',
//         '300': '300ms',
//         '400': '400ms',
//         '500': '500ms',
//         '600': '600ms',
//         '700': '700ms',
//         '800': '800ms',
//         '900': '900ms',
//         '1000': '1000ms',
//       },
//     },
//   },
//   plugins: [],
// };




module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This glob pattern should be in your actual tailwind.config.js
  ],
  theme: {
    extend: {
      
      colors: {
        'dark-primary': '#0D1117', // Darkest background (Slate-900 like)
        'dark-secondary': '#161B22', // Slightly lighter dark for sections (Slate-800 like)
        'accent-cyan': '#00F0FF', // Bright cyan for highlights
        'accent-magenta': '#FF00FF', // Bright magenta for secondary highlights
        'text-base': '#C9D1D9', // Light gray text (Slate-50 like)
        'text-subtle': '#8B949E', // Muted text (Slate-400 like)
        'blue-gradient-start': '#3b82f6', // Original accent-blue (Blue-500)
        'blue-gradient-end': '#2563eb', // A slightly darker blue for gradient (Blue-600)
        'light-grey-bg': '#F0F2F5', // Example: a very light grey
        'soft-blue-bg': '#1A2B3C', // Example: a softer dark blue
        'text-light': '#E2E8F0', // A general light text color
        'text-muted': '#94A3B8', // A muted text color for footers, etc.
        'primary-button-bg': '#3B82F6', // Primary button background
        'primary-button-hover-bg': '#2563EB', // Primary button hover background
        'secondary-button-bg': '#FBBF24', // Secondary button background
        'secondary-button-hover-bg': '#F59E0B', // Secondary button hover background
        'border-color': '#E2E8F0', // Border color for subtle borders
        'card-bg': '#1E293B', // Card background color
        'card-hover-bg': '#334155', // Card hover background color
        'gradient-start': '#3B82F6', // Gradient start color
        'gradient-end': '#2563EB', // Gradient end color
        'error-red': '#EF4444', // Error color
        'success-green': '#10B981', // Success color
        'warning-yellow': '#F59E0B', // Warning color
        'info-blue': '#3B82F6', // Info color
        'shadow-color': 'rgba(0, 0, 0, 0.1)', // Subtle shadow color
        'highlight-bg': '#F0F9FF', // Highlight background color
        'highlight-text': '#0EA5E9', // Highlight text color  
        'soft-blue-bg': '#1A2B3C', // Soft dark blue background
        'dark-blue-bg': '#0D1117', // Dark blue background
        'light-blue-bg': '#F0F2F5', // Light blue background
        'dark-text': '#C9D1D9', // Light gray text for dark
        'light-text': '#1F2937', // Dark gray text for light backgrounds
        'primary-bg': '#0D1117', // Primary background color
        'secondary-bg': '#161B22', // Secondary background color
        'accent-bg': '#00F0FF', // Accent background color
        'accent-text': '#FF00FF', // Accent text color
        'button-bg': '#3B82F6', // Button background color
        'button-hover-bg': '#2563EB', // Button hover background color
        'button-text': '#FFFFFF', // Button text color
        'card-bg': '#1E293B', // Card background color
        'card-hover-bg': '#334155', // Card hover background color
        'footer-bg': '#0D1117', // Footer background color
        'footer-text': '#C9D1D9', // Footer text color
        'link-text': '#3B82F6', // Link text color
        'link-hover-text': '#2563EB', // Link hover text color
        'input-bg': '#161B22', // Input background color
        'input-border': '#3B82F6', // Input border color
        'input-text': '#C9D1D9', // Input text color
        'input-placeholder': '#8B949E', // Input placeholder color
        'modal-bg': '#1E293B', // Modal background color
        'modal-overlay': 'rgba(0, 0, 0, 0.5)', // Modal overlay color
        'tooltip-bg': '#0D1117', // Tooltip background color
        'tooltip-text': '#C9D1D9', // Tooltip text color
        'badge-bg': '#3B82F6', // Badge background color
        'badge-text': '#FFFFFF', // Badge text color

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Primary font
        mono: ['"Space Mono"', 'monospace'], // Monospace font for techy feel
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseBorder: {
          '0%, 100%': { borderColor: 'rgba(0, 240, 255, 0.3)' },
          '50%': { borderColor: 'rgba(0, 240, 255, 0.8)' },
        },
        pulseGlow: { // Enhanced glow
          '0%, 100%': { boxShadow: '0 0 0px rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.9), 0 0 40px rgba(59, 130, 246, 0.6)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'float-subtle': 'floatSubtle 3s ease-in-out infinite',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};