/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#F9F9F9',
        'gray-light': '#BBBBBB66',
        'chinese-black': '#161616',
        'chinese-black-light': '#16161699',
        'cinnabar': '#E73A3F',
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova', 'sans-serif']
      }
    },
  },
  plugins: [],
}

