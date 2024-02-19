
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.js', "./src/components/*.{js,jsx,ts,tsx}", "./src/screens/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: ['Poppins_700Bold'],
        poppinsRegular: ['Poppins_400Regular'],
        poppinsMedium: ['Poppins_500Medium']
      }
    },
  },
  plugins: [],
}

