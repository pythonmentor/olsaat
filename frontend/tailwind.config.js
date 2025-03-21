/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "1000px", // Redefine the 'md' breakpoint to 900px
        // You can also redefine other breakpoints here if needed
      },
    },
  },
  plugins: [],
};
