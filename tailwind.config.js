/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "neumorphism-light":
          "radial-gradient(circle, rgba(255, 255, 255, 0.6), rgba(240, 240, 243, 1))",
        "neumorphism-dark":
          "radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(26, 26, 26, 1))",
      },
      colors: {
        purple: {
          200: "#E7E0FF",
          300: "#C5B2FF",
          400: "#7D5FFF",
          500: "#5932EA",
          600: "#4332A7",
          700: "#2E2369",
        },
        blueGray: {
          200: "#EBF2FB",
          300: "#D0E1F6",
          400: "#8EA5CC",
          500: "#65788C",
          600: "#4A6074",
          700: "#344357",
        },
        gray: {
          200: "#F1F3F5",
          300: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#374151",
        },
        darkBackground: "#1C1E22",
      },
      boxShadow: {
        "inset-dark":
          "inset 8px 8px 16px #151619, inset -8px -8px 16px #23262B",
        neumorphism: `
          inset 2px 2px 5px rgba(0, 0, 0, 0.6),
          inset -2px -2px 5px rgba(255, 255, 255, 0.05),
          4px 4px 8px rgba(0, 0, 0, 0.4),
          -4px -4px 8px rgba(255, 255, 255, 0.05)
        `,
        cardNeumorphism: `
          inset 8px 8px 16px #151619,
          inset -8px -8px 16px #23262B,
          4px 4px 8px rgba(0, 0, 0, 0.4),
          -4px -4px 8px rgba(255, 255, 255, 0.05)
        `,
        // New setting for ContactForm
        formNeumorphism: `
          inset 4px 4px 8px #0e0f12, /* Dark shadow */
          inset -4px -4px 8px #282c34 /* Light shadow */
        `,
      },
      borderRadius: {
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
