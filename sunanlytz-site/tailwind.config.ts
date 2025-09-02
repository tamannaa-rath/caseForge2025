import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#dbeeff',
          200: '#b6dcff',
          300: '#8cc6ff',
          400: '#56a7ff',
          500: '#2f88ff',
          600: '#1867db',
          700: '#114eaa',
          800: '#0f4086',
          900: '#0f376e'
        }
      }
    }
  },
  plugins: []
};

export default config;


