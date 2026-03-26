import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        'bg-alt': '#f8fafb',
        primary: '#0d7fc4',
        teal: '#0d9488',
        accent: '#0d7fc4',
        card: '#ffffff',
        border: '#e5eaef',
        muted: '#64748b',
        dim: '#94a3b8',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
