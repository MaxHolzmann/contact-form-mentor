/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lightgreen: "hsl(148, 38%, 91%)",
      medgreen: "hsl(169, 82%, 27%)",
      themered: "hsl(0, 66%, 54%)",
      medgray: "hsl(186, 15%, 59%)",
      darkergray: "hsl(187, 24%, 22%)",
    },
  },
  plugins: [],
};
