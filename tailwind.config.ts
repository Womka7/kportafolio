import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whites: "var(--white)",
        greyl: "var(--greyl)",
        greenaqua: "var(--green-aqua)",
        greenforest: "var(--green-forest)",
        salmon:"var(--salmon)",
      },
    },
  },
  plugins: [],
};
export default config;
