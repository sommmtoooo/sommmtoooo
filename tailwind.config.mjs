/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#FFE3E3",
        black: "#191919",
        primary: "#41644A",
        white: "#FFFFFF",
        border: "#DDDDDD",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
