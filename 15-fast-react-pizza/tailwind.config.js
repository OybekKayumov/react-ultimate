/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace'
    },    
    extend: {
      color: {
        pizza: "#123456"
      },
      height: {
        screen: '100dvh'
      }
    },
  },
  plugins: [],
}

