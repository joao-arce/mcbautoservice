/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bgPrimary: "#2b2d33",
        bgYellow: "#B8A74D",
        textHeroBlue: "#2B478B",
      },
    },
  },
  plugins: [],
};
