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
        "Gourmete": '#202A25',
        "Iris": "#5F4BB6",
        "Black-Olive": "#232F29",
        "Mint-white": "#F7FFF7",
        "Dark-gourmete": "#161C19"
      }
    },
  },
  plugins: [],
};
export default config;
