/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter' : ['Inter', 'sans-serif'],
        'Sourcesans' : ['Source Sans 3', 'sans-serif'],
      },
      fontSize:{
        'display': "64px",
        'small':"20px",
        'h2':"36px",
        'h1':"40px",
        'h4':"20px",
        'h3':"28px",
        'tiny':"18px",
        'p':"20px"
      },
      lineHeight:{
      'h1':"48px",
      'h4':"28px",
      'tiny':"18px",
      'small':"20px",
      'h2':"48px",
      'h3':"32px",
      'p':"32px"
      },

      colors: {
        'primary' : "#0065F7",
        'secondary' : "#F2F2F2",
        'Dark' : "#020817",
        'card':"#f1f1f2"
      }
    },
  },
  plugins: [],
}

