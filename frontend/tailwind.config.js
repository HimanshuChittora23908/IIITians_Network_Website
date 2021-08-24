module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-380%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        gray: {
          1000: "#0B0B0B",
          1100: "#252525",
          1200: "#121212",
          1300: "#808080"
        },
        lime: {
          1000: "#00FF00",
        },
        red:{
          1000: "#FF0000",
        },
        blue: {
          1000: "#0000FF",
        },
        orange: {
          1000: "#FFA500",
        }
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'button_custom': '4px 4px 8px rgba(255, 255, 255, 0.25)'
      },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}