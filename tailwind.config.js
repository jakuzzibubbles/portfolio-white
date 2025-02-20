/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
        'yellow-700': '#F59E0B',
        'yellow-900': '#B45309',
    },
  },
},
  plugins: [],
};
