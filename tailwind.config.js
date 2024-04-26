/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,css}", "./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        customGreen: "#008080",
      },
    },
  },
  plugins: [],
};
