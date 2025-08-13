/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "var(--color-primary)", tertiary: "var(--color-tertiary)" },
      boxShadow: { soft: "0 10px 20px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
};
