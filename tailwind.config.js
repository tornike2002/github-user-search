/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        darkBlue: "#222731",
        lightBlue: "#697C9A",
        textContent: "#4B6A9B",
        textTags: "#0079FF",
        dashColor: "#2B3442",
      },
      backgroundColor: {
        lightWhite: "#F6F8FF",
        darkModeMainBg: "#141D2F",
        darkModeLightBg: "#1E2A47",
        lightBgButton: "#60ABFF",
      },
      boxShadow: {
        "input-shadow": "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
    },
  },
  plugins: [],
};
