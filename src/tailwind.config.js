/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/Components/**/*.{js,ts,jsx,tsx,mdx}", // <-- Har ehtimolga qarshi buni ham qo'shib qo'ying
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};