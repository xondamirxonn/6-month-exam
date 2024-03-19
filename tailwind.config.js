/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "120px",
      },
      colors: {
        black: "#19191C",
        gray: "#C2C2C2",
        red: "#EA3838",
        wheat: "#F6F6F6",
        primary: "#298BE2",
      },
      fontFamily: {
        Roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
