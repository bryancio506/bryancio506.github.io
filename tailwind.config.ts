import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#18181b',
          soft: '#3f3f46',
          muted: '#71717a',
          faint: '#a1a1aa',
        },
        paper: '#ffffff',
        surface: '#fafaf9',
        line: '#e7e5e4',
        accent: {
          DEFAULT: '#2f6df0',
          soft: '#eaf1fe',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '68rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};

export default config;
