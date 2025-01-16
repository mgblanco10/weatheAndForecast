/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "creato-medium": ["creato-medium", "sans-serif"],
      },
      keyframes: {
        "border-snake": {
          "0%": {
            "background-position": "0% 50%",
          },
          "100%": {
            "background-position": "200% 50%",
          },
        },
        slider: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "border-snake": "border-snake 6s linear infinite",
        slider: "slider 30s linear infinite",
      },
      colors: {
        customGreen: "#32CD32",
        customBlue: "#4682B4",
      },
    },
  },
  plugins: [],
};
