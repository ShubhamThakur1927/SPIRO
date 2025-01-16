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
        'Sourcesans' : ['Source Sans 3', 'serif'],
      },
      backgroundImage:{
        "hero":"url('../assets/hero.png')",
      },
      fontSize:{
        'display': "56px",
        'small':"20px",
        'h2':"36px",
        'h1':"40px",
        'h4':"20px",
        'h3':"28px",
        'tiny':"16px",
        'h5':"18px",
        'h9':"122px",
        'l1':"40px"
      },
      lineHeight:{
      'display':"64px",
      'h1':"48px",
      'h4':"28px",
      'tiny':"18px",
      'small':"32px",
      'h2':"48px",
      'h3':"32px",
      'h5':"20px",
      'h9':"64px",
      },

      colors: {
        'primary':"#0056d2",
        'secondary':"#F2F2F2",
        'Dark' : "#020817",
        'main':"#f1f1f2",
        'trip':"#4d4d4d",
        'card':"#F5F5F5",
        'rips':"#e4e4e4",
        'body':"#1a1a1a",
        'body-2':"#4d4d4d",
        'bagrd':"#ffffff"

      }
    },
  },
  plugins: [],
}

