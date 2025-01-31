// * @type {import('tailwindcss').Config} 
module.exports = {
  mode: 'jit', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      height: {
        112: '28rem',
      },
      colors: {
        'custom-dark': '#1b1d21',
        'custom-night': '#2e3138',
        'sidebar': '#1f2126',
        'custom-night-hover': '#3d414a',
        'group': '#201c34',
        'custom-gray': '#0a0a0a',
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [],
};