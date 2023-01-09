/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rk-green': '#01959F',
        'rk-yellow': '#FA9810',
        'rk-red': '#E11428',
        'rk-green-dark': '#43936C',
        'rk-neutral-40': '#FAFAFA',
        'rk-neutral-70': '#757575',
        'rk-neutral-60': '#EDEDED'
      },
    },
  },
  plugins: [],
}
