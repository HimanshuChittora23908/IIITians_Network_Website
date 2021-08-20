module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1000: "#0B0B0B",
          1100: "#252525",
          1200: "#121212",
        },
        lime: {
          1000: "#00FF00"
        },
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
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
