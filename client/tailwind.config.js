module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      },
      keyframes:{
        pulse: {
          '0%, 100%' :{
            opacity: 1
          }, 
          '50%': {
            opacity: .3
          }
        }
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
}