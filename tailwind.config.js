/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        success: "#38c172",
        info: "#3490dc",
        dark: "#1a202c",
        light: "#f7fafc",
        transparentDark: "#0003",
      },
    },
    plugins: [],
  },
};
