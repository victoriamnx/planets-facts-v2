/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      darkblue: "#070724",
      darkgrey: "#38384F",
      grey: "#838391",
      purple: "#6f2ed6",
      blue: "#2d68f0",
      smerald: "#419EBB",
      marine: "#1ec2a4",
      red: "#D83A34",
      orange: "#D14C32",
      softorange: "#CD5120",
      yellow: "#EDA249",
      whiteOp: "#FFFFFF1A",
    },
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
