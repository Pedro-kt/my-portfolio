/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0f0f10',
        surface: '#1a1a1d',
        accent: '#3b82f6',
      },
    },
  },
  plugins: [],
}