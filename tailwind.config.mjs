/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tertiary: "var(--tertiary)",
        primary: "var(--primary)",
        primarycolorgradient: "var(--primarycolorgradient)",
        blacktransgradient: "var(--blacktransgradient)",
        primaryred: "var(--primaryred)",
        primaryblue: "var(--primaryblue)",
      },
    },
  },
  plugins: [],
};
