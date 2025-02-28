/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Outfit", ...defaultTheme.fontFamily.sans],
        body: ["MPLUS2", ...defaultTheme.fontFamily.sans],
        code: ["JetBrainsMono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fontcolor: "#333333",
      },
    },
  },
  plugins: [],
};
