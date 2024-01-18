/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
  "./*.html"],
  theme: {
    extend: {
      fontFamily:{
        rale:["rale"]
      },
      zIndex:{
        '60':'60',
        '70':'70',
        '80':'80',
      },
      width:{
        '100':'400px',
        '125':'500px',
      },
      height:{
        '19':'76px',
        '100':'400px',
        '125':'500px',
      },
      inset:{
        '18':'72px',
      },
    },
  },
  plugins: [],
}

