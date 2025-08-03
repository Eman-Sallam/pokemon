/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        mute: '#6b7280',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'], //  allow light theme
    darkTheme: false, // disable dark mode entirely in DaisyUI
  },
};
