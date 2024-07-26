/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#1E3F85',
      white: '#FFFFFF',
      background: '#FEFEFE',
      gray: '#6F6D71',
      gray3: '#D8D8D8',
      gray2: '#ECEDF1',
      green: '#03A350',
    },
  },
  plugins: [],
}
