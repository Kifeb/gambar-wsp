/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  import: ['./path/to/prism.css'],
};
