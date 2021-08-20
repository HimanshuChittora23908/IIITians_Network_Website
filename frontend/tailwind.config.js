module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          'bg_color' : "0B0B0B",
        },
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'button_custom': '4px 4px 8px rgba(255, 255, 255, 0.25)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
