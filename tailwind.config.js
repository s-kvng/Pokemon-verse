/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'navGrad' : "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);",
        'poke' : "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png')",
      },
      boxShadow: {
        'blueShadow': '#89d4cf 0 0 20px',
      }
    },
  },
  plugins: [],
}

