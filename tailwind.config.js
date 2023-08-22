/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/logo.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
