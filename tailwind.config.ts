import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        musko: {
          navyDark: '#011736',
          navy: '#022451',
          navyLight: '#083B7A',
          surface: '#F8FAFC',
          surfaceDark: '#011C3D',
          card: '#FFFFFF',
          cardHover: '#F1F5F9',
          border: '#E2E8F0',
          borderNavy: '#0F3870',
          gold: '#ECB209',
          goldLight: '#F5BE42',
          goldMuted: '#C29007',
          slate: '#475569',
          muted: '#64748B',
          sand: '#FDFBF7',
          white: '#FFFFFF',
        },
        atelier: {
          dark: '#07111F',
          surface: '#0E1F3B',
          card: '#122544',
          border: '#1B3762',
          gold: '#E5A823',
          goldLight: '#F5BE42',
          sand: '#F8FAFC',
          paper: '#F1F5F9',
          sage: '#254A82',
          muted: '#8FA2BF',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to: { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out forwards',
      }
    },
  },
  plugins: [],
};

export default config;
