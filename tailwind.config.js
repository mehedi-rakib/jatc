/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA57A", // Match Ant Design primary color
      },
      borderRadius: {
        DEFAULT: "6px", // Match Ant Design border radius
      },
    },
  },
  plugins: [],
};
