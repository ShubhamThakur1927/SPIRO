/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      "colors": {
        'Spiro-blue' : '#0056D2',
      }
    },
  },
  plugins: [],
}

