import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#333333',
      },
    },
  },
  plugins: [],
};

export default config;
