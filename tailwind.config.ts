import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          50: '#f0f5f1',
          100: '#dae6df',
          200: '#bad1c4',
          300: '#91b4a3',
          400: '#69927f',
          500: '#4b7562',
          600: '#3a5d4d',
          700: '#314b3f',
          800: '#293e35',
          900: '#22332c',
          950: '#111d18',
        },
        charcoal: {
          DEFAULT: '#1c1f20',
          800: '#2b2f31',
          900: '#1c1f20',
          950: '#111314',
        },
        amber: {
          DEFAULT: '#f59e0b',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
