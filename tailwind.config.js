module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1000 : "0B0B0B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
