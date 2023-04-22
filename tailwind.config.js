/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'user-edit':'3fr 3fr 1fr',
      },
      gridTemplateRows:{
        'app-grid':'10fr 1.2fr'
      },
      fontFamily:{
        karla:['Karla',' sans-serif'],
        lobsterone:['Lobster',' cursive'],
      }

    },
  },
  plugins: [],
}

