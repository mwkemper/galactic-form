import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'printRadioYes': 'inset 1.25rem 1.25rem rgba(22, 163, 74, 1)',
        'printRadioNo': 'inset 1.25rem 1.25rem rgba(239, 68, 68, 1)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
    fontFamily: {
      bebasNeue: 'Bebas Neue',
    }
  },
  plugins: [],
};
export default config;
