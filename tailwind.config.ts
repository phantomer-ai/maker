import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

