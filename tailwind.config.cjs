/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        chewy: ['Chewy', 'cursive'],
        vt323: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
  import: ['./path/to/prism.css'],
};
