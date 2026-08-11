/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // SlushTec brand tokens (from docs/brand)
        iron: '#0f0e0d',
        'warm-earth': '#de865b',
        'golden-glow': '#e8bd79',
        'burnt-adobe': '#904d2b',
        sage: '#659176',
        surface: '#1c1814',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
