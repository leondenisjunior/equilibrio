/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      colors: {
        primary: '#1E3F85',
        white: '#FFFFFF',
        background: '#FEFEFE',
      },
    },
  },
  plugins: [],
}
