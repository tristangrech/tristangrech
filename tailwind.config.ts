import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-noto-sans)', 'var(--font-cairo-play)', 'var(--font-noto-sans-sc)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          alt: 'rgb(var(--surface-alt) / <alpha-value>)',
          card: 'rgb(var(--surface-card) / <alpha-value>)',
          elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
          nav: 'rgb(var(--surface-nav) / <alpha-value>)',
        },
        'on-surface': {
          DEFAULT: 'rgb(var(--on-surface) / <alpha-value>)',
          secondary: 'rgb(var(--on-surface-secondary) / <alpha-value>)',
          muted: 'rgb(var(--on-surface-muted) / <alpha-value>)',
        },
        outline: {
          DEFAULT: 'rgb(var(--outline) / <alpha-value>)',
          faint: 'rgb(var(--outline-faint) / <alpha-value>)',
        },
        primary: {
          DEFAULT: '#cc785c',
          light: '#d97757',
          dark: '#b8694f',
        },
      },
      letterSpacing: {
        'tight-display': '-0.02em',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
