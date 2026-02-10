import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'stratri-cream': 'var(--color-stratri-cream)',
        'stratri-dark': 'var(--color-stratri-dark)',
        'stratri-accent': 'var(--color-stratri-accent)',
        'stratri-light': 'var(--color-stratri-light)',
        'stratri-divider': 'var(--color-stratri-divider)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['IBM Plex Serif', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'slide-in-left': 'slideInLeft 0.3s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'scale-in': 'scaleIn 0.25s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'ink-float': 'inkFloat 8s ease-in-out infinite',
        'ink-pulse': 'inkPulse 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        inkFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-3px, -5px)' },
        },
        inkPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
