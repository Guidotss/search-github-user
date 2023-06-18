/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: '#0079FF',
        gray: '#697C9A',
        steel_blue: '#4B6A9B',
        midnight_blue: '#2B3442',
        ghost_white: '#F6F8FF',
        white: '#FEFEFE',
        dark_navy: '#141D2F',
        deep_indigo: '#1E2A47',
      }
    },
  },
  plugins: [],
}
