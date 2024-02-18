/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        red: "#D83A34",
        orange: "#CD5120",
        coolRed: "#D14C32",
        yellow: "#EDA249",
        ciano: "#1ec2a4",
        coolBlue: "#419EBB",
        blue: "#2d68f0",
        magenta: "#6f2ed6",
        darkGray: "#38384F",
        gray: "#838391",
        nocturne: "#070724",
      },
    },
  },
  plugins: [],
};
