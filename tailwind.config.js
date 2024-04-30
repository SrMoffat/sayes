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
        customGray: "#111827",
        customTeal: "#00B897",
        customBlue: "#1877F2",
        customGreen: "#008080",
        customYellow: "#FFB81C",
        customEmerald: "#76FCB2",
        inputBackground: "#20202005",
        darkIconBackground: "#20202080",
      },
    },
  },
  plugins: [],
};
