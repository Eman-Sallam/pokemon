/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
};
