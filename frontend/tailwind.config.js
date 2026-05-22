/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f5f0e8",
        sand2: "#ede8de",
        sand3: "#ddd6c8",
        ink: "#1e1d1a",
        ink2: "#5a5750",
        ink3: "#9a9690",
        forest: "#2d5a3d",
        forestl: "#3d7a54",
        forestbg: "#eef4f0",
        rust: "#c0502a",
        rustbg: "#fdf0eb",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
