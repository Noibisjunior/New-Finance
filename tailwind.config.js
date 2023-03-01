/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "rgba(16, 16, 16, 0.8)",
        black: "#000",
        whitesmoke: "#f5f5f5",
        "whitealpha-200": "rgba(255, 255, 255, 0.08)",
        mediumspringgreen: "#00ffa3",
      },
      fontFamily: {
        poppins: "Poppins",
        "ofl-sorts-mill-goudy-tt": "'OFL Sorts Mill Goudy TT'",
        manrope: "Manrope",
      },
    },
    fontSize: { sm: "20px", base: "30px", lg: "40px" },
  },
  corePlugins: { preflight: false },
};
