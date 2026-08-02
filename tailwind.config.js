/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(120, 205, 233)",
        mint: "#98ff98",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        textFadeInOut: {
          "0%": {
            transform: "translateY(0)",
            textShadow: "0 0 0 rgba(120, 205, 233, 0)",
          },
          "50%": {
            transform: "translateY(-8px)",
            textShadow: "0 10px 20px rgba(120, 205, 233, 0.7)",
          },
          "100%": {
            transform: "translateY(0)",
            textShadow: "0 0 0 rgba(120, 205, 233, 0)",
          },
        },
        fadeInOut: {
          "0%": {
            transform: "translateY(0)",
            boxShadow: "0 0 0 rgba(120, 205, 233, 0)",
            borderColor: "rgba(120, 205, 233, 0)",
          },
          "50%": {
            transform: "translateY(-8px)",
            boxShadow: "0 15px 30px rgba(120, 205, 233, 0.7)",
            borderColor: "rgb(120, 205, 233)",
          },
          "100%": {
            transform: "translateY(0)",
            boxShadow: "0 0 0 rgba(120, 205, 233, 0)",
            borderColor: "rgba(120, 205, 233, 0)",
          },
        },
        pulseActive: {
          "0%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.4)" },
          "70%": { boxShadow: "0 0 0 10px rgba(76, 175, 80, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0)" },
        },
      },
      animation: {
        "hero-title": "fadeIn 2s ease-out, textFadeInOut 5s infinite",
        "hero-image": "fadeIn 2s ease-out forwards, fadeInOut 5s infinite",
        "fade-in": "fadeIn 2s ease-out",
      },
    },
  },
  plugins: [],
};
