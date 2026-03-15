/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3ED",
        surface: "#FFFDF9",
        ink: "#1F2937",
        muted: "#5B6472",
        brandPurple: "#7C3AED",
        brandBlue: "#2563EB",
        brandOrange: "#F97316",
        lavenderTint: "#F3E8FF",
        blueTint: "#DBEAFE",
        peachTint: "#FFEDD5",
      },
    },
  },
  plugins: [],
}