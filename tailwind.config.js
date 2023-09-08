/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'html[class~="dark"]'],
  content: [
    './src/components/**/*.js',
    './src/pages/**/*.{md,mdx}',
    './theme.config.tsx',
  ],
}
