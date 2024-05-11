import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        transition: {
          'from': {
            left: '-1000px',
            position: 'relative'
          },
          'to': {
            left: '0px',
            position: 'relative'
          }
        },
        opaciting: {
          'from': {
            opacity: '0'
          },
          'to': {
            opacity: '1'
          }
        }
      },
      animation: {
        'transition-box-1s': 'transition 1s ease-in-out',
        'transition-box-2s': 'transition 2s ease-in-out',
        'transition-box-2s-delayed': 'transition 2s ease-in-out 1s',
        'transition-box-3s': 'transition 3s ease-in-out',
        'transition-box-4s': 'transition 4s ease-in-out',
        'opacity-1/2': 'opaciting 0.5s ease-in-out',
        'opacity-1': 'opaciting 1s ease-in-out',


      },
      colors: {
        "Gourmete": '#202A25',
        "Iris": "#5F4BB6",
        "Black-Olive": "#232F29",
        "Mint-white": "#F7FFF7",
        "Dark-gourmete": "#161C19",
        "Wheat-Gourmete": "#414F48"
      }

    },
    fontFamily: {
      'main': 'var(--font-lexend)'
    }
  },
  plugins: [],
};
export default config;
