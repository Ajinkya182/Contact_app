/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#CDE990",
        "dark-yellow": "#FCCA3F",
        orange: "#BE3144",
      },
    },
  },
  plugins: [],
};
