import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#0f172a',
          foreground: '#f8fafc'
        },
        muted: '#f1f5f9',
        accent: '#38bdf8'
      }
    }
  },
  plugins: []
};

export default config;
