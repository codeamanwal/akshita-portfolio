/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/Vector.png')", // custom name
      },
      fontFamily: {
        body: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-domine)", "serif"],
        custom: ["CustomFont", "sans-serif"], // custom font
      },
    },
  },
};
