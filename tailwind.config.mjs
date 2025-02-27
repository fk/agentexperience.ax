/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff7fee',
        'primary-light': '#ff99f1',
       'primary-dark': '#cc65bf',
       secondary: '#bd84e9',
       'secondary-light': '#cda2ef',
        'text-dark': '#2c3e50',
        'text-light': '#ecf0f1',
      },
     fontFamily: {
       sans: ['Inter Variable', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
       grotesk: ['Space Grotesk Variable', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': { fontFamily: theme('fontFamily.grotesk')},
      });
    },
  ],
}