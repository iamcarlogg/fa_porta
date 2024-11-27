/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        fontFamily: {
        'serif': ["Old Standard TT", "serif"],
        'sans': ['"Roboto"', 'sans-serif'],
      },
        
      colors:{
        cyanm: "#55BDC3",
        cyanDark: "#1C99A3",
        cyanLight: "#95DEE2",
        purplem: "#C1A6DD",
        purpleDark: "#BB86FF",
        purpleDarker: "#6F36B9",
        cyanDarker: "#007f8f",
        pinky: "#F7EAFF",
        fovial: "#ED6F20",
        fovialgreen: "#D0D771",
        pinku: "#FFC7CD",
        pinkuDark: "#F86A74"
      },
      backgroundImage:{
        'welcome': "url('welcome.svg')",
        'gradient-welcome': 'linear-gradient(to bottom, white 1%, var(--tw-colors-cyanm) 90%)',
        'welcome-question': "url('preguntainicio.png')",
        'fovialmarco': "url('fovialmarco.svg')",
      }
    },

  },
  plugins: [
   
  ],
}

