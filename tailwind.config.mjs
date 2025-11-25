import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
  plugins: [daisyui],
  daisyui: {
    themes: ['light'], //  allow light theme
    darkTheme: false, // disable dark mode entirely in DaisyUI
  },
};
