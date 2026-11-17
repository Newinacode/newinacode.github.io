/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        valored: "#ff4655",
        valoblue: "#152431",
        fortnite: "#03a7ff",
        slate: {
          950: "#020617",
        },
        indigo: {
          950: "#1e1b4b",
        },
      },
      fontFamily: {
        sans: [
          '"Segoe UI"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SFMono-Regular"',
          "Consolas",
          '"Liberation Mono"',
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        desktop: "0 32px 90px -30px rgba(0,0,0,0.95)",
      },
    },
  },
  plugins: [],
};
