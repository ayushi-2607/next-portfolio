import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#D7D7D7',
        nav: '#334365'
      },
      fontFamily: {
        sans: ['Georgia', 'serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
