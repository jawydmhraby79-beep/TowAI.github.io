/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueGradient: {
          start: '#021024',
          end: '#C1E8FF',
        },
        greenAccent: {
          start: '#0D1F23',
          end: '#5A636A',
        },
      },
      backgroundImage: {
        'sci-fi-gradient': 'linear-gradient(to bottom, #021024, #C1E8FF)',
      },
    },
  },
  plugins: [],
};
