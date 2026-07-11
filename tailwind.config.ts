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
        // Monitor design system (main site)
        display: ['var(--font-unbounded)', 'system-ui', 'sans-serif'],
        golos: ['var(--font-golos)', 'system-ui', 'sans-serif'],
        plex: ['var(--font-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Monitor design system (main site): screening-room palette
        ink: '#0A0C10',
        panel: {
          DEFAULT: '#12151B',
          raised: '#171B22',
        },
        line: {
          DEFAULT: '#242A34',
          faint: '#1A1F27',
        },
        bone: '#EFECE3',
        dim: '#98A0AC',
        rec: '#F23D30',
        ambr: '#E3A84E',
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
