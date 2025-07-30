/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Outfit", ...defaultTheme.fontFamily.sans],
        main: ["NotoSans", ...defaultTheme.fontFamily.sans],
        code: ["JetBrainsMono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        logo: "#0c0c0c",
        font: "#333333",
        subfont: "#666666",
        biwa: "#ae7c4f",
        twilight: "#6A7F9B",
      },
    },
  },
  plugins: [],
};
