/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B0D1C",
        plum: "#4B264D",
        plumLight: "#351430",
        magenta: "#A72B67",
        amber: "#F7C325",
        spoke: "#D78FCC",
        mist: "#FFF5F0",
        mistDim: "#E7CBD9",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 10px 28px rgba(247, 195, 37, 0.32)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 50% 0%, rgba(247,195,37,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
