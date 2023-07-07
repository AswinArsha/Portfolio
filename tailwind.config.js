/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes:true,
    base: true, 
    styled: true,
    utils: true, 
    prefix: "", 
    logs: true, 
  },
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

}

