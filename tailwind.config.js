/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        hd: "1920px",
        "4k": "2560px",
      },
      colors: {
        primary: "#2A133B",
        accent: "#F6BDA3",
        "accent-dark": "#1D012A",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(272deg, #F4947B 0%, #F6BDA3 100%)",
      },
      fontFamily: {
        horizon: "RG-SpaciousBook, sans-serif",
        roboto: "Roboto, sans-serif",
        corinthia: "Corinthia, serif",
      },
      maxWidth: {
        hd: "1920px",
      },
      glow: {
        accent: "box-shadow: 0px 0px 8px 0px rgba(246,189,163,0.56)",
      },
    },
  },
  plugins: [],
};
